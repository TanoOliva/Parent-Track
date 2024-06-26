const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Importar jsonwebtoken
const { check, validationResult } = require('express-validator');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) console.error(err.message);
  console.log('Connected to the SQLite database.');
});

const SECRET_KEY = 'your-secret-key'; // Debes usar una clave secreta segura

app.post('/formulario', [
  check('nombre').notEmpty().withMessage('El nombre es requerido'),
  check('email').isEmail().withMessage('Debe ser un email válido'),
  check('contraseña').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombre, email, contraseña, región, comuna } = req.body;
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  const sql = `INSERT INTO usuarios (nombre, email, contraseña, región, comuna, role) VALUES (?, ?, ?, ?, ?, 'user')`;

  db.run(sql, [nombre, email, hashedPassword, región, comuna], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, message: 'Usuario registrado exitosamente' });
  });
});

app.post('/login', [
  check('email').isEmail().withMessage('Debe ser un email válido'),
  check('contraseña').notEmpty().withMessage('La contraseña no puede estar vacía')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, contraseña } = req.body;

  const sql = `SELECT * FROM usuarios WHERE email = ?`;

  db.get(sql, [email], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    bcrypt.compare(contraseña, user.contraseña, (err, result) => {
      if (result) {
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' }); // Crear token JWT
        res.json({ message: 'Inicio de sesión exitoso', token, user: { nombre: user.nombre, email: user.email } });
      } else {
        res.status(401).json({ message: 'Contraseña incorrecta' });
      }
    });
  });
});

// Middleware para verificar JWT
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Ruta protegida de ejemplo
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'Esta es una ruta protegida', user: req.user });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

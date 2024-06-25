const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());

const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) console.error(err.message);
  console.log('Connected to the SQLite database.');
});

const { check, validationResult } = require('express-validator');

app.post('/register', [
  check('nombre').notEmpty().withMessage('El nombre es requerido'),
  check('email').isEmail().withMessage('Debe ser un email válido'),
  check('contraseña').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { nombre, email, contraseña } = req.body;
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  const sql = `INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)`;

  db.run(sql, [nombre, email, hashedPassword], function(err) {
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
          res.json({ message: 'Inicio de sesión exitoso', user });
        } else {
          res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      });
    });
  });


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

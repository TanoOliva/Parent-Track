// routes/usuarios.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const usuario = new Usuario({
    nombre: req.body.nombre,
    rut: req.body.rut,
    email: req.body.email,
    password: req.body.password,
    region: req.body.region,
    comuna: req.body.comuna,
  });

  try {
    const nuevoUsuario = await usuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

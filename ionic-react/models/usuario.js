// models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rut: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  region: { type: String, required: true },
  comuna: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);

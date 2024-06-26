const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conectado exitosamente a la base de datos SQLite.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT UNIQUE,
    contraseña TEXT,
    región TEXT,
    comuna TEXT
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Tabla usuarios creada exitosamente o ya existe.');
    }
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('La conexión a la base de datos ha sido cerrada.');
});

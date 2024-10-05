// db.js
const pgp = require('pg-promise')();
const connectionString = process.env.NEON_DATABASE_URL; // Conectando-se usando a variável de ambiente

const db = pgp(connectionString);

module.exports = db;

// db.js
const { Pool } = require('pg');

// Crie um pool de conexão
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Defina sua URL de conexão aqui ou use uma variável de ambiente
});

module.exports = pool;

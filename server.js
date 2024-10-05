const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // Importa a biblioteca do PostgreSQL
require('dotenv').config(); // Para carregar variáveis de ambiente do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000; // Define a porta do servidor

// Configuração do CORS
app.use(cors());

// Middleware para ler JSON no corpo das requisições
app.use(express.json());

// Conexão ao banco de dados PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // A URL de conexão deve ser definida no .env
    ssl: {
        rejectUnauthorized: false // Necessário para ambientes como o Vercel
    }
});

// Middleware para tratar erros de conexão ao banco
pool.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err.stack);
    } else {
        console.log('Conexão ao banco de dados estabelecida com sucesso');
    }
});

// Importa as rotas
const mainRoutes = require('./routes/mainRoutes');

// Usa as rotas
app.use('/api', mainRoutes);

// Rota de saúde
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

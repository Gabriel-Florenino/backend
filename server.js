// server.js
const express = require('express');
const dotenv = require('dotenv');
const mainRoutes = require('./routes/mainRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar JSON
app.use(express.json());

// Usando as rotas principais
app.use('/api', mainRoutes);

// Rota padrão
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

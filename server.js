// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const politicosRoutes = require('./politicosRoutes');

app.use(express.json()); // Para fazer o parse do corpo das requisições JSON
app.use('/politicos', politicosRoutes); // Definindo a rota base para políticos

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// routes/mainRoutes.js
const express = require('express');
const router = express.Router();

// Exemplo de rota para obter dados
router.get('/dados', (req, res) => {
    res.json({ message: 'Dados retornados com sucesso!' });
});

// Outras rotas podem ser adicionadas aqui

module.exports = router;

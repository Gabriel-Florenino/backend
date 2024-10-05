const express = require('express');
const router = express.Router();
const pool = require('../db'); // Certifique-se de que está exportando o pool corretamente

// Rota para obter todos os políticos
router.get('/politicos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM politicos');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao obter políticos:', error);
        res.status(500).json({ error: 'Erro ao obter políticos' });
    }
});

// Outras rotas podem ser adicionadas aqui

module.exports = router;

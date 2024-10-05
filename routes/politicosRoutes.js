// politicosRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('./db'); // Importando a configuração do banco de dados

// Rota para obter todos os políticos
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM politicos');
        res.json(result.rows); // Retorna todos os políticos em formato JSON
    } catch (error) {
        console.error('Erro ao obter políticos', error);
        res.status(500).json({ error: 'Erro ao obter políticos' });
    }
});

// Rota para adicionar um novo político
router.post('/', async (req, res) => {
    const { nome, cpf, partido, email, data_nascimento, descricao } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO politicos (nome, cpf, partido, email, data_nascimento, descricao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nome, cpf, partido, email, data_nascimento, descricao]
        );
        res.status(201).json(result.rows[0]); // Retorna o político criado
    } catch (error) {
        console.error('Erro ao adicionar político', error);
        res.status(500).json({ error: 'Erro ao adicionar político' });
    }
});

module.exports = router;

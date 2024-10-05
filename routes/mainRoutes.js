const express = require('express');
const router = express.Router();

// Exemplo de rota para obter dados
router.get('/dados', (req, res) => {
   res.json({ message: 'API funcionando!' });
});

module.exports = router;

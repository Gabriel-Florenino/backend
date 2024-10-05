const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leitura de JSON
app.use(express.json());

// Importar e usar as rotas
const mainRoutes = require('./routes/mainRoutes');
app.use('/api', mainRoutes);

// Rota principal
app.get('/', (req, res) => {
   res.send('Servidor rodando!');
});

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});

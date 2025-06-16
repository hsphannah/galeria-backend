// 1. Importa o Express, nossas obras, e AGORA O CORS
const express = require('express');
const { obrasDeArte } = require('./dados.js');
const cors = require('cors'); // <-- ADICIONE ESTA LINHA

const app = express();

// 2. USA O CORS
// Esta linha é a "autorização". Ela deve vir antes das suas rotas.
app.use(cors()); // <-- ADICIONE ESTA LINHA

const port = 3000;

// Suas rotas continuam as mesmas...
app.get('/api/obras', (req, res) => {
  res.json(obrasDeArte);
});

app.get('/', (req, res) => {
    res.send('Servidor principal funcionando! Acesse /api/obras para ver os dados das obras.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
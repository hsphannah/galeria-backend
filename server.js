// Importa as ferramentas necessárias
const express = require('express');
const cors = require('cors'); // O pacote de autorização
const { createClient } = require('@supabase/supabase-js');

// --- CONFIGURAÇÃO DA CONEXÃO COM O SUPABASE ---
// Lembre-se de colocar suas credenciais reais aqui!
const supabaseUrl = 'https://ezuulhnniuxobheoodnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dXVsaG5uaXV4b2JoZW9vZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDAzODYsImV4cCI6MjA2NTkxNjM4Nn0.xb7MnUfrh2-0mhIg-b5lFmmFOTVd0hvY4g2mG5vw8fw';

// Cria a conexão com o banco de dados
const supabase = createClient(supabaseUrl, supabaseKey);

// Inicia o aplicativo do servidor
const app = express();
const port = 3000;

// --- A LINHA MAIS IMPORTANTE ---
// Habilita o CORS para que seu front-end possa acessar o back-end
app.use(cors());

// --- ROTAS DA API ---

// Rota para buscar todos os artistas do banco de dados
app.get('/api/artistas', async (req, res) => {
  try {
    const { data, error } = await supabase.from('artistas').select('*');
    if (error) throw error; // Se der erro na busca, ele vai para o 'catch'
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar artistas:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados dos artistas.' });
  }
});

// Rota de obras (vamos conectar ao Supabase no futuro)
app.get('/api/obras', async (req, res) => {
    // Por enquanto, vamos devolver os dados do nosso arquivo 'dados.js'
    // para a página principal voltar a funcionar
    try {
        const { obrasDeArte } = require('./dados.js');
        res.json(obrasDeArte);
    } catch(error) {
        console.error('Erro ao buscar obras:', error.message);
        res.status(500).json({ error: 'Erro ao buscar dados das obras.' });
    }
});

// Liga o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
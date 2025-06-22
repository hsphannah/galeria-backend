// 1. Importa as ferramentas necessárias
const express = require('express');
const cors = require('cors'); // O pacote de autorização
const { createClient } = require('@supabase/supabase-js');

// 2. --- CONFIGURAÇÃO DA CONEXÃO COM O SUPABASE ---
// Lembre-se de colocar suas credenciais reais aqui!
const supabaseUrl = 'https://ezuulhnniuxobheoodnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dXVsaG5uaXV4b2JoZW9vZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDAzODYsImV4cCI6MjA2NTkxNjM4Nn0.xb7MnUfrh2-0mhIg-b5lFmmFOTVd0hvY4g2mG5vw8fw';
const supabase = createClient(supabaseUrl, supabaseKey);

// 3. Inicia o aplicativo do servidor
const app = express();
const port = 3000;

// 4. --- A LINHA MAIS IMPORTANTE (A "AUTORIZAÇÃO") ---
app.use(cors());

// 5. --- ROTAS DA API ---

// Rota para buscar as OBRAS do banco de dados
app.get('/api/obras', async (req, res) => {
  try {
    let query = supabase.from('obras').select('*');
    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar obras:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados das obras.' });
  }
});

// Rota para buscar os ARTISTAS do banco de dados
app.get('/api/artistas', async (req, res) => {
  try {
    const { data, error } = await supabase.from('artistas').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar artistas:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados dos artistas.' });
  }
});

// 6. Liga o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// --- CONFIGURAÇÃO DA CONEXÃO COM O SUPABASE ---
const supabaseUrl = 'https://ezuulhnniuxobheoodnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dXVsaG5uaXV4b2JoZW9vZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDAzODYsImV4cCI6MjA2NTkxNjM4Nn0.xb7MnUfrh2-0mhIg-b5lFmmFOTVd0hvY4g2mG5vw8fw';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(cors());
const port = 3000;

// --- NOSSAS ROTAS DE API ---

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

// Rota para buscar as OBRAS do banco de dados (VERSÃO CORRETA E FINAL)
app.get('/api/obras', async (req, res) => {
  const { categoria, artista } = req.query;
  try {
    let query = supabase.from('obras').select('*'); // Busca na tabela 'obras'

    // Aplica filtros se eles existirem na URL
    if (categoria) {
      query = query.eq('categoria', categoria);
    }
    if (artista) {
      query = query.eq('artista', artista);
    }

    // Executa a busca no banco de dados
    const { data, error } = await query;
    
    if (error) throw error; // Se der erro na busca, ele vai para o 'catch'

    res.json(data); // Envia os dados encontrados
    
  } catch (error) {
    console.error('Erro ao buscar obras:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados das obras.' });
  }
});

// Liga o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
const express = require('express');
const cors = require('cors');
// Importa o "createClient" da biblioteca que acabamos de instalar
const { createClient } = require('@supabase/supabase-js');

// --- CONFIGURAÇÃO DA CONEXÃO COM O SUPABASE ---
// Cole aqui a URL e a Chave que você copiou do painel do Supabase
const supabaseUrl = 'https://ezuulhnniuxobheoodnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dXVsaG5uaXV4b2JoZW9vZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDAzODYsImV4cCI6MjA2NTkxNjM4Nn0.xb7MnUfrh2-0mhIg-b5lFmmFOTVd0hvY4g2mG5vw8fw';

// Cria o "cliente" Supabase, que é a nossa ponte de conexão com o banco de dados
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(cors());
const port = 3000;

// --- NOSSAS NOVAS ROTAS DE API ---

// Rota para buscar todos os artistas do banco de dados
app.get('/api/artistas', async (req, res) => {
  // Usamos o cliente Supabase para fazer a busca
  const { data, error } = await supabase
    .from('artistas') // Nome da nossa tabela
    .select('*');     // '*' significa "selecione todas as colunas"

  if (error) {
    console.error('Erro ao buscar artistas:', error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data); // Envia os dados encontrados como resposta
});

// A rota de obras por enquanto não vai funcionar, pois os dados não estão mais aqui.
// Vamos deixar um placeholder.
app.get('/api/obras', (req, res) => {
    res.json([{ titulo: 'Rota de obras a ser implementada' }]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
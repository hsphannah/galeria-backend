const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// --- CONFIGURAÇÃO DA CONEXÃO COM O SUPABASE ---
// Lembre-se de colocar suas credenciais reais aqui!
const supabaseUrl = 'https://ezuulhnniuxobheoodnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dXVsaG5uaXV4b2JoZW9vZG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDAzODYsImV4cCI6MjA2NTkxNjM4Nn0.xb7MnUfrh2-0mhIg-b5lFmmFOTVd0hvY4g2mG5vw8fw';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3000;

// --- MIDDLEWARES ---
app.use(cors()); // Habilita o CORS
app.use(express.json()); // Habilita o servidor a receber e interpretar dados JSON no corpo das requisições

// --- ROTAS DA API ---

// Rota para buscar obras
app.get('/api/obras', async (req, res) => {
    // ... (código existente, sem alterações)
    const { data, error } = await supabase.from('obras').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

// Rota para buscar artistas
app.get('/api/artistas', async (req, res) => {
    // ... (código existente, sem alterações)
    const { data, error } = await supabase.from('artistas').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});


// --- NOVAS ROTAS DE AUTENTICAÇÃO ---

// Rota para CADASTRAR um novo usuário
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body; // Pega o email e a senha enviados pelo front-end

    // Usa a função de autenticação do Supabase para criar um usuário
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ user: data.user });
});

// Rota para LOGAR um usuário
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body; // Pega o email e a senha

    // Usa a função de autenticação do Supabase para fazer o login
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        return res.status(401).json({ error: error.message });
    }

    res.json({ user: data.user, session: data.session });
});


// Liga o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
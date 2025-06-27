const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// --- MUDANÇA 1: Usar as variáveis de ambiente da Render ---
// Em vez de escrever as chaves no código, pegamos da configuração segura do servidor.
// Garanta que essas variáveis estão configuradas no seu Web Service na Render.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; 

// Validação para garantir que as variáveis foram carregadas
if (!supabaseUrl || !supabaseKey) {
  console.error("Erro: As variáveis de ambiente SUPABASE_URL e SUPABASE_KEY não foram definidas.");
  process.exit(1); // Encerra o processo se as chaves não estiverem presentes
}

const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
// A Render define a porta automaticamente, então é uma boa prática usar a variável de ambiente dela ou um padrão.
const port = process.env.PORT || 3000;

// --- MUDANÇA 2: Configuração de CORS mais segura ---
// Lista de endereços que podem fazer requisições à sua API
const whiteList = [
  'http://localhost:3000', // para o front-end rodando localmente (se precisar)
  'http://127.0.0.1:5500', // para o Live Server do VSCode
  'https://galeria-sah3.onrender.com' // A URL do seu front-end na Render
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permite requisições sem 'origin' (ex: Postman) ou que estejam na whiteList
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido por CORS'));
    }
  }
};

// --- MIDDLEWARES ---
app.use(cors(corsOptions)); // Habilita o CORS com as opções de segurança
app.use(express.json()); // Habilita o servidor a receber e interpretar dados JSON

// --- ROTAS DA API (sem alterações na lógica) ---

// Rota para buscar obras
app.get('/api/obras', async (req, res) => {
    const { data, error } = await supabase.from('obras').select('*');
    if (error) {
        console.error('Erro ao buscar obras:', error);
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// Rota para buscar artistas
app.get('/api/artistas', async (req, res) => {
    const { data, error } = await supabase.from('artistas').select('*');
    if (error) {
        console.error('Erro ao buscar artistas:', error);
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});


// --- ROTAS DE AUTENTICAÇÃO ---

// Rota para CADASTRAR um novo usuário
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ user: data.user });
});

// Rota para LOGAR um usuário
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) return res.status(401).json({ error: error.message });
    res.json({ user: data.user, session: data.session });
});

// --- ROTA PARA ADICIONAR ITEM AO CARRINHO ---

app.post('/api/cart/add', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ error: 'Acesso não autorizado. Nenhum token fornecido.' });
  }

  const { data: { user }, error: userError } = await supabase.auth.getUser(token);
  if (userError || !user) {
    return res.status(401).json({ error: 'Token inválido ou expirado. Acesso não autorizado.' });
  }

  const { obra_id } = req.body;
  if (!obra_id) {
    return res.status(400).json({ error: 'O ID da obra é obrigatório.' });
  }

  try {
    const { data, error } = await supabase
      .from('carrinho_itens')
      .insert([ { user_id: user.id, obra_id: obra_id, quantidade: 1 } ])
      .select();
    if (error) throw error;
    res.status(201).json({ message: 'Obra adicionada ao carrinho com sucesso!', item: data[0] });
  } catch (error) {
    console.error('Erro ao adicionar item ao carrinho:', error.message);
    res.status(500).json({ error: 'Erro interno ao adicionar item ao carrinho.' });
  }
});


// Liga o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
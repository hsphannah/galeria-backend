// Arquivo: dados.js

const obrasDeArte = [
  // Obras Originais
  {
    id: 1,
    titulo: "Formas Concretas I",
    artista: "Artista Um",
    preco: 1200.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+1",
    categoria: "escultura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 2,
    titulo: "Horizonte Partido",
    artista: "Artista Dois",
    preco: 2500.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+2",
    categoria: "pintura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 3,
    titulo: "Sombra e Luz",
    artista: "Artista Três",
    preco: 850.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+3",
    categoria: "fotografia",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 4,
    titulo: "O Pensador de Bronze",
    artista: "Artista Um",
    preco: 3400.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+4",
    categoria: "escultura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 5,
    titulo: "Cores da Manhã",
    artista: "Artista Dois",
    preco: 1800.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+5",
    categoria: "pintura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 6,
    titulo: "Retrato em Sépia",
    artista: "Artista Três",
    preco: 950.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+6",
    categoria: "fotografia",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 7,
    titulo: "Geometria Urbana",
    artista: "Artista Quatro",
    preco: 2200.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+7",
    categoria: "pintura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 8,
    titulo: "Torso Abstrato",
    artista: "Artista Cinco",
    preco: 4500.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+8",
    categoria: "escultura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 9,
    titulo: "O Olhar da Metrópole",
    artista: "Artista Seis",
    preco: 1100.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+9",
    categoria: "fotografia",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 10,
    titulo: "Composição Vermelha",
    artista: "Artista Sete",
    preco: 3100.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+10",
    categoria: "pintura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 11,
    titulo: "Estudo de Movimento",
    artista: "Artista Oito",
    preco: 2800.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+11",
    categoria: "escultura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 12,
    titulo: "Silêncio Noturno",
    artista: "Artista Três",
    preco: 1300.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+12",
    categoria: "fotografia",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 13,
    titulo: "Caos Organizado",
    artista: "Artista Sete",
    preco: 2650.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+13",
    categoria: "pintura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 14,
    titulo: "Fragmentos da Memória",
    artista: "Artista Quatro",
    preco: 1900.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+14",
    categoria: "pintura",
    detalhes_url: "obra-detalhe.html"
  },
  {
    id: 15,
    titulo: "A Espiral",
    artista: "Artista Cinco",
    preco: 5200.00,
    imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+15",
    categoria: "escultura",
    detalhes_url: "obra-detalhe.html"
  },
  { 
    id: 16, titulo: "Reflexos Urbanos", artista: "Artista Seis", preco: 780.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+16", categoria: "fotografia", detalhes_url: "obra-detalhe.html" 
  },
  {
     id: 17, titulo: "Equilíbrio Instável", artista: "Artista Um", preco: 3800.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+17", categoria: "escultura", detalhes_url: "obra-detalhe.html" 
    },
  { 
    id: 18, titulo: "Mar de Tinta", artista: "Artista Dois", preco: 2950.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+18", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  
  { 
    id: 19, titulo: "Rosto Oculto", artista: "Artista Três", preco: 1500.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+19", categoria: "fotografia", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 20, titulo: "Linhas Cruzadas", artista: "Artista Quatro", preco: 1750.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+20", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 21, titulo: "Vértice de Aço", artista: "Artista Oito", preco: 4100.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+21", categoria: "escultura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 22, titulo: "A Janela", artista: "Artista Seis", preco: 990.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+22", categoria: "fotografia", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 23, titulo: "Sonho Azul", artista: "Artista Sete", preco: 3300.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+23", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 24, titulo: "Conexão", artista: "Artista Cinco", preco: 4800.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+24", categoria: "escultura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 25, titulo: "Sinfonia Monocromática", artista: "Artista Dois", preco: 2300.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+25", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 26, titulo: "Pausa para o Café", artista: "Artista Três", preco: 1250.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+26", categoria: "fotografia", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 27, titulo: "Origem", artista: "Artista Um", preco: 2900.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+27", categoria: "escultura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 28, titulo: "Vazio Iluminado", artista: "Artista Seis", preco: 1150.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+28", categoria: "fotografia", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 29, titulo: "Distorção Harmônica", artista: "Artista Sete", preco: 2850.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+29", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 30, titulo: "Caminhos", artista: "Artista Quatro", preco: 1600.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+30", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 31, titulo: "Estrutura Fluida", artista: "Artista Oito", preco: 5500.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+31", categoria: "escultura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 32, titulo: "Poesia Concreta", artista: "Artista Um", preco: 1950.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+32", categoria: "escultura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 33, titulo: "Impressão Solar", artista: "Artista Dois", preco: 2750.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+33", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 34, titulo: "Fresta", artista: "Artista Três", preco: 900.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+34", categoria: "fotografia", detalhes_url: "obra-detalhe.html" 
  },
  { 
    id: 35, titulo: "Diálogo de Cores", artista: "Artista Sete", preco: 3050.00, imagem_url: "https://via.placeholder.com/400x500.png?text=Obra+35", categoria: "pintura", detalhes_url: "obra-detalhe.html" 
  },
];

module.exports = { obrasDeArte };
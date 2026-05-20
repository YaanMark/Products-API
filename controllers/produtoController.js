let produtos = [
  { id: 1, nome: 'Teclado', preco: 99.90 },
  { id: 2, nome: 'Mouse', preco: 49.90 },
  {id: 3, nome: 'Monitor', preco: 621.0}
];

exports.listar = (req, res) => { 
  res.json(produtos);
};

exports.buscarPorId = (req, res) => { // 
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }
  res.json(produto);
};

exports.adicionar = (req, res) => {
  const { nome, preco } = req.body;
  if (!nome || preco === undefined) {
    return res.status(400).json({ mensagem: 'Dados inválidos.' });
  }
  const novo = { id: produtos.length + 1, nome, preco };
  produtos.push(novo);
  res.status(201).json(novo);
};

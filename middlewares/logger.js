function logger(req, res, next) { // TESTE PARA CONEXÃO DA PÁGINA WEB COM O SERVIDOR
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger;

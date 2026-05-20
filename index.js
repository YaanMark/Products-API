const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtoRoutes');
const logger = require('./middlewares/logger');

app.use(express.json());
app.use(logger); // Middleware de log
app.use('/produtos', produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/', controller.listar); // ROTA GET - LISTA TODOS OS PRODUTOS
router.get('/:id', controller.buscarPorId); // ROTA GET - LISTA PRODUTOS POR ID
router.post('/', controller.adicionar); // ROTA POST - ADICIONA PRODUTO

module.exports = router;

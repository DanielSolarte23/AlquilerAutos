const express = require('express');
const { registrarCliente } = require('../controller/clienteController');
const router = express.Router();

router.post('/clientes', registrarCliente);

module.exports = router;

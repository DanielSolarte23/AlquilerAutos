const express = require('express');
const { registrarAuto, listarAutosDisponibles } = require('../controller/autoController');
const router = express.Router();

router.post('/autos', registrarAuto);
router.get('/autos/disponibles', listarAutosDisponibles);

module.exports = router;

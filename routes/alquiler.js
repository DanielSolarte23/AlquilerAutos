const express = require('express');
const { realizarAlquiler, historialAlquileres } = require('../controller/alquilerController');
const router = express.Router();

router.post('/alquileres', realizarAlquiler);
router.get('/alquileres/historial', historialAlquileres);

module.exports = router;

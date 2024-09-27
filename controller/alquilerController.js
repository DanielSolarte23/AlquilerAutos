const Alquiler = require('../models/alquiler');
const Auto = require('../models/auto');

exports.realizarAlquiler = async (req, res) => {
  const { clienteId, autoId, fechaInicio, fechaFin } = req.body;
  
  try {
    const auto = await Auto.findByPk(autoId);
    if (!auto || !auto.disponible) {
      return res.status(400).json({ error: 'Auto no disponible' });
    }

    const alquiler = await Alquiler.create({ clienteId, autoId, fechaInicio, fechaFin });
    
    await auto.update({ disponible: false });

    res.status(201).json(alquiler);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.historialAlquileres = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll({
      include: ['Cliente', 'Auto']
    });
    res.status(200).json(alquileres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Auto = require('../models/auto');

exports.registrarAuto = async (req, res) => {
  try {
    const auto = await Auto.create(req.body);
    res.status(201).json(auto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listarAutosDisponibles = async (req, res) => {
  try {
    const autos = await Auto.findAll({ where: { disponible: true } });
    res.status(200).json(autos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

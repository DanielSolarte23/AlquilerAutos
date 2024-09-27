const Cliente = require('../models/cliente');

exports.registrarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

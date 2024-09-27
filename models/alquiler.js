const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cliente = require('./cliente');
const Auto = require('./auto');

const Alquiler = sequelize.define('Alquiler', {
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Alquiler.belongsTo(Cliente);
Alquiler.belongsTo(Auto);

module.exports = Alquiler;

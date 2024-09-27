const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Auto = sequelize.define('Auto', {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disponible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }
});

module.exports = Auto;

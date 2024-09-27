const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('alquiler_autos_db', 'root', 'CTPI2024**', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

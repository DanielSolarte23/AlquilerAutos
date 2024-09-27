const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const clienteRoutes = require('./routes/cliente');
const autoRoutes = require('./routes/auto');
const alquilerRoutes = require('./routes/alquiler');

const app = express();
app.use(bodyParser.json());

app.use(clienteRoutes);
app.use(autoRoutes);
app.use(alquilerRoutes);

// Sincronizar modelos con la base de datos
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
  })
  .catch(err => console.error('Error al conectar a la base de datos:', err));

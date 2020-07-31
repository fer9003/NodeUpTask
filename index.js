const express = require('express');
const router = require('./routes');
const path = require('path');

//crear un app de express
const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//Anadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//Ruta para el home
app.use('/', router());

app.listen(3000);

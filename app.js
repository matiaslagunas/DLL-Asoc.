const express = require('express');
const mainRoutes = require('./routes/mainRoutes'); 
const serviciosRoutes = require('./routes/serviciosRoutes')
const app = express();

const PORT = 3000;

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs'); // Establece EJS como motor de vista
app.set('views', __dirname + '/views'); // Establece el directorio de vistas

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public')); 

// Usa las rutas definidas en mainRoutes
app.use('/', mainRoutes);
app.use('/servicios', serviciosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

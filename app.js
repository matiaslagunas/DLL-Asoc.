const express = require('express');
const net = require('net');  // Requerimos el módulo para verificar el puerto
const mainRoutes = require('./routes/mainRoutes'); 
const serviciosRoutes = require('./routes/serviciosRoutes');
const app = express();

const PORT = 3000;  // Puedes cambiar el puerto si es necesario

// Verificar si el puerto está libre antes de iniciar el servidor
const server = net.createServer();

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Puerto ${PORT} está libre, iniciando el servidor...`);
    server.close();  // Cierra la verificación

    // Configura EJS como motor de plantillas
    app.set('view engine', 'ejs');  // Establece EJS como motor de vista
    app.set('views', __dirname + '/views');  // Establece el directorio de vistas

    // Sirve archivos estáticos desde la carpeta "public"
    app.use(express.static('public')); 

    // Usa las rutas definidas en mainRoutes y serviciosRoutes
    app.use('/', mainRoutes);
    app.use('/servicios', serviciosRoutes);

    // Inicia el servidor
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
});

server.on('error', (err) => {
    console.log(`Puerto ${PORT} está ocupado. Error:`, err.message);
    process.exit(1);  // Sale del proceso si el puerto está ocupado
});

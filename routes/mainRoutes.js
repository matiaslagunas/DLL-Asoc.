const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs
});

// Otras rutas
router.get('/quienes-somos', (req, res) => {
    res.send('Esta es la página de quiénes somos');
});

router.get('/servicios', (req, res) => {
    res.send('Esta es la página de servicios');
});

router.get('/contacto', (req, res) => {
    res.send('Esta es la página de contacto');
});

module.exports = router; // Asegúrate de exportar el router

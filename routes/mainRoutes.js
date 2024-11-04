const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista index.ejs
});

// Otras rutas
router.get('/quienes-somos', (req, res) => {
    res.render('QuienesSomos')
});

// Otras rutas
router.get('/servicios', (req, res) => {
    res.render('servicios')
});
router.get('/contacto', (req, res) => {
    res.render('contacto')
})

module.exports = router; // Asegúrate de exportar el router

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


module.exports = router; // Asegúrate de exportar el router

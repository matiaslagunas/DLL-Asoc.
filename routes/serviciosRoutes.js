const express = require('express');
const router = express.Router();

// Ruta para la página de inicio

// Otras rutas
router.get('/consultoria', (req, res) => {
    res.render('consultoria')
});
router.get('/Asesoramiento-financiero', (req, res) => {
    res.render('asesoramiento-financiero')
});

module.exports = router; // Asegúrate de exportar el router

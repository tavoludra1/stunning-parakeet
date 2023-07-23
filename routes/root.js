const express = require('express');
const router = express.Router(); // para crear rutas
const path = require('path'); // para manejar rutas de archivos

// requerimiento GET para la ruta raiz con regex
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// exportamos el modulo
module.exports = router;
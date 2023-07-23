const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger'); // importar el middleware
const errorHandler = require('./middleware/errorHandler'); // importar el middleware
const PORT = process.env.PORT || 3500; // cambiar el puerto en producción

// adicionar middleware
app.use(logger);

// adicionar json lectura
app.use(express.json());

// adicionar ruta publica
app.use('/', express.static(path.join(__dirname, 'public')));

// adicionar control de rutas
app.use('/', require('./routes/root'));

// adicionar pagina de error 404 y mensajes error
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 No encontrado' });
    } else {
        res.type('txt').send('404 No encontrado');
    }
});

// adicionar middleware de error antes de iniciar el servidor 
app.use(errorHandler);


// verificamos si estamos en producción o en desarrollo
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

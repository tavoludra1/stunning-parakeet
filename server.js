const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger'); // importar el middleware
const errorHandler = require('./middleware/errorHandler'); // importar el middleware
const cookieParser = require('cookie-parser');  // importar el middleware cookie-parser
const cors = require('cors'); // importar el middleware cors
const corsOptions = require('./config/corsOptions'); // importar la barrera de seguridad cors
const PORT = process.env.PORT || 3500; // cambiar el puerto en producción

// adicionar middleware
app.use(logger);

// adicionar cors para permitir peticiones de otros dominios
app.use(cors(corsOptions));

// adicionar json lectura
app.use(express.json());

// adicionar cookie parser
app.use(cookieParser());

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
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));

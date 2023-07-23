const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Dominio no permitido por CORS'));
        }
    },
    credentials: true, // para que los cookies se envien a través de CORS
    optionsSuccessStatus: 200  // algunos navegadores (Chrome) requieren un status
}

// exportar la barrera de seguridad cors
module.exports = corsOptions;
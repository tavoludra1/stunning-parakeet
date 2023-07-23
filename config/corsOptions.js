const { options } = require('../routes/root');
const allowedOrigins = require('./allowedOrigins');

// configurar cors como barrera de seguridad
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !originl) {
            // permitir peticiones desde el dominio
            callback(null, true);
        } else {
            // bloquear peticiones desde el dominio
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true, // habilitar credenciales
    optionsSuccessStatus: 200 // alguno buscadores heradados (IE11, varios SmartTVs), reemplaza al 204
}

// exportar el módulo
module.exports = corsOptions;
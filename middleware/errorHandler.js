const { logEvents } = require('./logger');

// crear una funcion middleware llamada errorHandler 
const errorHandler = (err, req, res, next) => {
    // loggear el error
    logEvents(`${err.name}\t${err.message}\t${err.method}\t${err.url}\t${req.headers.origin}`, 'errorLog.log');
    // enviar el error al cliente
    console.log(err.stack);
    const status = res.statusCode ? statusCode : 500; // si no hay status code, usar 500
    res.status(status);
    res.json({ message: err.message });

    // exportar el middleware
    module.exports = errorHandler;

}
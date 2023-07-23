const { logEvents } = require('./logger');

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log');
    console.log(err.stack);

    const status = res.statusCode ? res.statusCode : 500; // si no hay status code, entonces es un error 500
    res.status(status); // establecer el status code
    res.json({ message: err.message }); // enviar el mensaje de error
}

// exportar el middleware errorHandler
module.exports = errorHandler;
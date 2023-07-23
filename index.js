// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const logEvents = require('./logEvents');
const eventLog = require('./logEvents');
const EventEmitter = require('events');

class myEmitter extends EventEmitter {};

// iniciar objeto
const myEmitterInstance = new myEmitter(); 

// adicionar listener
myEmitterInstance.on('log', (message) => logEvents(message));

setTimeout(() => {
    myEmitterInstance.emit('log', 'evento emitido!');
}, 2000);

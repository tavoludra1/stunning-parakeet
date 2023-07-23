const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor ingrese su nombre']
    },
    password: {
        type: String,
        required: [true, 'Por favor ingrese su contraseña'],
        minlength: 6
    },
    role: [{
        type: String,
        default: 'Employee'
    }],
    active: {
        type: Boolean,
        default: true
    }
});

// exportar el modelo
module.exports = mongoose.model('User', userSchema);

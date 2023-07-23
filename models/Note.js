const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Por favor ingrese el título de la nota']
    },
    text: {
        type: String,
        required: [true, 'Por favor ingrese la descripción de la nota']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true // agrega createdAt y updatedAt
});

// exportar el modelo
module.exports = mongoose.model('Note', noteSchema);

    
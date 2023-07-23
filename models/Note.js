const { id } = require('date-fns/locale');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')(mongoose); // importar mongoose-auto-increment

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

// autoincrementar el ticket con el plugin mongoose-auto-increment
noteSchema.plugin(autoIncrement.plugin, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
});

// exportar el modelo
module.exports = mongoose.model('Note', noteSchema);

    
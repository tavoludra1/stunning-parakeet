// importar la conexion a MongoDB
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // conexion a la base de datos
        const conn = await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

// exportar la conexion
module.exports = connectDB;
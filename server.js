const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500; // cambiar el puerto en producción






// verificamos si estamos en producción o en desarrollo
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

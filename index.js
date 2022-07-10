const express = require('express');
const puerto = 3000;
app = express();

app.use(express.static('public'))

app.listen( puerto, () => {
    console.log(`Servidor corriendo en el puerto ${ puerto }`);
});
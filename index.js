const express = require('express');
app = express();

app.use(express.static('public'))

app.listen( puerto, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.Port }`);
});
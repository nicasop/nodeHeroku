const express = require('express');
app = express();

app.use(express.static('public'))

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});
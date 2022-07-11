const express = require('express');
app = express();

app.use(express.static('public'))

app.route('/hola', (req, res) => {
    res.send(`<h1>PRUEBA</h1>`)
})

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        nome: "Matheus Filipe",
        evento: "Semana Omnistack 11.0"
    });
});

app.listen(3333, () => {
    console.log('App listening on port 3333.');
});
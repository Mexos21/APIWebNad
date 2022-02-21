const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('La API esta operativa!')
})

app.post('/a', (req, res) => {
    res.send('La API esta operativa usando post!')
})

app.get('/getGames', (req, res) => {
    var games = [
        {
            id: 1,
            name: 'Crosscode',
            finish: 'Acabado',
            platformPlayed: 'PC',
            year: 2019,
        },
        {
            id: 1,
            name: 'Crosscode',
            finish: 'Jugando',
            platformPlayed: 'PC',
            year: 2019,
        },
        {
            id: 1,
            name: 'Crosscode',
            finish: 'No terminado',
            platformPlayed: 'PC',
            year: 2019,
        },
        {
            id: 1,
            name: 'Crosscode',
            finish: 'Acabado',
            platformPlayed: 'PC',
            year: 2019,
        },
        {
            id: 1,
            name: 'Crosscode',
            finish: 'Jugando',
            platformPlayed: 'PC',
            year: 2019,
        },
        {
            id: 1,
            name: 'Crosscode',
            finish: 'No terminado',
            platformPlayed: 'PC',
            year: 2019,
        },
    ];

    res.send(games);
})

app.listen(port, () => {
    console.log(`API escuchando en el puerto ${port}`)
})
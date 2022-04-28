const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    res.status(200).json({"message": "OK"})
})

require('./controllers/pokeController')(app);

app.listen(3000);
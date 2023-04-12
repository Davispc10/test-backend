const express = require('express');
const app = express();

app.get('/', (req, res) => 
    res.status(200).send('API Pokemon GO - Ana Laura S. Mendes'));

app.listen(2510, () => console.log('Server running'));
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

var swaggerDocs = require('./swagger.json')

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next)=>{
    res.set({
      'Access-Control-Allow-Origin': '*'
    })
    next()
  })


app.get('/', async (req, res) => {
    res.status(200).json({"message": "OK"})
})

require('./controllers/pokeController')(app);

app.listen(3000);
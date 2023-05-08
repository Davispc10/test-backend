import express from 'express'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './controllers/swagger.json'
import cors from 'cors'

require('dotenv/config')
const connect = require('./db/conn')
const timeout = require('connect-timeout')

import { router } from './controllers/pokemonController'

export const app = express()

app.use(express.json())
app.use(cors())
//DB connection
connect()
app.use(bodyParser.json())
app.use(timeout('5s'))
app.use('/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

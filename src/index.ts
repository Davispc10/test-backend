import 'dotenv/config'
import express from 'express'
import { PgConnection } from './infra/db'
import { pokemonRouters } from './presentation/pokemon.routes'

const app = express()
const PORT = process.env.PORT ?? 3000

PgConnection
  .getInstance()
  .initialize()
  .then(_ => {
    app.use(express.json())
    app.use(express.urlencoded())

    app.use(pokemonRouters)
  })
  .catch(console.log)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
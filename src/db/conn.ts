import { Connection } from "mongoose"
import { addPokemonstoDatabase } from "./populateDatabase"

const mongoose = require('mongoose')

const MONGODB_URI = `mongodb://root:example@localhost:27017`

async function connectToDatabase(): Promise<void> {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }).then(
            () => console.log('Connected to MongoDB')
        )
        addPokemonstoDatabase()
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error}`)
    }
}

module.exports = connectToDatabase
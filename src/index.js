// Environment Setup
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const environment = require('./config/environment')

const app = express()

const pokemonRoute = require('./routes/pokemon.route')
app.use('/pokemon', pokemonRoute)

app.listen(environment.PORT, () => {
	console.log(`dinheirow-challange is running (PORT:${environment.PORT})`)

	mongoose
		.connect(environment.DB_URI)
		.then(() => console.log('MongoDB connected successfully!'))
		.catch(() =>
			console.log(
				'   MongoDB was not successfully connected!\n   Please check the database credentials!',
			),
		)
})

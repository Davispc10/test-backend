const express = require('express')
const pokemonController = require('../controllers/pokemon.controller')
const { getPaginationInfo } = require('../utils/routing')

const router = express.Router()

router.get('/', async (req, res) => {
	try {
		const { page, params, limit, startIndex } = getPaginationInfo(req.query)

		const { count, pokemons } = await pokemonController.getPokemons({
			startIndex,
			limit,
			query: params,
		})

		res.status(200).json({
			totalItems: count,
			page,
			limit,
			data: pokemons,
		})
	} catch (err) {
		res
			.status(404)
			.json({ message: 'It was not possible to find pokemons!', errors: [err] })
	}
})

module.exports = router

const express = require('express');

const Pokemon = require('../models/pokemon');

const router = express.Router();

router.post('/register', async (req, res) => {
  try{
    const pokemon = await Pokemon.create(req.body);

    return res.status(200).json(pokemon);
  }catch(e){
    console.log(e)
    return res.status(400).send({error: "Registration failed"});
  }
})

router.get('', async (req, res) => {
  var query = {}
  if (req.query.type1){
    query.type1 = req.query.type1
  }
  if (req.query.name){
    query.name = req.query.name
  }
  if (req.query.type2){
    query.type2 = req.query.type2
  }
  try{
    const pokemon = await Pokemon.find(query).exec()
    return res.status(200).json(pokemon)
  }catch(e){
    return res.status(400).json({error: e})
  }
})

module.exports = app => app.use('/pokemon', router);
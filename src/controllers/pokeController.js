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

module.exports = app => app.use('/pokemon', router);
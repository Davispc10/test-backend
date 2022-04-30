const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv/config')

const authConfig = process.env.secret_key

const User = require('../models/user');

const router = express.Router();

function generateToken(params = {}){
    jwt.sign(params, authConfig, {
        expiresIn: 86400
    })
}

router.post('/register', async (req, res) => {
    try{
        const {username} = req.body

        if(await User.findOne({ username })){
            return res.status(400).json({message: 'user already exists'})
        }
        
        const user = await User.create(req.body)

        user.password = undefined

        const token = jwt.sign({ id: user._id }, authConfig, {
            expiresIn: 86400
        })

        return res.status(200).send({user, token})
    }catch(e){
        return res.status(400).json(e)
    }
})

router.post('/authenticate', async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({username}).select('+password')

    if(!user){
        return res.status(401).json({message: "Inalid login"})
    }

    if (!await bcrypt.compare(password, user.password)){
        return res.status(401).json({message: 'Invalid login'})
    }

    user.password = undefined

    const token = jwt.sign({ id: user._id }, authConfig, {
        expiresIn: 86400
    })

    return res.status(200).json({user, token})
    
})

module.exports = app => app.use('/auth', router)
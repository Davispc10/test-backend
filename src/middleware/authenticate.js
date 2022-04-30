const jwt = require('jsonwebtoken')
require('dotenv/config')

const authConfig = process.env.secret_key

module.exports = (req, res, next) => {
    
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({message: 'No token provided' })
    }
    
    const parts = authHeader.split(' ')

    if(!parts.lenght === 2){
        return res.status(401).json({message: 'Token error' })
    }
        
    const [ scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).json({ error: 'Token malformated' })
    }
        
    jwt.verify(token, authConfig, async (err, decoded) => {
        if(err){
            return await res.status(401).json({ error: 'token invalid'})
        }else{
            next()
        } 
    })
}
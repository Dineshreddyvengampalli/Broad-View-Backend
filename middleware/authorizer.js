const jwt = require('jsonwebtoken')
require('dotenv').config()


const authorizer = async(req,res,next)=>{
    try {
        let authToken = req.headers.authorization.split(' ')[1];
        if(authToken){
            let decoded = await  jwt.verify(authToken,process.env.jwtSecret)
            req.user = decoded
            return next()
        }else{
            res.status(401).send('un authorized')
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = authorizer
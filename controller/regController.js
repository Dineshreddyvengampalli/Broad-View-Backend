const User = require('../model/users/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signup = async(req,res)=>{
    try {
        let {email,password,userName} = req.body
        let user = await User.find({email : email})
        if(user.length < 1){
            let user = new User({
                email : email,
                password : password,
                userName : userName
            })
            try {
                let savedUser = await user.save()
                if(savedUser){
                    let jwtToken = jwt.sign({email : email},process.env.jwtSecret)
                    return res.cookie('accessToken',jwtToken).status(200).json({"message" : "signup sucess","token" : jwtToken})
                }
                else{
                    return res.status(404).send('something went wrong')
                }

            } catch (error) {
                return res.status(404).send(error)
            }
        }
        if(user){
            return res.status(404).send('user already exists try to login ')
        }
    } catch (error) {
        res.status(404).send(error)
    }

}

const signin = async (req,res)=>{
    let {email,password} = req.body
    try {
        let user = await User.find({email : email})
        if(user.length > 0){
            let userDetails = user[0]
        if(userDetails.password == password){
            let jwtToken = jwt.sign({email : email},process.env.jwtSecret)
            return res.cookie('accessToken',jwtToken).status(200).json({"message" : "login sucess","token" : jwtToken})

        }else{
            return res.status(404).send('invalid cred')
        }
        }else{
            return res.status(404).send('invalid cred')

        }
    } catch (error) {
        return res.status(404).send(error)
    }
}

exports.signup = signup
exports.signin = signin
const express = require('express')
const router = express.Router()
const regController = require('../../controller/regController')
router.post('/',(req,res)=>{
    regController.signup(req,res)
})


module.exports = router
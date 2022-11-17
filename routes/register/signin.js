const express = require('express')
const router = express.Router()
const regController = require('../../controller/regController')
router.post('/',(req,res)=>{
    regController.signin(req,res)
})


module.exports = router
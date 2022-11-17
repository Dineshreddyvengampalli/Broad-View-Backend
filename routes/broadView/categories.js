const express = require('express')
const router = express.Router()
const catController = require('../../controller/categories')

router.get('/categories',(req,res)=>{
    console.log('in the route')
    catController(req,res)
})



module.exports = router
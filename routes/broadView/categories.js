const express = require('express')
const router = express.Router()
const broadController = require('../../controller/broadViewController')

router.get('/categories',(req,res)=>{
    console.log('in the route')
    broadController.catController(req,res)
})

router.get('/channel',(req,res)=>{
    broadController.getChannels(req,res)
})

router.get('/schedule',(req,res)=>{
    broadController.getSchedule(req,res)
})

router.get('/today-schedule',(req,res)=>{
    broadController.getTodaySchedule(req,res)
})



module.exports = router
const axios = require('axios')
require('dotenv').config()

const catController = async(req,res)=>{
    const options = {
        method: 'GET',
        url: process.env.categoriesUrl,
        headers: {
          'X-RapidAPI-Key': process.env.indTvScheduleApiKey,
          'X-RapidAPI-Host': process.env.rapidapiHost
        }
      }
    try {
        let categories = await axios.request(options)
        return res.send({"categories" : categories.data})
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getChannels = async (req,res)=>{
  let {language} = req.query
  const options = {
    method: 'GET',
    url: 'https://indian-tv-schedule.p.rapidapi.com/searchChannel',
    headers: {
      'X-RapidAPI-Key': process.env.indTvScheduleApiKey,
      'X-RapidAPI-Host': process.env.rapidapiHost
    },
    params:{
      lang : language
    }

  }
  try {
      let channels = await axios.request(options)
      return res.send({"channels" : channels.data})
  } catch (error) {
      return res.status(404).send(error)
}

}

const getSchedule =async (req,res)=>{
  let {channel} = req.query
  const options = {
    method: 'GET',
    url: 'https://indian-tv-schedule.p.rapidapi.com/Schedule',
    params: {channel: channel},
    headers: {
      'X-RapidAPI-Key': process.env.indTvScheduleApiKey,
      'X-RapidAPI-Host': process.env.rapidapiHost
    }
  };
  try {
    let schedule = await axios.request(options)
    return res.send({"schedule" : schedule.data})
} catch (error) {
    return res.status(404).send(error)
  
}
}


const getTodaySchedule =async (req,res)=>{
  let {channel} = req.query
  console.log(req.user)
  const options = {
    method: 'GET',
    url: 'https://indian-tv-schedule.p.rapidapi.com/TodaySchedule',
    params: {channel: channel},
    headers: {
      'X-RapidAPI-Key': process.env.indTvScheduleApiKey,
      'X-RapidAPI-Host': process.env.rapidapiHost
    }
  };
  try {
    let schedule = await axios.request(options)
    return res.send({"schedule" : schedule.data})
} catch (error) {
    return res.status(404).send(error)
  
}
}


exports.catController = catController
exports.getChannels = getChannels
exports.getSchedule = getSchedule
exports.getTodaySchedule = getTodaySchedule
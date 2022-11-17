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

module.exports = catController
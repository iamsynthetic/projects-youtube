require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var qs = require('qs')
const axios = require('axios')
const apiURL = 'https://www.googleapis.com/youtube/v3/search'
const apiKey = process.env.API_KEY
let searchterm = null;

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  let query = request.query
  query.key = apiKey
  query.searchterm = searchterm
  //let searchterm = request.query.searchterm;
  let queryString = qs.stringify(query)

  //axios.get(`${apiURL}?key=${apiKey}&type=video&part=snippet&q=${searchterm}`).then(res => {
  axios.get(`${apiURL}?${ queryString }`).then(res => { 
  // console.log('blah blah ' + response.data)
    // console.log(response.data.items[0].id.videoId)
    // data.allvideodata = response.data
    // data.playvideo = response.data.items[0].id.videoId
    //console.log('apikey is: ' + apiKey)
    console.log(res.data.items[0].id.videoId)
    //response.send(res.data)
})
})

app.listen(port, () => {
  console.log(` Example app listening at http://localhost:${port}`)
})
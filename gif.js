const express = require('express')
const axios = require("axios")
const app = express()

app.get('/gif/:search', (req, res) => {
axios 
.get(`https://api.giphy.com/v1/gifs/search?api_key=QAc4vBNGbu81nSP1bWZzdjs1i8WLpY9u&search=${req}&limit=1`)
.then(axiosReponse => { 
    let results = axiosReponse.data
    console.log(req.params);
    res.end(results)
})
})

// app.get('/img/:url', (req, res) => {
//     axios.get('')
// })

app.listen(3000, () => {
    console.log("server is running")
})


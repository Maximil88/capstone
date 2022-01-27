var express = require('express');
var router = express.Router();
const getToken = require ('../getToken');
const axios = require ('axios')

router.get('/', function(req, res, next) {
  getToken().then(token => {
    axios.get(`https://api.artsy.net/api/search?q=${req.query.search}`, {
      headers:{
        "X-XAPP-Token": token
      }
    }).then(apires => {
      res.json(apires.data._embedded.results)
    }).catch(e => {
      console.log(e.response.data)
      res.status(500).json(e.response.data)
    })
  })
});

router.get('/url', (req, res) => {
  getToken().then(token => {
    axios.get(req.query.url, {
      headers:{
        "X-XAPP-Token": token
      }
    })
      .then(apires => {
        res.json(apires.data)
      }).catch(e => {
        console.log(e.response || e)
        res.status(500).json(e.response || e)
      })
  })
})

module.exports = router;

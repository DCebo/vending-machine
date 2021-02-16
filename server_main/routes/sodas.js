var express = require('express');
var router = express.Router();
var sodaData = require('../data/sodas.json')


//! READ soda JSON
router.get('/status/sodas', (req, res, next) => {
  res.send(sodaData);
});

//! CREATE soda JSON
router.post('/status/sodas', (req, res, next) => {
  
});

module.exports = router;

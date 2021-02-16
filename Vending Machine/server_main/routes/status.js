var express = require('express');
var router = express.Router();
var sodaData = require('../data/sodas.json')

//! GET status page
router.get('/status', (req, res, next) => {
  res.render('status', {
    title: 'Vending Machine Status',
    sodaJSON: sodaData, 
  });
});

module.exports = router;

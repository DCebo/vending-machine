var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    user: 'ColaCo Admin',
    title: 'Vending Machine API'});
});

module.exports = router;

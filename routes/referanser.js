var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET Gorine */
router.get('/referanser', function(req, res) {
  res.render('referanser', { title: 'Referanser' });
});

module.exports = router;

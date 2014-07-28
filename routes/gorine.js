var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET Gorine */
router.get('/gorine', function(req, res) {
  res.render('gorine', { title: 'Gorine' });
});

module.exports = router;

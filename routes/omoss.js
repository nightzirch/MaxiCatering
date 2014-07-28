var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/* GET Om oss */
router.get('/omoss', function(req, res) {
  res.render('omoss', { title: 'Om oss' });
});

module.exports = router;

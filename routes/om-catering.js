var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'om-catering' });
});


/* GET Om oss */
router.get('/omcatering', function(req, res) {
  res.render('omcatering', { title: 'Om Catering' });
});

module.exports = router;

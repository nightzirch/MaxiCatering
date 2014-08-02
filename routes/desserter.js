var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Desserter' });
});


/* GET kaker page. */
router.get('/kaker', function(req, res) {
  res.render('kaker', { title: 'Kaker' });
});


/* GET våre spesialiteter page */
router.get('/vare-spesialiteter', function(req, res) {
  res.render('vare-spesialiteter', { title: 'Våre spesialiteter' });
});

module.exports = router;
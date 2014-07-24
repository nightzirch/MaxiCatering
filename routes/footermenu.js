var express = require('express');
var router = express.Router();

/* GET index */
router.get('/', function(req, res) {
  res.render('index', { title: 'Footermenu' });
});

/* GET Kontakt oss */
router.get('/kontakt', function(req, res) {
  res.render('kontakt', { title: 'Kontakt oss' });
});

/* GET Om oss */
router.get('/om-oss', function(req, res) {
  res.render('om-oss', { title: 'Om oss' });
});

/* GET referanser */
router.get('/referanser', function(req, res) {
  res.render('referanser', { title: 'Referanser' });
});

/* GET om catering */
router.get('/om-catering', function(req, res) {
  res.render('om-catering', { title: 'Om catering' });
});

/* GET om catering */
router.get('/kokk-og-servitor', function(req, res) {
  res.render('kokk-og-servitor', { title: 'Kokk og servitør' });
});

/* GET om catering */
router.get('/gorine', function(req, res) {
  res.render('gorine', { title: 'Gorine' });
});

module.exports = router;
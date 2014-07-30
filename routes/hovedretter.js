var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'hovedretter'});
});


/* GET koldtbord */
router.get('/koldtbord', function(req, res) {
  res.render('koldtbord', { title: 'Koldtbord' });
});

/* GET havetsfestbord */
router.get('/havetsfestbord', function(req, res) {
  res.render('havetsfestbord', { title: 'Havets Festbord' });
});


/* GET selskapsmat */
router.get('/selskapsmat', function(req, res) {
  res.render('selskapsmat', { title: 'Selskapsmat' });
});


/* GET julemey */
router.get('/julemeny', function(req, res) {
  res.render('julemeny', { title: 'Julemeny' });
});

/* GET lunch-og-middag */
router.get('/lunch-og-middag', function(req, res) {
  res.render('lunch-og-middag', { title: 'Lunch og middag' });
});

module.exports = router;
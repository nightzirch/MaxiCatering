var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hovedretter' });
});


/* GET havets festbord */
router.get('/havets-festbord', function(req, res) {
  res.render('havets-festbord', { title: 'Havets festbord' });
});


/* GET selskapsmat */
router.get('/selskapsmat', function(req, res) {
  res.render('selskapsmat', { title: 'Selskapsmat' });
});


/* GET julemeny */
router.get('/julemeny', function(req, res) {
  res.render('julemeny', { title: 'Julemeny' });
});


/* GET koldtbord */
router.get('/koldtbord', function(req, res) {
  res.render('koldtbord', { title: 'Koldtbord' });
});


/* GET lunchogmiddad */
router.get('/lunch-og-middag', function(req, res) {
  res.render('lunch-og-middag', { title: 'Lunch og middag' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'smaretter' });
});


/* GET tapas */
router.get('/tapas', function(req, res) {
  res.render('tapas', { title: 'Tapas' });
});


/* GET smørbrød */
router.get('/smorbrod', function(req, res) {
  res.render('smorbrod', { title: 'Smørbrød for enhver anledning' });
});


/* GET rundstykker */
router.get('/rundstykker', function(req, res) {
  res.render('rundstykker', { title: 'Rundstykker' });
});

/* GET tagtest */
router.get('/tagtest', function(req, res) {
  res.render('tagtest', { title: 'Tagtest' });
});



module.exports = router;
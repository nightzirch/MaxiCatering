var express = require('express');
var router = express.Router();


/* GET om catering */
router.get('/', function(req, res) {
  res.render('om-catering', { title: 'Om Catering' });
});

module.exports = router;

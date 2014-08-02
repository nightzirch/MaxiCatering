var express = require('express');
var router = express.Router();

/* GET referanser page. */
router.get('/', function(req, res) {
  res.render('referanser', { title: 'Referanser' });
});

module.exports = router;

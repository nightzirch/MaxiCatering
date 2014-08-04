var express = require('express');
var router = express.Router();

/* GET kontakt page. */
router.get('/', function(req, res) {
  res.render('kontakt', { title: 'Kontakt' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET om oss page. */
router.get('/', function(req, res) {
  res.render('om-oss', { title: 'Om Oss' });
});

module.exports = router;
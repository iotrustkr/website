var express = require('express');
var router = express.Router();

/* GET assets page. */
router.get('/', function(req, res, next) {
  res.render('assets', { title: 'IoTrust' });
});

module.exports = router;

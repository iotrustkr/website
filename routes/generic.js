var express = require('express');
var router = express.Router();

/* GET generic page. */
router.get('/', function(req, res, next) {
  res.render('generic', { title: 'IoTrust' });
});

module.exports = router;

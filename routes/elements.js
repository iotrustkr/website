var express = require('express');
var router = express.Router();

/* GET elements page. */
router.get('/', function(req, res, next) {
  res.render('elements', { title: 'IoTrust' });
});

module.exports = router;

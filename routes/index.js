var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

<<<<<<< HEAD
/* GET About page. */
router.get('/about', function(req, res, next) {
	res.render('about');
=======
/* GET information page. */
router.get('/information', function(req, res, next) {
  res.render('information');
});

/* GET support page. */
router.get('/support', function(req, res, next) {
  res.render('support');
>>>>>>> dev
});

module.exports = router;

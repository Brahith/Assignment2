var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about page. */
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* GET products page. */
router.get('/Work', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});

module.exports = router;

/* 
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/

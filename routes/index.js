var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* GET products page. */
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Products'});
});

/* GET services page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});

module.exports = router;

/* 
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/

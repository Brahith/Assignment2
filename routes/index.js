var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* 
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/

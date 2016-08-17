var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {body: "this is my project" })
});

module.exports = router;

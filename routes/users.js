var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')

/* GET users listing. */
router.get('/', function(req, res, next) {
  tvmaze.getByQuery("suits", true, ['nextepisode'], function(result){
      res.send(result)
  })
});

module.exports = router;

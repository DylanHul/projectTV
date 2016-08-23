var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {body: tvSearch} )
})

tvmaze.getByQuery('suits', true, ['nextepisode'], function(result){
        console.log(result.schedule)
      })


function tvSearch () {
      return "heyyy"
}
module.exports = router;

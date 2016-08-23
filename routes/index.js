var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {body: tvSearch} )
})

tvmaze.getByQuery('suits', true, ['nextepisode'], function(result){
        return JSON.stringify(result.schedule)
      })

function tvSearch () {
     return tvmaze
}
module.exports = router;

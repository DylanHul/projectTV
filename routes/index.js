var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {body: tvSearch} )
})

function tvSearch () {
      tvmaze.getByQuery('suits', true, ['nextepisode'], function(result){
        console.log(JSON.stringify(result.schedule))
      })
}



module.exports = router;

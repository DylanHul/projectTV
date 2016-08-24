var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')

/* GET home page. */
router.get('/', function(req, res, next) {
  var tvSearch
   tvmaze.getByQuery('suits', true, ['nextepisode'], function(result){
            tvSearch = result.schedule.days
                  console.log("here", tvSearch)
                  res.render('index', {body: tvSearch} )
        })

})



// function tvSearch () {
//       return search
// }
module.exports = router;

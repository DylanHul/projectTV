var express = require('express');
var router = express.Router();
var tvmaze = require('tvmaze-api')


 function showSearch () {
  return 'suits'
}



/* GET users listing. */
router.get('/', function(req, res, next) {
  tvmaze.getByQuery(showSearch(), true, ['nextepisode'], function(result){
      res.send(result.schedule)
      console.log(JSON.stringify(result.schedule))
  })
});


module.exports = router;

const express = require('express');
const router = express.Router();
const tvmaze = require('tvmaze-api')

// var holyShit =



router.get('/', function(req, res, next) {

  // var codeThis = function showSearch() {
  //        alert("f1 called")
  //    }
  //    document.onClick = function() {
  //        document.getElementById("btn").onclick = function fun() {
  //            alert("hello")
  //            showSearch()
  //        }
  //    }

  newVar = function() { return "newplaceholder" }
        res.render('login', {search: newVar} )


});


// document.getElementById("btn").addEventListener('click', function () {
//   alert("btn function fired")
// })
// var getSearch = document.getElementById('btn')
//
// getSearch.addEventListener('click', function(event) {
//   alert("btn function fired")
// })


module.exports = router;

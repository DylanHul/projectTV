const express = require('express');
const router = express.Router();
const tvmaze = require('tvmaze-api')





router.get('/', function(req, res, next) {

  // var input = document.getElementById('btn')
  //
  // document.getElementById('btn').addEventListener('click', function () {
  //   input.summit
  // })

// loginhbs = document.getElementById('btn').onclick = function onClick() {
//          alert("onClick called")
//          return true
//      }

myVar = "hi"

res.render('login', {search: myVar} )
//
});


// document.getElementById("btn").addEventListener('click', function () {
//   alert("btn function fired")
// })
// var getSearch = document.getElementById('btn')
//
// getSearch.addEventListener('click', function(event) {
//   alert("btn function fired")
// })


//   function clicking () { alert("newplaceholder") }
  // var searchInput = document.getElementsById('btn').innerHTML
//   // .onclick = newVar
// var clickFun = function click () {
//   alert('clicked btn')
// }

module.exports = router;

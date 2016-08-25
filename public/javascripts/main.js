document.addEventListener('DOMContentLoaded', start)

function start () {
    clickHandler()
}

function clickHandler () {
  var one = document.getElementById('form1') //this allows to click anywhere
  one.addEventListener('click', searchSubmit)
}

function searchSubmit () {

        alert("searchSubmit called")


}

// function clickHandler () {
//   var sea = document.getElementById('input1') //this allows to click anywhere
//   sea.addEventListener('click', clickSubmit)
// }
// function clickSubmit () {
//
//         alert("clickSubmit called")
//              return true
//
//   // evt.target.style.backgroundColor = 'blue'
// }

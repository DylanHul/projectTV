document.addEventListener('DOMContentLoaded', start)

function start () {
    one()
    clickHandler()
}

function one () {
  var one = document.getElementById('form1') //this allows to click anywhere
  one.addEventListener('click', searchSubmit)
}

function searchSubmit () {

        alert("searchSubmit called")
             return true

  // evt.target.style.backgroundColor = 'blue'
}

function clickHandler () {
  var sea = document.getElementById('input1') //this allows to click anywhere
  sea.addEventListener('click', clickSubmit)
}
function clickSubmit () {

        alert("clickSubmit called")
             return true

  // evt.target.style.backgroundColor = 'blue'
}

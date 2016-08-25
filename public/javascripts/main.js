document.addEventListener('DOMContentLoaded', start)

function start () {
    one()
}

function one () {
  var one = document.getElementById('form1')
  one.addEventListener('click', searchSubmit)
}

function searchSubmit (evt) {
  evt.target.style.backgroundColor = 'blue'
}

// function clickHandler () {
//
//   clickHandler.addEventListener('click', function() {
//     document.getElementById('btn').onclick = function onClick() {
//            alert("onClick called")
//            return true
//        }
//   })
// }

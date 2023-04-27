let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let stop = document.querySelector('.stop')
let soundON = document.querySelector('.sound-on')
let soundOf = document.querySelector('.sound-of')



play.addEventListener('click', function() {
  play.classList.add('hide')
  document.querySelector('.pause').classList.remove('hide')
  document.querySelector('.stop').classList.remove('hide')
  document.querySelector('.set').classList.add('hide')
  
})

pause.addEventListener('click', function() {
  pause.classList.add('hide')
  document.querySelector('.play').classList.remove('hide')
  document.querySelector('.set').classList.add('hide')
  
  
})

stop.addEventListener('click', function() {
  stop.classList.add('hide')
  document.querySelector('.set').classList.remove('hide')
  document.querySelector('.play').classList.remove('hide')
  document.querySelector('.pause').classList.add('hide')
  
})

soundON.addEventListener('click', function() {
  soundON.classList.add('hide')
  document.querySelector('.sound-of').classList.remove('hide')

})

soundOf.addEventListener('click', function() {
  soundOf.classList.add('hide')
  document.querySelector('.sound-on').classList.remove('hide')
})




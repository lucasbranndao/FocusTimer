let buttonplay = document.querySelector('.play')
let buttonpause = document.querySelector('.pause')
let buttonstop = document.querySelector('.stop')
let buttonsoundON = document.querySelector('.sound-on')
let buttonsoundOf = document.querySelector('.sound-of')



buttonplay.addEventListener('click', function() {
  buttonplay.classList.add('hide')
  document.querySelector('.pause').classList.remove('hide')
  document.querySelector('.stop').classList.remove('hide')
  document.querySelector('.set').classList.add('hide')
  
})

buttonpause.addEventListener('click', function() {
  buttonpause.classList.add('hide')
  document.querySelector('.play').classList.remove('hide')
  document.querySelector('.set').classList.add('hide')
  
  
})

buttonstop.addEventListener('click', function() {
  buttonstop.classList.add('hide')
  document.querySelector('.set').classList.remove('hide')
  document.querySelector('.play').classList.remove('hide')
  document.querySelector('.pause').classList.add('hide')
  
})

buttonsoundON.addEventListener('click', function() {
  buttonsoundON.classList.add('hide')
  document.querySelector('.sound-of').classList.remove('hide')

})

buttonsoundOf.addEventListener('click', function() {
  buttonsoundOf.classList.add('hide')
  document.querySelector('.sound-on').classList.remove('hide')
})




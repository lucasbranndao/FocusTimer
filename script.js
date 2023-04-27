const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundON = document.querySelector('.sound-on')
const buttonSoundOf = document.querySelector('.sound-of')



buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')
  
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.add('hide')
  
  
})

buttonStop.addEventListener('click', function() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  
})

buttonSoundON.addEventListener('click', function() {
  buttonSoundON.classList.add('hide')
  buttonSoundOf.classList.remove('hide')

})

buttonSoundOf.addEventListener('click', function() {
  buttonSoundOf.classList.add('hide')
  buttonSoundON.classList.remove('hide')
})




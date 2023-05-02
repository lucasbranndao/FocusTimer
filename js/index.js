import Controls from "./controls.js"
import Timer  from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundON = document.querySelector('.sound-on')
const buttonSoundOf = document.querySelector('.sound-of')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
  
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset
})


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()
  
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  clearTimeout(timerTimeOut)
    
})

buttonStop.addEventListener('click', function() {

  controls.reset()
  timer.reset()
  
})

buttonSoundON.addEventListener('click', function() {
  buttonSoundON.classList.add('hide')
  buttonSoundOf.classList.remove('hide')
  
})

buttonSoundOf.addEventListener('click', function() {
  buttonSoundOf.classList.add('hide')
  buttonSoundON.classList.remove('hide')

})


buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()

  if(!newMinutes) {
  timer.reset()
  return
  }
minutes = newMinutes
timer.updateDisplay(minutes, 0)
  
})



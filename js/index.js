import Controls from "./Controls.js"
import Timer  from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundON = document.querySelector('.sound-on')
const buttonSoundOf = document.querySelector('.sound-of')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
 })


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()
  
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  
    
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
timer.updateDisplay(newMinutes, 0)
timer.updateMinutes(newMinutes)

  
})



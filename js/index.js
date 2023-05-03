import Controls from "./Controls.js"
import Timer  from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundON,
  buttonSoundOf,
  minutesDisplay,
  secondsDisplay} from "./elements.js"


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
const sound = Sound()


buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countDown()
  sound.pressButton()
  
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sound.pressButton()
    
})

buttonStop.addEventListener('click', function() {

  controls.reset()
  timer.reset()
  sound.pressButton()
  
})

buttonSoundON.addEventListener('click', function() {
  buttonSoundON.classList.add('hide')
  buttonSoundOf.classList.remove('hide')
  sound.bgAudio.play()
  
})

buttonSoundOf.addEventListener('click', function() {
  buttonSoundOf.classList.add('hide')
  buttonSoundON.classList.remove('hide')
  sound.bgAudio.pause()
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



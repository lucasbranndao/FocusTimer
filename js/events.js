import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundON,
  buttonSoundOf} from "./elements.js"

export default function ({controls, timer, sound}){


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
    sound.bgAudio.pause()
    
  })
  
  buttonSoundOf.addEventListener('click', function() {
    buttonSoundOf.classList.add('hide')
    buttonSoundON.classList.remove('hide')
    sound.bgAudio.play()
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
  return {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundON,
    buttonSoundOf

  }
}
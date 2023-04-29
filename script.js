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

function resetControls () {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countDown () {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
  
    updateTimerDisplay(minutes, 0)
    
    if(minutes <= 0 ){

      resetControls()

      return
    }
    
    if(seconds <= 0) {
      seconds = 2
      --minutes

    }
    
    updateTimerDisplay(minutes, String(seconds -1))
    
    
    countDown()
    }, 1000)
}

function resetTimer() {
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes, 0)

}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')


  countDown()
  
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.add('hide')
  clearTimeout(timerTimeOut)
    
})

buttonStop.addEventListener('click', function() {

  resetControls()
  resetTimer()
  
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
  let newMinutes = prompt('Quantos minutos?')

  if(!newMinutes) {
  resetTimer()
  return
  }
minutes = newMinutes
updateTimerDisplay(minutes, 0)
  
})



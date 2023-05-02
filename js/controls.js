export default function Controls(
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
) { 

  function play () {
    buttonPlay.classList.add('hide')
    console.log(buttonPlay)
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  
  }

  function pause () {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function reset () {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')

      if(!newMinutes) {
        return false
      }
    
      return newMinutes
    

  }


  return{ 
    play,
    pause,
    reset,
    getMinutes

  }

}



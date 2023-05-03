export default function() {
const buttonPressAudio = new Audio("audio")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/bg-audio.cp3?raw=true")

function pressButton() {
  buttonPressAudio.play()
}

function timerEnd() {
  kitchenTimer.play()
}


return {
  pressButton,
  timerEnd,
  bgAudio
}

}

// https://www.youtube.com/results?search_query=button+press+audio
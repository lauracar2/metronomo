const bpm = document.getElementById('bpm')
const h3 = document.querySelector('h3')
const play = document.getElementById('play')
const audio = document.querySelector('audio')

let currentBpm = 40
let isPlaying = false
let timer = null

function tick(){

    audio.currentTime = 0
    audio.play()
}


bpm.addEventListener('change', function (){
    h3.innerHTML = this.value + 'bpm'
    currentBpm = parseInt(this.value)
    if(isPlaying){
      clearInterval(timer)
      timer = setInterval(tick, (60 * 1000)/ currentBpm)
    }
})

play.addEventListener('click', function(){
  if(isPlaying){
     play.innerHTML = 'Play'
     clearInterval(timer)
     tick()
   }else{
     play.innerHTML = 'Stop'
     timer = setInterval(tick, (60*1000)/currentBpm)
  }
  isPlaying =  !isPlaying
})
const myCanvas = document.querySelector(`#myCanvas`)
const gameOver = document.querySelector(`#gameOver`)



const buttonClick = document.querySelector(`#buttonClick`)
const textRange = document.querySelector(`#textRange`)
const scoreAcceleration = document.querySelector(`#acceleration`)

const ctx = myCanvas.getContext(`2d`)
ctx.imageSmoothingEnabled = false;
const birtImage = new Image();
birtImage.src = `birt.png`
randomNumber1 = Math.floor((Math.random()*200)+100)
obs1 = {position:200, sizeX:50,sizeY:randomNumber1
}
randomNumber2 = Math.floor((Math.random()*200)+100)
obs2 = {position:375, sizeX:50,sizeY:randomNumber2
}
scoreMax = 0
moveOk = false
stateScore1 = true
stateScore2 = true
valueRange = 1
score = 0
jumpAction = false
sizeRect = 25
altura = 180
gravity = 0.12
acceleration = 0
function frames() {
 ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
 ctx.fillStyle = "#020415"
 ctx.fillRect(50,altura,sizeRect,sizeRect)
 if (moveOk) {
  if (jumpAction) {
   altura--
   acceleration += gravity
   altura += acceleration
   if (acceleration < 0) {
    jumpAction = false
   }
  } else {
   if (altura < myCanvas.height - sizeRect) {
    altura++
    acceleration += gravity
    altura += acceleration
   } else if (altura >= myCanvas.height - sizeRect) {
    altura = myCanvas.height - sizeRect
    acceleration = 0
   }
  }
 }
 ctx.fillStyle = "#EBEBEB"
 ctx.fillRect(obs1.position,0,obs1.sizeX,obs1.sizeY)
 ctx.fillRect(obs1.position,obs1.sizeY + 120,obs1.sizeX,500)
 if (moveOk) {
  obs1.position--
 }
 if (obs1.position <= 75 && obs1.position >= 0 && altura <= obs1.sizeY || obs1.position <= 75 && obs1.position > 0 && altura >= obs1.sizeY + 95) {
  moveOk = false
  gameOver.style.display = `block`
  buttonClick.style.display = `none`
 }
 
 if (obs1.position < -50) {
  obs1.position = myCanvas.width
  obs1.sizeY = Math.floor(Math.random()*300)
  stateScore2 = true
 }
 
 
 
 
 ctx.fillRect(obs2.position,0 , obs2.sizeX, obs2.sizeY)
 ctx.fillRect(obs2.position, obs2.sizeY + 120, obs2.sizeX, 480)
 if (moveOk) {
  obs2.position--
 }
 if (obs2.position <= 75 && obs2.position >= 0 && altura <= obs2.sizeY || obs2.position <= 75 && obs2.position > 0 && altura >= obs2.sizeY + 95) {
  moveOk = false
  gameOver.style.display = `block`
  buttonClick.style.display = `none`
 }
 
 if (obs2.position < -50) {
  obs2.position = myCanvas.width
  obs2.sizeY = Math.floor(Math.random()*300)
  stateScore1 = true
 }
 //TODAS LAS IMAGENES !!
 ctx.drawImage(birtImage,50-5,altura-5,sizeRect+10,sizeRect+10)
 //socore
 if (obs1.position < 0 && stateScore1) {
  score++
  stateScore1 = false
 }
 if (obs2.position < 0 && stateScore2) {
  score++
  stateScore2 = false
 }
 
 scoreAcceleration.innerHTML = (`A:`+ Math.round(acceleration) +`|G:`+ gravity + `|H:`+ Math.round(altura) + `|P1:`+ randomNumber1 +  `|P2:`+ randomNumber2 + `<h3>PUNTAJE: ${score} | MAXIMO PUNTAJE: ${scoreMax}</h3>`)
 
 requestAnimationFrame(frames)
}

frames()

function jumpBirt() {
  jumpAction = true
  acceleration = -4
  moveOk = true
 }
 
 function rangeAction(value) {
  valueRange = value
  gravity = value / 10
 }
 
 function retry() {
  randomNumber1 = Math.floor((Math.random()*200)+100)
 obs1 = {position:200, sizeX:50,sizeY:randomNumber1
}
 randomNumber2 = Math.floor((Math.random()*200)+100)
 obs2 = {position:375, sizeX:50,sizeY:randomNumber2
}

  gameOver.style.display = `none`
  buttonClick.style.display = `block`
  if (scoreMax < score) {
    scoreMax = score
  }
  score = 0
  altura = 180
  
 }
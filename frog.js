document.addEventListener('DOMContentLoaded', () => {

// DOMS
let startButton = document.getElementById('startButton')
let start = document.getElementById('start')
let gameOn = document.getElementById('gameOn')
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let retry = document.getElementById('retrybutton')
let cod = null
let timer = document.getElementById('timer')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let minuteDisplay = 0
let secondDisplay = 0
let score = document.getElementById('score')
let scoreone = document.getElementById('scoreone')
let scoretwo = document.getElementById('scoretwo')
let scorethree = document.getElementById('scorethree')
let scoreonedisplay = null
let scoretwodisplay = null
let scorethreedisplay = null


//images
let characterImg = new Image()
characterImg.src = 'img/bill_rizer__contra__by_miniman487_d6l3dv1-fullview.png'
console.log(characterImg)
let arrowImg = new Image()
arrowImg.src = 'img/unnamed-2.png'
let lavaImg = new Image()
lavaImg.src = 'img/Screen Shot 2020-12-28 at 3.33.55 PM.png'
let knifeLImg = new Image()
knifeLImg.src = "img/Script-Online-DICE-CHEF'S-KNIFE-300-MM-52151702SD00116-PDP-Gallery-D-01.png"
let knifeRImg = new Image()
knifeRImg.src = "img/Script-Online-DICE-CHEF'S-KNIFE-300-MM-52151702SD00116-PDP-Gallery-D-01 copy.png"
let carImg = new Image()
carImg.src = 'img/unnamed.png'
let ballImg = new Image()
ballImg.src = 'img/fireball-clipart-transparent-background-4.png'
let fireImg = new Image()
fireImg.src = 'img/27438-3-fire-flame-transparent-background.png'
let finishImg = new Image()
finishImg.src = 'img/unnamed-1.png'
let ballLImg = new Image ()
ballLImg.src = 'img/fireball-clipart-transparent-background-4 copy.png'


// character movement
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

let ctx = game.getContext('2d')
ctx.font = 'Press Start 2P' 

//replace color with img, delete fillStyle, replace fillRect w drawImage
function Crawler(x, y, width, height, img) {
    this.x = x
    this.y = y
    this.img = img
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

function Enemy(x, y, width, height, img) {
    this.x = x
    this.y = y
    this.img = img
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

// characters/obstacles
let character = new Crawler(190, 700, 20, 30, characterImg)

let carone = new Enemy(162, 600, 50, 30, carImg)
let cartwo = new Enemy(25, 600, 50, 30, carImg)
let carthree = new Enemy(300, 600, 50, 30, carImg)

let arrowone = new Enemy(25, 500, 30, 20, arrowImg)
let arrowtwo = new Enemy(100, 500, 30, 20, arrowImg)
let arrowthree = new Enemy(175, 500, 30, 20, arrowImg)
let arrowfour = new Enemy(250, 500, 30, 20, arrowImg)
let arrowfive = new Enemy(325, 500, 30, 20, arrowImg)

let lavaone = new Enemy(260, 300, 150, 80, lavaImg)
let lavafour = new Enemy(0, 300, 120, 80, lavaImg)
let lavatwo = new Enemy(260, 300,  70, 80, lavaImg)
let lavathree = new Enemy(50, 300,  70, 80, lavaImg)


let fireone = new Enemy(0, 260, 68, 20, fireImg)
let firethree = new Enemy(240, 260, 68, 20, fireImg)

let ballone = new Enemy(340, 200, 35, 20, ballImg)
let balltwo = new Enemy(260, 200, 35, 20, ballImg)
let ballthree = new Enemy(180, 200, 35, 20, ballImg)
let ballfour = new Enemy(100, 200, 35, 20, ballImg)
let ballfive = new Enemy(20, 200, 35, 20, ballImg)
let ballsix = new Enemy(320, 170, 35, 20, ballLImg)
let ballseven = new Enemy(240, 170, 35, 20, ballLImg)
let balleight = new Enemy(160, 170, 35, 20, ballLImg)
let ballnine = new Enemy(80, 170, 35, 20, ballLImg)
let ballten = new Enemy(0, 170, 35, 20, ballLImg)

let knifeone = new Enemy(340, 140, 30, 20, knifeRImg)
let knifetwo = new Enemy(260, 140, 30, 20, knifeRImg)
let knifethree = new Enemy(180, 140, 30, 20, knifeRImg)
let knifefour = new Enemy(100, 140, 30, 20, knifeRImg)
let knifefive = new Enemy(20, 140, 30, 20, knifeRImg)
let knifesix = new Enemy(320, 110, 30, 20, knifeLImg)
let knifeseven = new Enemy(240, 110, 30, 20, knifeLImg)
let knifeeight = new Enemy(160, 110, 30, 20, knifeLImg)
let knifenine = new Enemy(80, 110, 30, 20, knifeLImg)
let knifeten = new Enemy(0, 110, 30, 20, knifeLImg)

let finish = new Enemy(0, 50, 500, 40, finishImg)

//movement functions
function moveCarLeft() {
    carone.x -=3
    cartwo.x -=3
    carthree.x -=3
    if (carone.x + carone.width <= 0){
        carone.x=385
    }
    if (cartwo.x + cartwo.width <= 0){
        cartwo.x=385
    }
    if (carthree.x + carthree.width <= 0){
        carthree.x=385
    }
}

function moveArrowRight() {
    arrowone.x +=3.3
    arrowtwo.x +=3.3
    arrowthree.x +=3.3
    arrowfour.x +=3.3
    arrowfive.x +=3.3
    if (arrowone.x + arrowone.width >= 385){
        arrowone.x=0
    }
    if (arrowtwo.x + arrowtwo.width >= 385){
        arrowtwo.x=0
    }
    if (arrowthree.x + arrowthree.width >= 385){
        arrowthree.x=0
    }
    if (arrowfour.x + arrowfour.width >= 385){
        arrowfour.x=0
    }
    if (arrowfive.x + arrowfive.width >= 385){
        arrowfive.x=0
    }
}


function moveFireLeft() {
    fireone.x -=2
    firethree.x -=2
    if (fireone.x + fireone.width <= 0){
        fireone.x=385
    }
    if (firethree.x + firethree.width <= 0){
        firethree.x=385
    }
}


function moveBallRight() {
    ballone.x +=2
    balltwo.x +=2
    ballthree.x +=2
    ballfour.x +=2
    ballfive.x +=2
    if (ballone.x - ballone.width >= 385){
        ballone.x=0
    }
    if (balltwo.x - balltwo.width >= 385){
        balltwo.x=0
    }
    if (ballthree.x - ballthree.width >= 385){
        ballthree.x=0
    }
    if (ballfour.x - ballfour.width >= 385){
        ballfour.x=0
    }
    if (ballfive.x - ballfive.width >= 385){
        ballfive.x=0
    }
}

function moveBallLeft() {
    ballsix.x -=1
    ballseven.x -=1
    balleight.x -=1
    ballnine.x -=1
    ballten.x -=1
    if (ballsix.x + ballsix.width <= 0){
        ballsix.x=385
    }
    if (ballseven.x + ballseven.width <= 0){
        ballseven.x=385
    }
    if (balleight.x + balleight.width <= 0){
        balleight.x=385
    }
    if (ballnine.x + ballnine.width <= 0){
        ballnine.x=385
    }
    if (ballten.x + ballten.width <= 0){
        ballten.x=385
    }
}

function moveKnifeRight() {
    knifeone.x +=.5
    knifetwo.x +=.5
    knifethree.x +=.5
    knifefour.x +=.5
    knifefive.x +=.5
    if (knifeone.x - knifeone.width >= 380){
        knifeone.x=-10
    }
    if (knifetwo.x - knifetwo.width >= 380){
        knifetwo.x=-10
    }
    if (knifethree.x - knifethree.width >= 380){
        knifethree.x=-10
    }
    if (knifefour.x - knifefour.width >= 380){
        knifefour.x=-10
    }
    if (knifefive.x - knifefive.width >= 380){
        knifefive.x=-10
    }
}

function moveKnifeLeft() {
    knifesix.x -=1.5
    knifeseven.x -=1.5
    knifeeight.x -=1.5
    knifenine.x -=1.5
    knifeten.x -=1.5
    if (knifesix.x + knifesix.width <= 0){
        knifesix.x=385
    }
    if (knifeseven.x + knifeseven.width <= 0){
        knifeseven.x=385
    }
    if (knifeeight.x + knifeeight.width <= 0){
        knifeeight.x=385
    }
    if (knifenine.x + knifenine.width <= 0){
        knifenine.x=385
    }
    if (knifeten.x + knifeten.width <= 0){
        knifeten.x=385
    }
}

function moveLavaTwoLeft() {
    lavatwo.x -=1
    if (lavatwo.x <= 190){
        lavatwo.x=260
    }
}

function moveLavaFourLeft() {
    lavathree.x +=1
    if (lavathree.x >= 120){
        lavathree.x=50
    }
}

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    
    moveCarLeft()
    carone.render() 
    cartwo.render()
    carthree.render()
    moveArrowRight()
    arrowone.render()
    arrowtwo.render()
    arrowthree.render()
    arrowfour.render()
    arrowfive.render()
    moveFireLeft()
    moveLavaTwoLeft()
    moveLavaFourLeft()
    lavatwo.render()
    lavathree.render()
    lavaone.render()
    lavafour.render()
    fireone.render()
    firethree.render()
    moveBallRight()
    ballone.render()
    balltwo.render()
    ballthree.render()
    ballfour.render()
    ballfive.render()
    moveBallLeft()
    ballsix.render()
    ballseven.render()
    balleight.render()
    ballnine.render()
    ballten.render()
    moveKnifeRight()
    knifeone.render()
    knifetwo.render()
    knifethree.render()
    knifefour.render()
    knifefive.render()
    moveKnifeLeft()
    knifesix.render()
    knifeseven.render()
    knifeeight.render()
    knifenine.render()
    knifeten.render()
    finish.render()
    if (character.alive) {
        character.render()
        detectHit()
        detectHitTwo()
        detectHitThree()
        detectHitFour()
        detectHitFive()
        detectHitSix()
        detectHitSeven()
        detectHitEight()
        detectHitNine()
        detectHitTen()
        detectHitEleven()
        detectHitTwelve()
        detectHitThirteen()
        detectHitFifteen()
        detectHitSixteen()
        detectHitSeventeen()
        detectHitEightteen()
        detectHitNineteen()
        detectHitTwenty()
        detectHitTwentytwo()
        detectHitTwentythree()
        detectHitTwentyfour()
        detectHitTwentyfive()
        detectHitTwentysix()
        detectHitTwentyseven()
        detectHitTwentyeight()
        detectHitTwentynine()
        detectHitThirty()
        detectHitThirtyone()
        detectHitThirtytwo()
        detectHitThirtythree()
        detectHitThirtyfour()
        detectHitThirtyfive()
        detectHitThirtysix()
    } else {
        clearInterval(gameInterval)
        gameOverMessage(cod)
        clearInterval(timerInterval)
        
    }
}
function gameOverMessage(cause){
    ctx.font = '13px Fantasy'
    ctx.fillStyle = 'yellow'
    ctx.fillText(cause, game.width/2-180, game.height/2+40)
    
}



// detect hit
let detectHit = () => {
    if (
        character.x + character.width > carone.x &&
        character.x < carone.x + carone.width &&
        character.y < carone.y + carone.height &&
        character.y + character.height > carone.y
    ) {
        character.alive = false
        cod = 'You were splattered by a barrel'
        retry.style.display = 'inline-block'
    }
    }

let detectHitTwo = () => {
    if (
        character.x + character.width > cartwo.x &&
        character.x < cartwo.x + cartwo.width &&
        character.y < cartwo.y + cartwo.height &&
        character.y + character.height > cartwo.y
        ) {
            character.alive = false
            cod = 'You were splattered a by barrel'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThree = () => {
    if (
        character.x + character.width > carthree.x &&
        character.x < carthree.x + carthree.width &&
        character.y < carthree.y + carthree.height &&
        character.y + character.height > carthree.y
        ) {
            character.alive = false
            cod = 'You were splattered by a barrel'
            retry.style.display = 'inline-block'
    }
    }
    
let detectHitFour = () => {
    if (
        character.x + character.width > arrowone.x &&
        character.x < arrowone.x + arrowone.width &&
        character.y < arrowone.y + arrowone.height &&
        character.y + character.height > arrowone.y
        ) {
            character.alive = false
            cod = 'You were sniped by an arrow'
            retry.style.display = 'inline-block'
     }
    }

let detectHitFive = () => {
    if (
        character.x + character.width > arrowtwo.x &&
        character.x < arrowtwo.x + arrowtwo.width &&
        character.y < arrowtwo.y + arrowtwo.height &&
        character.y + character.height > arrowtwo.y
        ) {
            character.alive = false
            cod = 'You were sniped by an arrow'
            retry.style.display = 'inline-block'
    }
    }

let detectHitSix = () => {
    if (
        character.x + character.width > arrowthree.x &&
        character.x < arrowthree.x + arrowthree.width &&
        character.y < arrowthree.y + arrowthree.height &&
        character.y + character.height > arrowthree.y
        ) {
            character.alive = false
            cod = 'You were sniped by an arrow'
            retry.style.display = 'inline-block'
    }
    }

    let detectHitSeven = () => {
        if (
            character.x + character.width > arrowfour.x &&
            character.x < arrowfour.x + arrowfour.width &&
            character.y < arrowfour.y + arrowfour.height &&
            character.y + character.height > arrowfour.y
            ) {
                character.alive = false
                cod = 'You were sniped by an arrow'
                retry.style.display = 'inline-block'
        }
        }

let detectHitEight = () => {
        if (
        character.x + character.width > arrowfive.x &&
        character.x < arrowfive.x + arrowfive.width &&
        character.y < arrowfive.y + arrowfive.height &&
        character.y + character.height > arrowfive.y
        ) {
            character.alive = false
            cod = 'You were sniped by an arrow'
            retry.style.display = 'inline-block'
    }
    }

let detectHitNine = () => {
    if (
        character.x + character.width > lavaone.x &&
        character.x < lavaone.x + lavaone.width &&
        character.y < lavaone.y + lavaone.height &&
        character.y + character.height > lavaone.y
        ) {
            character.alive = false
            cod = 'Lava monster eating good tonight'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTen = () => {
    if (
        character.x + character.width > lavatwo.x &&
        character.x < lavatwo.x + lavatwo.width &&
        character.y < lavatwo.y + lavatwo.height &&
        character.y + character.height > lavatwo.y
        ) {
            character.alive = false
            cod = 'Lava monster eating good tonight'
            retry.style.display = 'inline-block'
    }
    }

let detectHitEleven = () => {
    if (
        character.x + character.width > lavathree.x &&
        character.x < lavathree.x + lavathree.width &&
        character.y < lavathree.y + lavathree.height &&
        character.y + character.height > lavathree.y
        ) {
            character.alive = false
            cod = 'Lava monster eating good tonight'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwelve = () => {
    if (
        character.x + character.width > lavafour.x &&
        character.x < lavafour.x + lavafour.width &&
        character.y < lavafour.y + lavafour.height &&
        character.y + character.height > lavafour.y
        ) {
            character.alive = false
            cod = 'Lava monster eating good tonight'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirteen = () => {
    if (
        character.x + character.width > fireone.x &&
        character.x < fireone.x + fireone.width &&
        character.y < fireone.y + fireone.height &&
        character.y + character.height > fireone.y
        ) {
            character.alive = false
            cod = 'Watch out for that fire'
            retry.style.display = 'inline-block'
    }
    }


let detectHitFifteen = () => {
    if (
        character.x + character.width > firethree.x &&
        character.x < firethree.x + firethree.width &&
        character.y < firethree.y + firethree.height &&
        character.y + character.height > firethree.y
        ) {
            character.alive = false
            cod = 'Watch out for that fire'
            retry.style.display = 'inline-block'
    }
    }

let detectHitSixteen = () => {
    if (
        character.x + character.width > ballone.x &&
        character.x < ballone.x + ballone.width &&
        character.y < ballone.y + ballone.height &&
        character.y + character.height > ballone.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitSeventeen = () => {
    if (
        character.x + character.width > balltwo.x &&
        character.x < balltwo.x + balltwo.width &&
        character.y < balltwo.y + balltwo.height &&
        character.y + character.height > balltwo.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitEightteen = () => {
    if (
        character.x + character.width > ballthree.x &&
        character.x < ballthree.x + ballthree.width &&
        character.y < ballthree.y + ballthree.height &&
        character.y + character.height > ballthree.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitNineteen = () => {
    if (
        character.x + character.width > ballfour.x &&
        character.x < ballfour.x + ballfour.width &&
        character.y < ballfour.y + ballfour.height &&
        character.y + character.height > ballfour.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwenty = () => {
    if (
        character.x + character.width > ballfive.x &&
        character.x < ballfive.x + ballfive.width &&
        character.y < ballfive.y + ballfive.height &&
        character.y + character.height > ballfive.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentyone = () => {
    if (
        character.x + character.width > ballsix.x &&
        character.x < ballsix.x + ballsix.width &&
        character.y < ballsix.y + ballsix.height &&
        character.y + character.height > ballsix.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentytwo = () => {
    if (
        character.x + character.width > ballseven.x &&
        character.x < ballseven.x + ballseven.width &&
        character.y < ballseven.y + ballseven.height &&
        character.y + character.height > ballseven.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentythree = () => {
    if (
        character.x + character.width > balleight.x &&
        character.x < balleight.x + balleight.width &&
        character.y < balleight.y + balleight.height &&
        character.y + character.height > balleight.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentyfour = () => {
    if (
        character.x + character.width > ballnine.x &&
        character.x < ballnine.x + ballnine.width &&
        character.y < ballnine.y + ballnine.height &&
        character.y + character.height > ballnine.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentyfive = () => {
    if (
        character.x + character.width > ballten.x &&
        character.x < ballten.x + ballten.width &&
        character.y < ballten.y + ballten.height &&
        character.y + character.height > ballten.y
        ) {
            character.alive = false
            cod = 'If you can dodge an arrow you can dodge a fireball'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentysix = () => {
    if (
        character.x + character.width > knifeone.x &&
        character.x < knifeone.x + knifeone.width &&
        character.y < knifeone.y + knifeone.height &&
        character.y + character.height > knifeone.y
        ) {
            character.alive = false
            cod = 'Watch out for the giant knifes'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirtyfive = () => {
    if (
        character.x + character.width > knifetwo.x &&
        character.x < knifetwo.x + knifetwo.width &&
        character.y < knifetwo.y + knifetwo.height &&
        character.y + character.height > knifetwo.y
        ) {
            character.alive = false
            cod = 'Watch out for the giant knifes'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentyseven = () => {
    if (
        character.x + character.width > knifethree.x &&
        character.x < knifethree.x + knifethree.width &&
        character.y < knifethree.y + knifethree.height &&
        character.y + character.height > knifethree.y
        ) {
            character.alive = false
            cod = 'Watch out for the giant knifes'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentyeight = () => {
    if (
        character.x + character.width > knifefour.x &&
        character.x < knifefour.x + knifefour.width &&
        character.y < knifefour.y + knifefour.height &&
        character.y + character.height > knifefour.y
        ) {
            character.alive = false
            cod = 'Watch out for the giant knifes'
            retry.style.display = 'inline-block'
    }
    }

let detectHitTwentynine = () => {
    if (
        character.x + character.width > knifefive.x &&
        character.x < knifefive.x + knifefive.width &&
        character.y < knifefive.y + knifefive.height &&
        character.y + character.height > knifefive.y
        ) {
            character.alive = false
            cod = 'Watch out for the giant knifes'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirty = () => {
    if (
        character.x + character.width > knifesix.x &&
        character.x < knifesix.x + knifesix.width &&
        character.y < knifesix.y + knifesix.height &&
        character.y + character.height > knifesix.y
        ) {
            character.alive = false
            cod = 'So close... Yet so far'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirtyone = () => {
    if (
        character.x + character.width > knifeseven.x &&
        character.x < knifeseven.x + knifeseven.width &&
        character.y < knifeseven.y + knifeseven.height &&
        character.y + character.height > knifeseven.y
        ) {
            character.alive = false
            cod = 'So close... Yet so far'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirtytwo = () => {
    if (
        character.x + character.width > knifeeight.x &&
        character.x < knifeeight.x + knifeeight.width &&
        character.y < knifeeight.y + knifeeight.height &&
        character.y + character.height > knifeeight.y
        ) {
            character.alive = false
            cod = 'So close... Yet so far'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirtythree = () => {
    if (
        character.x + character.width > knifenine.x &&
        character.x < knifenine.x + knifenine.width &&
        character.y < knifenine.y + knifenine.height &&
        character.y + character.height > knifenine.y
        ) {
            character.alive = false
            cod = 'So close... Yet so far'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirtyfour = () => {
    if (
        character.x + character.width > knifeten.x &&
        character.x < knifeten.x + knifeten.width &&
        character.y < knifeten.y + knifeten.height &&
        character.y + character.height > knifeten.y
        ) {
            character.alive = false
            cod = 'So close... Yet so far'
            retry.style.display = 'inline-block'
    }
    }

let detectHitThirtysix = () => {
    if (
        character.x + character.width > finish.x &&
        character.x < finish.x + finish.width &&
        character.y < finish.y + finish.height &&
        character.y + character.height > finish.y
    ){
        character.alive = false
        cod = `Congradulations! Your time was ${minuteDisplay} minutes and ${secondDisplay} seconds!`
        if (scoreonedisplay > scoretwodisplay){
            document.getElementById('scoreone').innerText=`${minuteDisplay}min. ${secondDisplay}sec.`
        } else if (scoretwodisplay > scorethreedisplay){
            document.getElementById('scoretwo').innerText=`${minuteDisplay}min. ${secondDisplay}sec.`
        } else {
            scoreonedisplay > scorethreedisplay
            document.getElementById('scoreone').innerText=`${minuteDisplay}min. ${secondDisplay}`
        }
        
        retry.style.display = 'inline-block'
    }
}

let movementHandler = e => {
    switch(e.key) {
        case 'w':
            character.y -= 10
            break
        case 'a':
            character.x -= 10
            break
        case 's':
            character.y += 10
            break
        case 'd':
            character.x += 10
            break
        default:
            console.log('key has no purpose')
    }
}

let stop = () => clearInterval(gameInterval)

document.addEventListener('keypress', movementHandler)

let gameInterval 

let timerInterval

// Start button brings up game
startButton.addEventListener('click', e => {
    e.preventDefault()
    startButton.style.display = 'none'
    start.style.display = 'none'
    scoreone.style.display = 'inline-block'
    scoretwo.style.display = 'inline-block'
    scorethree.style.display = 'inline-block'
    score.style.display = 'inline-block'
    gameOn.style.display = 'inline-block'
    gameInterval = setInterval(gameLoop, 60)
    timer.style.display = 'block'
    timerInterval = setInterval(startTimer, 1000)
})

// retry after death

retry.addEventListener('click', e => {
    e.preventDefault()
    character.alive = true
    character.x = 175
    character.y = 700
    document.getElementById('dead').innerText = ''
    retry.style.display = 'none'
    gameInterval = setInterval(gameLoop, 60)
    second.innerText = 0
    minute.innerText = 0
    secondDisplay = 0
    minuteDisplay = 0
    timerInterval = setInterval(startTimer, 1000)
})

function countSeconds(){
    secondDisplay++
    second.innerText = secondDisplay
}

function countMinutes(){
    minuteDisplay++
    minute.innerText = minuteDisplay
}

function startTimer(){
    countSeconds()
    if (secondDisplay >= 60){
        secondDisplay = 0
        second.innerText = secondDisplay
        countMinutes()
        
    }
}



})
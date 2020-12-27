// DOMS
let startButton = document.getElementById('startButton')
let start = document.getElementById('start')
let gameOn = document.getElementById('gameOn')
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

// character movement
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

let ctx = game.getContext('2d')

//replace color with img, delete fillStyle, replace fillRect w drawImage
function Crawler(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function Enemy(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

// characters/obstacles
let character = new Crawler(175, 700, 'green', 20, 20)

let carone = new Enemy(162, 600, 'red', 50, 30)
let cartwo = new Enemy(25, 600, 'red', 50, 30)
let carthree = new Enemy(300, 600, 'red', 50, 30)

let arrowone = new Enemy(25, 500, 'red', 30, 10)
let arrowtwo = new Enemy(100, 500, 'red', 30, 10)
let arrowthree = new Enemy(175, 500, 'red', 30, 10)
let arrowfour = new Enemy(250, 500, 'red', 30, 10)
let arrowfive = new Enemy(325, 500, 'red', 30, 10)

let lavaone = new Enemy(300, 300, 'red', 70, 80)
let lavatwo = new Enemy(200, 300, 'red', 70, 80)
let lavathree = new Enemy(100, 300, 'red', 70, 80)
let lavafour = new Enemy(0, 300, 'red', 70, 80)

let fireone = new Enemy(0, 275, 'red', 130, 10)
let firetwo = new Enemy(178, 265, 'red', 15, 30)
let firethree = new Enemy(240, 275, 'red', 130, 10)

let ballone = new Enemy(340, 200, 'red', 40, 20)
let balltwo = new Enemy(260, 200, 'red', 40, 20)
let ballthree = new Enemy(180, 200, 'red', 40, 20)
let ballfour = new Enemy(100, 200, 'red', 40, 20)
let ballfive = new Enemy(20, 200, 'red', 40, 20)
let ballsix = new Enemy(320, 170, 'red', 40, 20)
let ballseven = new Enemy(240, 170, 'red', 40, 20)
let balleight = new Enemy(160, 170, 'red', 40, 20)
let ballnine = new Enemy(80, 170, 'red', 40, 20)
let ballten = new Enemy(0, 170, 'red', 40, 20)

let knifeone = new Enemy(340, 140, 'red', 40, 20)
let knifetwo = new Enemy(260, 140, 'red', 40, 20)
let knifethree = new Enemy(180, 140, 'red', 40, 20)
let knifefour = new Enemy(100, 140, 'red', 40, 20)
let knifefive = new Enemy(20, 140, 'red', 40, 20)
let knifesix = new Enemy(320, 110, 'red', 40, 20)
let knifeseven = new Enemy(240, 110, 'red', 40, 20)
let knifeeight = new Enemy(160, 110, 'red', 40, 20)
let knifenine = new Enemy(80, 110, 'red', 40, 20)
let knifeten = new Enemy(0, 110, 'red', 40, 20)

let finish = new Crawler(0, 50, 'black', 500, 40)

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
    arrowone.x +=4
    arrowtwo.x +=4
    arrowthree.x +=4
    arrowfour.x +=4
    arrowfive.x +=4
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
    firetwo.x -=2
    firethree.x -=2
    if (fireone.x + fireone.width <= 0){
        fireone.x=385
    }
    if (firetwo.x + firetwo.width <= 0){
        firetwo.x=385
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
    if (ballone.x + ballone.width >= 385){
        ballone.x=0
    }
    if (balltwo.x + balltwo.width >= 385){
        balltwo.x=0
    }
    if (ballthree.x + ballthree.width >= 385){
        ballthree.x=0
    }
    if (ballfour.x + ballfour.width >= 385){
        ballfour.x=0
    }
    if (ballfive.x + ballfive.width >= 385){
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
    if (knifeone.x + knifeone.width >= 385){
        knifeone.x=0
    }
    if (knifetwo.x + knifetwo.width >= 385){
        knifetwo.x=0
    }
    if (knifethree.x + knifethree.width >= 385){
        knifethree.x=0
    }
    if (knifefour.x + knifefour.width >= 385){
        knifefour.x=0
    }
    if (knifefive.x + knifefive.width >= 385){
        knifefive.x=0
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
    lavaone.render()
    lavatwo.render()
    lavathree.render()
    lavafour.render()
    fireone.render()
    firetwo.render()
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
        detectHitFourteen()
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
    }
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
        document.getElementById('dead').innerText = 'You were splattered by car one'
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
            document.getElementById('dead').innerText = 'You were splattered by car two'
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
            document.getElementById('dead').innerText = 'You were splattered by car three'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow one'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
                document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
    }
    }

let detectHitFourteen = () => {
    if (
        character.x + character.width > firetwo.x &&
        character.x < firetwo.x + firetwo.width &&
        character.y < firetwo.y + firetwo.height &&
        character.y + character.height > firetwo.y
        ) {
            character.alive = false
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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
            document.getElementById('dead').innerText = 'You were sniped by arrow two'
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

let gameInterval = setInterval(gameLoop, 60)



// Start button brings up game
startButton.addEventListener('click', e => {
    e.preventDefault()
    startButton.style.display = 'none'
    start.style.display = 'none'
    gameOn.style.display = 'inline-block'
})

// making enemies move

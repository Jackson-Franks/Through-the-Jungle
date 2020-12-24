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

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    character.render()
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
    ballone.render()
    balltwo.render()
    ballthree.render()
    ballfour.render()
    ballfive.render()
    ballsix.render()
    ballseven.render()
    balleight.render()
    ballnine.render()
    ballten.render()
    knifeone.render()
    knifetwo.render()
    knifethree.render()
    knifefour.render()
    knifefive.render()
    knifesix.render()
    knifeseven.render()
    knifeeight.render()
    knifenine.render()
    knifeten.render()
    finish.render()
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

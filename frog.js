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

// characters/obstacles
let character = new Crawler(175, 700, 'green', 20, 20)
let carone = new Crawler(162, 600, 'red', 50, 30)
let cartwo = new Crawler(25, 600, 'red', 50, 30)
let carthree = new Crawler(300, 600, 'red', 50, 30)
let arrowone = new Crawler(25, 500, 'red', 30, 10)
let arrowtwo = new Crawler(100, 500, 'red', 30, 10)
let arrowthree = new Crawler(175, 500, 'red', 30, 10)
let arrowfour = new Crawler(250, 500, 'red', 30, 10)
let arrowfive = new Crawler(325, 500, 'red', 30, 10)
let lavaone = new Crawler(300, 300, 'red', 70, 80)
let lavatwo = new Crawler(200, 300, 'red', 70, 80)
let lavathree = new Crawler(100, 300, 'red', 70, 80)
let lavafour = new Crawler(0, 300, 'red', 70, 80)
let fireone = new Crawler(0, 275, 'red', 130, 10)
let firetwo = new Crawler(178, 265, 'red', 15, 30)
let firethree = new Crawler(240, 275, 'red', 130, 10)
let ballone = new Crawler(350, 200, 'red', 40, 10)
let balltwo = new Crawler(275, 200, 'red', 40, 10)
let ballthree = new Crawler(200, 200, 'red', 40, 10)
let ballfour = new Crawler(125, 200, 'red', 40, 10)
let ballfive = new Crawler(50, 200, 'red', 40, 10)
let ballsix = new Crawler(350, 225, 'red', 40, 10)
let ballseven = new Crawler(350, 225, 'red', 40, 10)
let balleight = new Crawler(350, 225, 'red', 40, 10)
let ballnine = new Crawler(350, 225, 'red', 40, 10)
let ballten = new Crawler(350, 225, 'red', 40, 10)

let gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    character.render()
    carone.render()
    cartwo.render()
    carthree.render()
    arrowone.render()
    arrowtwo.render()
    arrowthree.render()
    arrowfour.render()
    arrowfive.render()
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

let gameInterval = setInterval(gameLoop, 17)



// Start button brings up game
startButton.addEventListener('click', e => {
    e.preventDefault()
    startButton.style.display = 'none'
    start.style.display = 'none'
    gameOn.style.display = 'inline-block'
})
// index.js
let GameBoard = document.querySelector('#gameBoard');
let ctx = GameBoard.getContext('2d');
let Scoretxt = document.querySelector('#scoreTxt');
let Reset = document.querySelector('#resetBtn');
let gameWidth = GameBoard.width;
let gameHeight = GameBoard.height;
let boardBackgroud = 'white';
let snakeColor = 'blue';
let snakeBorder = 'grey';
let foodColor = 'red';
let unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];

window.addEventListener('keydown', changeDirection);
Reset.addEventListener('click', resetGame);

gamestart();

function gamestart() {
    running = true;
    Scoretxt.textContent = score;
    createFood();
    drawFood();
    nextTrick();
}

function nextTrick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTrick();
        }, 100);
    } else { 
        displayGameOver();
    }
}

function clearBoard() {
    ctx.fillStyle = boardBackgroud;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood() {
    function randomFood(min, max) {
        let randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
    let head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };

    snake.unshift(head);

    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        Scoretxt.textContent = score;
        createFood();
    } else {
        snake.pop();
    }
}

function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
}

function changeDirection(event) {
    const keyPressed = event.keyCode;
    let LEFT = 37;
    let UP = 38;
    let RIGHT = 39;
    let DOWN = 40;

    let goingUp = yVelocity === -unitSize;
    let goingDown = yVelocity === unitSize;
    let goingRight = xVelocity === unitSize;
    let goingLeft = xVelocity === -unitSize;

    switch (true) {
        case keyPressed === LEFT && !goingRight:
            xVelocity = -unitSize;
            yVelocity = 0;
            break;

        case keyPressed === UP && !goingDown:
            xVelocity = 0;
            yVelocity = -unitSize;
            break;

        case keyPressed === RIGHT && !goingLeft:
            xVelocity = unitSize;
            yVelocity = 0;
            break;

        case keyPressed === DOWN && !goingUp:
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
}

function checkGameOver() {
    switch (true) {
        case snake[0].x < 0:
            running = false;
            break;

        case snake[0].x >= gameWidth:
            running = false;
            break;

        case snake[0].y < 0:
            running = false;
            break;

        case snake[0].y >= gameWidth:
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            running = false;
        }
    }
}

function displayGameOver() {
    ctx.font = '50px MV Boli';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER!!', gameHeight / 2, gameWidth / 2);
    running = false;
}

function resetGame() {
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ];
    gamestart();
}

const svg = document.getElementById('pong');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const ball = document.getElementById('ball');
const leftScoreText = document.getElementById('leftScore');
const rightScoreText = document.getElementById('rightScore');

const paddleHeight = 100, paddleSpeed = 8, ballRadius = 10;
let leftPaddleY = 150, rightPaddleY = 150;
let ballX = 400, ballY = 200, ballSpeedX = 5, ballSpeedY = 5;
let leftPaddleTarget = null, rightPaddleTarget = null;

// Puntos de los jugadores
let leftScore = 0;
let rightScore = 0;

// Controles
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // Movimiento de la pala derecha
        if (e.key === 'ArrowUp') rightPaddleTarget = "top";
        if (e.key === 'ArrowDown') rightPaddleTarget = "bottom";
    }
    if (e.key === 'w' || e.key === 'W') {
        // Movimiento de la pala izquierda hacia arriba
        leftPaddleTarget = "top";
    }
    if (e.key === 's' || e.key === 'S') {
        // Movimiento de la pala izquierda hacia abajo
        leftPaddleTarget = "bottom";
    }
});

// Movimiento automático de palas
const autoMovePaddle = (paddleY, target) => 
    target === "top" ? Math.max(paddleY - paddleSpeed, 0) : 
    target === "bottom" ? Math.min(paddleY + paddleSpeed, svg.clientHeight - paddleHeight) : paddleY;

// Movimiento de la pelota
const moveBall = () => {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY - ballRadius <= 0 || ballY + ballRadius >= svg.clientHeight) ballSpeedY = -ballSpeedY;

    // Rebote en las palas
    if ((ballX - ballRadius <= 10 && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) ||
        (ballX + ballRadius >= svg.clientWidth - 10 && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight)) {
        ballSpeedX = -ballSpeedX;
    }

    // Reinicio de la pelota y actualización de puntajes
    if (ballX - ballRadius <= 0) {
        rightScore++;
        rightScoreText.textContent = rightScore;
        resetBall();
    } 
    if (ballX + ballRadius >= svg.clientWidth) {
        leftScore++;
        leftScoreText.textContent = leftScore;
        resetBall();
    }

    ball.setAttribute('cx', ballX);
    ball.setAttribute('cy', ballY);
};

// Movimiento de las palas
const movePaddles = () => {
    leftPaddleY = autoMovePaddle(leftPaddleY, leftPaddleTarget);
    rightPaddleY = autoMovePaddle(rightPaddleY, rightPaddleTarget);

    if ((leftPaddleTarget === "top" && leftPaddleY === 0) || (leftPaddleTarget === "bottom" && leftPaddleY === svg.clientHeight - paddleHeight)) {
        leftPaddleTarget = null;
    }
    if ((rightPaddleTarget === "top" && rightPaddleY === 0) || (rightPaddleTarget === "bottom" && rightPaddleY === svg.clientHeight - paddleHeight)) {
        rightPaddleTarget = null;
    }

    leftPaddle.setAttribute('y', leftPaddleY);
    rightPaddle.setAttribute('y', rightPaddleY);
};

// Reinicio de la pelota
const resetBall = () => {
    ballX = svg.clientWidth / 2;
    ballY = svg.clientHeight / 2;
    ballSpeedX = -ballSpeedX;
};

// Bucle del juego
const gameLoop = () => {
    moveBall();
    movePaddles();
    requestAnimationFrame(gameLoop);
};

gameLoop();

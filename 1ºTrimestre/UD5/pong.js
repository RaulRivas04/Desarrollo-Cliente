// Obtener el lienzo y su contexto
const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Definir las palas y la pelota
const paddleWidth = 10, paddleHeight = 100;
const ballRadius = 10;

let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
let leftPaddleSpeed = 0;
let rightPaddleSpeed = 0;

// Control de las palas
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        rightPaddleSpeed = -8;
    } else if (e.key === 'ArrowDown') {
        rightPaddleSpeed = 8;
    }
    if (e.key === 'w') {
        leftPaddleSpeed = -8;
    } else if (e.key === 's') {
        leftPaddleSpeed = 8;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        rightPaddleSpeed = 0;
    }
    if (e.key === 'w' || e.key === 's') {
        leftPaddleSpeed = 0;
    }
});

// Función para dibujar las palas
function drawPaddles() {
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);
}

// Función para dibujar la pelota
function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF';
    ctx.fill();
    ctx.closePath();
}

// Función para mover la pelota
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Rebote en el eje Y
    if (ballY - ballRadius <= 0 || ballY + ballRadius >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    // Rebote en las palas
    if (ballX - ballRadius <= paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX + ballRadius >= canvas.width - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    // Si la pelota pasa una pala, reiniciar
    if (ballX - ballRadius <= 0 || ballX + ballRadius >= canvas.width) {
        resetBall();
    }
}

// Función para mover las palas
function movePaddles() {
    leftPaddleY += leftPaddleSpeed;
    rightPaddleY += rightPaddleSpeed;

    // Evitar que las palas salgan del canvas
    if (leftPaddleY < 0) leftPaddleY = 0;
    if (leftPaddleY + paddleHeight > canvas.height) leftPaddleY = canvas.height - paddleHeight;

    if (rightPaddleY < 0) rightPaddleY = 0;
    if (rightPaddleY + paddleHeight > canvas.height) rightPaddleY = canvas.height - paddleHeight;
}

// Función para reiniciar la pelota al centro
function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
}

// Función de actualización del juego
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddles();
    drawBall();
    moveBall();
    movePaddles();

    requestAnimationFrame(gameLoop);
}

// Iniciar el juego
gameLoop();

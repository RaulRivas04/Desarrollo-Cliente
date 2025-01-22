const svg = document.getElementById('canvas');
const width = svg.clientWidth;
const height = svg.clientHeight;
const balls = [];

// Genera un color aleatorio
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Genera un número aleatorio en un rango
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Crea una bola
function createBall() {
  const radius = random(5, 15);
  const ball = {
    cx: random(radius, width - radius),
    cy: random(radius, height - radius),
    vx: random(-2, 2),
    vy: random(-2, 2),
    radius,
    color: randomColor()
  };

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', ball.radius);
  circle.setAttribute('fill', ball.color);
  svg.appendChild(circle);

  ball.element = circle;
  return ball;
}

// Actualiza las posiciones de las bolas
function updateBalls() {
  balls.forEach(ball => {
    ball.cx += ball.vx;
    ball.cy += ball.vy;

    // Rebota en los bordes
    if (ball.cx - ball.radius <= 0 || ball.cx + ball.radius >= width) {
      ball.vx *= -1;
    }
    if (ball.cy - ball.radius <= 0 || ball.cy + ball.radius >= height) {
      ball.vy *= -1;
    }

    // Actualiza la posición del SVG
    ball.element.setAttribute('cx', ball.cx);
    ball.element.setAttribute('cy', ball.cy);
  });

  requestAnimationFrame(updateBalls);
}

// Genera 100 bolas
for (let i = 0; i < 100; i++) {
  balls.push(createBall());
}

// Inicia la animación
updateBalls();

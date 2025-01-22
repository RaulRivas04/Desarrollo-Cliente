<<<<<<< HEAD
let correctColor;
let lives = 3;
let difficulty = 'hard';
function startGame() {
  lives = 3;
  updateLives();
  document.getElementById("message").textContent = "";
  
  const numOptions = difficulty === 'easy' ? 3 : 6;
  const colorOptionsContainer = document.querySelector(".color-options");
  colorOptionsContainer.innerHTML = "";
  
  correctColor = getRandomColor();
  document.getElementById("rgb-value").textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`;
  
  const correctBoxIndex = Math.floor(Math.random() * numOptions);
  for (let i = 0; i < numOptions; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    const color = i === correctBoxIndex ? correctColor : getRandomColor();
    colorBox.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    colorBox.dataset.rgb = `${color.r},${color.g},${color.b}`;
    colorBox.onclick = () => checkAnswer(colorBox);
    colorOptionsContainer.appendChild(colorBox);
  }
}
function checkAnswer(box) {
  const selectedColor = box.dataset.rgb;
  const correctColorString = `${correctColor.r},${correctColor.g},${correctColor.b}`;
  if (selectedColor === correctColorString) {
    document.getElementById("message").textContent = "Correct! You guessed the right color!";
    document.getElementById("message").style.color = "green";
  } else {
    lives -= 1;
    updateLives();
    document.getElementById("message").textContent = "Incorrect! Try again.";
    document.getElementById("message").style.color = "red";
    if (lives === 0) {
      document.getElementById("message").textContent = "Game Over! You ran out of lives.";
      disableOptions();
    }
  }
}
function updateLives() {
  document.getElementById("lives").textContent = `Lives: ${lives}`;
}
function disableOptions() {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach(box => {
    box.onclick = null;
  });
}
function setDifficulty(level) {
  difficulty = level;
  startGame();
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}
=======
let correctColor;
let lives = 3;
let difficulty = 'hard';
function startGame() {
  lives = 3;
  updateLives();
  document.getElementById("message").textContent = "";
  
  const numOptions = difficulty === 'easy' ? 3 : 6;
  const colorOptionsContainer = document.querySelector(".color-options");
  colorOptionsContainer.innerHTML = "";
  
  correctColor = getRandomColor();
  document.getElementById("rgb-value").textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`;
  
  const correctBoxIndex = Math.floor(Math.random() * numOptions);
  for (let i = 0; i < numOptions; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    const color = i === correctBoxIndex ? correctColor : getRandomColor();
    colorBox.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    colorBox.dataset.rgb = `${color.r},${color.g},${color.b}`;
    colorBox.onclick = () => checkAnswer(colorBox);
    colorOptionsContainer.appendChild(colorBox);
  }
}
function checkAnswer(box) {
  const selectedColor = box.dataset.rgb;
  const correctColorString = `${correctColor.r},${correctColor.g},${correctColor.b}`;
  if (selectedColor === correctColorString) {
    document.getElementById("message").textContent = "Correct! You guessed the right color!";
    document.getElementById("message").style.color = "green";
  } else {
    lives -= 1;
    updateLives();
    document.getElementById("message").textContent = "Incorrect! Try again.";
    document.getElementById("message").style.color = "red";
    if (lives === 0) {
      document.getElementById("message").textContent = "Game Over! You ran out of lives.";
      disableOptions();
    }
  }
}
function updateLives() {
  document.getElementById("lives").textContent = `Lives: ${lives}`;
}
function disableOptions() {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach(box => {
    box.onclick = null;
  });
}
function setDifficulty(level) {
  difficulty = level;
  startGame();
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}
>>>>>>> f860fe923946405627c35a04f43f69d35407bfd2
startGame();
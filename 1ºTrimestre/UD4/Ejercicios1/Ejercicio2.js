const posX = document.getElementById("posX");
const posY = document.getElementById("posY");

document.addEventListener("mousemove", (event) => {
    posX.textContent = event.clientX;
    posY.textContent = event.clientY;
});

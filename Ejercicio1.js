let colorCorrecto;
let vidas = 3;
let dificultad = 'difícil';

function iniciarJuego() {
  vidas = 3;
  actualizarVidas();
  document.getElementById("mensaje").textContent = "";
  
  const numOpciones = dificultad === 'fácil' ? 3 : 6;
  const contenedorOpcionesColor = document.querySelector(".opciones-color");
  contenedorOpcionesColor.innerHTML = "";
  
  colorCorrecto = obtenerColorAleatorio();
  document.getElementById("valor-rgb").textContent = `RGB(${colorCorrecto.r}, ${colorCorrecto.g}, ${colorCorrecto.b})`;
  
  const indiceCajaCorrecta = Math.floor(Math.random() * numOpciones);

  for (let i = 0; i < numOpciones; i++) {
    const cajaColor = document.createElement("div");
    cajaColor.classList.add("caja-color");
    const color = i === indiceCajaCorrecta ? colorCorrecto : obtenerColorAleatorio();
    cajaColor.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    cajaColor.dataset.rgb = `${color.r},${color.g},${color.b}`;
    cajaColor.onclick = () => verificarRespuesta(cajaColor);
    contenedorOpcionesColor.appendChild(cajaColor);
  }
}

function verificarRespuesta(caja) {
  const colorSeleccionado = caja.dataset.rgb;
  const colorCorrectoCadena = `${colorCorrecto.r},${colorCorrecto.g},${colorCorrecto.b}`;

  if (colorSeleccionado === colorCorrectoCadena) {
    document.getElementById("mensaje").textContent = "¡Correcto! ¡Adivinaste el color correcto!";
    document.getElementById("mensaje").style.color = "verde";
  } else {
    vidas -= 1;
    actualizarVidas();
    document.getElementById("mensaje").textContent = "¡Incorrecto! Intenta nuevamente.";
    document.getElementById("mensaje").style.color = "rojo";
    if (vidas === 0) {
      document.getElementById("mensaje").textContent = "¡Juego Terminado! Te quedaste sin vidas.";
      desactivarOpciones();
    }
  }
}

function actualizarVidas() {
  document.getElementById("vidas").textContent = `Vidas: ${vidas}`;
}

function desactivarOpciones() {
  const cajasColor = document.querySelectorAll(".caja-color");
  cajasColor.forEach(caja => {
    caja.onclick = null;
  });
}

function establecerDificultad(nivel) {
  dificultad = nivel;
  iniciarJuego();
}

function obtenerColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

iniciarJuego();

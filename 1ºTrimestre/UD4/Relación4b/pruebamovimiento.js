// Verifica si el dispositivo soporta el evento de orientación
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
      // Obtenemos los valores de orientación del dispositivo
      const alpha = event.alpha; // Rotación alrededor del eje Z
      const beta = event.beta;   // Rotación alrededor del eje X
      const gamma = event.gamma; // Rotación alrededor del eje Y

      // Seleccionamos el cubo
      const cubo = document.getElementById('cubo');

      // Aplicamos las rotaciones al cubo basadas en la orientación
      cubo.style.transform = `rotateY(${alpha}deg) rotateX(${beta}deg) rotateZ(${gamma}deg)`;
  });
} else {
  alert("Este dispositivo no soporta la orientación del dispositivo.");
}

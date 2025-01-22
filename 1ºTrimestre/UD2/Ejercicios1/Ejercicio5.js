let a = parseFloat(document.getElementById('a').value);
let b = parseFloat(document.getElementById('b').value);
let c = parseFloat(document.getElementById('c').value);

let discriminante = b**2 - 4 * a * c;
let resultado = document.getElementById('resultado');

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    resultado.textContent = `Soluciones: x1 = ${x1}, x2 = ${x2}`;
} else if (discriminante === 0) {
    resultado.textContent = `Solución única: x = ${-b / (2 * a)}`;
} else {
    resultado.textContent = 'No hay soluciones reales.';
}

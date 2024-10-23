let nombres = ["Jose, Rosa, Paco"];

function pintanombre()
{
    console.log(n);
}
nombres.forEach(pintanombre);

// Función arrow
nombres.forEach(n=>console.log (n));

//map
let nombresMayusculas = nombres.map(nombre=>nombre.toUpperCase());
console.log(nombresMayusculas);

//Ordenar
let numeros = [10,2,3,543,2,1,34];

console.log(numeros.sort (num1,num2) =>num1-num2);
/*

const btn = document.getElementsByTagName("button");


btn.addEventListener("click", () => console.log("Has clickeado el botón"));
btn.addEventListener("click", () => console.log("Has clickeado el botón nuevo"));

*/

/*
const btn = document.getElementsByTagName("button");


btn[0].addEventListener("click", () => document.body.style.backgroundColor= "red");
btn[1].addEventListener("click", () => document.body.style.backgroundColor= "blue");

*/


/*
const btn = document.getElementsByTagName("button");

function saltaAlert() {
    alert("Has colocado");
}

// Cambia el color de fondo al pasar el mouse sobre el botón
btn[0].addEventListener("mouseover", () => document.body.style.backgroundColor = "red");

// Vuelve al color original cuando se quita el mouse
btn[0].addEventListener("mouseout", () => document.body.style.backgroundColor = "white");

// Muestra la alerta al hacer clic
btn[0].addEventListener("click", saltaAlert);

// Remueve el evento de clic para el primer botón cuando se hace clic en el segundo botón
btn[1].addEventListener("click", () => btn[0].removeEventListener("click", saltaAlert));
*/


const btn = document.getElementsByTagName("button");
const cajaTexto = document.getElementById("TextBox");

function saltaAlert(e) 
{
    console.log(e);
    alert("Has colocado");
}

// Cambia el color de fondo al pasar el mouse sobre el botón
btn[0].addEventListener("mouseover", () => document.body.style.backgroundColor = "red");

// Vuelve al color original cuando se quita el mouse
btn[0].addEventListener("mouseout", () => document.body.style.backgroundColor = "white");

// Muestra la alerta al hacer clic
btn[0].addEventListener("click", saltaAlert);

// Remueve el evento de clic para el primer botón cuando se hace clic en el segundo botón
btn[1].addEventListener("click", () => btn[0].removeEventListener("click", saltaAlert));

cajaTexto.addEventListener("Keydown", () =>console.log("Has escrito en la caja"));
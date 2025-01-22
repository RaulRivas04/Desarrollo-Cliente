// a) Establecer los 10 elementos del array a cero
function establecerCeros(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = 0;
    }
}

// b) Añadir 1 a cada uno de los elementos del array
function añadirUno(array) {
    for (let i = 0; i < 10; i++) {
        array[i] += 1;
    }
}

// c) Mostrar los valores del array separados por espacios
function mostrarArray(array) {
    let resultado = "";
    for (let i = 0; i < 10; i++) {
        resultado += array[i] + " ";
    }
    console.log(resultado);
}

// Crear el array de 10 elementos
let miArray = new Array(10);

// Llamar a las funciones
establecerCeros(miArray);
mostrarArray(miArray); // Muestra el array con ceros

añadirUno(miArray);
mostrarArray(miArray); // Muestra el array después de añadir 1

// Importa las clases desde sus respectivos archivos
const Persona = require('./Persona');
const Car = require('./Car');
const Lambdasian = require('./Lambdasian');
const Instructor = require('./Instructor');
const Student = require('./Student');
const ProjectManager = require('./ProjectManager');

// Crear un nuevo objeto de la clase Persona
let persona1 = new Persona('Ana', 30);
console.log(persona1.toString()); // Ana, 30

// Crear un coche y manejarlo
let coche = new Car('Honda', 20);
coche.fill(5); // Llenar el tanque con 5 galones
console.log(coche.drive(100)); // Intentar manejar 100 millas

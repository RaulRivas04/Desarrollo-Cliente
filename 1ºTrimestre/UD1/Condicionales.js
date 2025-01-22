
        // Ejercicio 1: Determinar si un número es par
        let numero = prompt("Introduce un número:");
        if (numero % 2 === 0) {
            document.write("<h3>Ejercicio 1</h3>");
            document.write("El número " + numero + " es par.<br><br>");
        } else {
            document.write("<h3>Ejercicio 1</h3>");
            document.write("El número " + numero + " es impar.<br><br>");
        }

        // Ejercicio 2: Determinar si el usuario es mayor de edad
        let edad = prompt("Introduce tu edad:");
        if (edad >= 18) {
            document.write("<h3>Ejercicio 2</h3>");
            document.write("Eres mayor de edad.<br><br>");
        } else {
            document.write("<h3>Ejercicio 2</h3>");
            document.write("Eres menor de edad.<br><br>");
        }

        // Ejercicio 3: Mensaje para mayores de 25 años de Madrid
        let localidad = prompt("Introduce tu localidad de nacimiento:");
        if (edad > 25 && localidad.toLowerCase() === "madrid") {
            document.write("<h3>Ejercicio 3</h3>");
            document.write("Enhorabuena, eres mayor de 25 años y naciste en Madrid.<br><br>");
        }

        // Ejercicio 4: Descuento si el número es superior a 100
        let numeroDescuento = prompt("Introduce un número:");
        if (numeroDescuento > 100) {
            let descuento = numeroDescuento * 0.15;
            let nuevoNumero = numeroDescuento - descuento;
            document.write("<h3>Ejercicio 4</h3>");
            document.write("El número original es " + numeroDescuento + ", y después del descuento es " + nuevoNumero + ".<br><br>");
        }

        // Ejercicio 5: Bienvenida según el nombre
        let nombre = prompt("Introduce tu nombre:");
        if (nombre === "Pablo" || nombre === "Eduardo") {
            document.write("<h3>Ejercicio 5</h3>");
            document.write("Bienvenido " + nombre + ".<br><br>");
        } else if (nombre === "Ana" || nombre === "Clara") {
            document.write("<h3>Ejercicio 5</h3>");
            document.write("Bienvenida " + nombre + ".<br><br>");
        }

        // Ejercicio 6: Acceso al carnet de empresarios emprendedores
        let vive = prompt("¿Dónde vives?");
        if (vive.toLowerCase() === "madrid" && edad >= 18 && edad <= 30) {
            document.write("<h3>Ejercicio 6</h3>");
            document.write("Puedes acceder al carnet de empresarios emprendedores.<br><br>");
        }



        // Ejercicio 1: Números del 1 al 10
        document.write("<h3>Ejercicio 1</h3>");
        for (let i = 1; i <= 10; i++) {
            document.write(i + "<br><hr>");
        }

        // Ejercicio 2: Números desde el introducido hasta 100
        let numero = parseInt(prompt("Introduce un número:"));
        document.write("<h3>Ejercicio 2</h3>");
        for (let i = numero; i <= 100; i++) {
            document.write(i + "<br>");
        }

        // Ejercicio 3: Preguntar números hasta que se introduzca 0
        document.write("<h3>Ejercicio 3</h3>");
        let numeroIngresado;
        do {
            numeroIngresado = parseInt(prompt("Introduce un número (0 para salir):"));
            if (numeroIngresado !== 0) {
                document.write(numeroIngresado + "<br>");
            }
        } while (numeroIngresado !== 0);

        // Ejercicio 4: Palabras introducidas hasta "SALIR"
        document.write("<h3>Ejercicio 4</h3>");
        let palabra;
        do {
            palabra = prompt("Introduce una palabra (escribe 'SALIR' para terminar):");
            if (palabra !== "SALIR") {
                document.write(palabra + "<br>");
            }
        } while (palabra !== "SALIR");

        // Ejercicio 5: Suma de 10 números
        document.write("<h3>Ejercicio 5</h3>");
        let suma = 0;
        for (let i = 0; i < 10; i++) {
            let num = parseFloat(prompt("Introduce un número:"));
            suma += num;
        }
        document.write("La suma de los 10 números es: " + suma + "<br>");

        // Ejercicio 6: Tabla de multiplicar
        document.write("<h3>Ejercicio 6</h3>");
        let numTabla = parseInt(prompt("Introduce un número para ver su tabla de multiplicar:"));
        for (let i = 1; i <= 10; i++) {
            document.write(numTabla + " x " + i + " = " + (numTabla * i) + "<br>");
        }

        // Ejercicio 7: Adivinador
        document.write("<h3>Ejercicio 7</h3>");
        let numeroAdivinar = parseInt(prompt("Piensa en un número entre 1 y 100:"));
        let intento;
        do {
            intento = parseInt(prompt("Adivina el número:"));
            if (intento < numeroAdivinar) {
                document.write("El número es mayor.<br>");
            } else if (intento > numeroAdivinar) {
                document.write("El número es menor.<br>");
            } else {
                document.write("¡Correcto! Has adivinado el número.<br>");
            }
        } while (intento !== numeroAdivinar);
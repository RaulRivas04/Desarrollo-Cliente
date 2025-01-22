
        // Ejercicio 1: Nombre y apellidos
        let nombre = prompt("Introduce tu nombre:");
        let apellidos = prompt("Introduce tus apellidos:");
        if (nombre === "Ricardo") {
            document.write("<h3>Ejercicio 1</h3>");
            document.write("Tus apellidos son: " + apellidos + "<br><br>");
        } else {
            document.write("<h3>Ejercicio 1</h3>");
            document.write("Tus apellidos son: " + apellidos + "<br><br>");
        }

        // Ejercicio 2: Jubilación
        let edad = prompt("Introduce tu edad:");
        if (edad >= 67) {
            document.write("<h3>Ejercicio 2</h3>");
            document.write("Puedes jubilarte.<br><br>");
        } else {
            document.write("<h3>Ejercicio 2</h3>");
            document.write("No puedes jubilarte aún.<br><br>");
        }

        // Ejercicio 3: Educación según la edad
        edad = prompt("Introduce tu edad:");
        if (edad < 5) {
            document.write("<h3>Ejercicio 3</h3>");
            document.write("Debes estar en el jardín de infancia.<br><br>");
        } else if (edad >= 6 && edad <= 11) {
            document.write("<h3>Ejercicio 3</h3>");
            document.write("Debes estar en primaria.<br><br>");
        } else if (edad >= 12 && edad <= 16) {
            document.write("<h3>Ejercicio 3</h3>");
            document.write("Debes estar en la ESO.<br><br>");
        } else if (edad >= 17 && edad <= 21) {
            document.write("<h3>Ejercicio 3</h3>");
            document.write("Debes estar en Bachillerato o Ciclos.<br><br>");
        } else {
            document.write("<h3>Ejercicio 3</h3>");
            document.write("Debes estar en la Universidad.<br><br>");
        }

        // Ejercicio 4: Descuento según el número de hermanos
        let hermanos = prompt("¿Cuántos hermanos tienes?");
        let cantidad = prompt("Introduce una cantidad:");
        if (hermanos > 3) {
            let descuento = cantidad * 0.15;
            let total = cantidad - descuento;
            document.write("<h3>Ejercicio 4</h3>");
            document.write("Tienes más de tres hermanos, tu cantidad con descuento es: " + total + ".<br><br>");
        } else if (hermanos < 3) {
            let descuento = cantidad * 0.05;
            let total = cantidad - descuento;
            document.write("<h3>Ejercicio 4</h3>");
            document.write("Tienes menos de tres hermanos, tu cantidad con descuento es: " + total + ".<br><br>");
        } else {
            document.write("<h3>Ejercicio 4</h3>");
            document.write("No tienes hermanos, tu cantidad es: " + cantidad + ".<br><br>");
        }

        // Ejercicio 5: Media de notas
        let notaExamen1 = prompt("Introduce la nota del primer examen:");
        let notaExamen2 = prompt("Introduce la nota del segundo examen:");
        let notaTrabajo1 = prompt("Introduce la nota del primer trabajo:");
        let notaTrabajo2 = prompt("Introduce la nota del segundo trabajo:");
        
        let mediaExamenes = (parseFloat(notaExamen1) + parseFloat(notaExamen2)) / 2;
        let mediaTrabajos = (parseFloat(notaTrabajo1) + parseFloat(notaTrabajo2)) / 2;

        let mediaFinal = (mediaExamenes * 0.75) + (mediaTrabajos * 0.25);

        if (mediaFinal > 5 && mediaExamenes >= 4.5 && mediaTrabajos >= 4.5) {
            document.write("<h3>Ejercicio 5</h3>");
            document.write("Has aprobado la asignatura con una media de: " + mediaFinal + ".<br><br>");
        } else {
            document.write("<h3>Ejercicio 5</h3>");
            document.write("No has aprobado la asignatura. Tu media es: " + mediaFinal + ".<br><br>");
        }

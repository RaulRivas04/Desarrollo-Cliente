
        // Ejercicio 1: Días del mes
        let mes = prompt("Introduce el nombre de un mes:");
        let dias;
        switch (mes.toLowerCase()) {
            case "enero":
            case "marzo":
            case "mayo":
            case "julio":
            case "agosto":
            case "octubre":
            case "diciembre":
                dias = 31;
                break;
            case "abril":
            case "junio":
            case "septiembre":
            case "noviembre":
                dias = 30;
                break;
            case "febrero":
                dias = 28; // No consideramos años bisiestos
                break;
            default:
                dias = "Mes no válido";
        }
        document.write("<h3>Ejercicio 1</h3>");
        document.write("El mes de " + mes + " tiene " + dias + " días.<br><br>");

        // Ejercicio 2: Características del número
        let numero = prompt("Introduce un número:");
        let resultado = "";

        switch (true) {
            case (numero % 2 === 0):
                resultado += "El número " + numero + " es par.<br>";
                break;
            case (numero % 2 !== 0):
                resultado += "El número " + numero + " es impar.<br>";
                break;
        }
        
        switch (true) {
            case (numero % 3 === 0):
                resultado += "El número " + numero + " es múltiplo de 3.<br>";
                break;
            default:
                resultado += "El número " + numero + " no es múltiplo de 3.<br>";
        }

        switch (true) {
            case (numero % 5 === 0):
                resultado += "El número " + numero + " es múltiplo de 5.<br>";
                break;
            default:
                resultado += "El número " + numero + " no es múltiplo de 5.<br>";
        }

        document.write("<h3>Ejercicio 2</h3>");
        document.write(resultado + "<br><br>");

        // Ejercicio 3: Calculadora simple
        let num1 = parseFloat(prompt("Introduce el primer número:"));
        let num2 = parseFloat(prompt("Introduce el segundo número:"));
        let operacion = prompt("Introduce una operación (+, -, *, /):");
        let resultadoCalc;

        switch (operacion) {
            case "+":
                resultadoCalc = num1 + num2;
                break;
            case "-":
                resultadoCalc = num1 - num2;
                break;
            case "*":
                resultadoCalc = num1 * num2;
                break;
            case "/":
                resultadoCalc = (num2 !== 0) ? num1 / num2 : "No se puede dividir entre cero";
                break;
            default:
                resultadoCalc = "Operación no válida";
        }
        document.write("<h3>Ejercicio 3</h3>");
        document.write("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultadoCalc + ".<br><br>");
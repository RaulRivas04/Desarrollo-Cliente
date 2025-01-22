num1=null;
num2 = null;

document.getElementById("contenedor").addEventListener("click", (e)=>{
    console.log("Has dado el "+e.target.innerText)
    document.getElementById("display").value += e.target.innerText;
})

document.getElementById("operaciones").addEventListener("click", (e)=>{
    console.log("Has dado el "+e.target.innerText)

num1 =document.getElementById("display").value;
document.getElementById("display").value = "";

let result;
if (num1 !== null && num2 !== null && operator !== null) {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
    }
    console.log("El resultado es: " + result);

}
})
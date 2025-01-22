let displayValue = "";

// Añadir un número al display
function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

// Añadir un operador al display
function appendOperator(operator) {
  if (displayValue === "") return;
  const lastChar = displayValue[displayValue.length - 1];
  if (isOperator(lastChar)) {
    displayValue = displayValue.slice(0, -1); // Reemplazar el último operador si ya hay uno
  }
  displayValue += operator;
  updateDisplay();
}

// Verificar si un carácter es un operador
function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

// Actualizar el contenido del display
function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

// Limpiar el display
function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

// Calcular el resultado
function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
    setTimeout(clearDisplay, 1000);
  }
}

// Variables para almacenar el estado del juego
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const statusText = document.getElementById('status');

// Combinaciones ganadoras
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]          
];

// Función para comprobar si hay un ganador o un empate
function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; 
        }
    }
    return board.includes('') ? null : 'Empate';
}

// Función para manejar el clic en una celda
function handleClick(event) {
    const cell = event.target;
    const cellIndex = cell.getAttribute('data-index');

    // Solo se permite jugar en celdas vacías
    if (board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        const result = checkWinner();
        if (result) {
            // Muestra el resultado y desactiva el tablero
            statusText.textContent = result === 'Empate' ? '¡Empate!' : `Ganador: ${result}`;
            document.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', handleClick));
        } else {
            // Cambia de jugador
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusText.textContent = `Turno de ${currentPlayer}`;
        }
    }
}

// Función para inicializar el tablero y el estado del juego
function initGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    statusText.textContent = `Turno de ${currentPlayer}`;
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; 

    // Crea las celdas del tablero y les añade el evento de clic
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', handleClick);
        grid.appendChild(cell);
    }
}

initGame();

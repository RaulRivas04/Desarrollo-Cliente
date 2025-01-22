class TresEnRaya {
    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.moves = 0;
        this.gameOver = false;
    }

    drawBoard() {
        // Dibujar el tablero en consola
        console.log("Tablero:");
        this.board.forEach(row => {
            console.log(row.join(' | '));
        });
    }

    makeMove(row, col) {
        if (this.gameOver) {
            console.log("El juego ha terminado.");
            return;
        }

        // Verifica si la casilla está vacía
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            this.moves++;
            this.drawBoard();
            if (this.checkWinner()) {
                console.log("¡El jugador " + this.currentPlayer + " ha ganado!");
                this.gameOver = true;
            } else if (this.moves === 9) {
                console.log("¡Es un empate!");
                this.gameOver = true;
            } else {
                // Cambiar el turno al otro jugador
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            }
        } else {
            console.log("Movimiento no válido, elige otra casilla.");
        }
    }

    checkWinner() {
        const winningCombinations = [
            // Filas
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Columnas
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonales
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        // Verificar si alguna combinación ganadora ha sido completada
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a[0]][a[1]] !== '' &&
                this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
                this.board[a[0]][a[1]] === this.board[c[0]][c[1]]) {
                return true;
            }
        }
        return false;
    }

    play() {
        this.drawBoard();
        console.log("Jugador actual: " + this.currentPlayer);
    }
}

// Ejemplo de uso
let juego = new TresEnRaya();
juego.play();              // Muestra el tablero inicial
juego.makeMove(0, 0);      // El jugador X marca (0,0)
juego.makeMove(1, 1);      // El jugador O marca (1,1)
juego.makeMove(0, 1);      // El jugador X marca (0,1)
juego.makeMove(2, 1);      // El jugador O marca (2,1)
juego.makeMove(0, 2);      // El jugador X marca (0,2) y gana

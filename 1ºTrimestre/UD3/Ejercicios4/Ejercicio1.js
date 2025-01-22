class Puzzle {
    constructor(dimension) {
        this.dimension = dimension;
        this.board = this.generateBoard();
        this.emptyTile = { row: dimension - 1, col: dimension - 1 }; // El hueco está inicialmente en la última posición
        this.moves = 0;
        this.startTime = Date.now();
    }

    generateBoard() {
        // Crear el tablero con números del 1 al dimension*dimension - 1 y un espacio vacío
        let numbers = Array.from({ length: this.dimension * this.dimension - 1 }, (_, i) => i + 1);
        numbers.push(' '); // El hueco vacío

        // Mezclar el tablero aleatoriamente
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        // Convertir el array en una matriz bidimensional
        let board = [];
        while (numbers.length) board.push(numbers.splice(0, this.dimension));
        return board;
    }

    drawBoard() {
        // Dibujar el tablero en consola
        console.log("Tablero:");
        this.board.forEach(row => {
            console.log(row.join(' | '));
        });
    }

    moveTile(direction) {
        const { row, col } = this.emptyTile;
        let newRow = row;
        let newCol = col;

        // Definir el nuevo lugar basado en la dirección
        if (direction === 'up' && row > 0) newRow--;
        if (direction === 'down' && row < this.dimension - 1) newRow++;
        if (direction === 'left' && col > 0) newCol--;
        if (direction === 'right' && col < this.dimension - 1) newCol++;

        // Si el movimiento es válido, intercambia las posiciones
        if (newRow !== row || newCol !== col) {
            [this.board[row][col], this.board[newRow][newCol]] = [this.board[newRow][newCol], this.board[row][col]];
            this.emptyTile = { row: newRow, col: newCol };
            this.moves++;
            this.drawBoard();
        } else {
            console.log("Movimiento no válido.");
        }
    }

    checkSolved() {
        // Verifica si el puzzle está en su estado resuelto
        let solved = true;
        let expected = 1;
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                if (i === this.dimension - 1 && j === this.dimension - 1) {
                    if (this.board[i][j] !== ' ') solved = false;
                } else if (this.board[i][j] !== expected++) {
                    solved = false;
                }
            }
        }
        return solved;
    }

    getElapsedTime() {
        // Calcular el tiempo transcurrido en segundos
        return Math.floor((Date.now() - this.startTime) / 1000);
    }

    play() {
        this.drawBoard();
        console.log("Movimientos: " + this.moves);
        console.log("Tiempo: " + this.getElapsedTime() + " segundos");
    }
}

// Ejemplo de uso
let puzzle = new Puzzle(3);  // Crea un puzzle de 3x3
puzzle.play();               // Muestra el tablero inicial
puzzle.moveTile('up');       // Mueve el hueco hacia arriba
puzzle.moveTile('left');     // Mueve el hueco hacia la izquierda
console.log("¿Resuelto?", puzzle.checkSolved());  // Verifica si está resuelto

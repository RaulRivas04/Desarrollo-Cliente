<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablero de Ajedrez</title>
    <style>
        table, td {
            border: 2px solid blue;
            border-collapse: collapse;
        }
        td {
            width: 50px;
            height: 50px;
            padding: 0;
            margin: 0;
        }
        td.blanca {
            background-color: white;
        }
        td.gris {
            background-color: #EEEEEE;
        }
        img {
            width: 100%;
            height: 100%;
            margin: 0;
        }
    </style>
</head>
<body>
    <h1>Tablero de Ajedrez</h1>

    <?php
    function dibujarTablero() {
        $tablero = '<table>';
        
        // Piezas Negras
        $piezasNegras = array("torre_negra", "caballo_negro", "alfil_negro", "reina_negra", "rey_negro", "alfil_negro", "caballo_negro", "torre_negra");
        $peonesNegros = array_fill(0, 8, "peon_negro");
        
        // Piezas Blancas
        $piezasBlancas = array("torre_blanca", "caballo_blanco", "alfil_blanco", "rey_blanco", "reina_blanca", "alfil_blanco", "caballo_blanco", "torre_blanca");
        $peonesBlancos = array_fill(0, 8, "peon_blanco");
        
        // Dibujar la primera fila (piezas negras)
        $tablero .= dibujarFila($piezasNegras, 1);
        // Dibujar la segunda fila (peones negros)
        $tablero .= dibujarFila($peonesNegros, 2);
        
        // Dibujar las filas vacías (sin piezas)
        for ($i = 3; $i <= 6; $i++) {
            $tablero .= dibujarFila(array_fill(0, 8, ""), $i);
        }
        
        // Dibujar la séptima fila (peones blancos)
        $tablero .= dibujarFila($peonesBlancos, 7);
        // Dibujar la octava fila (piezas blancas)
        $tablero .= dibujarFila($piezasBlancas, 8);
        
        $tablero .= '</table>';
        return $tablero;
    }

    function dibujarFila($piezas, $fila) {
        $filaHTML = '<tr>';
        for ($columna = 1; $columna <= 8; $columna++) {
            $claseColor = (($fila + $columna) % 2 == 0) ? 'gris' : 'blanca'; // Alternar casillas
            $filaHTML .= '<td class="' . $claseColor . '">';
            if (!empty($piezas[$columna - 1])) {
                // Cargar la imagen de la pieza
                $filaHTML .= '<img src="img/' . $piezas[$columna - 1] . '.png" alt="' . $piezas[$columna - 1] . '"/>';
            }
            $filaHTML .= '</td>';
        }
        $filaHTML .= '</tr>';
        return $filaHTML;
    }

    // Llamar a la función para dibujar el tablero
    echo dibujarTablero();
    ?>

</body>
</html>

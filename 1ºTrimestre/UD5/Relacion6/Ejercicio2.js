// Biblioteca de Google Charts
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

let chart;
let options;
let currentData;

function drawChart() {
    // Datos iniciales
    currentData = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PSOE', 122],
        ['PP', 136],
        ['VOX', 33],
        ['SUMAR', 31],
        ['ERC', 7],
        ['EH Bildu', 6],
        ['Otros', 15]
    ]);

    // Opciones del gráfico
    options = {
        title: 'Representación en el Congreso de los Diputados',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Número de escaños',
            minValue: 0
        },
        vAxis: {
            title: 'Partido'
        },
        animation: {
            duration: 1000,
            easing: 'out'
        }
    };

    // Crear y dibujar el gráfico de barras
    chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
    chart.draw(currentData, options);

    // Cambiar los datos después de 10 segundos
    setTimeout(updateChartData, 10000);
}

function updateChartData() {
    // Nuevos datos
    const newData = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PSOE', 120],
        ['PP', 140],
        ['VOX', 30],
        ['SUMAR', 35],
        ['ERC', 10],
        ['EH Bildu', 5],
        ['Otros', 20]
    ]);

    // Dibujar el gráfico con los nuevos datos y animación
    chart.draw(newData, options);
}

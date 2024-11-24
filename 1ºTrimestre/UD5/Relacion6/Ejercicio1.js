google.charts.load('current', {'packages': ['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // a) Representación en el Congreso de los Diputados
    const congressoData = google.visualization.arrayToDataTable([
        ['Partido', 'Escaños'],
        ['PP', 136],
        ['PSOE', 122],
        ['SUMAR', 31],
        ['VOX', 33],
        ['ERC', 7],
        ['EH Bildu', 6],
        ['Otros', 15]
    ]);

    // Gráfico de barras
    const barOptions = {
        title: 'Representación en el Congreso de los Diputados',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Número de escaños',
            minValue: 0
        },
        vAxis: {
            title: 'Partido'
        }
    };
    const barChart = new google.visualization.BarChart(document.getElementById('bar_chart'));
    barChart.draw(congressoData, barOptions);

    // Gráfico de sectores (PieChart)
    const pieOptions = {
        title: 'Distribución de escaños en el Congreso',
        is3D: true
    };
    const pieChart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    pieChart.draw(congressoData, pieOptions);

    google.charts.load('current', {'packages': ['geochart']});
    google.charts.setOnLoadCallback(drawGeoChart);
    
    function drawGeoChart() {
        const tourismData = google.visualization.arrayToDataTable([
            ['Country', 'Visitantes (millones)'],
            ['France', 59.7],
            ['Spain', 72.9],
            ['United States', 135.2],
            ['China', 65.7],
            ['Italy', 64.5],
            ['Turkey', 51.2],
            ['Mexico', 45.0],
            ['Thailand', 39.8],
            ['Germany', 38.9],
            ['United Kingdom', 68.2]
        ]);
    
        const geoOptions = {
            title: 'Ranking de países más turísticos',
            colorAxis: {colors: ['#e7f0fa', '#08306b']},
            backgroundColor: '#f9f9f9',
            datalessRegionColor: '#cccccc'
        };
    
        const geoChart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
        geoChart.draw(tourismData, geoOptions);
    }    
}
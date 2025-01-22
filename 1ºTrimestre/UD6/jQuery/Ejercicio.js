// Ejercicio 1, 2, 3, 4
$('#btnHide').click(function() {
    $('*').hide(); // Oculta todo (ejercicio 1)
    $(this).hide(); // Oculta el botón (ejercicio 2)
    $('.intro').hide(); // Oculta clase intro (ejercicio 3)
    $('p.intro').hide(); // Oculta solo párrafos con clase intro (ejercicio 4)
});

// Ejercicio 5 y 6
$('#lista1 li:first').hide(); // Oculta primer elemento de la primera lista
$('#lista1 li:first, #lista2 li:first').hide(); // Oculta primeros elementos de ambas listas

// Ejercicio 7
$(document).ready(function() {
    alert('El DOM ha cargado');
});
$('#btnHeaderAlert').click(function() {
    alert($('h1').text());
});
$('#btnBodyAlert').click(function() {
    alert($('body').html());
});
$('#paragraph1').click(function() {
    alert('Click en párrafo 1');
});
$('#paragraph2').click(function() {
    $(this).hide();
});
$('#dynamicList li').each(function() {
    $(this).prepend('# ');
});
$('#dynamicList li').click(function() {
    $(this).hide();
});
$('.link').text('Texto modificado para enlace');
$('#table1 tr').click(function() {
    $(this).css('background-color', 'lightgray');
});
$('#table2 tr').click(function() {
    $(this).hide();
});

// Ejercicio 8
$('.news-title').click(function() {
    $(this).next('.news').toggle();
});
$('.news').hover(
    function() { $(this).css('background-color', 'lightblue'); },
    function() { $(this).css('background-color', ''); }
);
$('.news').css('font-size', function(index) {
    return (14 + index * 2) + 'px';
});

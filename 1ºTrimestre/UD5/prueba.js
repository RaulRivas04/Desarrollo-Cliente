window.onload = () => {
    var pelota = document.getElementById("pelota");
    var posicionX = 50;
    var posicionY = 50;
    var limiteX = 1000;
    var limiteY = 1000;
    var radio = 40;
    var velocidadX = 5;
    var velocidadY = 5;


    setInterval(() => {
        posicionX += velocidad;

        if (posicionX + radio >= limiteX || posicionX - radio <= 0) {
            velocidad *= -1;
        }

        pelota.setAttribute("cx", posicionX);
    }, 30);
};

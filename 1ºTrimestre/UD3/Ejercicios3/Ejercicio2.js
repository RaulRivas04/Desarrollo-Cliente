class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0; // El tanque comienza vacío
        this.odometer = 0; // El odómetro comienza en 0
    }

    fill(gallons) {
        // Sumar galones al tanque
        this.tank += gallons;
    }

    drive(distance) {
        // Cuántas millas puede recorrer con el combustible actual
        const maxDistance = this.tank * this.milesPerGallon;

        if (distance <= maxDistance) {
            // Si tiene suficiente combustible para la distancia
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
        } else {
            // Si no tiene suficiente combustible
            this.odometer += maxDistance;
            this.tank = 0;
            return '¡Me quedé sin combustible a ' + this.odometer + ' millas!';
        }
    }
}

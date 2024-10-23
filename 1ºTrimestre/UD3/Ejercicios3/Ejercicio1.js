class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(someFood) {
        // Si el estómago tiene menos de 10 elementos, añade comida
        if (this.stomach.length < 10) {
            this.stomach.push(someFood);
        }
    }

    poop() {
        // Vacía el estómago cuando hace caca
        this.stomach = [];
    }

    toString() {
        // Retorna el nombre y la edad
        return this.name + ', ' + this.age;
    }
}

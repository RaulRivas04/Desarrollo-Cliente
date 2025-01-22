class Lambdasian {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }

    speak() {
        // Retorna un mensaje que incluye el nombre y la ubicación
        return 'Hello my name is ' + this.name + ', I am from ' + this.location + '.';
    }
}

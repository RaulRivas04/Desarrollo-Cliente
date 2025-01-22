class Student extends Lambdasian {
    constructor(data) {
        // Llama al constructor de Lambdasian
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
        this.grade = data.grade || Math.floor(Math.random() * 100); // Asigna una calificación aleatoria
    }

    listSubjects() {
        // Retorna las materias favoritas como un mensaje
        return 'Loving ' + this.favSubjects.join(', ') + '!';
    }

    PRAssignment(subject) {
        // Retorna un mensaje que indica que el estudiante entregó un PR
        return this.name + ' has submitted a PR for ' + subject + '.';
    }

    sprintChallenge(subject) {
        // Retorna un mensaje que indica que el estudiante comenzó un sprint challenge
        return this.name + ' has begun sprint challenge on ' + subject + '.';
    }

    graduate() {
        // Verifica si la calificación es suficiente para graduarse
        if (this.grade > 70) {
            return this.name + ' is ready to graduate!';
        } else {
            return this.name + ' needs to improve their grade to graduate.';
        }
    }
}

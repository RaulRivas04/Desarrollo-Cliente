class Instructor extends Lambdasian {
    constructor(data) {
        // Llama al constructor de Lambdasian
        super(data);
        this.specialty = data.specialty;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;
    }

    demo(subject) {
        // Muestra lo que están aprendiendo
        return 'Hoy estamos aprendiendo sobre ' + subject + '.';
    }

    grade(student, subject) {
        // Retorna el nombre del estudiante y la materia en la que recibió una puntuación
        return student.name + ' recibe una puntuación perfecta en ' + subject + '.';
    }

    adjustGrade(student) {
        // Cambia la nota del estudiante de forma aleatoria
        const randomChange = Math.floor(Math.random() * 20) - 10;
        student.grade += randomChange;

        // Asegurarse de que la calificación esté entre 0 y 100
        if (student.grade > 100) {
            student.grade = 100;
        }
        if (student.grade < 0) {
            student.grade = 0;
        }
    }
}

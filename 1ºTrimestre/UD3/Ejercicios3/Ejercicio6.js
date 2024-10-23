class ProjectManager extends Instructor {
    constructor(data) {
        // Llama al constructor de Instructor
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }

    standUp(channel) {
        // Retorna un mensaje anunciando stand up
        return this.name + ' announces to ' + channel + ', @channel standy times!';
    }

    debugsCode(student, subject) {
        // Retorna un mensaje indicando que el ProjectManager ayudó a depurar el código
        return this.name + ' debugs ' + student.name + "'s code on " + subject + '.';
    }
}

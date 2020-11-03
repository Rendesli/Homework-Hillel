window.onload = init;

function init() {
    let teacher = new Teacher({
        name: 'Vanya',
        surname: 'Shelbi',
        age: 34,
        group: []
    });

    let getStudent = document.querySelector('#getStudent');
    let AddStudent = document.querySelector('#AddStudent');
    let listStudents = document.querySelector('.listStudents');
    //console.log(getStudent, AddStudent);

    
    getStudent.onclick = function () {
        let formStudents = document.getElementById('formStudents');
        let childForms = formStudents.children;
     
console.log(childForms);
let name =formStudents.name.value,
surname=formStudents.surname.value,
age = formStudents.age.value,
marks =formStudents.marks.value.split(',').map(Number);

teacher.group.push(new Student({name,surname,age,marks}));

    console.log(teacher.group);
    console.log(teacher);
}
AddStudent.onclick = function () {
    teacher.group.sort( (student1, student2) => student2.averageMark() - student1.averageMark());

    let newStudent = teacher.group.map( (item) => '<li>' + item.name + ' ' + item.surname + 
    ' - ' + item.averageMark() + '</li>').join("");

    listStudents.innerHTML = newStudent;
}
}


class Human {
    constructor(config) {
        this.name = config.name;
        this.surname = config.surname;
        this.age = config.age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    setFullName(fullName) {
        fullName = fullName.split(" ");
        this.name = fullName[0];
        this.surname = fullName[1];
    }
};
class Teacher extends Human {
    constructor({
        name,
        surname,
        age,
        group
    }) {
        super({
            name,
            surname,
            age
        });
        this.group = group;
    }
    getListOfNamesByAverageMark() {
        return this.group.sort((student1, student2) => student2.averageMark() - student1.averageMark()).map((student) => student.name);
    }
    getStudentByName(name) {
        return this.group.find((item) => item.name === name);
    }
    removeStudentByName(name) {
        let templet = this.getStudentByName(name);
        return this.group.splice(this.group.indexOf(templet), 1);
    }
    updateStudentByName(student, name) {
        this.group.splice(this.group.indexOf(this.getStudentByName(name)), 1, new Student(student))
    }
};

class Student extends Human {
    constructor({
        name,
        surname,
        age,
        marks
    }) {
        super({
            name,
            surname,
            age
        });
        this.marks = marks;
    }
    averageMark() {
        return this.marks.reduce((acc, curr) => acc + curr) / this.marks.length;
    }
    minMark() {
        return this.marks.sort((a, b) => b - a)[this.marks.length - 1];
    }
    maxMark() {
        return this.marks.sort((a, b) => a - b)[this.marks.length - 1];
    }
    getFullName() {
        return `${this.name} ${this.surname} - student`;
    }
};

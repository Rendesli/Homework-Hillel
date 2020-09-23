function Human(config) {
    this.name = config.name;
    this.surname = config.surname;
    this.age = config.age;
}



let student1 = {
    name: 'Vova',
    surname: 'Lebedev',
    age: 17,
    marks: [7, 9, 10, 6, 4]
};
let student2 = {
    name: 'Katya',
    surname: 'Golden',
    age: 16,
    marks: [7, 4, 2, 9, 8]
};
let student3 = {
    name: 'Vanya',
    surname: 'Kalin',
    age: 18,
    marks: [4, 5, 7, 1, 9]
};
let student4 = {
    name: 'Sasha',
    surname: 'Shelbi',
    age: 19,
    marks: [3, 7, 8, 2, 4]
};
let student5 = {
    name: 'Masha',
    surname: 'Holms',
    age: 21,
    marks: [9, 6, 2, 10, 4]
};

let group = [
    new Student(student1), new Student(student2), new Student(student3), new Student(student4), new Student(student5)
];

function Teacher(config) {
    Human.call(this, config);
    this.group = config.group;

}

function Student(config) {
    Human.call(this, config);
    this.marks = config.marks;
};

Human.prototype = {
    setFullName(fullName) {
        fullName = fullName.split(' ');
        this.name = fullName[0];
        this.surname = fullName[1];
    },
    getFullName() {
        return `${this.name} ${this.surname}`;
    },
};
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype = Object.assign(Teacher.prototype, {
    getListOfNamesByAverageMark() {
        return this.group.sort((accum, cuurVal) => cuurVal.averageMark() - accum.averageMark()).map((cuurVal) => cuurVal.name);
    },
    getStudentByName(name) {
        return this.group.find((cuurVal) => cuurVal.name === name);
    },
    removeStudentByName(name) {
        this.group.splice(this.group.indexOf(this.getStudentByName(name)), 1);
    },
    updateStudentByName(student, name) {
        this.group.splice(this.group.indexOf(this.getStudentByName(name)), 1, new Student(student));
    },
});

Student.prototype = Object.assign(Student.prototype, {
    averageMark() {
        return Math.round(this.marks.reduce((accum, cuurVal) => accum += cuurVal, 0) / this.marks.length);
    },
    minMark() {
        return this.marks.sort((accum, cuurVal) => cuurVal - accum)[marks.length - 1];
    },
    maxMark() {
        return this.marks.sort((accum, cuurVal) => accum - cuurVal)[marks.length - 1];
    },
    getFullName() {
        return Human.prototype.getFullName.call(this) + ' - student';
    }
});

let student = new Student(student1, student2, student3, student4, student5);
let teacher = new Teacher({
    name: 'David',
    surname: 'Ferdison',
    age: 34,
    group
});
let human = new Human({
    name: "Sasha",
    surname: "Golden",
    age: 25
});
//console.log(human);
//console.log(teacher);
//console.log(student);

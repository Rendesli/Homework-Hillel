//--------human---
function Human(config) {
    this.name = config.name;
    this.surname = config.surname;
    this.age = config.age;
}

//-------students-----
function Student(config) {
    Human.call(this, config);
    this.marks = config.marks;
};

//----teacher----
function Teacher(config) {
    Human.call(this, config);
    this.group = [new Student({
            name: 'Sasha',
            surname: 'Lebedev',
            age: 16,
            marks: [3, 8, 10, 4, 6],
        }),
        new Student({
            name: 'Masha',
            surname: 'Golden',
            age: 17,
            marks: [7, 7, 9, 10, 2],
        }),
        new Student({
            name: 'Vanya',
            surname: 'Kalin',
            age: 18,
            marks: [10, 3, 7, 5, 8],
        }),
        new Student({
            name: 'Katya',
            surname: 'Shelbi',
            age: 18,
            marks: [4, 5, 9, 10, 3],
        }),
        new Student({
            name: 'Vova',
            surname: 'Holms',
            age: 19,
            marks: [9, 7, 8, 3, 5],
        }),
    ];
};
//-----наследование прототипа-----
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Teacher.prototype = Object.create(Human.prototype); //создаёт новый объект с указанным прототипом и свойствами.
Teacher.prototype.constructor = Teacher;

Human.prototype = {
    setFullName() {
        return Object.assign(this.getFullName().split(" "));
    },
    getFullName() {
        return `${this.name} ${this.surname}`;
    },

};
//----------
Teacher.prototype = Object.assign(Teacher.prototype, {
    getListOfNamesByAverageMark() {
        return this.group.sort((a, b) => b.averageMark() - a.averageMark()).reduce(function (accum, cuurVal) {
            accum += cuurVal.name + ' ';
            return accum;
        }, '').split(' ', this.group.length);
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
        return this.marks.reduce((a, b) => a += b, 0) / this.marks.length;
    },
    minMark() {
        return this.marks.sort((accum, cuurVal) => accum < cuurVal ? accum : cuurVal);
    },
    maxMark() {
        return this.marks.sort((accum, cuurVal) => accum > cuurVal ? accum : cuurVal);
    },
    getFullName() {
        return Human.prototype.getFullName().call(this) + ' - student';
    }

});

//--------human-footer----
let s = new Human({
    name: "Sasha",
    surname: "Golden",
    age: 25
});

//------teacher-footer----
let teacher = new Teacher({
    name: 'Diana',
    surname: 'Fox',
    age: 34,
});
//-----student-----
let student = new Student({
    name: 'Pasha',
    surname: 'Stark',
    age: 19,
    marks: [10, 1, 9, 5, 6]
});


//_________CONSOLE___________
console.log(teacher.getListOfNamesByAverageMark());
console.log(teacher.group);
console.log(student);
console.log(s);
console.log(s.getFullName());
console.log(s.setFullName());

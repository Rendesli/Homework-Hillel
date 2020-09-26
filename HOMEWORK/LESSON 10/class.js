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
    constructor(config) {
        super(config);
        this.group = config.group;
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
    constructor(config) {
        super(config);
        this.marks = config.marks;
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

let group = [
    new Student({
        name: 'Vova',
        surname: 'Lebedev',
        age: 17,
        marks: [7, 9, 10, 6, 4]
    }),
    new Student({
        name: 'Katya',
        surname: 'Golden',
        age: 16,
        marks: [7, 4, 2, 9, 8]
    }),
    new Student({
        name: 'Vanya',
        surname: 'Kalin',
        age: 18,
        marks: [4, 5, 7, 1, 9]
    }),
    new Student({
        name: 'Sasha',
        surname: 'Shelbi',
        age: 19,
        marks: [3, 7, 8, 2, 4]
    }),
    new Student({
        name: 'Masha',
        surname: 'Holms',
        age: 21,
        marks: [9, 6, 2, 10, 4]
    })
];

let student = new Student({
    name: "Frenk",
    surname: "Medison",
    age: 22,
    marks: [9, 8, 6, 3, 5]
});

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
console.log(teacher.getListOfNamesByAverageMark());

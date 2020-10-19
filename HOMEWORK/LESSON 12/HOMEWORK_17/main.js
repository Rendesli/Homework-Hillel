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
    let errorSpan = document.createElement('span');
    errorSpan.classList.add('message');

    getStudent.onclick = function () {
        let formStudents = document.getElementById('formStudents');
        let elementsForms = formStudents.elements;

        if (!validateForm(elementsForms)) {
            errorSpan.classList.add('error');
            errorSpan.textContent = 'Заполните все поля!';
            formStudents.append(errorSpan);
            return false;
        } else {

            errorSpan.classList.remove('error');
        }

        if (!validateMarks(elementsForms)) {
            errorSpan.classList.add('error');
            errorSpan.textContent = 'Введите число от 1 до 10';
            formStudents.append(errorSpan);
            return false;
        } else {

            errorSpan.classList.remove('error');
        }

        let name = elementsForms.name.value,
            surname = elementsForms.surname.value,
            age = elementsForms.age.value;
        marks1 = elementsForms.marks1.value;
        marks2 = elementsForms.marks2.value,
            marks3 = elementsForms.marks3.value,
            marks4 = elementsForms.marks4.value,
            marks5 = elementsForms.marks5.value;
        marks = [marks1, marks2, marks3, marks4, marks5].map(Number);



        teacher.group.push(new Student({
            name,
            surname,
            age,
            marks
        }));

    }
    AddStudent.onclick = function () {
        teacher.group.sort((student1, student2) => student2.averageMark() - student1.averageMark());
        let newStudent = teacher.group.map((item) => '<li>' + item.name + ' ' + item.surname +
            ' - ' + item.averageMark() + '</li>').join("");

        listStudents.innerHTML = newStudent;
    };

    function validateForm(elements) {
        let valid = true;
        for (const elem of elements) {
            if (!elem.value.length) {
                console.log('valid');
                valid = false;
                elem.classList.add('error');
                elem.classList.remove('success');
            } else {
                elem.classList.add('success');
                elem.classList.remove('error');
            }

        }
        return valid;
    }

    function validateMarks(elements) {
        let valid = true;
        let validTypes = 'number';
        for (const elem of elements) {
            if (validTypes.includes(elem.type)) {
                if (elem.value > 10) {
                    valid = false;
                    elem.classList.add('error');
                    elem.classList.remove('success');
                } else {
                    elem.classList.add('success');
                    elem.classList.remove('error');
                }
            }
        }
        return valid;
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

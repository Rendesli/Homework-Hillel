 function Students(student, marks) {
  this.student = student;
  this.marks = marks;
}

Students.prototype.averageMark = function () {
  return this.marks.reduce((a, b) => a += b, 0) / this.marks.length;
}

Students.prototype.minMark = function () {
  return this.marks.reduce((accum, cuurVal) => accum < cuurVal ? accum : cuurVal);
}

Students.prototype.maxMark = function () {
  return this.marks.reduce((accum, cuurVal) => accum > cuurVal ? accum : cuurVal);
} 

 let s = new Students('Student 1', [10, 9, 8, 1, 10]);


console.log(s.averageMark());
console.log(s.minMark());
console.log(s.maxMark());

//-----------------------------------------2 задание-------------------


 function addStudents() {
   massiveStudents = [];
   let names = ['Tolya', 'Anton', 'Artem', 'Boris', 'Vadim'];

   for (let i = 0; i < 5; i++) {
     massiveStudents[i] = new Students(names[i], function () {
       marks = [];

       for (let i = 0; i < 4; i++) {
         marks[i] = Math.floor(1 + Math.floor(Math.random() * 10));
       }

       return marks;
     }());
   }

   return massiveStudents;
 }

 function findMaxMark(massiveStudents) {
   return massiveStudents.reduce((accum, cuurVal) =>
     accum.maxMark.apply(accum) > cuurVal.maxMark.apply(cuurVal) ? accum : cuurVal);
 }

 let stud = addStudents();

 console.log(stud);

 console.log(findMaxMark(stud));

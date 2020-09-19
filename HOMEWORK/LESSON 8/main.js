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


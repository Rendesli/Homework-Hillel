//----без использования метода мар
let str = 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь.';


let strarr = str.split(" ");


var arrLength = [];
for (var i = 0; i < strarr.length; i++) {
    arrLength[i] = strarr[i].length;
}
console.log(arrLength);

//----С использованием метода мар----

let str = 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь.';*/

let strarr = str.split(" ");

var arrLength = strarr.map(function (item) {
    return item.length;
});
console.log(arrLength);

let str = 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь.';
let strarr = str.split(" ");

function myMapCallback(arr, cb) {
    let arrLength = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        arrLength[i] = cb(item, i, arr);
    }
    return arrLength;
}

console.log(myMapCallback(strarr,( item=>{ return item.toUpperCase()})));
console.log(strarr.map((item)=> item.toUpperCase()));

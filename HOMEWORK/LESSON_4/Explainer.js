let massive = [10, 'Hello world', null, true, '', false, 255];


let mainExplainer = doExplanation(massive);
console.log(mainExplainer);

function deletedNegativeElements(array) {
    let item;
    let arr = [];
    let deleted;
    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (!item) {
            deleted = array.splice(i--, 1)[0];
            arr.push(deleted);
        }

    }

    return array;
}

function checkTypeBoolean(array, i) {
    if (typeof (array[i]) === 'boolean') {
        array[i] = new Boolean(array[i]);
        return array[i];
    }
    return array[i];
}

function checkTypeString(array, i) {
    if (typeof (array[i]) === 'string') {
        array[i] = new String(array[i]);
        return array[i];
    }
    return array[i];
}

function checkTypeNumber(array, i) {
    if (typeof (array[i]) === 'number') {
        array[i] = new Number(array[i]);
        return array[i];
    }
    return array[i];
}

function doExplanation(array) {

    let arr = [];
    arr = deletedNegativeElements(array);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = checkTypeNumber(arr, i);
        arr[i] = checkTypeString(arr, i);
        arr[i] = checkTypeBoolean(arr, i);
    }
    return arr;
}

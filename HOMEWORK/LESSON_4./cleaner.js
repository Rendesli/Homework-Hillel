let ObjectMassive=[
    name={
        first: 'Jane',
        second: 'Pop',
    },
    age={
        age1: 56,
    },
    city={},
    home={},
    color={
        favorite: 'black',
    }
];

let cleaner = cleanerObjectMassiveFromEmptyElements(ObjectMassive);
console.log(cleaner);

function cleanerObjectMassiveFromEmptyElements(object){
   
    for (let i=0; i<object.length; i++){
        let arr=[];
        let del;
        if(checkValues(object[i])){
 del=object.splice(i--,1)[0];
 arr.push(del);
            
        }
    }
    return object;
}


function checkValues(object){
    if(Object.keys(object).length === 0){
        return true;
    }
    return false;
}

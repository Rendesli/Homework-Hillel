function ret(){

    let a = prompt("введите что-то?")

let reN = /(^-?\d+$)/.test(a);
let reS=/(^-?[A-Za-z]+$)/.test(a);
if(reN){
    return alert("1");
}else{
    if(reS){
    return alert("0");
}else{
    return alert("-1");
}
}
}
ret();
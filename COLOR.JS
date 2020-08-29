
const a = "green";

for( var i=1; i<=3; i++){
    
    var color = prompt("Угадайте цвет!").toLowerCase();
    if(a == color){
        alert("Попытка №"+i+' '+"Вы угадали!");
    }else if (a !== color){
        alert("Попытка №"+i+' '+"Не угадали!");
}  
}

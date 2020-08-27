var sum = 0;
var a = prompt('Введите число больше 10:');
if (a < 10){
    alert('Число меньше 10!');
var b = prompt("Повторите попыптку!");
a = b;    
for(var i = 1; i <= a; i++){
    sum += i;
}
alert("Сумма чисел:" + ' ' + sum);
}
else if(a > 10){
    for(var i = 1; i <= a; i++){
        sum += i;
    }
    alert("Сумма чисел:" + " " + sum);
}
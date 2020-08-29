var sum = 0;
var a = prompt('Введите число больше 10:');
if (a < 10) {
    alert('Ошибка! Число меньше 10!');
}else{
    for (var i = 1; i <= a; i++) {
        sum += i;
    }
    alert("Сумма чисел:" + ' ' + sum);
}
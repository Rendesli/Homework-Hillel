var a = Number(prompt('Введите первое число:'));
var arithmeticSigns = prompt('Сложить, умножить, вычесть, разделить?'+'\n'+'Введите знак:');
var b = Number(prompt('Введите второе число:'));

switch(arithmeticSigns){
 case "+":
        alert(a + b);
        break;
case "*":
    alert(a * b);
    break;
case "-":
    alert(a - b);
    break;
case "/":
    alert(a / b);
break;
default:
    alert("Возникла ошибка, проверьте еще раз!")        
}
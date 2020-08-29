var n1 = parseInt(prompt("First number:"));
var sign = prompt("sign");
var n2 = parseInt(prompt("Second number:"));


switch (sign) {
     case "+": {
          function sum() {
               result = n1 + n2;
               alert(result);
          }
          sum();
     }
     break;
     case "-": {
          function sub() {
               result = n1 - n2;
               alert(result);
          }
          sub();
     }
     break;
     case "*": {
          function multi() {
               result = n1 * n2;
               alert(result);
          }
          multi();
     }
     break;
     case "/": {
          function dev() {
               result = n1 / n2;
               alert(result);
          }
          dev();
     }
     break;
     default:
          alert("Error!");
     }
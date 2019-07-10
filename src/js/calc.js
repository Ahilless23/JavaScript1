var x = Number(prompt("Enter x:"));
var y = Number(prompt("Enter y:"));

if (!(isNaN(x) || isNaN(y))) {
    var operator = prompt("Enter operator:");

    if (operator == '+') {
        alert("x + y = " + (x + y));
    } else if (operator == '-') {
        alert("x - y = " + (x - y));
    } else if (operator == '*') {
        alert("x * y = " + (x * y));
    } else if (operator == '/') {
        alert("x / y = " + (x / y));
    } else {
        alert("Непонятная операция!");
   }
} else {alert("Это не похоже на число");}

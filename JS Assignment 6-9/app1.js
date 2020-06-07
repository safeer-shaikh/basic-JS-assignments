document.write("<br>______________");
var a = 2;
var b = 1;
var result =  --a - --b + ++b + b--;
document.write("<br><br>The value of a is: 2");
document.write("<br>The value of b is: 1");
document.write("<br>The Result is: " + result);

// --a = 1;
// --b = 0;
// --a - --b = 1 - 0 = 1;
// ++b = 1;
// 1 + ++b = 2;
// b-- = 1;
// 2 + b-- = 3;
// Result = 3;
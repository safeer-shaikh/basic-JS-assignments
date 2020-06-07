var score = ["100", "200", "300", "400"];
score.sort();
document.write(score[3] + " ");
document.write(score[2] + " ");
document.write(score[0] + " ");
document.write(score[1] + " ");


var city1 = ["<br>karachi", "lahore", "quetta", "islamabad", "hyderbad"];
var city2 = city1[0] + " " + city1[3];
document.write(city1 + "<br>");
document.write(city2);

// using join method
var array = ["this", "is", "my", "cat"];
let stringconversion = array.join(" ");
document.write(stringconversion);

var device = ["mouse", "keyboard", "moniter"]
document.write(device[0] + "<br>");
document.write(device[1] + "<br>");
document.write(device[2] + "<br>");
document.write("<br><br>REverse order<br><br>");
document.write(device[2] + "<br>");
document.write(device[1] + "<br>");
document.write(device[0] + "<br>");

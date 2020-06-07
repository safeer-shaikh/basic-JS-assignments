var students = ["","","","",""];
var cars = ["AUDI", "BMW", "TOYOTA"];

var qualifications = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.PHIL", "phD"];
document.write(qualifications[0] + "</br>");
document.write(qualifications[1] + "</br>");
document.write(qualifications[2] + "</br>");
document.write(qualifications[3] + "</br>");
document.write(qualifications[4] + "</br>");
document.write(qualifications[5] + "</br>");
document.write(qualifications[6] + "</br>");
document.write(qualifications[7] + "</br></br>");

var kids = ["Michael", "Tony", "jhon"];
var percent = ["84%", "72%", "77%"];
document.write(kids[0] + " Earned " + percent[0] + "</br>");
document.write(kids[1] + " Earned " + percent[1] + "</br>");
document.write(kids[2] + " Earned " + percent[2] + "</br>");

var colors = ["yellow", "red", "green" , "blue", "orange"];
var color1 = prompt("Enter color u want to add in the start");
colors.unshift(color1);
var color2 = prompt("Enter color u want to add in end");
colors.push(color2);
document.write(colors[0] + "</br>");
document.write(colors[1] + "</br>");
document.write(colors[2] + "</br>");
document.write(colors[3] + "</br>");
document.write(colors[4] + "</br>");
document.write(colors[5] + "</br>");
document.write(colors[6] + "</br>");

document.write("<br><br>After removing from start <br>");
colors.shift();
document.write("<br>" + colors[0] + "</br>");
document.write(colors[1] + "</br>");
document.write(colors[2] + "</br>");
document.write(colors[3] + "</br>");
document.write(colors[4] + "</br>");
document.write(colors[5] + "</br>");

document.write("<br><br>After removing from end <br>");
colors.pop();
document.write("<br>" + colors[0] + "</br>");
document.write(colors[1] + "</br>");
document.write(colors[2] + "</br>");
document.write(colors[3] + "</br>");
document.write(colors[4] + "</br>");

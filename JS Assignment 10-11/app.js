var city = prompt("Enter your city: ");
if (city == "karachi") {
	alert("Welcome to city of lights");
}
else{
	alert("Welcome to the cleanest city");
}

// greet according to gender
var gender = prompt("Enter your gender: ");
if (gender == "male") {
	alert("Welcome SIR!");
}

else{
	alert("Welcome MA'AM");
}

// traffic light message
var trafficLight = prompt("Enter one of traffic lights: ");
if (trafficLight == "red") {
	alert("Must stop!");
}
else if (trafficLight == "yellow") {
	alert("Ready to go!");
}
else {
	alert("Go!");	
}

// car fuel detector
var fuel = prompt("Enter remaining fuel in liters: ");
if (fuel <= 2) {
	alert("Please refil your tank!");
}
else{
	alert("Enough fuel in tank but needed to be refil after a small drive");
}

// 
var a = 4;
if (++a === 5){
	alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

//Result checker
var obtMarks = prompt("Enter Obtain marks out of 300: ");
var res = (obtMarks/300) * 100;
if (res >= 80) {
	document.write("Total Marks: 300");
 document.write("<br>Marks Obtain: " + obtMarks);
 document.write("<br>Percentage: " + res);
 document.write("<br>Grade: A-One");
}
else if (res >= 70 && res <= 79) {
	// 	document.write("Total Marks: 300");
 document.write("<br>Marks Obtain: " + obtMarks);
 document.write("<br>Percentage: " + res);
 document.write("<br>Grade: A");
}
else if (res >= 60 && res <= 69.9) {
	// 	document.write("Total Marks: 300");
 document.write("<br>Marks Obtain: " + obtMarks);
 document.write("<br>Percentage: " + res);
 document.write("<br>Grade: B");
}
else if (res < 60) {
	// 	document.write("Total Marks: 300");
 document.write("<br>Marks Obtain: " + obtMarks);
 document.write("<br>Percentage: " + res);
 document.write("<br>Grade: Fail");
}

// guess game
var guess = 6;
var ans = prompt("Guess any number within 1-10");
if (guess == ans) {
	alert("Bingo! Correct");
}
else if (ans == 5 && ans == 7) {
	alert("Close Enough");
}
else{
	alert("Wrong!");
}

// divisble by 3 or not
var div = prompt("Enter any number: ");
var okay = div%3;
if (okay == 0) {
	alert("it is divisble by 3");
}
else {
	alert("Its not divisble by 3");
}

// even odd checker
var eve = prompt("Enter any number to check if its even or not: ");
var odd = eve%2;
if (odd == 0) {
	alert("its EVEN");
}
else {
	alert("Its ODD");
}

// temperature checker
var temp = prompt("Enter temperature in centigrade: ");
if (temp >= 40) {
	alert("Its too HOT");
}
else if (temp >= 30 && temp <40) {
	alert("Temperature is Normal");
}
else if (temp >= 20 && temp < 30) {
	alert("TEmperature is COOL");
}
else if (temp >= 10 && temp < 20) {
	alert("OMG! temperture is so COOL");
}
else if (temp <10) {
	alert("Its Winter");
}

// simple calculator
const number1 = prompt("Enter number 1: ");
const number2 = prompt("Enter number 2: ");
var operate = prompt("Enter operator: ");
var cal;
if (operate === "+") {
	cal = (number1) + (number2);
	alert(cal);
}
else if (operate == "-") {
	var cal = number1 - number2;
	alert(cal);
}
else if (operate == "*") {
	var cal = number1 * number2;
	alert(cal);
}
else if (operate == "/") {
	var cal = number1 / number2;
	alert(cal);
}
else if (operate == "%") {
	var cal = number1 % number2;
	alert(cal);
}
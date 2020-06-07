// check which number is greater
var num1 = prompt("Enter num1: ");
var num2 = prompt("Enter num2: ");
if (num1 > num2) {
	alert(num1 + " is greater");
}
if (num2 > num1) {
	alert(num2 + " is greater")
}

// check whethre the number is positive negative or zero
var number1 = prompt("Enter any postive , negatice or zero value: ");
if (number1 > 0) {
	alert("Its Positive");
}
else if (number1 < 0) {
	alert("Its negativee");
}
else if (number1 == 0) {
	alert("Its Zero");
}

// check vowel or not
var letter = prompt("Enter a letter");
if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
	alert("Its Vowel");
}

else {
	alert("Its not a vowel");
}

// check password
var pass = prompt("Enter password: ");
var againpass = prompt("Again enter password: ");
if (pass === againpass) {
	alert("Correct!");
}
else {
	alert("Incorrect!");
}
// error removed
var greeting;
var hour = 13;
if (hour < 18) {
var greeting = "Good day";
alert(greeting);
}
else{
var greeting = "Good evening";
alert(greeting);
}

// 
var time = prompt("Enter time in 24hrs format: ");
if (time >= 0000 && time <= 1200) {
	alert("Good Morning!");
}
else if (time >= 1300 && time <= 1700) {
	alert("Good Evening!");
}
else if (time >= 1800 && time <= 2400) {
	alert("Good Night!");
}
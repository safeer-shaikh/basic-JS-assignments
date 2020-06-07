var counting = ["1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10 "];
for (var i = 0; i < 10; i++) {
	document.write(counting[i]);
}
document.write("<br>For Reverse counting<br>");
for (var i = 9; i >= 0; i--) {
	document.write(counting[i]);
}
document.write("<br>For EVEN counting<br>");
for (var i = 1; i < 10; i = i + 2) {
	document.write(counting[i]);
}
document.write("<br>For ODD counting<br>");
for (var i = 0; i < 10; i = i + 2) {
	document.write(counting[i]);
}
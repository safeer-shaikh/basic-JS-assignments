var table = prompt("Enter the table no: ");
var till = prompt("Till where u want it: ");
for (var i = 1; i <= till; i++) {
	var res = table * i;
	document.write(table + " x " + i + " = " + res + "<br>");
}
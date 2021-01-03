alert("Assignment 1 Task 8 and 9");
var a = prompt("Enter 1st number");
var b = prompt("Enter 2nd number");
a = parseFloat(a);
b = parseFloat(b);
var c = a + b;

document.write("<h2>Sum of " + a + " " + "and" + " " + b + " " + "is" + " " + c +" <h2>");

var d = a-b;
document.write("<h2>Subtration from " + a + " " + "to" + " "+ b + " " + "is" + " " + d + " </h2>"); 

var e = a * b;
document.write("<h2> Product of " + a + " " + "and" + b + " " + "is" + " " + e + " </<h2>");
var f = a / b;

var g = a%b;
document.write("<h2> Division from " +a + " " + "to" + b+ " "+ "is" + " " + f + " </h2>");
document.write("<h2> Modulus of " +a + " " + "and" + b + " " + "is" + g +  " <h2>");   

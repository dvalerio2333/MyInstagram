var span = document.createElement("span");
span.innerHTML = "My Gram";

var div = document.getElementById("MyInstagramContainer");

div.appendChild(span);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Log In";

div.appendChild(loginButton);

var SignUpButton = document.createElement("button");
SignUpButton.innerHTML = "Sign Up";

div.appendChild(SignUpButton);

var lineBrake =
document.createElement("br")

div.appendChild(lineBrake);

var Image1Span = document.createElement("span");
Image1Span.innerHTML = "Image 1";

div.appendChild(Image1Span);

var Image2Span = document.createElement("span");
Image2Span.innerHTML = "Image 2";

div.appendChild(Image2Span);

var Image3Span = document.createElement("span");
Image3Span.innerHTML = "Image 3";

div.appendChild(Image3Span);

var Image4Span = document.createElement("span");
Image4Span.innerHTML = "Image 4";

div.appendChild(Image4Span);

var Image5Span = document.createElement("span");
Image5Span.innerHTML = "Image 5";

div.appendChild(Image5Span);
var lineBrake2 =
document.createElement("br")

div.appendChild(lineBrake2);


var aboutSpan = document.createElement("span");
aboutSpan.innerHTML = "About";

div.appendChild(aboutSpan);

var blogSpan = document.createElement("span");
blogSpan.innerHTML = "Blog";

div.appendChild(blogSpan);

var jobsSpan = document.createElement("span");
jobsSpan.innerHTML = "Jobs";

div.appendChild(jobsSpan);

var helpSpan = document.createElement("span");
helpSpan.innerHTML = "Help";

div.appendChild(helpSpan);


div.appendChild(Image5Span);
var lineBrake3 =
document.createElement("br")

div.appendChild(lineBrake3);

var EnglishSpan = document.createElement("span");
aboutSpan.innerHTML = "Eniglish";

div.appendChild(aboutSpan);

var yearSpan = document.createElement("span");
yearSpan.innerHTML = "2021";

div.appendChild(blogSpan);

var gramSpan = document.createElement("span");
gramSpan.innerHTML = "My Gram";



var myNumber = 10;
var myString = "A String"
var myBoolean = false;



console.log(myNumber)
console.log(myString)
console.log(myBoolean)


function SumOfNumbers(x, y) {
    var result = x + y;
    console.log(result);
}
SumOfNumbers(10, 20);

var myString = "Hello this is a string     ";
var result = myString.substring(0, 3);

console.log(result.trim());

//Module 5

var d = new Date();

var dateFormat = (d.getMonth() + 1).toString().padStart(2, "0") + "/" +
    d.getDate().toString().padStart(2, "0") + "/" + d.getFullYear();
console.log(dateFormat);

var d2 = new Date(2018, 4, 5);
document.write("<br>");
document.write("<br>");
document.write(d2.toLocaleString("en-US"));


var firstDate = new Date();
var secondDate = new Date(1997, 6, 3);
document.write("<br>");
if (firstDate > secondDate) {
    document.write("first date is greater");



} else if (secondDate > firstDate) {
    document.write("second date is greater");
} else {
    document.write("both dates are equal");
}





























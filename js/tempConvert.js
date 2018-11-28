// var f = 98;
// var c = (f - 32)/1.8;

//console.log(f + "degrees Fahrenheit is " + c + "degrees Celsius");

var f = 104;
var c = 30;
var fResult;
var cResult;

var fToC = function() {
    cResult = Math.round((f - 32)/1.8);
}
var cToF = function() {
    fResult = Math.round((1.8*c)+32);
}

fToC();
console.log(f + "degrees Fahrenheit is " + cResult + "degrees Celsius");
cToF();
console.log(c + "degrees Celsius is " + fResult, "degrees Fahrenheit");
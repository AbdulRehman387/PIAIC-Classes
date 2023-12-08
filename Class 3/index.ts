// Assignment operators
// =
// +=
// -=
// *
// /



var num1:number = 10;
var num2:number = 20;
// num2 = num2 + num1;
// is ka short hand tariqa ye hai
num2 += num1;
// num2 ki value 20 hai += ka matlab hai k assignment operator k
// right side wali value ko left side wali value mein add kar do

console.log(num2);

var num3:number = 10;
var num4:number = 20;
// num4 = num4 - num3;
// is ka short hand tariqa ye hai
num4 -= num3;
// num2 ki value 20 hai += ka matlab hai k assignment operator k
// right side wali value ko left side wali value mein add kar do

console.log(num4);

// num2 += 50;

// Comparison Operator

//== Compares only values
//=== Compares value + data type
//!= Compares only values
//!== Compares value + data type.....


var num5:number = 10;
var num6:number = 10;
var result1:boolean = num5 < num6;
console.log(result1);

console.log(num5 == num6);

//agar 2 variables ki type different hai to == operator true value return kare ga leikin agar === operator use karein to wo false value return kare ga kunke == mein wo sirf values ko check kare ga leikin agar === mein wo value k saath data type bhi check kare ga


//logical Operators
//and
//or
//not

//String Operators
// +
// =+



var _name:string = "My name is ";
var string1:string = "Abdul Rehman";
console.log(_name + string1);

var string1:string = "Abdul";
console.log(`My name is ${string1}`);


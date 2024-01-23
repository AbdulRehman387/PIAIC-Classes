"use strict";
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = array.map((num) => "num * 2");
console.log(array2);
let arrayOfTempInCelsius = [35, 24, 41, 45, 16];
let arrayOfTempInFahrenheit = [];
arrayOfTempInFahrenheit = arrayOfTempInCelsius.map((temp) => (temp * 9 / 5) + 32);
console.log(arrayOfTempInFahrenheit);
let evenOdd = [];
evenOdd = arrayOfTempInCelsius.map((numb) => numb % 2 === 0 ? "Even" : "Odd"); //lemda function
console.log(arrayOfTempInCelsius);
console.log(evenOdd);
let function1 = (sum) => {
    if (sum() % 2 === 0) {
        return "Even";
    }
    return "Odd";
};
let sum = () => {
    let num1 = 5;
    let num2 = 2;
    let sum1 = num1 + num2;
    return sum1;
};
console.log(function1(sum));
//ternary operator
let boolean = 45 % 2 === 0 ? "Even" : "Odd"; //if condition
console.log(boolean);
//filter can give an array of length equal to the array or less than
// you cannot update the value of array

"use strict";
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
let function1 = (array1, _index, _name) => {
    array1.splice(_index, 0, _name);
    return array1;
};
let array1 = [
    "Ali",
    "Ahmad",
    "Saim",
    "Bilal",
    "Abdul Rehman"
];
let _name = "Hamza";
console.log(function1(array1, 3, _name));
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let functionToAdd = (array2, item) => {
    array2.splice(array2.length, 0, item);
    return array2;
};
let functionToRemove = (array2, item) => {
    array2.splice(array2.indexOf(item), 1);
    return array2;
};
let functionToUpdate = (array2, item, itemToAdd) => {
    array2.splice(array2.indexOf(item), 1, itemToAdd);
    return array2;
};
let array2 = [
    "Apple",
    "Banana",
    "Rice",
    "Milk"
];
console.log(functionToAdd(array2, "Ghee"));
console.log(functionToRemove(array2, "Banana"));
console.log(functionToUpdate(array2, "Milk", "Jam"));
//- Write a program that uses a while loop to print the first 25 integers.
let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
// - Write a program that uses a while loop to print the first 10 even numbers.
let j = 0;
while (j < 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
let functionFactorial = (num) => {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
};
let num = 5;
console.log(functionFactorial(num));
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let functionRemoveNegative = (array3) => {
    for (let i = array3.length - 1; i >= 0; i--) {
        if (array3[i] < 0) {
            array3.splice(i, 1);
        }
    }
    return array3;
};
let array3 = [5, 3, -7, -59, -34, 12, 45];
console.log(functionRemoveNegative(array3));
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let functionAddNumbers = (array4) => {
    let sum = 0;
    let i = 0;
    while (i < array4.length) {
        sum = sum + array4[i];
        i++;
    }
    return sum;
};
let array4 = [54, 3, 23, 5, 4, 76, 22];
console.log(functionAddNumbers(array4));
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
let functionFahrenheit = (array5) => {
    let i = 0;
    let array6 = [];
    while (i < array5.length) {
        array6[i] = (array5[i] * 9 / 5) + 32;
        i++;
    }
    return array6;
};
let array5 = [35, 24, 41, 45, 16];
console.log(functionFahrenheit(array5));
// - Write a program to remove all the odd numbers from an array.
let functionRemoveOdd = (array7) => {
    for (let i = array7.length - 1; i >= 0; i--) {
        if (array7[i] % 2 !== 0) {
            array7.splice(i, 1);
        }
    }
    return array7;
};
let array7 = [24, 43, 12, 45, 87, 42, 16];
console.log(functionRemoveOdd(array7));

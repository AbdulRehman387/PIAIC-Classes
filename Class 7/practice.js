"use strict";
let rollNum = 2;
let names = [
    "Abdul Rehman",
    "Mubeen",
    "Arham",
    "Najeeb",
    "Faiq",
    "Ashir",
    "Bilal",
    "Sufyan",
    "Waqas",
    "Taha",
];
let compStu = [1, 2, 4, 10];
let bioStu = [3, 5, 6, 7, 8, 9];
console.log(names[rollNum - 1]);
if (compStu.indexOf(rollNum) != -1) {
    console.log("Computer group");
}
else {
    console.log("Biology group");
}
let arrayOfNumbers1 = [2, 3, 6, 4, 23, 65, 7];
let arrayOfNumbers2 = [9, 24, 5, 21, 27, 55, 15];
let arrayOfNumbers3 = [];
for (let i = 0, j = arrayOfNumbers2.length - 1; i < arrayOfNumbers2.length; i++, j--) {
    console.log(arrayOfNumbers3[i] = arrayOfNumbers1[i] + arrayOfNumbers2[j]);
}
console.log(Math.round(10 / 6));

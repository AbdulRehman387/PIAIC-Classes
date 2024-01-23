"use strict";
//Solution 1
let arrayOfNumbers1 = [4, 6, 2, 3, 5, 1];
let target1 = 7;
let a = 0;
let arrayOfindex1 = [];
for (let i = 0; i < arrayOfNumbers1.length; i++) {
    for (let j = 0; j < arrayOfNumbers1.length; j++) {
        if (i != j) {
            if (arrayOfNumbers1[i] + arrayOfNumbers1[j] === target1) {
                arrayOfindex1 = [i, j];
                a++;
                break;
            }
        }
    }
    if (a === 1) {
        break;
    }
}
console.log(arrayOfindex1);
//Solution 2
let arrayOfNumbers2 = [4, 6, 2, 3, 5, 1];
let target2 = 7;
let arrayOfindex2 = [];
let functionOfIndex = (arrayOfNumbers, target) => {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            if (i != j) {
                if (arrayOfNumbers[i] + arrayOfNumbers[j] === target) {
                    arrayOfindex2 = [i, j];
                    return arrayOfindex2;
                }
            }
        }
    }
};
console.log(functionOfIndex(arrayOfNumbers2, target2));

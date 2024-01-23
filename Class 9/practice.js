"use strict";
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1 = arr1.map((value) => (value + 2));
console.log(arr1);
// tsc && node practice.js
let arr2 = [];
arr2 = arr1.map((value) => {
    if (value % 2 === 0) {
        return value;
    }
});
console.log(`arr2 = ${arr2}`);
console.log(arr2);

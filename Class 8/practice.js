"use strict";
// let arrayOfNames:string[] = [
//     "Ali",
//     "Mubeen",
//     "Umer",
//     "Abdul Rehman"
// ];
// let arrayOfRollNo = [];
// arrayOfRollNo = arrayOfNames.map((names:string, i:number)=>`PIAIC${i + 1}`);
// console.log(arrayOfRollNo);
// let sum1=(num1:number)=>{
// }
// let arrayOfNumbers: number[] = [4, 6, 2, 3, 5, 1];
// let target: number = 7;
// let a: number = 0;
// let arrayOfindex: number[] = [];
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     for (let j = 0; j < arrayOfNumbers.length; j++) {
//         if (i != j) {
//             if (arrayOfNumbers[i] + arrayOfNumbers[j] === target) {
//                 arrayOfindex = [i,j];
//                 a++;
//                 break;
//             }
//         }
//     }
//     if (a === 1) {
//         break;
//     }
// }
// console.log(arrayOfindex);
// let arrayOfNumbers: number[] = [4, 6, 2, 3, 5, 1];
// let target: number = 12;
// let arrayOfindex: number[] = [];
// let functionOfIndex = (arrayOfNumbers:number[],target:number)=>{
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         for (let j = 0; j < arrayOfNumbers.length; j++) {
//             if (i != j) {
//                 if (arrayOfNumbers[i] + arrayOfNumbers[j] === target) {
//                     arrayOfindex = [i,j];
//                     return arrayOfindex;
//                 }
//             }
//         }
//     }
// }
// console.log(functionOfIndex(arrayOfNumbers,target));
// let functionMedian = (num3:number[],)=>{
//     if (num3.length % 2 === 0) {
//         median = num3.length / 2;
//         median = (num3[median - 1] + num3[median]) / 2;
//         return median;
//     }
//     else{
//         median = Math.floor(num3.length / 2);
//         median = num3[median];
//         return median;
//     }
// }
// let num1:number[] = [2,5,6];
// let num2:number[] = [4,8,9];
// let num3:number[] = [];
// let median;
// num3 = num1.concat(num2).sort();
// console.log(functionMedian(num3));
// let x: number = 456715;
// let y: number = x;
// let arrayOfDigits: number[] = [];
// for (let i = 0; i < 10; i++) {
//     arrayOfDigits[i] = x % 10;
//     x = Math.trunc(x / 10);
//     if (x === 0) {
//         break;
//     }
// }
// if (y < 0) {
//     for (let j = 0; j < arrayOfDigits.length; j++) {
//         arrayOfDigits[j] = arrayOfDigits[j] * (-1);
//     }
//     let number: number = parseInt(arrayOfDigits.join(''));
//     console.log(-number);
// }
// else {
//     let number: number = parseInt(arrayOfDigits.join(''));
//     console.log(number);
// }
let a;
for (let i = 2; i <= 100; i++) {
    a = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            a++;
        }
    }
    if (a === 2) {
        console.log(i);
    }
}

"use strict";
let arr = ["ahmad", "ali", "abdulrehman", "saim"];
arr.splice(2, 0, "umer");
console.log(arr.indexOf("mubeen"));
console.log(arr.length);
//loop
// let a:number = 1;
//     while(true){
//         console.log(a);
//         a++;      
//     }
let num = 3;
for (let i = 1; i <= 10; i++) {
    let pro = num * i;
    if (pro % 2 === 0) {
        console.log(`${num} X ${i} = ${pro}`);
    }
}
let arrloop = [];
for (let i = 0; arrloop.length < 10; i++) {
    arrloop[i] = i + 2;
}
console.log(arrloop);
let num1 = 5;
var num2 = 5;

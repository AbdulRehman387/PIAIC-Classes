// import inquirer from "inquirer";
// let data = inquirer.prompt([
//     {
//         name: "age",
//         type: "number",
//         message: "What is your age?"
//     }
// ])
// .then((ages)=>{
//     console.log("Age is", ages.age);
// })
// tsc && node index.js
// let arrOfStu:any[] = [
//     {
//         name: "Ubaidullah",
//         marks: 80
//     },
//     {
//         name: "Ahmad",
//         marks: 85
//     },
//     {
//         name: "Mubeen",
//         marks: 30
//     }
// ];
// let passStu = [];
// arrOfStu = arrOfStu.map((stu)=>{
//     if (stu.marks > 33) {
//         return {...stu, result: "Pass"};
//     }
//     return {...stu, result: "Fail"};
// })
// passStu = arrOfStu.filter((stu)=>{
//     if (stu.result === "Pass") {
//         return stu;
//     }
// })
// console.log(arrOfStu);
// console.log(passStu);
import inquirer from "inquirer";
let data;
var data2 = inquirer.prompt([{
        name: "age",
        type: "number",
        message: "what is your age"
    }])
    .then((value) => {
    data = value.age;
});
console.log(data);

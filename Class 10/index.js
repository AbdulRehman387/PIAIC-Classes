// import { nameOfStudent } from "./index2.js";
// import chalk from "chalk";
// console.log(chalk.grey(nameOfStudent));
// console.log(chalk.gray("khufa"));
// // tsc && node index.js
// // tsc && node index2.js
// const login = (homePage:()=>void)=>{
//     setTimeout(() => {
//         console.log("Login");
//         homePage();
//     }, 2000);
// }
// const homePage = () =>{
//     console.log("Home Page");
// }
// login(homePage);
// setInterval()
// clearInterval()
// let i:number = 1;
// console.log("Ignition");
// let setIn = setInterval(()=>{
//     console.log("Start");
//     i++;
//     if (i === 3) {
//         clearInterval(setIn);
//     }
// }, 2000)
// console.log("In Gear");
// console.log("Accelerate");
// let promise1 = new Promise((hi, reject) => {
//     ("Downloading Completed")
// })
// promise1.then((msg)=>{
//     console.log(msg);
//     promise1.catch(()=>{})
// })
// import inquirer from "inquirer";
// let promise2 = new Promise((resolve, reject) => {
//     let input = inquirer.prompt([
//         {
//             type: "number",
//             name: "num1",
//             message: "Enter 1st number: "
//         },
//         {
//             type: "number",
//             name: "num2",
//             message: "Enter 2nd number: "
//         },
//         {
//             type: "string",
//             name: "oper",
//             message: "Enter the operation: "
//         }
//     ])
//     resolve(
//         input.then((answers) => {
//             switch (answers.oper) {
//                 case "+":
//                     console.log(answers.num1 + answers.num2);
//                     break;
//                 case "-":
//                     console.log(answers.num1 - answers.num2);
//                     break;
//                 case "*":
//                     console.log(answers.num1 * answers.num2);
//                     break;
//                 case "/":
//                     console.log(answers.num1 / answers.num2);
//                     break;
//             }
//         })
//     )
// })
// promise2.then((msg) => {
// let input2 = inquirer.prompt([
//         {
//             name: "num3",
//             type: "number",
//             message: "Enter the number you want multiplication table of: "
//         }
//     ])
// input2.then((answers)=>{
//     for (let i = 0; i <= 10 ;i++) {
//         console.log(`${answers.num3} x ${i} = ${answers.num3 * i}`);
//     }
// })
// })
// let input3 = new Promise((resolve, reject) => {
//     resolve(
//         setTimeout(() => {
//             console.log("Loading");
//         }, 3000)
//     )
// })
// input3.then((a)=>{
//     console.log("Hi");
// })
import inquirer from 'inquirer';
import chalk from 'chalk';
var questions = [{
        name: 'number1',
        type: 'number',
        message: "enter number 1"
    },
    {
        name: 'number2',
        type: 'number',
        message: "enter number 2"
    },
    {
        name: 'operation',
        type: 'list',
        message: "choose an operation",
        choices: ["+", "-", "*", "/", "%", "ADDITION", "PLUS", "SUBTACTION", "MINUS", "MULTIPLICATION", "DIVISION", "REMAINDER"]
    }];
var answers = inquirer.prompt(questions);
answers.then((answers) => {
    console.log(answers);
    if (answers.operation == "+" || answers.operation == "ADDITION" || answers.operation == "PLUS") {
        console.log(chalk.green(`${answers.number1}+${answers.number2} = ${answers.number1 + answers.number2}`));
    }
    else if (answers.operation == "-" || answers.operation == "SUBTRACTION" || answers.operation == "MINUS") {
        console.log(chalk.yellow(`${answers.number1}-${answers.number2} = ${answers.number1 - answers.number2}`));
    }
    else if (answers.operation == "*" || answers.operation == "MULTIPLICATION") {
        console.log(chalk.blue(`${answers.number1}*${answers.number2} = ${answers.number1 * answers.number2}`));
    }
    else if (answers.operation == "/" || answers.operation == "DIVISION") {
        console.log(chalk.black(`${answers.number1}/${answers.number2} = ${answers.number1 / answers.number2}`));
    }
    else if (answers.operation == "%" || answers.operation == "REMAINDER") {
        console.log(chalk.red(`${answers.number1}%${answers.number2} = ${answers.number1 % answers.number2}`));
    }
})
    .catch((err) => {
});

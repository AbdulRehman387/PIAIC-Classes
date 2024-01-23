// tsc && node Assignment.js
import chalk from "chalk";
import inquirer from "inquirer";
inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter 1st Number: "
    },
    {
        name: "num2",
        type: "number",
        message: "Enter 2nd Number: "
    },
    {
        name: "operator",
        type: "string",
        message: "Enter Operator: "
    }
]).then((answers) => {
    answers.operator = answers.operator.toLowerCase();
    if (answers.operator === "+" || answers.operator === "addition" || answers.operator === "add") {
        console.log(chalk.red.bgGreen(`Answer is ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator === "-" || answers.operator === "subtraction" || answers.operator === "subtract") {
        console.log(chalk.blue.bgRed(`Answer is ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator === "*" || answers.operator === "multiplication" || answers.operator === "multiply") {
        console.log(chalk.yellow.bgBlack(`Answer is ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator === "/" || answers.operator === "division" || answers.operator === "divide") {
        console.log(chalk.black.bgWhite(`Answer is ${answers.num1 / answers.num2}`));
    }
    else {
        console.log("Invalid operator");
    }
});

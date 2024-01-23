// tsc && node login.js
import chalk from "chalk";
import inquirer from "inquirer";

let arrOfEmails: {
    email: string,
    password: string
}[] = [
        {
            email: "abdulrehman03082007@gmail.com",
            password: "abd03082007"
        },
        {
            email: "mabdulrehman382007@gmail.com",
            password: "mabd03082007"
        },
        {
            email: "threadshub.site@gmail.com",
            password: "abd03082007"
        }
    ]

let input = inquirer.prompt([
    {
        name: "email",
        type: "string",
        message: "Enter your Email: "
    },
    {
        name: "password",
        type: "password",
        mask: "*",
        message: "Enter Password: "
    }
])
input.then((login) => {
    arrOfEmails.forEach((obj) => {
        if (login.email === obj.email) {

            if (login.email === obj.email && login.password === obj.password) {
                console.log(chalk.green("Login Success"));
                let promise = new Promise((resolve) => {
                    let i: number = 0;
                    let loader = setInterval(() => {
                        console.log("Loading...");
                        i++;
                        if (i === 3) {
                            clearInterval(loader);
                            resolve(true);
                        }
                    }, 1000);
                }).then((msg) => {
                    console.log(chalk.bgBlue("Welcome to Facebook"))
                })
            }
            else {
                console.log(chalk.red("Email or Password is incorrect."));

            }
        }
    })
})
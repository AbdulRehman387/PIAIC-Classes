// tsc && node practice.js
import inquirer from "inquirer";
// Function for getting random number
let getRandomInt = (min, max) => {
    let randomNum;
    randomNum = Math.round(Math.random() * max);
    if (randomNum >= min && randomNum <= max) {
        return randomNum;
    }
    return getRandomInt(1, 10);
};
// Function of number guessing game
let score = 0;
let game = () => {
    inquirer.prompt([
        {
            name: "guess",
            type: "number",
            message: "Guess a number between 1 and 10: "
        },
        {
            name: "confirm",
            type: "confirm",
            message: "Should we lock it?"
        }
    ]).then((obj) => {
        if (obj.guess >= 1 && obj.guess <= 10) {
            if (obj.confirm === true) {
                if (obj.guess === getRandomInt(1, 10)) {
                    console.log("You got it!");
                    score += 10;
                    setTimeout(() => {
                        playAgain(score);
                    }, 1000);
                }
                else {
                    console.log("Wrong!");
                    setTimeout(() => {
                        playAgain(score);
                    }, 1000);
                }
            }
            else {
                game();
            }
        }
        else {
            console.log("Number is not between 1 and 10!");
            setTimeout(() => {
                game();
            }, 1000);
        }
    });
};
// Function for playing again
let playAgain = (score) => {
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Would you like to play again?"
        }
    ])
        .then((obj) => {
        if (obj.confirm === true) {
            game();
        }
        else {
            console.log("Thanks for playing!");
            console.log("Your score is ", score);
        }
    });
};
inquirer.prompt([
    {
        name: "play",
        type: "confirm",
        message: "Are you ready to play a number guessing game?"
    }
])
    .then((obj) => {
    if (obj.play === true) {
        game();
    }
    else {
        console.log("Goodbye!");
    }
});

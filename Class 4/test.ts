//Create a program that simulates a simple ATM. Ask the user for their account balance, and then check if they have enough funds to withdraw a certain amount. If yes, update the balance; otherwise, display an insufficient funds message.
var accountBalance: number = 2000;
var userAmount: number = 1500;
console.log("How many amount you want to withdraw?");
console.log(`${userAmount}`);
if (userAmount <= accountBalance) {
  console.log(
    `RS ${userAmount} withdrawn! Remaining balance is ${
      accountBalance - userAmount
    }`
  );
} else {
  console.log("Insufficient balance");
}

// Design a program that takes a month as input (1-12) and prints the number of days in that month.
var monthNum: number = 4;
if (
  monthNum === 1 ||
  monthNum === 3 ||
  monthNum === 5 ||
  monthNum === 7 ||
  monthNum === 8 ||
  monthNum === 10 ||
  monthNum === 12
) {
  console.log(`Number of days in month ${monthNum} are 31`);
} else if (
  monthNum === 4 ||
  monthNum === 6 ||
  monthNum === 9 ||
  monthNum === 11
) {
  console.log(`Number of days in month ${monthNum} are 30`);
} else if (monthNum === 2) {
  console.log(`Number of days in February are 28`);
}

//Create a program that asks the user to enter three numbers. Determine and print whether the sum of any two numbers is equal to the third.
var num1: number = 18;
var num2: number = 12;
var num3: number = 6;
if (num1 + num2 === num3) {
  console.log(`Sum of ${num1} and ${num2} is equal to ${num3}`);
} else if (num2 + num3 === num1) {
  console.log(`Sum of ${num2} and ${num3} is equal to ${num1}`);
} else if (num1 + num3 === num2) {
  console.log(`Sum of ${num1} and ${num3} is equal to ${num2}`);
} else {
  console.log("Sum of any two numbers is not equal to the third number");
}
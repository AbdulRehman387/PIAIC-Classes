"use strict";
// - Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.
var dayNum = 6;
switch (dayNum) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Weekend");
        break;
    case 7:
        console.log("Sunday");
        break;
}
// - Try making ATM Machine matches pin and account number it it matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately.
var savedAccountNum = 12;
var userAccountNum = 12;
var savedPin = 3807;
var userPin = 3807;
var accountBalance = 2000;
var amount = 1000;
if (userAccountNum == savedAccountNum && userPin == savedPin) {
    console.log("Enter amount to Withdraw");
    if (amount <= accountBalance) {
        console.log(`RS${amount} withdrawn`);
    }
    else {
        console.log("Insufficeint balance");
    }
}
else if (userAccountNum == savedAccountNum && userPin != savedPin) {
    console.log("PIN is incorrect");
}
else if (userAccountNum != savedAccountNum && userPin == savedPin) {
    console.log("Account number is incorrect");
}
else if (userAccountNum != savedAccountNum && userPin != savedPin) {
    console.log("Both are incorrect");
}
// - Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else if abd switch statement.
var time = 13;
//IF ELSE-IF ELSE
if (time >= 5 && time < 12) {
    console.log("Good Morning");
}
else if (time >= 12 && time < 18) {
    console.log("Good Afternoon");
}
else if (time >= 18 && time < 24) {
    console.log("Good Evening");
}
else {
    console.log("Incorrect time");
}
//SWITCH-CASE
var morning = time >= 5 && time < 12;
var afternoon = time >= 12 && time < 18;
var evening = time >= 18 && time < 24;
switch (true) {
    case morning:
        console.log("Good Morning");
        break;
    case afternoon:
        console.log("Good Afternoon");
        break;
    case evening:
        console.log("Good Evening");
        break;
}
// - Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup to PhD on basis of class number. Do it with both if else if and switch statement .
var _class = 11;
//IF ELSE-IF ELSE
if (_class <= 5) {
    console.log("Primary");
}
else if (_class <= 8) {
    console.log("Elementary");
}
else if (_class <= 10) {
    console.log("Secondary");
}
else if (_class <= 12) {
    console.log("Higher Secondary");
}
else if (_class > 12) {
    console.log("University Education");
}
//SWITCH-CASE
var primary = _class <= 5;
var elementary = _class <= 8;
var secondary = _class <= 10;
var higherSecondary = _class <= 12;
var university = _class > 12;
switch (true) {
    case primary:
        console.log("Primary");
        break;
    case elementary:
        console.log("Elementary");
        break;
    case secondary:
        console.log("Secondary");
        break;
    case higherSecondary:
        console.log("Higher Secondary");
        break;
    case university:
        console.log("University Education");
        break;
}
// - Write a TS program that check ms wheather if the number is positive, zero or negative.
var number = 3;
if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else if (number === 0) {
    console.log("Zero");
}
// - Take 5 different numbers and check which on is greatest and then check which one is smallest use separate conditionals  for both scenarios.
var num1 = 23;
var num2 = 34;
var num3 = 254;
var num4 = 224;
var num5 = 2352;
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(`${num1} is greatest`);
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(`${num2} is greatest`);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log(`${num3} is greatest`);
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(`${num4} is greatest`);
}
else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    console.log(`${num5} is greatest`);
}
if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    console.log(`${num1} is smallest`);
}
else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    console.log(`${num2} is smallest`);
}
else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
    console.log(`${num3} is smallest`);
}
else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
    console.log(`${num4} is smallest`);
}
else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
    console.log(`${num5} is smallest`);
}

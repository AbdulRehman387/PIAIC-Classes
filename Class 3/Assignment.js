"use strict";
// - Write a program that calculates the percentage. 
var totalMarks = 545;
var obtMarks = 523;
var percentage = (obtMarks / totalMarks) * 100;
console.log(`Percentage is ${percentage}%`);
// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price = 130;
var discount;
if (price > 100) {
    discount = price * (10 / 100);
}
else {
    discount = price * (5 / 100);
}
console.log(`Discount is $${discount}`);
// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age = 16;
if (age > 0 && age <= 12) {
    console.log("Child.");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager.");
}
else {
    console.log("Adult.");
}
// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temp = 20;
if (temp <= 25) {
    console.log("You should wear warm clothes.");
}
else {
    console.log("You should wear light clothes");
}
// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var number = 20;
if (number % 3 === 0) {
    console.log(`${number} is divisible by 3.`);
}
else if (number % 5 === 0) {
    console.log(`${number} is divisible by 5`);
}
else if (number % 3 === 0 && number % 5 === 0) {
    console.log(`${number} is divisible by both 3 and 5`);
}
else {
    console.log(`${number} is not divisible by 3 or 5`);
}
// - Write a program that checks if the given year is leap year or not.
var year = 2023;
if (year % 100 === 0) {
    if (year % 400 === 0) {
        console.log("Leap Year.");
    }
    else {
        console.log("Not a Leap Year.");
    }
}
else if (year % 4 === 0) {
    console.log("Leap Year.");
}
else {
    console.log("Not a Leap Year.");
}
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var dayNum = 4;
if (dayNum >= 1 && dayNum <= 7) {
    if (dayNum === 1) {
        console.log("Monday");
    }
    else if (dayNum === 2) {
        console.log("Tuesday");
    }
    else if (dayNum === 3) {
        console.log("Wednesday");
    }
    else if (dayNum === 4) {
        console.log("Thursday");
    }
    else if (dayNum === 5) {
        console.log("Friday");
    }
    else if (dayNum === 6) {
        console.log("Saturday");
    }
    else if (dayNum === 7) {
        console.log("Sunday");
    }
}
else {
    console.log("Number is not between 1 and 7.");
}
// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
var units = 250;
var unitPrice = 15;
var bill = units * unitPrice;
if (units > 100 && units <= 200) {
    bill = bill + (bill * 10 / 100);
}
else if (units > 200 && units <= 300) {
    bill = bill + (bill * 15 / 100);
}
else if (units > 300 && units <= 500) {
    bill = bill + (bill * 20 / 100);
}
else if (units > 500) {
    bill = bill + (bill * 25 / 100);
}
console.log(`Your bill is ${bill}.`);
// - Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.
var attendance = 75;
var pracMarks = 50;
var theoryMarks = 45;
if (attendance >= 75 && pracMarks >= 50 && theoryMarks >= 45) {
    console.log("The Student is PASS.");
}
else {
    console.log("The Student is FAIL.");
}
// - Write a ts program that evaluates the grades of the students:
// * 80% or greater, grade A
// * 70% or greater, grade B
// * 60% or greater, grade C
// * 50% or greater, grade D
// * Less than 50% , grade F.
var grades = 96;
if (grades >= 80) {
    console.log("Grade A.");
}
else if (grades >= 70) {
    console.log("Grade B.");
}
else if (grades >= 60) {
    console.log("Grade C.");
}
else if (grades >= 50) {
    console.log("Grade D.");
}
else if (grades < 50) {
    console.log("Grade F.");
}

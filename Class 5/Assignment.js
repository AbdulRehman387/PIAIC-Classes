"use strict";
var perFunction = (totalMarks, obtMarks) => {
    return (obtMarks / totalMarks) * 100;
};
console.log(`${Math.round(perFunction(545, 523))}%`);
var disFunction = (price) => {
    if (price > 100) {
        return (10 / 100) * price;
    }
    return (5 / 100) * price;
};
console.log(`Discount is RS ${disFunction(100)}`);
var ageCatFunction = (age) => {
    if (age > 0 && age <= 12) {
        return "Child";
    }
    else if (age > 12 && age <= 19) {
        return "Teenager";
    }
    return "Adult";
};
console.log(ageCatFunction(22));
var tempCheFunction = (temp) => {
    if (temp < 25) {
        return "You should wear warm clothes";
    }
    return "You should wear light colthes";
};
console.log(tempCheFunction(34));
var numDivCheFunction = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Number is divisible by both 5 and 3";
    }
    else if (num % 3 === 0 && num % 5 !== 0) {
        return "Number is divisible by 3";
    }
    else if (num % 3 !== 0 && num % 5 === 0) {
        return "Number is divsible by 5";
    }
    return "Number is not divisible by 3 or 5";
};
console.log(numDivCheFunction(20));
var leapYearCheFunction = (year) => {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return "Leap year";
        }
        return "Not leap year";
    }
    else if (year % 4 === 0) {
        return "Leap year";
    }
    return "Not leap year";
};
console.log(leapYearCheFunction(2017));
var dayNameFunction = (dayNum) => {
    if (dayNum > 0 && dayNum <= 7) {
        switch (dayNum) {
            case 1: {
                return "Monday";
            }
            case 2: {
                return "Tuesday";
            }
            case 3: {
                return "Wednesday";
            }
            case 4: {
                return "Thursday";
            }
            case 5: {
                return "Friday";
            }
            case 6: {
                return "Saturday";
            }
            case 7: {
                return "Sunday";
            }
        }
    }
    return "Enter a valid number";
};
console.log(dayNameFunction(4));
var units = 150;
var price = 10;
var bill = units * price;
var taxCalFunction = (units) => {
    if (units > 100) {
        return bill * (10 / 100);
    }
    else if (units > 200) {
        return bill * (15 / 100);
    }
    else if (units > 300) {
        return bill * (20 / 100);
    }
    else if (units > 500) {
        return bill * (25 / 100);
    }
    return 0;
};
var tax = taxCalFunction(units);
var totalBill = bill + tax;
console.log(`Bill is ${totalBill}`);
var resultCheFunction = (attendance, pracMarks, theoMarks) => {
    if (attendance > 75 && pracMarks > 50 && theoMarks > 45) {
        return "PASS";
    }
    return "FAIL";
};
console.log(resultCheFunction(90, 85, 50));
var gradeCheFunction = (per) => {
    if (per >= 80) {
        return "A Grade";
    }
    else if (per >= 70) {
        return "B Grade";
    }
    else if (per >= 60) {
        return "C Grade";
    }
    else if (per >= 50) {
        return "D Grade";
    }
    return "F Grade";
};
console.log(gradeCheFunction(67));

// - Write a program that calculates the percentage.
var perFunction = (totalMarks: number, obtMarks: number): number => {
    return (obtMarks / totalMarks) * 100;
}
console.log(`${Math.round(perFunction(545, 523))}%`);

// - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var disFunction = (price: number): number => {
    if (price > 100) {
        return (10 / 100) * price;
    }
    return (5 / 100) * price;
}
console.log(`Discount is RS ${disFunction(100)}`);

// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var ageCatFunction = (age: number): string => {
    if (age > 0 && age <= 12) {
        return "Child";
    }
    else if (age > 12 && age <= 19) {
        return "Teenager";
    }
    return "Adult";
}
console.log(ageCatFunction(22));

// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var tempCheFunction = (temp: number): string => {
    if (temp < 25) {
        return "You should wear warm clothes"
    }
    return "You should wear light colthes"
}
console.log(tempCheFunction(34));

// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var numDivCheFunction = (num: number): string => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Number is divisible by both 5 and 3"
    }
    else if (num % 3 === 0 && num % 5 !== 0) {
        return "Number is divisible by 3"
    }
    else if (num % 3 !== 0 && num % 5 === 0) {
        return "Number is divsible by 5"
    }
    return "Number is not divisible by 3 or 5"
}
console.log(numDivCheFunction(20));

// - Write a program that checks if the given year is leap year or not.
var leapYearCheFunction = (year: number): string => {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return "Leap year";
        }
        return "Not leap year";
    }
    else if (year % 4 === 0) {
        return "Leap year"
    }
    return "Not leap year"
}
console.log(leapYearCheFunction(2017));

// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var dayNameFunction = (dayNum: number): string => {
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
}
console.log(dayNameFunction(4));

// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.
var units: number = 150;
var price: number = 10;
var bill: number = units * price;
var taxCalFunction = (units: number): number => {
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
}
var tax: number = taxCalFunction(units);
var totalBill: number = bill + tax;
console.log(`Bill is ${totalBill}`);

// - Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.
var resultCheFunction = (attendance: number, pracMarks: number, theoMarks: number): string => {
    if (attendance > 75 && pracMarks > 50 && theoMarks > 45) {
        return "PASS"
    }
    return "FAIL"
}
console.log(resultCheFunction(90, 85, 50));

// - Write a ts program that evaluates the grades of the students:
// * 80% or greater, grade A
// * 70% or greater, grade B
// * 60% or greater, grade C
// * 50% or greater, grade D
// * Less than 50% , grade F.
var gradeCheFunction=(per:number):string=>{
    if (per>=80) {
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
}
console.log(gradeCheFunction(67));

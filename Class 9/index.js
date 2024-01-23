"use strict";
let newArray = ["Ali", "Umer"]; //1234 //1235
newArray[0]; //1234 + 0
newArray[1]; //1234 + 1
newArray.forEach((name, i) => {
    console.log(`Hello ${name}`);
});
//Object
//Object can be used to store any entity
let car1 = {
    color: "Black",
    type: "Sedan",
    model: 2023,
    isInsured: true,
    startEngine: () => {
        console.log("Starting Engine");
    }
};
let car2 = {
    color: {
        color1: "Red",
        type: "Metallic"
    },
    type: "SUV",
    model: 2022,
    isInsured: false,
    "Seater": "5 Seater"
};
console.log(car1.startEngine(), car2.color.type);
console.log(car2.color.type);
console.log(car2["type"]);
console.log(car2["Seater"]);
let arrayOfCars = [
    {
        color: "Green",
        type: "SUV",
        model: 2023,
        isInsured: true,
    },
    {
        color: "Blue",
        type: "Sedan",
        model: 2023,
        isInsured: true,
    }
];
console.log(arrayOfCars);
console.log(arrayOfCars[1].model);
let car3 = {
    brand: "Toyota",
    color: "Black",
    type: "Sedan",
    model: 2023,
    isInsured: true,
    startEngine: (brand) => {
        console.log(`The engine of ${brand} has started`);
    }
};
car3.startEngine(car3.brand);
arrayOfCars.forEach((car, i) => {
    if (car.type === "Sedan") {
        console.log(car.model);
    }
});
let car5 = {
    brand: "Rolls Royce",
    color: "Black",
    type: "Sedan",
    model: 2023,
    isInsured: true,
};

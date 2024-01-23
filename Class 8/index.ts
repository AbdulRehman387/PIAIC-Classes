let array:number[] = [1,2,3,4,5,6,7,8];
let array2 = array.map((num:number)=>"num * 2");
console.log(array2);

let arrayOfTempInCelsius:number[] = [35, 24, 41, 45, 16];
let arrayOfTempInFahrenheit:number[] = [];
arrayOfTempInFahrenheit = arrayOfTempInCelsius.map((temp:number)=>(temp * 9/5) + 32);
console.log(arrayOfTempInFahrenheit);

let evenOdd:string[] = [];
evenOdd = arrayOfTempInCelsius.map((numb:number)=>numb%2===0 ?"Even":"Odd")//lemda function

console.log(arrayOfTempInCelsius);
console.log(evenOdd);

let function1=(sum: ()=>any)=>{
    if (sum() % 2 === 0) {
        return "Even";
    }
    return "Odd";
}
let sum=()=>{
    let num1:number = 5;
    let num2:number = 2;
    let sum1:number = num1 + num2;

    return sum1;
}
console.log(function1(sum));

//ternary operator
let boolean:string = 45%2===0 ? "Even":"Odd";//if condition
console.log(boolean);
//filter can give an array of length equal to the array or less than
// you cannot update the value of array





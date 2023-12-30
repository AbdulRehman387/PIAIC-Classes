// function newFunction() {
//     console.log("inside tool");
// }
// console.log("1");
// console.log("2");
// console.log("3");
// newFunction();
// console.log("4");
// console.log("5");
// console.log("6");
// newFunction();
// function sum(){
//     var num1:number = 10;
//     var num2:number = 20;
//     var sum:number = num1 + num2;
//     console.log("Sum", sum);
    
// }
// console.log("7");
// sum();
// function staticSum(num3:number, num4:number, myName:string){//parameter
//     console.log(myName);
    
//     var sum2:number = num3 + num4;
//     console.log("Sum", sum2);

// }

// staticSum(11, 22, "Abdul Rehman");//argument
// staticSum(12, 24, "Ahmad");

function sum(num1:number, num2:number, num3?:number) {//optional parameter
    if (num3) {
        return num1 + num2 + num3;
    }
    else{
        return num1 + num2;
    }
}
console.log(sum(10,20));
console.log(sum(10, 20) + 15);
console.log(sum(12, 12, 20));

function hello(num5:number,num6:number) {
    var sum3:number = num5 + num6;
    return sum3 + 10;
}

console.log(hello(10, 20));

//arrow function
var sum4=(num7:number, num8:number):number=>{
    return num7 + num8;
}
console.log(sum4(12,43));






//Solution 1
let arrayOfNumbers1: number[] = [4, 6, 2, 3, 5, 1];
let target1: number = 7;
let a: number = 0;
let arrayOfindex1: number[] = [];
for (let i = 0; i < arrayOfNumbers1.length; i++) {
    for (let j = 0; j < arrayOfNumbers1.length; j++) {
        if (i != j) {
            if (arrayOfNumbers1[i] + arrayOfNumbers1[j] === target1) {
                arrayOfindex1 = [i,j];
                a++;
                break;
            }
        }
    }
    if (a === 1) {
        break;
    }
}
console.log(arrayOfindex1);

//Solution 2
let arrayOfNumbers2: number[] = [4, 6, 2, 3, 5, 1];
let target2: number = 7;
let arrayOfindex2: number[] = [];

let functionOfIndex = (arrayOfNumbers:number[],target:number)=>{
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            if (i != j) {
                if (arrayOfNumbers[i] + arrayOfNumbers[j] === target) {
                    arrayOfindex2 = [i,j];
                    return arrayOfindex2;
                }
            }
        }
    }
}

console.log(functionOfIndex(arrayOfNumbers2,target2));
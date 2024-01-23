let functionMedian = (num3:number[],)=>{
    if (num3.length % 2 === 0) {
        median = num3.length / 2;
        median = (num3[median - 1] + num3[median]) / 2;
        return median;
    }
    else{
        median = Math.floor(num3.length / 2);
        median = num3[median];
        return median;
    }
}
let num1:number[] = [2,5,23,53,24,6];
let num2:number[] = [4,8,27,32,9,11];
let num3:number[] = [];
let median;
num3 = num1.concat(num2).sort();
console.log(functionMedian(num3));
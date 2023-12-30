// {

//     let _name:string = "Abdul Rehman";
//     console.log(_name);
// }
    

// let _name:string = "Ahmad";
// console.log(_name);

let student1:string = "ali";
let student2:string = "umer";
let studentNames = ["ali", "umer", "hello"];
console.log(studentNames[2]);
console.log(studentNames.length+3);

//lastindex = arraylenth - 1
let rollNo:number[]= [1,2,3]
//array k index mein number ,array,  variable , function pass kar sakte hain

studentNames.push("hi");
console.log(studentNames);
console.log(studentNames.length);
console.log(studentNames.pop());
console.log(studentNames.push("hel"));

console.log(studentNames);


let array1= ["a","b"];
let array2= ["c","d"];
// array1.push(array2)

//pop returns sring or undefined
//push
//length returns number
//shift
//unshift returns number
//splice
//splice(position, no of elements to remove, elements to add)
//slice(starting position, ending position)
//indexOf


studentNames.shift();
console.log(studentNames.unshift("rei"));
console.log(studentNames);


let names: string[] = ["ali", "ahmad","naveed", "umer", "saim", "abdullah","tanveer"]
names.splice(names.length/2, 1)
console.log(names);
console.log(names.indexOf("saim"));


let marks:number[]=[10,20,23,15,13,65];
console.log(marks.sort());

let a= [10,20,30,40]
let b = a.slice(0)
a.splice(0,1)
console.log(b);












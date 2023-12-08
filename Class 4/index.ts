var name1:string = "Abdul Rehman";
var age:number = 16;
//Conditional
//If statement
if (age >18) {
    console.log(age);
}

var marks:number = 523;
if (marks >= 90) {
    console.log("A+");
}
if (marks >= 80) {
    console.log("A");
}
if (marks >= 70) {
    console.log("B+");
}
if (marks >= 60) {
    console.log("B");
}
//to fix the above issue we have the conditional if else-if
if (marks >= 90) {
    console.log("A+");
}
else if (marks >= 80) {
    console.log("A");
}
else if (marks >= 70) {
    console.log("B+");
}
else if (marks >= 60) {
    console.log("B");
}

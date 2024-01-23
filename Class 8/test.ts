let array6:string[] = ["apple","mango","grapes","banana","strawberry","Orange"];
let array3 = [];
array3 = array6.filter((fruit)=>{
    if (fruit.length === 5) {
        return fruit;
    }
})
console.log(array3);



let array4:string[] = ["a", "e", "b", "u", "n"];
let array5:string[] = [];
array5 = array4.filter((alph:string)=>{
    if (alph === "a" || alph === "e" || alph === "i" || alph === "o" || alph === "u") {
        return alph;
    }
})
array5 = array5.map((alph:string)=>alph.toUpperCase())
console.log(array5);



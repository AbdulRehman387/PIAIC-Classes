"use strict";
// let todoList:{
//     id:number,
//     text:string,
//     description:string
// }[] = [
//     {
//         id: 1,
//         text: "Wake Up",
//         description: "Wake Up"
//     },
//     {
//         id: 2,
//         text: "Go to School",
//         description: "Go to School"
//     },
//     {
//         id: 3,
//         text: "Have Lunch",
//         description: "Have Lunch"
//     }
// ]
// todoList.splice(todoList.length,0,{
//     id: 4,
//     text: "Take rest",
//     description: "Take Rest"
// })
// todoList.splice(todoList[1].id,1);
// todoList.splice(todoList[0].id,1,{
//     id: 2,
//     text: "Have Breakfast",
//     description: "Have Breakfast"
// });
// console.log(todoList);
//Spread Operator
// let todoList:{
//     id:number,
//     text:string,
//     description:string
// }[] = [
//     {
//         id: 1,
//         text: "Wake Up",
//         description: "Wake Up"
//     },
//     {
//         id: 2,
//         text: "Go to School",
//         description: "Go to School"
//     },
//     {
//         id: 3,
//         text: "Have Lunch",
//         description: "Have Lunch"
//     }
// ]
// let idToRemove:number = 2;
// let idToUpdate:number = 1;
// todoList.splice(todoList.length,0,{
//     id: 4,
//     text: "Take rest",
//     description: "Take Rest"
// })
// console.log(todoList);
// for (let i = 0; i < todoList.length; i++) {
//     if (todoList[i].id === idToRemove) {
//         todoList.splice(i,1);
//     }
// }
// console.log(todoList);
// for (let j = 0; j < todoList.length; j++) {
//     if (todoList[j].id === idToUpdate) {
//         todoList.splice(j,1,{
//             id: idToUpdate,
//             text: "Have Breakfast",
//             description: "Have Breakfast"
//         });
//     }
// }
// console.log(todoList);
let todoList = [
    {
        id: 1,
        text: "Wake Up",
        description: "Wake Up"
    },
    {
        id: 2,
        text: "Go to School",
        description: "Go to School"
    },
    {
        id: 3,
        text: "Have Lunch",
        description: "Have Lunch"
    }
];
let idToRemove = 2;
let idToUpdate = 1;
todoList.splice(todoList.length, 0, {
    id: 4,
    text: "Take rest",
    description: "Take Rest"
});
console.log(todoList);
todoList = todoList.filter((todo) => todo.id === idToRemove ? false : true);
console.log(todoList);
todoList = todoList.map((todo) => {
    if (todo.id === idToUpdate) {
        return Object.assign(Object.assign({}, todo), { text: "Have Breakfast", description: "Have Breakfast" });
    }
    return todo;
});
console.log(todoList);

let todoList:string[]=["Wake up", "Take bath", "Have breakfast", "Go to school",
"Have lunch", "Come back", "Take rest", "Go to Gym", "Have dinner", "Sleep"]

todoList.splice(1,1);
todoList.splice(todoList.indexOf("Have lunch"),1,"Prepare Lunch");
todoList.splice(todoList.indexOf("Sleep"),1);
console.log(todoList);

// let todo_list:string[]=[
//     "get up",
//     "have breakfast",
//     "do home task",
//     "tidy up your room",
//     "have launch"

// ]
// todo_list.splice(1,1);
// todo_list.splice(5,1,"prepare_launch");
// todo_list.splice(4,0,"do not sleep");
// console.log(todo_list);

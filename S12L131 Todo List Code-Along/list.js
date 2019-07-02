var todos = ["Buy new turtle"];

window.setTimeout(function() {

var input = prompt("What would you like todo?™");

while(input != "quit") {
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    addTodo();
  } else if(input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like todo?™");
}
console.log("You have quit the app.");

}, 500);

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  })
  console.log("**********");
}

function addTodo(){
  //ask for new todo
  var newTodo = prompt("Enter new todo:");
  //add to todos array
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo(){
  //ask for index of todo to be deleted
  var index = prompt("Enter number of Todo to delete:");
  //delete specified todo
  todos.splice(index,1);
  console.log("Deleted Todo");
}

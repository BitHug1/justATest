var userAge = prompt("What is your age?");

if(userAge < 0){
  console.log("You cannot be less than 0 years old!");
}

else if(userAge < 18){
console.log("Sorry, you are not old enough to enter the venue");
}

else if(userAge < 21){
  console.log("You can enter, but you cannot drink");
}

else if(userAge === 21){
  console.log("You may enter. Happy 21st birthday!");
}

else {
  console.log("Come on in. You can drink.");
}

if(userAge % 2 === 1){
  console.log("Furthermore, your age is an odd number!");
}

if(userAge % Math.sqrt(userAge) === 0) {
  console.log("Furthermore, your age is a perfect square!");
}

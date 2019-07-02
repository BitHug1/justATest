console.log("-10 to 19");
for(var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("Even 10 to 40");
for(var i = 10; i < 41; i+=2) {
    console.log(i);
}

console.log("Odd 300 to 333");
for(var i = 300; i < 333; i+=1) {
  if(i % 2 === 1) {
    console.log(i);
  }
}

console.log("Divisible by 5 and 3: 5 to 50");
for(var i =5; i < 50; i++) {
  if((i % 3 === 0) && (i % 5 === 0)) {
    console.log(i);
  }
}

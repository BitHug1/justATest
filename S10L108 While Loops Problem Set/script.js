var loop1 = -10;
var loop2 = 10;
var loop3 = 300;
var loop4 = 5;

console.log("-10 to 19");
while (loop1 <=19) {
  console.log(loop1);
  loop1++;
}

console.log("Even 10 to 40");
while (loop2 <=40) {
  console.log(loop2);
  loop2+=2;
}

 console.log("Odd 300 to 333");
 while (loop3 <=333) {
   if (loop3 % 2 != 0) {
     console.log(loop3);
   }
   loop3++;
 }

console.log("Divisible by 5 and 3, 5 to 50");
while (loop4 <=50) {
  if (((loop4 % 5) === 0) && (loop4 % 3) === 0) {
    console.log(loop4);
  }
  loop4++
}

function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
  var result = 1;
for(var i=2; i <= num; i++) {
  result *= i;
  console.log("i= " + i);
  // console.log("r= " + result);
}
return result;
}

function kebabToSnake(str) {
  //replace all dashes with underscores
  var res = str.replace(/-/g, "_");
  //return str
  return res;
}

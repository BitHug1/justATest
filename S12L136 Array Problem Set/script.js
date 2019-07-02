var revarray = ["a","b","c","d"];

function printReverse(){
for(var i = revarray.length-1; i >= 0; i--) {
    console.log(revarray[i]);
}
}

var sameArray = [1,1,1,1,1];
var diffArray = [1,2,1,1,1];

function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i <arr.length; i++){
    if(first !== arr[i]){
      return console.log("FALSE");
    }
  }
  return console.log("TRUE");
}

function isUniformEach(arr){
  var bool = true;
  var i = arr[0];
  arr.forEach(function(item){
    if(item !== i){
      bool = false;
    }
  })
  return bool;
}

var sumsum = [100,2,3,4,5,6,7,8,9];
function sumArray(arr){
  var result = 0;
  for(var i = 0; i <arr.length; i++){
    console.log(result + "-" + i);
    result += arr[i];
  }
  return result;
}

function sumArrayEach(arr){
  var result = 0;
  arr.forEach(function(item){
    console.log(result);
    result += item;
    console.log(result);
  })
  return result;
  }

var maxsum = [1, 2, 3, 4, 3, 2, 7, 5, 999, 10, 11];

  function maxArrayEach(arr){
    var i = arr[0];
    arr.forEach(function(item){
      console.log(item + " --- " + i)
      if(item > i){
        i = item;
        console.log(item + " --- " + i)
      }
    })
    return i;
  }

function maxArray(arr){
  var result = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > result){
      result = arr[i];
      console.log(i + " --- " + result);
    }
  }
  return result;
}

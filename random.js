function random(min, max){
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNums(min, max, count){
  var result = [];
  for(var i = 0; i < count; i++){
    result.push(random(min,max));
  }
  return result;
}

function onlyOdds(nums){
  return nums.filter(function(num){
    if(num % 2 === 1)
      return true;
  });
}

function squareOddsCubeEvens(nums){
  var res = nums.map(function(num){
    if(num % 2 === 0){
      return Math.pow(num, 3);
    }
    else {
      return Math.pow(num, 2);
    }
  });
  return res;
}

function sum(nums){
  var res = nums.reduce(function(acc, currentValue){
    return acc + currentValue;
  });
  return res;
}

function cube(nums){}
function square(nums){}
function fourth(nums){}

function multiMap(nums, fn){
  return nums.map(fn);
}

var cubes = multiMap([1,2,3], function(){
  return Math.pow(num, 3);
});

var squares = multiMap([1,2,3], function(){
  return Math.pow(num, 2);
});

exports.random = random;
exports.randomNums = randomNums;
exports.onlyOdds = onlyOdds;
exports.squareOddsCubeEvens = squareOddsCubeEvens;
exports.sum = sum;

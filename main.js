var obj = require('./random');
var x = obj.random(3, 8);

console.log('x:', x);

var nums = obj.randomNums(3, 8, 10);
console.log(nums);

var odds = obj.onlyOdds(nums);
console.log(odds);

var res = obj.squareOddsCubeEvens(nums)
console.log(res);

var res = obj.sum(nums)
console.log(res);

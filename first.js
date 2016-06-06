//primitive types
var i = 3;
var f = 3.14;
var s = "hello" + "world";
var b = i < 5;
var n = null;
console.log(i,f,s,b,n);
//object types
var nums = [3, 5, 7];
nums.push(9);
var nine = nums.pop();

for(var i = 0; i < nums.length; i++){
  console.log('i:', i, "i**i:", i*i, 'pow:', Math.pow(i,3))
}

var i = 0;
while(i < nums.length){
  console.log('while i:', i);
  i++;
}

nums.forEach(function(num, idx, arr)
{
  console.log('num:', num, 'idx:', idx, 'arr:', arr);
});

for(var v of nums){
  console.log('for in v:', v);
}

function sumFor1(a){
  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += a[i];
  }

  return sum;
}

function sumFor2(a){
  var sum = 0;
  for(var num of nums){
    sum += num;
  }
  return sum;
}

function sumFor3(a){
  var sum = 0;

  for(var index in nums){
    sum += nums[index];
  }
  return sum;
}

var x1 = sumFor1(nums);
var x2 = sumFor2(nums);
var x3 = sumFor3(nums);
console.log(x1, x2, x3);

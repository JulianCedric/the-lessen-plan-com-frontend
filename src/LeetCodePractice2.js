//2021.07.16 - FRI:

var array = [1,2,3,4];

function runningSum(nums) {

  let sum = 0;
  let arr = [];

  for (let i=0; i<nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }
  console.log(arr);

  return arr;

}

console.log("\n Result:", runningSum(array)); 
// TC O(n^2) SC O(1)
// var twoSum = function(nums, target) {
//   console.log(nums.lenght);

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; i < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//           let sum = [i, j]
//           return 
//       }
//     }
//   }
// };


// TC O(n) SC O(n)
var twoSum = function(nums, target) {
  let intObj = {}
  for (let i = 0; i < nums.length; i++) {
    intObj[nums[i]] = i
  }

  let compliment = 0
  for (let i = 0; i < nums.length; i++) {
    compliment = target - nums[i]
    if (intObj.hasOwnProperty(compliment) && intObj[compliment] !== i) {
      return [i, intObj[compliment]]
    }
  }
  return null
};

console.log(twoSum([2,7,11,15], 9));
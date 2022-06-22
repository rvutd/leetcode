var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  
  let i = 0;
  
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return nums;
};

// console.log(removeDuplicates([1,1,2]));


var names = [1, 1, 2, 2 ,2, 3];

var uniq = names.reduce(function(a,b){
  if (a.indexOf(b) < 0 ) a.push(b);
  return a;
},[]);

console.log(uniq, names)

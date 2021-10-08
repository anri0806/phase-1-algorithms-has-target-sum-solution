function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNum = new Set()
  for(let number of array){
    const foundIt = target - number
    if(seenNum[foundIt]) return true;
    seenNum[number] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  time: one iteration, therefore O(n)
  space: seenNum grows as input is larger, O(n)
*/

/* 
  Add your pseudocode here
  First, create empty object or set() to store seen num
  Second, iterate num in array
  Third, assign iterated num = target num - num we are looking for 
  to variable
  Fourth, if empty object or set() has above variable 
  return true
  ** Save the current number in the seen num variable
  Fifth, if iterated until the end, no matching num
  therefore return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 3, 7], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

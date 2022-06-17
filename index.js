function hasTargetSum(array, target) {
  // Write your algorithm here
   const availableNumbers = {};
  
    for (const number of array) {
      
      const num = target - number;
      if (num in availableNumbers) return true;
      availableNumbers[number] = true;
    }
  
    return false;
  }
/* 
  Write the Big O time complexity of your function here
*/
//Linear O(n)
/* 
  Add your pseudocode here
*/
//iterate through every element in the array.
//if the number is in the array return true
/*
  Add written explanation of your solution here
*/
//If we do for (const number of array), we iterates over all the values of the array, with each iteration having a value stored in the array.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

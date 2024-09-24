// You get an array of numbers, return the sum of all of the positives ones.



function positiveSum(arr) {
    return arr.reduce((sum,num) => num > 0 ? sum + num : sum, 0);
    
  }
  
  
  // Example usage:
  // const exampleArray = [1, -4, 7, 12];
  // console.log(sumOfPositives(exampleArray));
  // Output: 20
  
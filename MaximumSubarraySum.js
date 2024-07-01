var maxSequence = function(arr){
 
    let maxSum      = 0;
    let currentSum  = 0;
    
    if (arr.length === 0 || arr < 0) {
      return 0;
    }
    
    for (let el of arr) {
      currentSum += el;
      
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
      
      if (currentSum < 0) {
      currentSum = 0;
      }
      
    }
    
      return maxSum;
    
}
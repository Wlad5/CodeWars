function getSum(a, b) {
  
    let sum = 0;
    let numbersBetween = [];
    
    if (a === b) {
      return a;
    }
    
    if (a <= b) {
    
      for (let i = a; i <= b; i++) {
        numbersBetween.push(i)
      }
    
    } else {
      
      for (let i = a; i >= b; i--) {
        numbersBetween.push(i)
      }
    
    }
    
    for (let i of numbersBetween) {
      sum += i;
    }
    
    return sum
  
  }
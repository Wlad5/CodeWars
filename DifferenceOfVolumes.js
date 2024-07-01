function findDifference(a, b) {
    
    let prodA = 1;
    let prodB = 1;
    
    for (let i of a) {
      prodA *= i;
    }
    
    for (let i of b) {
      prodB *= i;
    }
    
    return Math.abs(prodA - prodB);
  }
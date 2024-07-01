function checkForFactor (base, factor) {
  
    const remainder = base % factor;
    
    if (remainder === 0) {
      
      return true;
    
    } else {
    
      return false;
    
    }
}
function deleteNth(arr,n){
  
    let resultArr = [];
    
    let counterMap = {};
    
    for (let num of arr) {
      
        if (counterMap[num]) {
        
            counterMap[num]++;
        
        } else {
         
            counterMap[num] = 1;
        
        }
      
        if (counterMap[num] <= n) {
            
            resultArr.push(num);
        
        }
    
    }
    
    return resultArr;
  
}
    
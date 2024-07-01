class RomanNumerals {
  
    static romanNumeralsMap = [
      { value: 1000,  symbol: 'M' },
      { value: 900,   symbol: 'CM' },
      { value: 500,   symbol: 'D' },
      { value: 400,   symbol: 'CD' },
      { value: 100,   symbol: 'C' },
      { value: 90,    symbol: 'XC' },
      { value: 50,    symbol: 'L' },
      { value: 40,    symbol: 'XL' },
      { value: 10,    symbol: 'X' },
      { value: 9,     symbol: 'IX' },
      { value: 5,     symbol: 'V' },
      { value: 4,     symbol: 'IV' },
      { value: 1,     symbol: 'I' },
    ]
    
    static toRoman(num) {
      
      let resultString = '';
      
      for (let val of this.romanNumeralsMap) {
        
        while (num >= val.value) {
        
          resultString += val.symbol;
          num -= val.value;
        
        }
        
      }
      
      return resultString
      
    }
  
    static fromRoman(str) {
      
      let result  = 0;
      
      let index   = 0;
      
      while (index < str.length) {
        
        let matched = false;
      
        for (let {value, symbol} of this.romanNumeralsMap) {
          
          if (str.startsWith(symbol, index)) {
          
            result  += value;
            index   += symbol.length;
            matched = true;
            break
          
          }
        
        }
        
      }
      
      return result;
      
    }
  
}
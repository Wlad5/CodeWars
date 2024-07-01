decodeMorse = function(morseCode){
  
    let trimmedInput = morseCode.trim();
    let splittedInput = trimmedInput.split('   ');
    let decodedWords = [];
    
    splittedInput.forEach(word => {
      
      let splittedWord = word.split(' ');
      
      let decodedWord = splittedWord.map(morseLetter => MORSE_CODE[morseLetter] || '').join('');
      
      decodedWords.push(decodedWord);
    })
    
    return decodedWords.join(' ');
}




function isFirstLetter(letter, word){
  let fletter = word.slice(0,1);
  console.log( `inside of isFirstLetter` );
  if ( letter === fletter ) {
    console.log( `The letter ${letter} equals the first letter of the word ${word}` );
    return true;
  }
  else {
    console.log( `The letter ${letter} DOES NOT equals the first letter of the word ${word}` );
    return false;
  }
}

isFirstLetter(`a`, `apple`);
isFirstLetter(`z`, `apple`);
console.log( `console log test first letter true`, isFirstLetter('a', 'apple') );
console.log( 'console log test first letter false', isFirstLetter('z', 'apple') );

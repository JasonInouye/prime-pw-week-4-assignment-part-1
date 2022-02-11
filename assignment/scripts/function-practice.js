console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log( `Hello World!` );
  return `Hello World!`;
}
// Call the function to test
// console.log('Test - should say "Hello World!"', hello());
hello();


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log( `inside helloName lookp` );
  return `Hello ${name}!`;
}
// Remember to call the function to test
// console.log( `Hello`, helloName( `Jason` ) );
console.log( `console log test of helloName:`,helloName(`Jason`));
helloName(`Jason`);


// 3. Function to add two numbers together & return the result
function addNumbers( num0,num1 ) {
  console.log( `inside of addNumbers` );
  let answer = num0 + num1;
  return `${num0}+${num1}=${answer}`;
  // return firstNumber + secondNumber;
}
console.log( `console log test adding number 3 + 4 =`, addNumbers( 3,4 ) );
addNumbers( 3,4 );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0,num1,num2 ) {
  console.log( `inside of multiplyThree` );
  let answer = num0 * num1 * num2;
  return `${num0}*${num1}*${num2}=${answer}`;
  // return firstNumber + secondNumber;
}

console.log( `console log test multiplying 3 x 4 x 5 =`, multiplyThree( 3,4,5 ) );
multiplyThree( 3,4,5 );


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return `True, number is positive`;
  } // greater than 0
  else {
    return `False, number is negative or 0`;
  } // otherwise false
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
// console.log( 'isPositive - should say true', isPositive(-5) );
// console.log( 'isPositive - should say false', isPositive(0) );
// console.log( 'isPositive - should say false', isPositive(-3) );

console.log( `console log test isPositive 5`,isPositive(5) );
console.log( `console log test isPositive 0`,isPositive(0) );
console.log( `console log test isPositive -5`,isPositive(-5) );
isPositive(5);
isPositive(0);
isPositive(-5);



// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

// let videoGameChar = [ `Sonic` , `Master Chief` , `Crash` , `Link`]; False Test
let videoGameChar = [ `Mario` , `Sonic` , `Master Chief` , `Crash` , `Link`];
let lastCharacter = videoGameChar[videoGameChar.length - 1];

function lastItem( lastCharacter ){
  console.log(`inside of lastCharacter`) ;
  return `The last character in the array is ${lastCharacter}`;
}

lastItem(lastCharacter);
lastItem(); // will result in Undefined
console.log( `console log test the last character`, lastItem(lastCharacter) );
console.log( `console log test UNDEFINED character`, lastItem() );

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

const favCharacter = 'Mario'

function favCharacterExist(){
  console.log( `in favCharacterExist` );
  for ( let myFav of videoGameChar ) {
    console.log( myFav );
    if ( myFav === favCharacter ) {
      return true;
    }
    else {
      return false;
    }
  }
}

favCharacterExist();
console.log( `console log test favCharacterExist`, favCharacterExist());

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
let word = `apple`;
let fletter = word.slice(0,1);

function isFirstLetter(letter, word){
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


// 9. Function to return the sum of all numbers in an array
let totalNumber = [];

// TODO: loop to add items
function addNumb( newNumb ){
  console.log( `in addNumb`, newNumb );
  totalNumber.push( newNumb );
  return newNumb;
};

function sumAll(){
  let sum = 0;
  for (var i = 0; i < totalNumber.length; i++) {
    console.log( `for loop of totalNumber`, totalNumber[ i ]);
    sum += totalNumber[ i ];
  }
  console.log( `The sum is`, sum );
}

addNumb(1);
addNumb(4);
addNumb(8);
addNumb(7);
addNumb(21);

sumAll();




// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

const inputArray=[3,4,-7,8,-6,12,-2];
let outputArray = [];

function addToOutput( newOutput ){
  console.log( `in addNumb`, newOutput );
  outputArray.push( newOutput );
  return newOutput;
};

function positiveOnly (){
  for (let pOnly of inputArray ) {
    console.log( pOnly );
    if ( pOnly > 0 ) {
      console.log( `This is a positive value`, pOnly );
      addToOutput(pOnly);
      return `adding ${pOnly} to outputArray`;
    }
    else {
      console.log( `${pOnly} is not a positive value` );
    }
  }
}

positiveOnly();



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

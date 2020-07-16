// First approach
let number = 12345;


function reverseNumber(number) {
  return `${number}`.split('').reverse().join('');
}

console.log(reverseNumber(number));

// second approach

function reverseNumber(number) { 

let reverseNumber = 0;

  while( number !== 0 ){
    remainder = number % 10;
    reverseNumber = (reverseNumber * 10) + remainder;
    number = parseInt(number / 10);
  }
  
  return reverseNumber;
}

console.log(reverseNumber(124));
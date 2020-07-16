//Task 1. 

//unique("2 4 7 8 10") => 2 // Third number is odd, while the rest of the numbers are even

//unique("1 2 1 1") => 1 // Second number is even, while the rest of the numbers are odd

//Вивести індекс унікального значення, яке відрізняється від інших.


// First aproach 

let str = '1 1 1 3 8 1';

function showIndexUniqueNumber(str) {
  let odd = {};
  let even = {};

  str.split(' ').forEach((el, index, arr) => {
   if(el % 2 === 0) {
    'index' in even ? Object.assign(even, { repeat: true }) : Object.assign(even, { index: index, value: el, repeat: false });
   } else {
    'index' in odd ? Object.assign(odd, { repeat: true }) : Object.assign(odd, { index: index, value: el, repeat: false });
   }
 });

 return odd.repeat ? even.index : odd.index;
}

console.log(showIndexUniqueNumber(str));

// Second aproach

function showIndexUnique(str) {
  let oddNumbers = [];
  let evenNumbers = [];

  str.split(' ').forEach((el, index, arr) => {
    el % 2 === 0  ? evenNumbers.push({ el, index }) : oddNumbers.push({ el, index });
  });

  console.log(oddNumbers.length > 1 ? evenNumbers[0]?.index : oddNumbers[0].index);
  return oddNumbers.length > 1 ? evenNumbers[0]?.index : oddNumbers[0].index;
  
}

showIndexUnique(str);


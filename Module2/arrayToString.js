// var input= [
//   [0, 1, 2, 3, 4],
//   [10, 11, 12, 13, 14],
//   ]
  
  //output // '0,1,2,3,4\n' +
  //'10,11,12,13,14'
  

// 1. First solution

let arrToString = arr => arr.join(`\n`)

// 1. Second solutuion

let arrToString2 = arr => arr.reduce((acum, el) => `${acum}${el}\n` , '')

let input = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
];

console.log(arrToString(input));
console.log(arrToString2(input));
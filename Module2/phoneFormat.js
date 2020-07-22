//Task 5.

//Створити функцію, яка перетворює масив в телефонний номер у форматі (ххх) ххх-хх-хх

//createNumber([0, 9, 3, 1, 2, 3, 4, 5, 6, 7]) // => returns "(093) 123-45-67"


function createNumber(arr) {
  arr = arr.join('');
  return `(${arr.slice(0, 3)}) ${arr.slice(3, 6)}-${arr.slice(6, 8)}-${arr.slice(8, 10)}`
}

console.log(createNumber([0, 9, 3, 1, 2, 3, 4, 5, 6, 7])) // => returns "(093) 123-45-67"
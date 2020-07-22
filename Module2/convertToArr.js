// 1. With the available built-in method

let convToArr = (arr) => Object.entries(arr);

console.log(convToArr({ a: 2, b: 3 })); //  [["a", 2], ["b", 3]]
console.log(convToArr({ name: 'Hello', age: 12 })); // [["name", "Hello"], ["age", 12]]
console.log(convToArr({})); // []

// 2. handwritten method

function convToArr2(obj) {
  const arr = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      arr.push([key, obj[key]])
    }
  }

  return arr;
}

console.log(convToArr2({ a: 2, b: 3 })); //  [["a", 2], ["b", 3]]
console.log(convToArr2({ name: 'Hello', age: 12 })); // [["name", "Hello"], ["age", 12]]
console.log(convToArr2({})); // []

// The first approach

function unique(arr) {
  function checkIfExist(value, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
    return false;
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    !checkIfExist(arr[i], newArr) ? newArr.push(arr[i]) : null;
  }
  return newArr;
}


const s = [1, 3, 4, 5, 7, 7, 9, 6, 6, 0, 'f', 'f'];

console.log(unique(s));


// The second approach

function unique2(arr) {
  return arr.filter((el, index, arr) => arr.indexOf(el) === index);
}

const b = [1, 3, 4, 5, 7, 7, 9, 6, 6, 0, 'f', 'f'];

console.log(unique2(b));


// The third approach

function unique3(arr) {
  return [...new Set(arr)];
}

const c = [1, 3, 4, 5, 7, 7, 9, 6, 6, 0, 'f', 'f'];

console.log(unique3(c));


// The fourth approach

// WITH OBJECT -----------------------

let values2 = ['de', { name: 'Bob' }, { name: 'Bob' }, { name: 'John' }, 43, 13, 4, 4, undefined, null, { b: undefined }, { m: undefined }];

// fucntion for sorting keys
function sortObjectByKeys(obj) {
  let newObj = {};
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    Object.keys(obj).sort().forEach((el) => {
      if (Object.prototype.toString.call(obj[el]) === '[object Object]') {
        newObj[el] = sortObjectByKeys(obj[el])
      } else {
        newObj[el] = obj[el];
      }
    })
  } else {
    newObj = obj;
  }

  return newObj;
}

function unique(arr) {
  return arr.filter((el, i, arr) =>
  arr.findIndex((elem, i, err) => 
  JSON.stringify(sortObjectByKeys(el), (key, value) => 
  typeof(value) === 'undefined' ? null : value)
  === JSON.stringify(sortObjectByKeys(elem), ( key, value) => 
  typeof(value) === 'undefined' ? null : value)) === i)
}

console.log(unique(values2)); //  ["de", { name:"Bob" }, { name:"John" }, 43, 13, 4, undefined, { b:undefined }, { m:undefined }];
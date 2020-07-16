Array.prototype.reduce = function(func, initialValue) {
  if(!this.length && arguments.length === 1) throw new Error('empty array with and no initial value');
  let accum = arguments.length === 2 ? initialValue : this[0];

  for(let i = 0; i < this.length; i++) {
    accum = func(accum, this[i], i, this);
  }

  return accum;
}

let arr = [1, 2, 3];

let b = arr.reduce((acum, el, ind, arr) => {
  return acum + el; 
}, 1);

console.log(b);
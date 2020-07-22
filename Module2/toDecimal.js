function toDecimal(arr) {
  let ex = 0;
  let a = 2**ex;
  let result = 0;

  arr.reverse().forEach((el) => {
    if(el) {
      result += el * a;
    }
    ex++;
    a = 2**ex; // forgot this line of code ))
  })

  return result;
}

console.log(toDecimal([1, 1, 1])); // 7
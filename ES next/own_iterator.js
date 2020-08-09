Number.prototype[Symbol.iterator] = function () {
  let initialValue = 1;
  return {
    next: () => {
      if (initialValue === +this.toString()) {
        return {
          value: this,
          done: true,
        }
      } else {
        return {
          value: ++initialValue,
          done: false
        };
      }
    },
  };
};


console.log([...9]); // [ 2, 3, 4, 5, 6, 7, 8, 9 ]
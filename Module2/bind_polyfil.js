//Task 6.
//Написати поліфіл на bind для Function.prototyp, використовувати тільки синтаксис ES5.

const obj = {
  name: 'nazar'
};

function hello(a, b) {
  console.log('hello', this.name, a, b);
}

Function.prototype.bind = function () {
  const self = this;
  const context = arguments[0];
  const args = [].slice.call(arguments, 1);
  return function () {
    return self.apply(context, args.concat([].slice.call(arguments, 0)))
  }
}

let func = hello.bind(obj, 8);

func(4);
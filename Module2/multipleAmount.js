//Task 1.
//myltiplyAmount(42) === 1 // бо 4*2 = 8// і 8 має одну цифру
//myltiplyAmount(777) === 4 // бо 7*7*7 = 343, 3*4*3 = 36, // 3*6 = 18, і нарешті 1*8 = 8
//myltiplyAmount(5) === 0 // бо це одразу одна цифра

//Вивести число - скільки разів треба перемножити цифри числа поки не отримаємо одну цифру.

function myltiplyAmount(number) {
  if(!arguments.length || arguments.length > 1) {
    return new Error('should pass a one argument')
  }
  
    let amount = 0;
    while(number > 9) {
      number = `${number}`.split('').reduce((acum, elem) => {
        return acum * elem;
      }, 1);
      amount++;
    }
  
    return amount;
  };
  
  console.log(myltiplyAmount(42)) // 1
  console.log(myltiplyAmount(777)) // 4
  console.log(myltiplyAmount(5)) // 0
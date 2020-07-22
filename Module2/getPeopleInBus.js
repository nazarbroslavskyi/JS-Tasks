//Порахувати кількість людей в автобусі після кінцевої - параметри це масив масивів - [ зайшли, вийшли ].
//На першій зупинці ніхто не виходить.

function getPeopleInBus(arr) {
  return arr.flat().reduce((acum, el, index) => index % 2 === 0 ? acum + el : acum - el, 0);
}

console.log(getPeopleInBus([[6, 0], [3, 5], [5, 7]])) // 2

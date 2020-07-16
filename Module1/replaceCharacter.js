function replaceCharacters(str) {
  let newString = '';
  let substituteForUnique = '(';
  let substituteForNoNUnique = ')'
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) !== -1 && str.indexOf(str[i], str.indexOf(str[i]) + 1) !== -1 ) {
      newString += substituteForNoNUnique;
    } else {
      newString += substituteForUnique;
    }
  }
  return newString;
}

console.log(replaceCharacters('recede'));
console.log(replaceCharacters('lol'));
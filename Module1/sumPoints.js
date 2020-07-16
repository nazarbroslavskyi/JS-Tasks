function Player(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}

var iverson = new Player("Iverson", "76ers", 11.2);
var jordan = new Player("Jordan", "bulls", 20.2);


const sumPoints = function() {
  // return [].reduce.call(arguments, (acum, el) =>  acum + el.ppg, 0);
  return [...arguments].reduce((acum, el) =>  acum + el.ppg, 0);
}

console.log(sumPoints(jordan, iverson));
  
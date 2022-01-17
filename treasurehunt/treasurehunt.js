// uh oh, okay, treasure, bomb, wave emoj, X, nope, nada, whirlpool

var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)

const treasure = (location) => {
if (treasureLocation === location) {
document.getElementById(treasureLocation).innerHTML = "👑";
  alert ("The Treasure!!")
}
if (bombLocation === location) {
document.getElementById(bombLocation).innerHTML = "💣";
  alert ("OFF to Davey Jones Locker!!")
}
if (treasureLocation === bombLocation) {
document.getElementById(treasureLocation).innerHTML = "👎";
  alert ("The Treasure!!")
}
}
const reset = (reset) => {
  document.getElementById(treasureLocation).innerHTML= "X";
  document.getElementById(bombLocation).innerHTML= "X";
  }
  var counter = 8
  counter = counter - 1
  document.getElementById("counter").innerHTML = `counter:${counter}`
  treasure(0)

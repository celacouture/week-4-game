//global variables
var wins=0;
var losses=0;
var total=0;
var targetNumber=Math.floor((Math.random()*100)+19);
console.log(targetNumber);

var gemBlue=Math.floor((Math.random()*12)+1);
var gemGreen=Math.floor((Math.random()*12)+1);
var gemPink=Math.floor((Math.random()*12)+1);
var gemGold=Math.floor((Math.random()*12)+1);
console.log(gemBlue, gemGreen, gemPink, gemGold);
//button clicks
$( ".btn" ).click(function() {
  alert( "works" );
});

//functions

var genNum = Math.floor(Math.random() * 12);
var btnOne = genNum;
	console.log(btnOne);
// TEST ^^
var btnTwo;
var btnThree;
var btnFour;
//------------------------

var winningNum;
// -winningNum (19 - 120)
//how do I ensure random winningNum is within range?
//Google: "javascript random number range"

var totalNum; //keypress + keypress + keypress

//find sum
//A + B = C
//C + X = Y
//Y +....
//jQuery Calculator example?


var win; 
// totalNum = winningNum

var lose;
// totalNum > winningNum

var totalWins;
var totalLosses;



document.getElementByID('winNum').innerHTML = winningNum;
document.getElementByID('sum').innerHTML = totalNum;
document.getElementByID('wins').innerHTML = totalWins;
document.getElementByID('losses').innerHTML = totalLosses;
//User jQuery to auto push ^ values instead of document.GEBID








// reset function on lose or win
	// -four new hidden values
	// -generate new winningNum
	// -reset totalNum
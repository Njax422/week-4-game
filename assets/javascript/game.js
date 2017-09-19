var btnOne = Math.floor(Math.random() * 12);
	console.log("btnOne: " + btnOne);

var btnTwo = Math.floor(Math.random() * 12);
	console.log("btnTwo: " + btnTwo);

var btnThree = Math.floor(Math.random() * 12);
	console.log("btnThree: " + btnThree);

var btnFour = Math.floor(Math.random() * 12);
	console.log("btnFour: " + btnFour);

var winningNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log("winningNum: " + winningNum);


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

var totalWins = 0;
var totalLosses = 0;


$( "#winNum" ).html(winningNum);
$( "#sum" ).html(totalNum);
$( "#wins" ).html("Wins: " + totalWins);
$( "#losses" ).html("Losses: " + totalLosses);




// reset function on lose or win
	// -four new hidden values
	// -generate new winningNum
	// -reset totalNum
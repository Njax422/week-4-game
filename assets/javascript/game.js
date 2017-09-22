var crystalGame = {
  btnOne: 0,
  btnTwo: 0,
  btnThree: 0,
  btnFour: 0,
  winningNum: 0,
  totalNum: 0,
  totalWins: 0,
  totalLosses: 0,

  reset: function() {
    this.btnOne = Math.ceil(Math.random() * 12);
    console.log(this.btnOne);
    this.btnTwo = Math.ceil(Math.random() * 12);
    console.log(this.btnTwo);
    this.btnThree = Math.ceil(Math.random() * 12);
    console.log(this.btnThree);
    this.btnFour = Math.ceil(Math.random() * 12);
    console.log(this.btnFour);
    this.winningNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#winNum").html("<h4 id='winNum' class='text-center'>" + this.winningNum + "</h4>");
    console.log(this.winningNum);
    this.totalNum = 0;
    $("#sum").html("<h4 id='sum' class='text-center'>0</h4>");
  },

  gamePlay: function() {
    this.reset();
    $("#winNum").html("<h4 id='winNum' class='text-center'>" + this.winningNum + "</h4>");
    $( "#button-1" ).on("click", function() {
      crystalGame.totalNum += crystalGame.btnOne;
      $("#sum").html("<h4 id='sum' class='text-center'>" + crystalGame.totalNum + "</h4>");
      crystalGame.winOrLose();
      console.log(this);
    }) 
    $( "#button-2" ).on("click", function() {
        crystalGame.totalNum += crystalGame.btnTwo;
      $("#sum").html("<h4 id='sum' class='text-center'>" + crystalGame.totalNum + "</h4>");
      crystalGame.winOrLose();
    }) 
    $( "#button-3" ).on("click", function() {
        crystalGame.totalNum += crystalGame.btnThree;
      $("#sum").html("<h4 id='sum' class='text-center'>" + crystalGame.totalNum + "</h4>");
      crystalGame.winOrLose();
    }) 
    $( "#button-4" ).on("click", function() {
        crystalGame.totalNum += crystalGame.btnFour;
      $("#sum").html("<h4 id='sum' class='text-center'>" + crystalGame.totalNum + "</h4>");
      crystalGame.winOrLose();
    })
  },

  winOrLose: function() { 
    if (this.totalNum === this.winningNum) {
      this.totalWins++;
      $("#wins").html("<h4 id='wins' class='text-center'>Wins: " + this.totalWins + "</h4>");
      this.reset();
    } else if (this.totalNum > this.winningNum) {
      this.totalLosses++;
      $("#losses").html("<h4 id='losses' class='text-center'>Losses: " + this.totalLosses + "</h4>");
      this.reset();
    }
  }
}

crystalGame.gamePlay();













//  ingNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// 	console.log("winningNum: " + winningNum);


// var totalNum = 0; //keypress + keypress + keypress
// //find sum
// //A + B = C
// //C + X = Y
// //Y +....
// //jQuery Calculator example?

// var win; 
// // totalNum = winningNum

// var lose;
// // totalNum > winningNum

// var totalWins = 0;
// var totalLosses = 0;


// $( "#winNum" ).html(winningNum);
// $( "#sum" ).html(<h4 id='sum' class='text-center'>" + totalNum + "</h4> ");
// $( "#wins" ).html("Wins: " + totalWins);
// $( "#losses" ).html("Losses: " + totalLosses);





// $( "#button-1" ).on("click", function() {
// 	totalNum += btnOne;
// 	console.log(totalNum);
// }) 
// $( "#button-2" ).on("click", function() {
// 	totalNum += btnTwo;
// }) 
// $( "#button-3" ).on("click", function() {
// 	totalNum += btnThree;

// }) 
// $( "#button-4" ).on("click", function() {
// 	totalNum += btnFour;

// }) 




// // reset function on lose or win
// 	// -four new hidden values
// 	// -generate new winningNum
// 	// -reset totalNum
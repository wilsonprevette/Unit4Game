//Setting variables for score and wins/losses
var score = 0;

var wins = 0;

var losses = 0;

//Setting variable for goal number
var goalNum = Math.floor(Math.random() * 90) + 10;

$("#mysteryNum").html(goalNum);

//Set variable for randomized crystal values
var randomCrystalNum = Math.floor(Math.random() * 12) + 1;

//Set a function for restarting game
function restartGame() {
	score = 0;
	goalNumb = Math.floor(Math.random() * 90) + 10;

	$("#mysteryNum").html(goalNum);
	$("#myScore").html(score);
};

//Set on click function for crystals and set random values to them that reset
$(".crystals").on("click", function() {

//Set if-else statement for win/loss
if (score === goalNum) {
	alert("Winner!");
	resetGame();
}

else (score >= goalNum) {
	alert("Try Again!")
	resetGame();
}

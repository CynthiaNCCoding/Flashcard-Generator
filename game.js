var BasicCard = require("./BasicCard.js")
// var ClozeCard = require("./ClozeCard.js");
const fs = require("fs");
// var questions = require("./FlashcardQuestions.json");

var inquirer = require("inquirer");

var cardData = {};
var cards = [];

var stdin = process.openStdin(); 
const tty = require('tty');
console.log(tty);
tty.setRawMode(true);    

function playGame() {
	var i = 0;
	var showingFront = true;

	console.log("press any key to start.");

	stdin.on('keypress', function (chunk, key) {
		// if i >= cards length say game over
		// otherwise, if showingFront, show front of current card indicated by i
		// set showingFront to false
		// else, if showingFront is false, show back of current card indicated by i
		// increment i
		if (i >= cards[i].length) {
			console.log("Game Over!");
			exit();
		} else if (showingFront) {
			console.log(cards[i].front);
			showingFront = false;
		} else {
			console.log(cards[i].back);
			showingFront = true;
			i++;
		}
	});
}

fs.readFile('./FlashcardQuestions.json', function(err, data) {
  if (err) throw err;
  cardData = JSON.parse(data);
  for (var i = 0; i < cardData.length; i++) {
  	if (cardData[i].type != "basic") {
  		continue;
  	}
  	cards.push(cardData[i]);
  }
  playGame();





});



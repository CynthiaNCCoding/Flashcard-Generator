// ClozeCard constructor. It should accept text and cloze arguments.
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"


function ClozeCard(text, cloze) {
	var trigger = false;
	this.cloze = cloze;
	this.fullText = text;
	this.partial = text.replace(cloze, "_______");
	// if (this.partial !== text) {
	// 	trigger = true;
	// }
	// if (trigger == false) {
	// 	console.log("ERROR! That is not the correct answer.");
	// 	this.cloze = "ERROR!";
	// 	this.fullText = "ERROR!";
	// 	this.partial = "ERROR!";
	// 	return;
	// }
}

// var brokenCloze = new ClozeCard("This doesn't work", "oops");


module.exports = ClozeCard;



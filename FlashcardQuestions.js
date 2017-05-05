// Basic Flashcard


var questionOne = new BasicCard(
	'English translation for "Burrito"', 'Little Donkey');
console.log(questionOne.front);
console.log(questionOne.back); 
console.log('-------------------------');

var questionTwo = new BasicCard(
	'Chipotle, habanero and poblano are all types of what?', 'Chillis');
console.log(questionTwo.front);
console.log(questionTwo.back);
console.log('-------------------------');

var questionThree = new BasicCard(
	'What is the name of a cold drink made from rice and almonds?', 'Horachata');
console.log(questionThree.front);
console.log(questionThree.back);
console.log('-------------------------');

var questionFour = new BasicCard(
	'The rich, delicious Mexican sauce made with chocolate is called…', 'Mole');
console.log(questionFour.front)
console.log(questionFour.back);
console.log('-------------------------');

var questionFive = new BasicCard(
	'What kind of beans are traditionally used to make Frijoles (refried beans)?', 'Pinto beans');
console.log(questionFive.front);
console.log(questionFive.back);
console.log('-------------------------');

// Cloze Flashcards

var clozeQuestionOne = new ClozeCard(
	'Tortillas are made of two ingredients, maize and water', 'maize');
console.log(clozeQuestionOne.full);
console.log(clozeQuestionOne.cloze); 
console.log(clozeQuestionOne.partial); 
console.log('-------------------------');

var clozeQuestionTwo = new ClozeCard(
	'Huevos is the Spanish word for eggs', 'eggs');
console.log(clozeQuestionTwo.full);
console.log(clozeQuestionTwo.cloze); 
console.log(clozeQuestionTwo.partial); 
console.log('-------------------------');

var clozeQuestionThree = new ClozeCard(
	'Day of the Dead is a holiday which celebrates the lives of one’s ancestor', 'Day of the Dead');
console.log(clozeQuestionThree.full);
console.log(clozeQuestionThree.cloze); 
console.log(clozeQuestionThree.partial); 
console.log('-------------------------');

var clozeQuestionFour = new ClozeCard(
	'Flan is the popular milk-based dessert that is usually covered in caramel.', 'Flan');
console.log(clozeQuestionFour.full);
console.log(clozeQuestionFour.cloze); 
console.log(clozeQuestionFour.partial); 
console.log('-------------------------');

var clozeQuestionFive = new ClozeCard(
	'Ajo is the Spanish word for garlic, a key ingredient in many savory dishes from Mexico and around the world.', 'Ajo');
console.log(clozeQuestionFive.full);
console.log(clozeQuestionFive.cloze); 
console.log(clozeQuestionFive.partial); 
console.log('-------------------------');

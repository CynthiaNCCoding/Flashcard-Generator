    // 1) Create a .js constructor file (front and back, ie: question and answer)
    // BasicCard constructor. It should accept front and back arguments.


 function BasicCard(front, back) {
 console.log(this);
 	this.front = front;
 	this.back = back;
}


// var moreBasics = new BasicCard ("question", "answer" );  

// console.log(moreBasics instanceof BasicCard);  
// console.log(moreBasics.front, moreBasics.back);


module.exports = BasicCard;








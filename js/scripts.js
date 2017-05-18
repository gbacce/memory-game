$(document).ready(function(){

	/// MAIN VARIABLES ///
	var gridSize = 8;
	var cards = [
		'<img src="images/monsters-01.png">',
		'<img src="images/monsters-02.png">',
		'<img src="images/monsters-03.png">',
		'<img src="images/monsters-04.png">',
		'<img src="images/monsters-05.png">',
		'<img src="images/monsters-06.png">',
		'<img src="images/monsters-07.png">',
		'<img src="images/monsters-08.png">',
		'<img src="images/monsters-09.png">',
		'<img src="images/monsters-10.png">',
		'<img src="images/monsters-11.png">',
		'<img src="images/monsters-12.png">',
		'<img src="images/monsters-13.png">',
		'<img src="images/monsters-14.png">',
		'<img src="images/monsters-15.png">',
		'<img src="images/monsters-16.png">',
	];

	var memoryGameHTML = '';
	for(let i = 0; i < gridSize; i++) {
		if(i < 2) {
			card = cards[0];
		} else if(i < 4) {
			card = cards[1];
		} else if(i < 8) {
			card = cards[2];
		} else {
			card = cards[3];
		}

		memoryGameHTML += '<div class="card col-sm-3">';
			memoryGameHTML += '<div class="card-holder">';
				memoryGameHTML += '<div class="card-front">' + card + '</div>';
				// OR can be written in ES6 as //
				// memoryGame HTML += '`div class="card-front">$(card)</div>`//
				memoryGameHTML += '<div class="card-back"></div>';
			memoryGameHTML += '</div>';
		memoryGameHTML += '</div>'
	}
	$('.game-contents').html(memoryGameHTML);



	/// CARD FLIP - Event Handler ///
	
	// User flips a card on click. If another one has been flipped, check if they match. Otherwise, do nothing.
	$('.card-holder').click(function() {
		$(this).toggleClass('flip');
	
	
		// Return an array of flipped cards
		var cardsUp = $('.flip');
		if(cardsUp.length >= 2) {
			
			var card1 = cardsUp[0].children[0].children[0].src;	// Card-holder --> card-front --> image tag //
			var card2 = cardsUp[1].children[0].children[0].src;
			var matchedCards = $('.matched');
			if(matchedCards.length == gridSize){
				alert("You have won the game!");
			}
			// Alternatively, to create an array of the image tags of flipped cards:  
				// cardsUpImages = cardsUp.find('.card-front img')
			
			// Cards match //
			if(card1 == card2) {
				cardsUp.removeClass('flip');
				cardsUp.addClass('matched');

			// Cards do not match. Flip them back over. //
			} else {
				
				// Create a 2 second delay before running the code.
				setTimeout(function(){  
					cardsUp.removeClass('flip');
				}, 1500)
				
			}
		}
	});

			





});
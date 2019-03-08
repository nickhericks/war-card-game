class Game {
	constructor () {
		this.deck = [1, 2, 3, 4, 5, 6, 7, 9, 9, 10];
		this.computerCards = [];
		this.playerCards = [];




	}



	startGame() {
		this.computerCards = [];
		this.playerCards = [];

		// TODO: Reset DOM card elements on screen


		// TODO: Shuffle cards
		let shuffledDeck = this.shuffleCards(this.deck);

		// Deal the cards
		this.dealCards(shuffledDeck);	

		console.log(`shuffledDeck: ${shuffledDeck}`);
		console.log(`computerCards ${this.computerCards}`);
		console.log(`playerCards: ${this.playerCards}`);
	}


	// Take the deck array and return a shuffled deck array
	shuffleCards(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}


	// Deal cards to computer and player array
	dealCards(shuffledDeck) {
		shuffledDeck.forEach( (card, index) => {
			if(index%2 !== 0) {
				this.computerCards.push(card);
			}
			else {
				this.playerCards.push(card);
			}
    });

	}


	flipCard() {

		console.log('hello');


	}


}
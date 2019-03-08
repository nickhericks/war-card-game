const startButton = document.querySelector('.start-button');
const overlay = document.querySelector('.overlay');

const flipCardButton = document.querySelector(".flip-card");


let game;


// User clicks start button
startButton.addEventListener('click', event => {
	overlay.style.display = 'none';
	game = new Game();
	game.startGame();
});

// Allow new game to start when 'enter' key is pressed on keyboard
document.addEventListener('keyup', event => {
	if (event.keyCode === 13) {
		overlay.style.display = 'none';
		game = new Game();
		game.startGame();
	}
});



// User clicks flip card button
flipCardButton.addEventListener('click', event => game.flipCard());

// Allow user to flip new car when 'space' key is pressed on keyboard
document.addEventListener('keyup', event => {
	if(event.keyCode === 32) {	
		game.flipCard();
	}
});
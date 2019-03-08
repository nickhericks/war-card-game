const startButton = document.querySelector('.start-button');
const overlay = document.querySelector('.overlay');
let game;

startButton.addEventListener('click', event => {
	overlay.style.display = 'none';

	game = new Game();
	game.startGame();

});
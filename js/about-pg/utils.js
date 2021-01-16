

export function wait(ms = 8000) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  	return Math.floor(randomNumber * (max - min) + min);
}


import { wait, getRandomBetween } from "./utils.js";

// recursion
export function draw(el) {
  	let index = 1;
  	// const text = el.textContent;
    const { text } = el.dataset;
    // console.log(text);
  	const { typeMin, typeMax } = el.dataset;
  	async function drawLetter() {
    	el.textContent = text.slice(0, index);
    	index += 1;
    	const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    	// exit condition
    	await wait(amountOfTimeToWait);
    	if (index <= text.length) {
      		drawLetter();
      	// wait for some time
    	}
  	}
  	// when this function draw() runs, kick off drawLetter
  	drawLetter();
}



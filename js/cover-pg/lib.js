

import { input, output, rangeValueElement, fillAreaElement } from "./elements.js";
import storyLines from "./data.js";

export function slideCover() {
	output.textContent = storyLines[this.value];
  
  	const hueRotate = "hue-rotate(" + input.value + "deg)";
  
  	rangeValueElement.textContent = input.value;
  	rangeValueElement.style.filter = hueRotate;
  
  	input.style.filter = hueRotate;
  
  	fillAreaElement.style.left = input.value + "vw";
  	fillAreaElement.style.width = (100-input.value) + "vw";
  	fillAreaElement.style.filter = hueRotate;

  	console.log(input.value);
}





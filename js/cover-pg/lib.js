

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

  	if (input.value === "100") {
  		output.textContent = "Thanks for visiting!";
      output.classList.add("accent");
  		return;
  	}
  	else {
  		output.textContent = storyLines[this.value];
      output.classList.remove("accent");
  	}

  	// console.log(input.value);
}





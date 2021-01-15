

import { input, output } from "./elements.js";
import values from "./data.js";

export function init() {
	input.value = 1;
	document.getElementById("output").textContent = values[1];
 
	input.addEventListener("input", function() {
		output.textContent = values[this.value];
	});
}
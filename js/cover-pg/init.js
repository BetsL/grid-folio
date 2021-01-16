

import { input, output } from "./elements.js";
import storyLines from "./data.js";
import { slideCover } from "./lib.js";

export function init() {
	input.value = 0;
	output.textContent = storyLines[0];
	input.addEventListener("input", slideCover);
}





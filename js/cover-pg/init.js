

import { input, output } from "./elements.js";
import storyLines from "./data.js";
import { slideCover } from "./lib.js";
import { mainNav } from "./elements.js";
import { closeMainNav } from "./utils.js";

export function init() {
	input.value = 0;
	output.textContent = storyLines[0];
	input.addEventListener("input", slideCover);

	window.addEventListener("resize", function(e) {
	    // console.log(document.body.clientWidth + " wide by " + document.body.clientHeight+" high");

	    if (mainNav.classList.contains("active")) {
	    	closeMainNav();
	    }
	});
}





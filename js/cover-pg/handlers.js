

import { mainNav } from "./elements.js";
import { closeMainNav } from "./utils.js";

export function handleResize(e) {
	 // console.log(document.body.clientWidth + " wide by " + document.body.clientHeight+" high");
    if (document.body.clientWidth >= 832) {
    	if (mainNav.classList.contains("active")) {
    		closeMainNav();

    		return;
    	}
    }
}

export function handleKeydown(e) {
  	// console.log(e);

  	if (e.key === "Escape") {
    	closeMainNav();
  	}
}
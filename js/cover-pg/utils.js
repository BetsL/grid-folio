

import { mainNav } from "./elements.js";

export function toggleMainNav() {
	mainNav.classList.toggle("active");
}

export function closeMainNav() {
	mainNav.classList.remove("active");
}

export function placeNavClick(e) {
    const isOutside = !e.target.closest(".main-nav li");
    // console.log(isOutside);

    if (isOutside) {
      closeMainNav();
	}
}


import { mainNav, navBarToggle } from "./elements.js";

export function toggleMainNav() {
	this.classList.toggle("active");
	mainNav.classList.toggle("active");
	mainNav.querySelectorAll(".main-nav li").forEach(li => li.classList.add("active"));
}

export function closeMainNav() {
	mainNav.classList.remove("active");
	navBarToggle.classList.remove("active");
	mainNav.querySelectorAll(".main-nav li").forEach(li => li.classList.remove("active"));
}

export function placeNavClick(e) {
    const isOutside = !e.target.closest(".main-nav li");
    // console.log(isOutside);

    if (isOutside) {
      closeMainNav();
	}
}






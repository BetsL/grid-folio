

import { mainNav, navBarToggle } from "./elements.js";
import { init } from "./init.js";

/* ---------- NAV ---------- */
navBarToggle.addEventListener("click", function() {
  	mainNav.classList.toggle("active");
});

/* ---------- SLIDER + STORY ---------- */
init();









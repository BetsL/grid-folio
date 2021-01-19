

import { draw } from "./lib.js";

export function init() {
	document.querySelectorAll("[data-type]").forEach(draw);
}

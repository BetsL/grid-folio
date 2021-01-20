

import { mainNav, navBarToggle } from "./elements.js";
import { init } from "./init.js";
import { toggleMainNav, placeNavClick } from "./utils.js";

/* ---------- nav ---------- */
navBarToggle.addEventListener("click", toggleMainNav);
mainNav.addEventListener("click", placeNavClick);

/* ---------- slider + story ---------- */
(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem("firstLoad") )
    {
      localStorage["firstLoad"] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem("firstLoad");
  }
})();

init();











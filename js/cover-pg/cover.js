

import { mainNav, navBarToggle } from "./elements.js";
import { init } from "./init.js";

/* ---------- nav ---------- */
navBarToggle.addEventListener("click", function() {
  	mainNav.classList.toggle("active");
});

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











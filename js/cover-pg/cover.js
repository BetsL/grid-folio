

import { mainNav, navBarToggle } from "./elements.js";
import { init } from "./init.js";

/* ---------- NAV ---------- */
navBarToggle.addEventListener("click", function() {
  	mainNav.classList.toggle("active");
});

/* ---------- SLIDER + STORY ---------- */
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
  console.log("this worked");
})();

init();











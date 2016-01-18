"use strict";



// Splash Screen

var navFooter = document.getElementById("nav-footer");

function fadeOut(element) {
  //Wait for a CSS animation to complete, then remove an element from the document

  window.setTimeout(function() {
    document.body.removeChild(element);
  }, 8900);


}

function fixNavFooter() {
  // Wait for a CSS animation to complete, then permanently set it's height
  // and prevent further animations. This function is soley for use with the
  // navigation footer.

  window.setTimeout(function() {
    navFooter.style.height = 20 + "%";
  }, 4000)

}

//fadeOut(splashContainer);
fixNavFooter();

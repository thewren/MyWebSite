"use strict";



// Splash Screen

var splashContainer = document.getElementById("splash-container");

function fadeOut(element) {
  //Wait for a CSS animation to complete, then remove an element from the document

  window.setTimeout(function() {
    document.body.removeChild(element);
  }, 8900);


}

fadeOut(splashContainer);

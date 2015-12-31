"use strict";



// Splash Screen

var splashContainer = document.getElementById("splash-container");

function fadeIn(element) {
  //Gradually make an element transparent, then remove it from the document
  //var s = element.style;


  for(var i = 1; i > 0.5; i -= 0.1) {
  window.setTimeout(function() {
    splashContainer.style.opacity = i;
  }, 2000);
    console.log(splashContainer.style.opacity);
  }
  //document.body.removeChild(element);


/*
  window.setTimeout(function() {
    splashContainer.style.opacity = 0;
  }, 2000);
*/

}

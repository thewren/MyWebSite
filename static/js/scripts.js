"use strict";



// Splash Screen

var navFooter = document.getElementById("nav-footer");
var navButtons = document.getElementsByClassName("nav-button-container");
var logo = document.getElementById("logo-container");

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
    //navFooter.style.height = 10 + "%";

    for(var i = 0; i < navButtons.length; i++) {
      navButtons[i].style.opacity = 1;
    }

    logo.style.opacity = 1;

  }, 4000);

}

navButtons[0].onmouseover = function() {
  navButtons[0].style.color = "green";

  var detail = document.createElement("div");
  detail.className = "nav-button-detail";
  var detailText = document.createTextNode("This is a test!");
  detail.appendChild(detailText);
  navFooter.appendChild(detail);
}

navButtons[0].onmouseout = function() {
  navButtons[0].style.color = "black";

  var detail = document.getElementsByClassName("nav-button-detail");
  navFooter.removeChild(detail[0]);
}



//fadeOut(splashContainer);
//fixNavFooter();

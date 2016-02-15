"use strict";



// Splash Screen

var navFooter = document.getElementById("nav-bar");
var navButtons = document.getElementsByClassName("nav-button-container");
var logo = document.getElementById("logo-container");
//var detail = document.getElementsByClassName("nav-button-detail");
var detailOpen;

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



/*
navButtons[0].onmouseover = function() {

  if(detailOpen == true) {
    return;
  } else {
    var detail = document.createElement("div");
    detail.className = "portfolio-bar";
    //var detailText = document.createTextNode("This is a test!");
    //detail.appendChild(detailText);
    var portfolioButtons = [
      document.createElement("div"),
      document.createElement("div")
    ];

    for(var i = 0; i < portfolioButtons.length; i++) {
      portfolioButtons[i].className = "portfolio-button-container";
      detail.appendChild(portfolioButtons[i]);
    }

    navFooter.appendChild(detail);

    return detailOpen = true;
  }
}

navButtons[0].onmouseout = function() {
  var detail = document.getElementsByClassName("portfolio-bar")[0];

  if(detailOpen == true) {
    detail.onmouseout = function() {
      navFooter.removeChild(detail);
      detailOpen = false;
    }
    return;
  } else {
    navFooter.removeChild(detail);
    detailOpen = false;
  }
}
*/




//fadeOut(splashContainer);
//fixNavFooter();

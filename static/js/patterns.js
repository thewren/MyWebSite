/*

  A standalone javascript application.  Inspired by a cup of Peet's Coffee.

  Invoked when visiting /portfolio/patterns

*/


"use strict";

//Get the pattern
var pattern = document.getElementById("pattern");


// Set height of body
//body[0].style.height = window.innerHeight - 240 + "px"; //240px = navBar Height + Footer Height
//homePortrait[0].style.height = window.innerHeight + "px";// - 240 + "px";
//homeDescription[0].style.height = window.innerHeight / 2 + "px";// - 240 + "px";

//
// Pattern
//


function printPattern(ele, printThisPattern) {
  var counter = 0;
  var patternHolder = document.createElement("span");
  ele.appendChild(patternHolder);

  while(patternHolder.offsetWidth < (pattern.offsetWidth)) {
    patternHolder.appendChild(document.createTextNode(printThisPattern));
    counter += 1;
    if(counter > (pattern.offsetWidth - 20)) {
      break;
    }
  }
  ele.appendChild(document.createElement("br"));
}

function drawPattern(ele, pattern1, pattern2) {
  var counter= 0;
  while(ele.offsetHeight < (window.innerHeight - 8)) {//font size is 8
    if(counter % 2) {
      printPattern(ele, pattern2);
    } else {
      printPattern(ele, pattern1);
    }
    counter += 1;
    if(counter > window.innerHeight) {
      break;
    }
  }
}

//Uncomment drawPattern() to draw the pattern
drawPattern(pattern, "_|__|_||", "|_||_|__");

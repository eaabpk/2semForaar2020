/**
 * file: js.js
 * purpose: interactivity
 * inspration from: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_video_js_prop
 **/

var myVideo = document.getElementById("myVideo"); 
myVideo.width = 520;
myVideo.controls = true;

/*The ON/OFF trick*/
function playPause() { 
  if (myVideo.paused) {
    myVideo.play();
    myVideo.controls = false;
      }
  else {
    myVideo.pause();
    myVideo.controls = true;
} }
/*we need curly brackets if we have two statements*/
    
function makeBig() { 
    myVideo.width = 1200; 
} 

function makeSmall() { 
    myVideo.width = 300; 
} 

function makeNormal() { 
    myVideo.width = 520; 
} 

/*Let's mute the sound*/
function soundOff() {
    myVideo.muted = true;
}
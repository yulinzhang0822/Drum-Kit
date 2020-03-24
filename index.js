// detect mouse clicking and make sound effects
var numOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // 'this' is the identity of button that triggered eventlistener
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    opaqueButton(buttonPressed);
  });
}

// detect key stroke and make sound effects
document.addEventListener("keypress", function(event) {
  // event that triggered eventlistener
  var keyPressed = event.key;
  makeSound(keyPressed);
  opaqueButton(keyPressed);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'a':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);
  }
}

function opaqueButton(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  //console.log(activeButton);
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

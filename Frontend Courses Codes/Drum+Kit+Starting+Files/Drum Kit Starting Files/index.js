var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handleClick() {

    
      // alert("I got clicked");

      // console.log(this.style.color = "red"); 

      var buttonInnerHTML = this.innerHTML;
      ButtonAnimation(buttonInnerHTML);
      switch (buttonInnerHTML) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;

        case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;

        case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;

        case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;

        case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;

        case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;

        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;

        default:
          break;
      }
    });
}

document.addEventListener("keypress", function (event) {
  
  console.log(event);
  // alert("Hello");
  console.log(this.keypress);
 

  var buttonKey = event.key;
  ButtonAnimation(buttonKey);
      switch (buttonKey) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;

        case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;

        case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;

        case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;

        case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;

        case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;

        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;

        default:
          break;
      }
});

function ButtonAnimation(buttonKey){
  var activeButton = document.querySelector("."+buttonKey);

  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed")},100)
}
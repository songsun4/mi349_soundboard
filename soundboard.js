

var chime = document.getElementById("chime");
var cymbals = document.getElementById("cymbals");
var trumpet = document.getElementById("trumpet");

chime.addEventListener("click", function() {
    var audio = new Audio("chime.wav");
    audio.volume = 0.1;
    audio.play();
})
cymbals.addEventListener("click", function() {
    var audio = new Audio("cymbals.wav");
    audio.volume = 0.1;
    audio.play();
})
trumpet.addEventListener("click", function() {
    var audio = new Audio("trumpet.wav");
    audio.volume = 0.1;
    audio.play();
})

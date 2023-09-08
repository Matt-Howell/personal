var i = 0;
var txt = 'Your Business, Your Site!';
var speed = 50;

window.onload = typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("string-type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
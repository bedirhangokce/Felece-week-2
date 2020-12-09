var width = window.innerWidth;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 1;

if (width > 600) {
  slideIndex = 0;
  show(slideIndex);
}
else {
  slideIndex = 1;
  show(slideIndex);
}
show(slideIndex);

function currentSlide(n) {
  if (width > 600) {
    show(n);
  } else {
    show(n + 1);
  }
}
function resizer() {
  width = window.innerWidth;
  currentSlide(slideIndex);
}
function show(n) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
window.onload = resizer;
window.onresize = resizer;
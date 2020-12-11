var width = window.innerWidth;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;
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

$(document).ready(function () {

    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(300);
    });
    
    $('.menu .service-lvl a').on('click', function () {
        $(this).parent().parent().toggleClass('move');
    });
  
    $('.menu .service-lvl .return a').on('click', function () {
        $(this).parent().parent().parent().parent().removeClass('move');
    });

});


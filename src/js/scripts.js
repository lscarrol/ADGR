/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/
/*
var interval = setInterval(function() {
  console.log($("divb").scrollTop());
}, 250);
*/
var dive = document.getElementById('helper');
var dive1 = document.getElementsByClassName("till");
var blurb = document.getElementsByClassName("blurr");
var testa = helper.scrollTop;
setInterval( function() {
  if ((helper.scrollTop) > 300) {
    console.log("asdasd");
    $(dive1).addClass('blurr');
    // Do your thang!
  } else {
    $(dive1).removeClass('blurr');
  }
}, 250 );


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

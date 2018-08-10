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
var abc = document.getElementById('bod');
var dive = document.getElementById('helper');
var dive1 = document.getElementsByClassName("till");
var blurb = document.getElementsByClassName("blurr");
var testa = helper.scrollTop;
setInterval( function() {
  if ((helper.scrollTop) > 300) {
    $(dive1).addClass('blurr');
    // Do your thang!
  } else {
    $(dive1).removeClass('blurr');
  }
}, 250 );

var op = document.getElementById('scrollH');
var $addVal = helper.scrollTop + 800;
$addVal: $addVal * '1px';

$(op).click(function() {
  $addVal = helper.scrollTop + 750;
  $(helper).animate({ scrollTop: $addVal });
});


function initMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(40.706315, -74.013175), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("butt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

console.log("hi")
// About page readmore/readless
$(".readmore a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideDown(600)
  $(".readmore").hide()
  $(".readless").show()
})
$(".readless a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideUp(600)
  $(".readless").hide()
  $(".readmore").show()
})


// Slider for home page

$(document).ready(function(){
  var movingImage = true;
  setInterval(function() {
    if (movingImage) {
      var $imageToMove = $('.slides-container > img:first-child')
      $imageToMove.addClass('image-to-move')
      movingImage = false;
    } else {
      var $imageToChangeOrder = $('.slides-container > img:first-child')
      $imageToChangeOrder.appendTo('.slides-container')
      $imageToChangeOrder.removeClass('image-to-move')
      movingImage = true;
    }
  }, 3000)
})
// Modal

function openModal(index) {
  if(index > 1) {
	document.getElementById('myModal_'+index).style.display = "block";
  } else {
    document.getElementById('myModal').style.display = "block";
  }
}

function closeModal(index) {
  if(index > 1) {
     document.getElementById('myModal_'+index).style.display = "none";
  } else {
     document.getElementById('myModal').style.display = "none";
  }
}

var slideIndex = 1;

function plusSlides(n,index) { // Next/previous controls//
  showSlidesStart(slideIndex += n,index);
}

function currentSlideStart(n,index) { // Thumbnail image controls//
  showSlidesStart(slideIndex = n,index);
}

function showSlidesStart(n,index) {
  var i;
  var slides;
  var dots;
  var captionText;
  if(index > 1) {
		slides = document.getElementsByClassName("mySlides_"+index);
		dots = document.getElementsByClassName("demo_"+index);
		captionText = document.getElementById("caption_"+index);
  } else {
       slides = document.getElementsByClassName("mySlides");
	   dots = document.getElementsByClassName("demo");
	   captionText = document.getElementById("caption");
  }
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

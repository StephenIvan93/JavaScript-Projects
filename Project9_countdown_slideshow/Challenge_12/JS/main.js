var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > 3) {    // Passing image 3 will bring you back to image 1
      slideIndex = 1
  }
  if (n < 1) {
      slideIndex = 3  // Passing image 1 in reverse will bring you to image 3
  }
  slides[0].style.display = "";
  slides[1].style.display = "none";
  slides[2].style.display = "none";
  slides[slideIndex - 1].style.display = "block";
}
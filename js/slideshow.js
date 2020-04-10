let slide = 0;
displaySlides();

function displaySlides() {
  let slideshow = document.getElementsByClassName("slide");

  slide++;

  if (slide > slideshow.length) {
    slide = 1;
  }

  for (let i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }

  slideshow[slide - 1].style.display = "block";
  setTimeout(displaySlides, 5000);
}

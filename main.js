let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("carousel-item");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function nextSlide() {
  const slides = document.getElementsByClassName("carousel-item");
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
  const slides = document.getElementsByClassName("carousel-item");
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(); // Start the slideshow
});

function generateCopyright() {
  const year = new Date().getFullYear();
  const footer = document.createElement("p");
  footer.textContent = `© ${year} UniCafé Mejia's Finca | All rights reserved.`;
  footer.style.textAlign = "center";
  document.body.appendChild(footer);
}

// Call the function to generate the copyright paragraph
generateCopyright();

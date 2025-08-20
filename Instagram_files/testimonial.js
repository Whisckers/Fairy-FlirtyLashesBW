const slides = document.querySelectorAll(".slides-container .slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");
  slides[index].style.display = "block";
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Initialize the slider
showSlide(currentIndex);

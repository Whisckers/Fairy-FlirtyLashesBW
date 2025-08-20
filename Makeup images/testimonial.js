document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides-container");
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });
});

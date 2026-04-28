
document.addEventListener("DOMContentLoaded", () => {

  let index = 0;

  const slides = document.querySelector(".slides");
  const items = document.querySelectorAll(".slide");

  if (!slides || items.length === 0) {
    console.error("Slider not found");
    return;
  }

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    index = (index + 1) % items.length;
    updateSlider();
  }

  function prev() {
    index = (index - 1 + items.length) % items.length;
    updateSlider();
  }

  // IMPORTANT: rendre accessible aux boutons HTML
  window.next = next;
  window.prev = prev;

  // Swipe mobile + iPad
  let startX = 0;

  slides.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slides.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  });

});
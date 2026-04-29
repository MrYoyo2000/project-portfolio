
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

  // IMPORTANT: expose slider controls for the HTML buttons
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
// clicr particles
  const createClickParticles = (event) => {
    const trigger = event.target.closest("a, .btn, .skill-box, .slide");
    if (!trigger) return;

    const particleConfigs = [
      { size: 18, offsetX: -8, offsetY: -6, delay: 0 },
      { size: 12, offsetX: 6, offsetY: -10, delay: 0.05 },
      { size: 22, offsetX: 10, offsetY: 4, delay: 0.1 },
      { size: 10, offsetX: -12, offsetY: 8, delay: 0.12 }
    ];

    particleConfigs.forEach((config) => {
      const particle = document.createElement("span");
      particle.className = "click-tech";
      particle.style.left = `${event.clientX + config.offsetX}px`;
      particle.style.top = `${event.clientY + config.offsetY}px`;
      particle.style.width = `${config.size}px`;
      particle.style.height = `${config.size}px`;
      particle.style.animationDelay = `${config.delay}s`;
      particle.style.position = "fixed";
      particle.style.willChange = "transform, opacity";

      document.body.appendChild(particle);
      requestAnimationFrame(() => particle.classList.add("click-tech--animate"));
      particle.addEventListener("animationend", () => particle.remove());
    });
  };

  document.addEventListener("pointerdown", createClickParticles);

});
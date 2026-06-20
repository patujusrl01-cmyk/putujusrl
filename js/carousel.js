/**
 * PATUJU SRL - Hero Carousel Slider
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
});

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.hero-slider .dot');
  
  if (slides.length === 0 || dots.length === 0) return;
  
  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 5000; // 5 seconds
  
  function showSlide(index) {
    // Wrap around index
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    // Update slide classes
    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    
    // Update dots classes
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }
  
  function stopSlideShow() {
    clearInterval(slideInterval);
  }
  
  // Set up dot click listeners
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlideShow();
      showSlide(index);
      startSlideShow(); // restart interval
    });
  });
  
  // Initialize slider
  showSlide(0);
  startSlideShow();
}

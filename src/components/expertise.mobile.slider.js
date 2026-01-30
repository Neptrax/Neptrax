/**
 * Expertise Mobile Slider
 * Handles infinite loop, auto-slide, and swipe gestures for the Expertise section.
 * Targeted at mobile devices only.
 */

export function initExpertiseSlider() {
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) return;

  const track = document.querySelector('.mission-expertise-grid');
  const section = document.querySelector('.mission-expertise-section');
  if (!track || !section) return;

  // Create dots container
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'expertise-dots';
  section.appendChild(dotsContainer);

  const slides = Array.from(track.children);
  const slideCount = slides.length;
  let currentIndex = 1; // Start at 1 because we will prepend a clone
  let isTransitioning = false;
  let autoSlideInterval;

  // Setup dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `expertise-dot ${i === 0 ? 'active' : ''}`;
    dotsContainer.appendChild(dot);
  });

  // Infinite Loop setup: Clone first and last
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, track.firstChild);

  // Initial position
  updatePosition(false);

  function updatePosition(animate = true) {
    if (!animate) track.style.transition = 'none';
    else track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    const dots = section.querySelectorAll('.expertise-dot');
    let dotIndex = currentIndex - 1;
    if (currentIndex === 0) dotIndex = slideCount - 1;
    if (currentIndex === slideCount + 1) dotIndex = 0;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === dotIndex);
    });
  }

  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex++;
    updatePosition();
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updatePosition();
  }

  track.addEventListener('transitionend', () => {
    isTransitioning = false;
    if (currentIndex === 0) {
      currentIndex = slideCount;
      updatePosition(false);
    }
    if (currentIndex === slideCount + 1) {
      currentIndex = 1;
      updatePosition(false);
    }
  });

  // Auto-slide logic - Updated to 7000ms
  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 7000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
  }

  // Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  section.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
  }, { passive: true });

  section.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) nextSlide();
    if (touchEndX - touchStartX > swipeThreshold) prevSlide();
  }

  startAutoSlide();

  // Cleanup function reference
  return () => {
    stopAutoSlide();
  };
}

/* Testimonials Slider Module */

import { SLIDER_AUTOPLAY_MS } from '../config.js';
import { $, $$, addClass, removeClass } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initTestimonialsSlider = () => {
  const slider = $('.c-slider');
  if (!slider) return;
  
  const track = slider.querySelector('.c-slider__track');
  const slides = $$('.c-slider__slide', slider);
  const prevBtn = slider.querySelector('.c-slider__nav-btn--prev');
  const nextBtn = slider.querySelector('.c-slider__nav-btn--next');
  const dots = $$('.c-slider__dot', slider);
  
  if (slides.length === 0) return;
  
  let currentIndex = 0;
  let autoplayId = null;
  let isPaused = false;
  
  const goToSlide = (index) => {
    // Remove active class from current
    removeClass(slides[currentIndex], 'is-active');
    if (dots[currentIndex]) {
      removeClass(dots[currentIndex], 'is-active');
    }
    
    // Update index
    currentIndex = index;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    
    // Add active class to new
    addClass(slides[currentIndex], 'is-active');
    if (dots[currentIndex]) {
      addClass(dots[currentIndex], 'is-active');
    }
    
    // Move track
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };
  
  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);
  
  // Button events
  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });
  
  // Dot events
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoplay();
    });
  });
  
  // Autoplay
  const startAutoplay = () => {
    if (prefersReducedMotion() || isPaused) return;
    
    autoplayId = setInterval(() => {
      nextSlide();
    }, SLIDER_AUTOPLAY_MS);
  };
  
  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };
  
  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };
  
  // Pause on hover/focus
  slider.addEventListener('mouseenter', () => {
    isPaused = true;
    stopAutoplay();
  });
  
  slider.addEventListener('mouseleave', () => {
    isPaused = false;
    startAutoplay();
  });
  
  slider.addEventListener('focusin', () => {
    isPaused = true;
    stopAutoplay();
  });
  
  slider.addEventListener('focusout', () => {
    isPaused = false;
    startAutoplay();
  });
  
  // Keyboard navigation
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });
  
  // Touch swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  const handleSwipe = () => {
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      resetAutoplay();
    }
  };
  
  // Start autoplay
  startAutoplay();
  
  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });
};

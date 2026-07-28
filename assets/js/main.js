/* Main JavaScript - Bootstraps all modules */

import { initTheme } from './modules/theme.js';
import { initNavbar } from './modules/navbar.js';
import { initSmoothScroll } from './modules/smooth-scroll.js';
import { initMobileMenu } from './modules/mobile-menu.js';
import { initTypingEffect } from './modules/typing-effect.js';
import { initCountUp } from './modules/count-up.js';
import { initScrollReveal } from './modules/scroll-reveal.js';
import { initProgressAnimate } from './modules/progress-animate.js';
import { initTestimonialsSlider } from './modules/testimonials-slider.js';
import { initParallax } from './modules/parallax.js';
import { initMagneticButtons } from './modules/magnetic-buttons.js';
import { initMouseGlow } from './modules/mouse-glow.js';
import { initCustomCursor } from './modules/custom-cursor.js';
import { initBackgroundCanvas } from './modules/background-canvas.js';
import { initBackToTop } from './modules/back-to-top.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Phase 1: Core functionality
  initTheme();
  initNavbar();
  initSmoothScroll();
  initMobileMenu();
  initBackToTop();
  
  // Phase 2: Animations and effects
  initTypingEffect();
  initScrollReveal();
  initCountUp();
  initProgressAnimate();
  initTestimonialsSlider();
  
  // Phase 3: Premium effects (desktop only, respects reduced motion)
  initParallax();
  initMagneticButtons();
  initMouseGlow();
  initCustomCursor();
  initBackgroundCanvas();
  
  console.log('Portfolio initialized successfully');
});

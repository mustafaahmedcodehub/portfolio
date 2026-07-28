/* Back to Top Module */

import { $, addClass, removeClass } from '../utils/dom.js';
import { throttle } from '../utils/throttle.js';

export const initBackToTop = () => {
  const backToTopBtn = $('.c-back-to-top');
  if (!backToTopBtn) return;
  
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY;
    const threshold = 400;
    
    if (scrollY > threshold) {
      addClass(backToTopBtn, 'is-visible');
    } else {
      removeClass(backToTopBtn, 'is-visible');
    }
  }, 100);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

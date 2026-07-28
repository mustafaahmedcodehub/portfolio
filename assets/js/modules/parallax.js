/* Parallax Module */

import { $$ } from '../utils/dom.js';
import { throttle } from '../utils/throttle.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initParallax = () => {
  if (prefersReducedMotion()) return;
  
  const parallaxElements = $$('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.dataset.parallax) || 0.08;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const relativeY = scrollY - elementTop;
      
      const translateY = relativeY * speed;
      
      element.style.transform = `translateY(${translateY}px)`;
    });
  }, 16);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
};

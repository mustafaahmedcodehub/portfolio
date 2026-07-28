/* Progress Animation Module */

import { observeElements } from '../utils/intersection.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';
import { $$ } from '../utils/dom.js';

export const initProgressAnimate = () => {
  const progressBars = $$('.c-progress');
  
  if (progressBars.length === 0) return;
  
  if (prefersReducedMotion()) {
    // Set final width immediately
    progressBars.forEach((progressBar) => {
      const fill = progressBar.querySelector('.c-progress__fill');
      const percentage = progressBar.querySelector('.c-progress__percentage');
      if (fill && percentage) {
        const target = parseInt(percentage.textContent);
        fill.style.width = target + '%';
      }
    });
    return;
  }
  
  observeElements('.c-progress', (progressBar) => {
    const fill = progressBar.querySelector('.c-progress__fill');
    const percentage = progressBar.querySelector('.c-progress__percentage');
    
    if (fill && percentage) {
      const target = parseInt(percentage.textContent);
      
      // Small delay for visual effect
      setTimeout(() => {
        fill.style.width = target + '%';
      }, 200);
    }
  });
};

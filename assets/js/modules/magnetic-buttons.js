/* Magnetic Buttons Module */

import { $$ } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initMagneticButtons = () => {
  if (prefersReducedMotion()) return;
  
  const buttons = $$('.c-btn--primary, .c-btn--outline');
  
  if (buttons.length === 0) return;
  
  buttons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const maxDisplacement = 8;
      const displacementX = Math.max(-maxDisplacement, Math.min(maxDisplacement, x / 4));
      const displacementY = Math.max(-maxDisplacement, Math.min(maxDisplacement, y / 4));
      
      button.style.transform = `translate(${displacementX}px, ${displacementY}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });
};

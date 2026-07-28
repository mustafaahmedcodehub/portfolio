/* Scroll Reveal Module */

import { observeElements } from '../utils/intersection.js';
import { $$ } from '../utils/dom.js';

export const initScrollReveal = () => {
  const revealElements = $$('[data-reveal]');
  
  if (revealElements.length === 0) return;
  
  // Set stagger indices for children
  const staggerContainers = $$('[data-reveal-stagger]');
  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll('[data-reveal]');
    children.forEach((child, index) => {
      child.style.setProperty('--stagger-index', index);
    });
  });
  
  observeElements('[data-reveal]', (element) => {
    element.classList.add('is-revealed');
  });
};

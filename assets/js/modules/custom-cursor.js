/* Custom Cursor Module */

import { $, addClass, removeClass } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initCustomCursor = () => {
  // Check for pointer capability
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (prefersReducedMotion()) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'c-custom-cursor';
  
  const ring = document.createElement('div');
  ring.className = 'c-custom-cursor__ring';
  
  document.body.appendChild(cursor);
  document.body.appendChild(ring);
  
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let ringX = 0;
  let ringY = 0;
  
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  
  const animateCursor = () => {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    
    requestAnimationFrame(animateCursor);
  };
  
  // Show cursor on mouse move
  const handleMouseEnter = () => {
    addClass(cursor, 'is-active');
    addClass(ring, 'is-active');
  };
  
  const handleMouseLeave = () => {
    removeClass(cursor, 'is-active');
    removeClass(ring, 'is-active');
  };
  
  // Add hover effect to interactive elements
  const interactiveElements = 'a, button, .c-btn, .c-card, .c-project-card, .c-service-card';
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseenter', handleMouseEnter);
  document.addEventListener('mouseleave', handleMouseLeave);
  
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.matches(interactiveElements) || e.target.closest(interactiveElements)) {
      addClass(ring, 'is-hovering');
    }
  });
  
  document.body.addEventListener('mouseout', (e) => {
    if (e.target.matches(interactiveElements) || e.target.closest(interactiveElements)) {
      removeClass(ring, 'is-hovering');
    }
  });
  
  // Start animation
  animateCursor();
};

/* Typing Effect Module */

import { TYPING_ROLES } from '../config.js';
import { $ } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initTypingEffect = () => {
  const typingElement = $('.s-hero__typing-text');
  const cursorElement = $('.s-hero__typing-cursor');
  
  if (!typingElement || !cursorElement) return;
  
  // Skip if reduced motion is preferred
  if (prefersReducedMotion()) {
    typingElement.textContent = TYPING_ROLES[0];
    cursorElement.style.display = 'none';
    return;
  }
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 50;
  
  const type = () => {
    const currentRole = TYPING_ROLES[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 50;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % TYPING_ROLES.length;
      typingSpeed = 500; // Pause before typing next
    }
    
    setTimeout(type, typingSpeed);
  };
  
  // Start typing after a delay
  setTimeout(type, 1000);
};

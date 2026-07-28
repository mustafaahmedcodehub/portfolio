/* Mouse Glow Effect Module */

import { $ } from '../utils/dom.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initMouseGlow = () => {
  if (prefersReducedMotion()) return;
  
  const heroSection = $('.s-hero');
  if (!heroSection) return;
  
  const glow = document.createElement('div');
  glow.className = 'c-mouse-glow';
  glow.style.cssText = `
    position: fixed;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  `;
  
  document.body.appendChild(glow);
  
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    glow.style.left = x + 'px';
    glow.style.top = y + 'px';
  };
  
  const handleMouseEnter = () => {
    glow.style.opacity = '0.15';
  };
  
  const handleMouseLeave = () => {
    glow.style.opacity = '0';
  };
  
  heroSection.addEventListener('mousemove', handleMouseMove);
  heroSection.addEventListener('mouseenter', handleMouseEnter);
  heroSection.addEventListener('mouseleave', handleMouseLeave);
  
  // Hide glow when leaving hero
  glow.style.opacity = '0';
};

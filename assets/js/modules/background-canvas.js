/* Background Canvas Module - Particles */

import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';

export const initBackgroundCanvas = () => {
  if (prefersReducedMotion()) return;
  
  const container = document.createElement('div');
  container.className = 'c-particles';
  document.body.appendChild(container);
  
  const particleCount = 30;
  const particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'c-particle';
    
    // Random position and delay
    const left = Math.random() * 100;
    const delay = Math.random() * 25;
    const duration = 20 + Math.random() * 10;
    const size = 2 + Math.random() * 4;
    
    particle.style.left = left + '%';
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    container.appendChild(particle);
    particles.push(particle);
  }
  
  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      particles.forEach((p) => {
        p.style.animationPlayState = 'paused';
      });
    } else {
      particles.forEach((p) => {
        p.style.animationPlayState = 'running';
      });
    }
  });
};

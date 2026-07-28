/* Smooth Scroll Module */

import { NAV_OFFSET } from '../config.js';
import { $, $$ } from '../utils/dom.js';

export const initSmoothScroll = () => {
  const links = $$('a[href^="#"]');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const targetPosition = target.offsetTop - NAV_OFFSET;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        
        // Close mobile drawer if open
        const drawer = $('.c-drawer');
        if (drawer && drawer.classList.contains('is-open')) {
          drawer.classList.remove('is-open');
          document.documentElement.classList.remove('is-drawer-open');
        }
      }
    });
  });
};

/* Navbar Module */

import { NAV_OFFSET } from '../config.js';
import { $, $$, addClass, removeClass } from '../utils/dom.js';
import { throttle } from '../utils/throttle.js';

export const initNavbar = () => {
  const navbar = $('.c-navbar');
  if (!navbar) return;
  
  // Add scrolled class on scroll
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      addClass(navbar, 'is-scrolled');
    } else {
      removeClass(navbar, 'is-scrolled');
    }
  }, 100);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Active section spy
  initActiveSectionSpy();
};

const initActiveSectionSpy = () => {
  const sections = $$('section[id]');
  const navLinks = $$('.c-navbar__link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY + NAV_OFFSET + 100;
    
    let currentSection = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const id = href.replace('#', '');
      
      if (id === currentSection) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, 100);
  
  window.addEventListener('scroll', handleScroll, { passive: true });
};

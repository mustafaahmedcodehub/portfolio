/* Mobile Menu Module */

import { $, $$, addClass, removeClass, toggleClass } from '../utils/dom.js';

export const initMobileMenu = () => {
  const menuBtn = $('.c-navbar__menu-btn');
  const drawer = $('.c-drawer');
  const drawerOverlay = $('.c-drawer-overlay');
  const closeBtn = $('.c-drawer__close');
  
  if (!menuBtn || !drawer) return;
  
  const openDrawer = () => {
    addClass(drawer, 'is-open');
    addClass(drawerOverlay, 'is-open');
    addClass(document.documentElement, 'is-drawer-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    closeBtn?.focus();
  };
  
  const closeDrawer = () => {
    removeClass(drawer, 'is-open');
    removeClass(drawerOverlay, 'is-open');
    removeClass(document.documentElement, 'is-drawer-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn?.focus();
  };
  
  menuBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', closeDrawer);
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
  
  // Close on link click
  const drawerLinks = $$('.c-drawer__link');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
};

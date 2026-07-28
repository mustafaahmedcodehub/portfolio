/* Theme Module */

import { STORAGE_THEME_KEY } from '../config.js';
import { $, addClass, removeClass } from '../utils/dom.js';

export const initTheme = () => {
  const html = document.documentElement;
  const themeToggleBtn = $('.c-theme-toggle');
  
  // Get saved theme or system preference
  const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(initialTheme);
  
  // Toggle theme on button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }
};

const setTheme = (theme) => {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_THEME_KEY, theme);
  
  // Update button aria-pressed
  const themeToggleBtn = $('.c-theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-pressed', theme === 'dark');
  }
};

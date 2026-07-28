/* DOM Utility Functions */

export const $ = (selector, parent = document) => {
  return parent.querySelector(selector);
};

export const $$ = (selector, parent = document) => {
  return Array.from(parent.querySelectorAll(selector));
};

export const createElement = (tag, className = '', innerHTML = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
};

export const addClass = (element, ...classNames) => {
  element.classList.add(...classNames);
};

export const removeClass = (element, ...classNames) => {
  element.classList.remove(...classNames);
};

export const toggleClass = (element, className, force) => {
  element.classList.toggle(className, force);
};

export const hasClass = (element, className) => {
  return element.classList.contains(className);
};

export const setData = (element, key, value) => {
  element.dataset[key] = value;
};

export const getData = (element, key) => {
  return element.dataset[key];
};

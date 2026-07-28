/* Intersection Observer Utility */

export const observeElements = (selector, callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
    once: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target, entry);
        
        if (mergedOptions.once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, mergedOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

export const unobserveElements = (observer) => {
  if (observer) {
    observer.disconnect();
  }
};

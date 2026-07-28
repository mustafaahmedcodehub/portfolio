/* Count Up Module */

import { observeElements } from '../utils/intersection.js';
import { prefersReducedMotion } from '../utils/prefers-reduced-motion.js';
import { $$ } from '../utils/dom.js';

export const initCountUp = () => {
  const statNumbers = $$('.c-stat-card__number');

  if (statNumbers.length === 0) return;

  // في حالة تقليل الحركة
  if (prefersReducedMotion()) {
    statNumbers.forEach((element) => {
      const text = element.textContent.trim();

      const target = parseInt(text.replace(/\D/g, ''));

      // إذا لم يكن المحتوى رقمًا (مثل Flutter) اتركه كما هو
      if (isNaN(target)) return;

      const suffix = text.replace(/[\d]/g, '');
      element.textContent = target + suffix;
    });

    return;
  }

  // تشغيل العداد عند ظهور العنصر
  observeElements('.c-stat-card__number', (element) => {

    const text = element.textContent.trim();

    const target = parseInt(text.replace(/\D/g, ''));

    // تجاهل أي عنصر ليس رقمًا
    if (isNaN(target)) return;

    const suffix = text.replace(/[\d]/g, '');

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // حركة سلسة
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const current = Math.floor(easeOut * target);

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target + suffix;
      }
    };

    requestAnimationFrame(animate);
  });
};
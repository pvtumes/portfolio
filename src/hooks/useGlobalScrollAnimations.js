import { useEffect } from 'react';

/**
 * Activates IntersectionObserver on all .fade-up elements in the document.
 * Call this once from the App root.
 */
export function useGlobalScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

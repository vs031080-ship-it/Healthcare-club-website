'use client';
import { useEffect } from 'react';

/**
 * Mounts a single global IntersectionObserver that watches all elements
 * carrying a data-reveal attribute or with a class of `reveal`, `reveal-left`,
 * `reveal-right`, or `reveal-scale`.  When 10% of the element enters the
 * viewport, the `visible` class is added, triggering the CSS transition.
 *
 * This runs once per page load; the observer disconnect is handled on unmount.
 */
export default function ScrollReveal() {
    useEffect(() => {
        const selectors = '[data-reveal], .reveal, .reveal-left, .reveal-right, .reveal-scale';
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Optionally unobserve once visible so the animation runs only once
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        const attachObserver = () => {
            document.querySelectorAll(selectors).forEach((el) => observer.observe(el));
        };

        attachObserver();
        // MutationObserver handles dynamically added elements (e.g. after hydration)
        const mo = new MutationObserver(attachObserver);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mo.disconnect();
        };
    }, []);

    return null; // renders nothing
}

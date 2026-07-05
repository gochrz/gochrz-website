import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced) {
  gsap.set('.reveal', { clearProps: 'all', opacity: 1, y: 0 });
  gsap.set('[data-trust-line]', { width: '100%' });
} else {
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: Number(el.dataset.revealDelay ?? 0),
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-trust-flow]').forEach((flow) => {
    const line = flow.querySelector<HTMLElement>('[data-trust-line]');
    const steps = gsap.utils.toArray<HTMLElement>(flow.querySelectorAll('[data-trust-step]'));

    if (line) {
      gsap.to(line, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: flow,
          start: 'top 70%',
          end: 'bottom 55%',
          scrub: 0.6,
        },
      });
    }

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { filter: 'saturate(0.65)', scale: 0.98 },
        {
          filter: 'saturate(1)',
          scale: 1,
          duration: 0.45,
          scrollTrigger: {
            trigger: step,
            start: `top+=${index * 8}% 75%`,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  });
}

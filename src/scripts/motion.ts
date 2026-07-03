import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced) {
  gsap.set('.reveal', { clearProps: 'all', opacity: 1, y: 0 });
} else {
  // Generic scroll reveals — any element with .reveal
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

  // Vertical line that draws itself as the install timeline scrolls
  document.querySelectorAll<SVGPathElement>('[data-draw-path]').forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: path.closest('[data-draw-scope]') ?? path,
        start: 'top 70%',
        end: 'bottom 55%',
        scrub: 0.6,
      },
    });
  });

  // Pipeline stages light up in sequence while scrolling through the section
  const stages = gsap.utils.toArray<HTMLElement>('[data-stage]');
  if (stages.length) {
    stages.forEach((stage, i) => {
      gsap.from(stage, {
        opacity: 0.25,
        duration: 0.4,
        scrollTrigger: {
          trigger: stage.closest('[data-pipeline]') ?? stage,
          start: `top+=${i * 8}% 70%`,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }
}

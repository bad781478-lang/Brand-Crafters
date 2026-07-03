import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const foundations = [
  {
    number: '01',
    title: 'Strategy First',
    text: 'We start with direction before design, so every visual decision supports clarity, trust, and growth.',
  },
  {
    number: '02',
    title: 'Custom, Not Template',
    text: 'Every brand system, website, and creative asset is shaped around the business, not copied from a generic layout.',
  },
  {
    number: '03',
    title: 'Connected Execution',
    text: 'Branding, websites, content, and marketing are built to feel like one system, not separate pieces.',
  },
];

export default function AboutFounder() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!section || reducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-founder__card',
        { clipPath: 'inset(100% 0 0 0)', opacity: 0, y: 40 },
        {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-founder__card', start: 'top 82%' },
        },
      );

      gsap.fromTo(
        '.about-founder__content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-founder__content', start: 'top 76%' },
        },
      );

      gsap.to('.about-founder__portrait', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.fromTo(
        '.about-foundation-card',
        { opacity: 0, y: 38, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.78,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-foundation', start: 'top 84%' },
        },
      );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section about-founder" aria-labelledby="about-founder-title">
      <div className="about-shell">
        <div className="about-founder__grid">
          <article className="about-founder__card" aria-label="Aman Singh Rathore founder profile">
            <div className="about-founder__portrait" aria-hidden="true">
              <svg viewBox="0 0 420 520">
                <path d="M70 86H350V434H70Z" />
                <path d="M105 126H315V394H105Z" />
                <path d="M144 185C167 137 253 137 276 185C296 228 270 273 210 273C150 273 124 228 144 185Z" />
                <path d="M122 399C140 332 280 332 298 399" />
                <path d="M60 88L118 30" />
                <path d="M360 432L304 490" />
              </svg>
            </div>
            <div className="about-founder__initials" aria-hidden="true">ASR</div>
            <div className="about-founder__meta">
              <h3>Aman Singh Rathore</h3>
              <p>Founder | Chief Executive Officer</p>
            </div>
          </article>

          <div className="about-founder__content">
            <p className="about-label">FOUNDER & FOUNDATION</p>
            <h2 id="about-founder-title" className="about-heading about-heading--light">
              Founder-led direction for brands that need clarity, taste, and execution.
            </h2>
            <p>
              Aman Singh Rathore founded Brand Crafters with the belief that modern businesses need more than scattered
              creative work. They need a clear brand direction, a premium digital presence, consistent content, and
              visibility systems that work together.
            </p>
            <p>
              His focus is to build Brand Crafters as a studio where strategy, design, websites, content, CGI, and
              digital marketing come together under one sharp creative vision.
            </p>
            <blockquote>
              “A brand should not feel random. Every visual, page, message, and campaign should move in the same
              direction.”
            </blockquote>
          </div>
        </div>

        <div className="about-foundation" aria-label="Brand Crafters foundations">
          {foundations.map((item) => (
            <article className="about-foundation-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

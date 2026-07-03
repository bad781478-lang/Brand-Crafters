import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.mjs';
import { DEFAULT_WHATSAPP_URL } from '../../utils/whatsapp';

gsap.registerPlugin(ScrollTrigger);

const headline = "Let's build something meaningful, sharp, and ready to grow.";

export default function AboutCTA() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!section || reducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 78%' },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.about-cta__label',
        { clipPath: 'inset(0 0 100% 0)', y: 18 },
        { clipPath: 'inset(0 0 0% 0)', y: 0, duration: 0.8, ease: 'power4.out' },
      )
        .fromTo(
          '.about-cta__word',
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.72, stagger: 0.045 },
          '-=0.35',
        )
        .fromTo(
          '.about-cta__body p',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.72, stagger: 0.12 },
          '-=0.35',
        )
        .fromTo(
          '.about-cta__actions',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.72 },
          '-=0.3',
        );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section about-cta" aria-labelledby="about-cta-title">
      <div className="about-shell about-cta__inner">
        <p className="about-label about-cta__label">WELCOME TO BRAND CRAFTERS</p>
        <h2 id="about-cta-title" className="about-display about-cta__title" aria-label={headline}>
          {headline.split(' ').map((word, index) => (
            <span className="about-cta__word" key={`${word}-${index}`}>
              {word}
              {index < headline.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>

        <div className="about-cta__body">
          <p>
            Whether you need a new identity, a premium website, stronger content, or a complete brand-to-growth system,
            Brand Crafters can help you shape the right direction.
          </p>
          <p>
            We work closely with every client to understand the vision, remove confusion, and turn ideas into clear
            digital experiences.
          </p>
        </div>

        <div className="about-cta__actions">
          <a className="about-button about-button--light" href={DEFAULT_WHATSAPP_URL} target="_blank" rel="noreferrer">
            Get In Touch
            <ArrowRight aria-hidden="true" strokeWidth={1.6} />
          </a>
          <Link className="about-link" to="/services">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

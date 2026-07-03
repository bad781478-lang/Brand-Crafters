import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right.mjs';
import MonitorSmartphone from 'lucide-react/dist/esm/icons/monitor-smartphone.mjs';
import Palette from 'lucide-react/dist/esm/icons/palette.mjs';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up.mjs';
import Video from 'lucide-react/dist/esm/icons/video.mjs';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Brand Identity',
    text: 'Logo design, visual branding, color systems, typography, brand guidelines, packaging, and brand storytelling.',
    link: '/services#brand-identity',
    Icon: Palette,
  },
  {
    title: 'Websites & Apps',
    text: 'Website development, landing pages, UI/UX design, app interfaces, responsive layouts, and motion-led digital experiences.',
    link: '/services#websites-apps',
    Icon: MonitorSmartphone,
  },
  {
    title: 'Creative Production',
    text: 'Social media design, motion graphics, video editing, CGI visuals, 3D animation, campaign creatives, and content systems.',
    link: '/services#creative-production',
    Icon: Video,
  },
  {
    title: 'Marketing & Visibility',
    text: 'SEO, Google Ads, Meta Ads, social media marketing, AEO optimization, GEO optimization, influencer planning, and campaign strategy.',
    link: '/services#marketing-visibility',
    Icon: TrendingUp,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    text: 'We study your business, audience, market, goals, and current brand presence.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'We shape the creative direction, structure, visual language, and digital strategy.',
  },
  {
    number: '03',
    title: 'Create',
    text: 'We design and build the identity, website, content, visuals, campaigns, or complete system.',
  },
  {
    number: '04',
    title: 'Launch',
    text: 'We prepare the final work for real use across websites, social media, ads, search, and campaigns.',
  },
];

export default function AboutBuild() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!section || reducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-build__intro > *',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.82,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-build__intro', start: 'top 78%' },
        },
      );

      gsap.fromTo(
        '.about-capability',
        { opacity: 0, y: 36, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.76,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-capabilities', start: 'top 80%' },
        },
      );

      gsap.fromTo(
        '.about-process__line-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.15,
          transformOrigin: 'left center',
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.about-process', start: 'top 82%' },
        },
      );

      gsap.fromTo(
        '.about-process__step',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.11,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-process', start: 'top 78%' },
        },
      );

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section about-build" aria-labelledby="about-build-title">
      <div className="about-shell">
        <div className="about-build__intro">
          <p className="about-label about-label--dark">WHAT WE BUILD</p>
          <h2 id="about-build-title" className="about-heading">
            Everything your brand needs to look consistent, communicate clearly, and grow online.
          </h2>
          <p>
            Brand Crafters brings multiple creative and digital capabilities together so your business does not feel
            fragmented across platforms.
          </p>
        </div>

        <div className="about-capabilities">
          {capabilities.map(({ Icon, ...capability }) => (
            <Link className="about-capability" to={capability.link} key={capability.title}>
              <div className="about-capability__top">
                <Icon aria-hidden="true" strokeWidth={1.5} />
                <ArrowUpRight className="about-capability__arrow" aria-hidden="true" strokeWidth={1.5} />
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <span aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="about-process">
          <h3>How we shape the work</h3>
          <div className="about-process__rail" aria-hidden="true">
            <div className="about-process__line-fill" />
          </div>
          <div className="about-process__steps">
            {processSteps.map((step) => (
              <article className="about-process__step" key={step.number}>
                <span>{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import AboutElevatorPitch from '../components/about/AboutElevatorPitch';
import AboutFamily from '../components/about/AboutFamily';
import AboutPreFooter from '../components/about/AboutPreFooter';
import CTASection from '../components/CTASection';
import './about.css';

export default function About() {
  useEffect(() => {
    document.title = 'About Brand Crafters | Creative Branding, Website Development & Digital Growth Studio';

    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    setMetaTag(
      'description',
      'Learn about Brand Crafters, a premium creative agency building brand identities, modern websites, creative content, CGI visuals, SEO systems, and digital growth strategies for ambitious businesses.',
    );
    setMetaTag(
      'og:title',
      'About Brand Crafters — A Creative Studio for Modern Brands',
      true,
    );
    setMetaTag(
      'og:description',
      'Brand Crafters builds connected brand, digital, creative, and growth systems through strategy, design, websites, content, and visibility.',
      true,
    );

    return () => {
      document.title = 'Brand Crafters | Brand Identity, Websites, Creative Production & Digital Growth';
    };
  }, []);

  return (
    <div className="about-page">
      <AboutElevatorPitch />
      <AboutFamily />
      <AboutPreFooter />
      <CTASection />
    </div>
  );
}

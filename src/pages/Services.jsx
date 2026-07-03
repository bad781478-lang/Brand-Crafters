import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../post-second-theme.css';
import './services.css';
import ResultDrivenHero from '../components/services/ResultDrivenHero';
import ServicesSection1 from '../components/services/ServicesSection1';
import CTASection from '../components/CTASection';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    // Scroll restoration for hash links
    const scrollFrame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          if (window.__lenis?.scrollTo) {
            window.__lenis.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView({ block: 'start' });
          }
        }
      }
    });

    // Set SEO Meta Tags
    document.title = "Our Services | Brand Identity, Website Development, Creative Production & Digital Growth | Brand Crafters";
    
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

    setMetaTag('description', 'Explore Brand Crafters services in brand identity, logo design, website development, app development, creative production, CGI, video editing, SEO, ads, and digital growth for modern businesses.');
    setMetaTag('og:title', 'Brand Crafters Services — Brand Identity, Websites, Creative Production & Digital Growth', true);
    setMetaTag('og:description', 'A connected creative system for businesses that need premium branding, modern websites, powerful content, and smarter visibility.', true);

    return () => {
      window.cancelAnimationFrame(scrollFrame);
      document.title = "Brand Crafters";
    };
  }, [location.hash]);

  return (
    <div className="services-page min-h-screen bg-[#000000] text-white">
      <ResultDrivenHero />
      <ServicesSection1 />
      <CTASection />
    </div>
  );
}

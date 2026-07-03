import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';

const BusinessTrackSection = lazy(() =>
  import('../business-track-section').then((module) => ({
    default: module.BusinessTrackSection,
  })),
);
const OurServicesSection = lazy(() => import('../components/OurServicesSection'));
const HowItWorksSection = lazy(() => import('../components/HowItWorksSection'));
const HomeContinuationSections = lazy(() =>
  import('../components/HomeContinuationSections'),
);
const CTASection = lazy(() => import('../components/CTASection'));

const DelayedSection = React.memo(function DelayedSection({
  children,
  minHeight = '100vh',
}) {
  const placeholderRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const placeholderStyle = { minHeight };

  useEffect(() => {
    if (shouldRender) {
      return undefined;
    }

    const renderSection = () => setShouldRender(true);
    const placeholder = placeholderRef.current;
    let observer = null;

    if (placeholder && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            renderSection();
            observer?.disconnect();
          }
        },
        { rootMargin: '0px', threshold: 0.01 },
      );
      observer.observe(placeholder);
    }

    window.addEventListener('wheel', renderSection, { passive: true, once: true });
    window.addEventListener('touchstart', renderSection, { passive: true, once: true });
    window.addEventListener('keydown', renderSection, { passive: true, once: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener('wheel', renderSection);
      window.removeEventListener('touchstart', renderSection);
      window.removeEventListener('keydown', renderSection);
    };
  }, [shouldRender]);

  if (shouldRender) {
    return <Suspense fallback={<div aria-hidden="true" style={placeholderStyle} />}>{children}</Suspense>;
  }

  return <div ref={placeholderRef} aria-hidden="true" style={placeholderStyle} />;
});

const DeferredSection = React.memo(function DeferredSection({
  children,
  minHeight = '100vh',
  rootMargin = '1800px 0px',
}) {
  const placeholderRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const placeholderStyle = { minHeight };

  useEffect(() => {
    if (shouldRender) {
      return undefined;
    }

    const placeholder = placeholderRef.current;
    if (!placeholder || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(placeholder);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  if (shouldRender) {
    return <Suspense fallback={<div aria-hidden="true" style={placeholderStyle} />}>{children}</Suspense>;
  }

  return <div ref={placeholderRef} aria-hidden="true" style={placeholderStyle} />;
});

export default function Home() {
  return (
    <>
      <Hero />
      <DelayedSection minHeight="100vh">
        <BusinessTrackSection />
      </DelayedSection>
      <DeferredSection minHeight="520vh" rootMargin="600px 0px">
        <OurServicesSection />
      </DeferredSection>
      <DeferredSection minHeight="120vh" rootMargin="600px 0px">
        <HowItWorksSection />
      </DeferredSection>
      <DeferredSection minHeight="780vh" rootMargin="600px 0px">
        <HomeContinuationSections />
      </DeferredSection>
      <DeferredSection minHeight="800px" rootMargin="1600px 0px">
        <CTASection />
      </DeferredSection>
    </>
  );
}

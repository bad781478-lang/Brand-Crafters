import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import { useLenisSmoothScroll } from './hooks/useLenisSmoothScroll';
import Home from './pages/Home';
import FloatingControls from './components/FloatingControls';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';

const PlayaFooter = lazy(() => import('./components/PlayaFooter'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

function DeferredFooter() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact' || location.pathname === '/contact-us';

  const placeholderRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender || isContactPage) {
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
      { rootMargin: '1200px 0px', threshold: 0.01 },
    );

    observer.observe(placeholder);

    return () => observer.disconnect();
  }, [shouldRender, isContactPage]);

  if (isContactPage) {
    return null;
  }

  if (!shouldRender) {
    return <div ref={placeholderRef} aria-hidden="true" style={{ minHeight: '420px' }} />;
  }

  return (
    <Suspense fallback={<div aria-hidden="true" style={{ minHeight: '420px' }} />}>
      <PlayaFooter />
    </Suspense>
  );
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
      <Route path="/services/:serviceSlug" element={<PageTransition><ServiceDetail /></PageTransition>} />
      <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      <Route path="/contact-us" element={<PageTransition><Contact /></PageTransition>} />
      <Route path="/privacy" element={<PageTransition><LegalPage title="Privacy Policy" /></PageTransition>} />
      <Route path="/terms" element={<PageTransition><LegalPage title="Terms of Service" /></PageTransition>} />
      <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
    </Routes>
  );
}

function App() {
  useLenisSmoothScroll();

  useEffect(() => {
    const scrollPageToStart = () => {
      window.scrollTo(0, 0);
      window.__lenis?.scrollTo?.(0, { immediate: true, force: true });
    };

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    scrollPageToStart();

    const handleBeforeUnload = () => {
      scrollPageToStart();
    };

    const handlePageShow = () => {
      scrollPageToStart();
    };

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let resizeTimer;

    const handleResize = (event) => {
      const nextViewportWidth = window.innerWidth;
      const nextViewportHeight = window.innerHeight;
      const hasViewportChanged =
        nextViewportWidth !== viewportWidth || nextViewportHeight !== viewportHeight;

      if (!hasViewportChanged) {
        return;
      }

      viewportWidth = nextViewportWidth;
      viewportHeight = nextViewportHeight;
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        scrollPageToStart();

        if (event?.isTrusted === false) {
          return;
        }

        window.location.reload();
      }, 250);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <Router>
      <LoadingScreen />
      <ScrollToTop />
      <FloatingControls />
      <main>
        <Navbar />
        <Suspense fallback={null}>
          <AnimatedRoutes />
        </Suspense>
        <DeferredFooter />
      </main>
    </Router>
  );
}

export default App;

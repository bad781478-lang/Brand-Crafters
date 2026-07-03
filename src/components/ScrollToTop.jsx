import { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function loadScrollTrigger() {
  return import('gsap/ScrollTrigger').then(
    (module) => module.ScrollTrigger || module.default,
  );
}

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const hasMountedRef = useRef(false);
  const shouldRefreshOnFallbackRef = useRef(false);

  useLayoutEffect(() => {
    let cancelled = false;
    const shouldRefreshScrollTrigger = hasMountedRef.current;
    shouldRefreshOnFallbackRef.current = shouldRefreshScrollTrigger;

    // 1. Instantly reset native scroll
    window.scrollTo(0, 0);
    
    // 2. Instantly reset Lenis scroll
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }

    // 3. Force GSAP to forget old scroll positions immediately
    if (shouldRefreshScrollTrigger) {
      loadScrollTrigger().then((ScrollTrigger) => {
        if (!cancelled && ScrollTrigger.getAll().length > 0) {
          ScrollTrigger.refresh(true);
        }
      });
    }

    hasMountedRef.current = true;

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  // Fallback frame-delayed reset to combat any layout shifting
  useEffect(() => {
    let cancelled = false;
    let frame = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true, force: true });
      }

      if (shouldRefreshOnFallbackRef.current) {
        loadScrollTrigger().then((ScrollTrigger) => {
          if (!cancelled && ScrollTrigger.getAll().length > 0) {
            ScrollTrigger.refresh(true);
          }
        });
      }
      
      // Force a 1px scroll to trigger onEnter for elements at top
      if (window.__lenis) {
        window.__lenis.emit();
      }
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}

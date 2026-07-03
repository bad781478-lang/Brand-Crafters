import { useEffect } from 'react';

export function useLenisSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let frame = 0;
    let lenis = null;
    let isDisposed = false;
    let isTickerAttached = false;
    let updateScrollTrigger = null;
    let raf = null;
    let gsapInstance = null;
    let scrollTrigger = null;
    let setupStarted = false;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const supportsDesktopSmoothScroll = window.matchMedia(
      '(min-width: 1024px) and (hover: hover) and (pointer: fine)',
    ).matches;
    const saveData = Boolean(navigator.connection?.saveData);

    if (reducedMotion || !supportsDesktopSmoothScroll || saveData) {
      return undefined;
    }

    const setupLenis = async () => {
      if (isDisposed) return;

      const [gsapModule, scrollTriggerModule, lenisModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('lenis'),
      ]);

      if (isDisposed) return;

      gsapInstance = gsapModule.gsap || gsapModule.default;
      scrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
      gsapInstance.registerPlugin(scrollTrigger);

      const LenisConstructor = window.Lenis || lenisModule.default;

      lenis = new LenisConstructor({
        autoRaf: false,
        duration: 1.25,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.12,
        wheelMultiplier: 0.9,
      });

      window.__lenis = lenis;

      if (document.body.classList.contains('is-loading')) {
        lenis.stop();
      }

      updateScrollTrigger = () => scrollTrigger.update();
      raf = (time) => {
        lenis.raf(time * 1000);
      };

      lenis.on('scroll', updateScrollTrigger);
      gsapInstance.ticker.add(raf, false, true);
      gsapInstance.ticker.lagSmoothing(0);
      isTickerAttached = true;
      scrollTrigger.refresh();
    };

    const queueSetup = () => {
      if (setupStarted || isDisposed) return;
      setupStarted = true;
      frame = window.requestAnimationFrame(setupLenis);
    };

    queueSetup();

    return () => {
      isDisposed = true;
      window.cancelAnimationFrame(frame);

      if (lenis && updateScrollTrigger && typeof lenis.off === 'function') {
        lenis.off('scroll', updateScrollTrigger);
      }

      if (isTickerAttached && raf && gsapInstance) {
        gsapInstance.ticker.remove(raf);
      }

      lenis?.destroy();
      delete window.__lenis;
      scrollTrigger?.update();
    };
  }, []);
}

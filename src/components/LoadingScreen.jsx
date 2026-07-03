import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoadingScreen = () => {
  const containerRef = useRef(null);
  const blackColumnsRef = useRef([]);
  const whiteColumnsRef = useRef([]);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const letters1Ref = useRef([]);
  const letters2Ref = useRef([]);
  const counterRef = useRef(null);
  const lineRef = useRef(null);
  const location = useLocation();
  const [isFinished, setIsFinished] = useState(location.pathname !== '/');
  const [isPlayingReveal, setIsPlayingReveal] = useState(false);

  useEffect(() => {
    if (isFinished) return;
    
    const isCompactScreen = window.innerWidth < 768;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    let hasFinished = false;
    let counterFrame = 0;
    let finishTimer = 0;
    let playHeroTimer = 0;
    let hasPlayedReveal = false;

    window.__lenis?.stop?.();
    window.__lenis?.scrollTo?.(0, { immediate: true });
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('is-loading');
    document.documentElement.classList.add('is-loading');

    const unlockScroll = () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.classList.remove('is-loading');
      document.documentElement.classList.remove('is-loading');
      window.__lenis?.start?.();
      window.__lenis?.resize?.();
    };

    const finishReveal = () => {
      if (hasFinished) return;
      hasFinished = true;
      window.__lenis?.scrollTo?.(0, { immediate: true });
      window.scrollTo(0, 0);
      setIsFinished(true);
      unlockScroll();
      window.requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('revealFinished'));
      });
    };

    const animateCounter = () => {
      const startTime = performance.now();
      const duration = 2000;

      const updateCounter = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        if (counterRef.current) {
          counterRef.current.innerText = `${Math.round(easedProgress * 100)}%`;
        }

        if (progress < 1) {
          counterFrame = window.requestAnimationFrame(updateCounter);
        }
      };

      counterFrame = window.requestAnimationFrame(updateCounter);
    };

    const playReveal = () => {
      if (hasPlayedReveal || hasFinished) return;
      hasPlayedReveal = true;
      setIsPlayingReveal(true);
      animateCounter();

      const revealDuration = isCompactScreen ? 4720 : 5280;
      playHeroTimer = window.setTimeout(() => {
        window.dispatchEvent(new Event('playHeroVideo'));
      }, revealDuration - 1000);
      finishTimer = window.setTimeout(finishReveal, revealDuration);
    };

    let isVideoReady = false;
    let isFontReady = false;

    const checkReady = () => {
      if (isVideoReady && isFontReady) {
        playReveal();
      }
    };

    const safetyTimer = window.setTimeout(() => {
      playReveal(); // Fallback if video takes too long
    }, 7200);

    // Preload fonts
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        isFontReady = true;
        checkReady();
      }).catch(() => {
        isFontReady = true;
        checkReady();
      });
    } else {
      isFontReady = true;
      checkReady();
    }

    // Preload video
    const CINEMATIC_VIDEO_URL = "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/useless/Performer_infinite_zoom_transition_202607031728.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvdXNlbGVzcy9QZXJmb3JtZXJfaW5maW5pdGVfem9vbV90cmFuc2l0aW9uXzIwMjYwNzAzMTcyOC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMDgxMDA4LCJleHAiOjQ5MzY2ODEwMDh9.L-vFrn4Whs8gCHL30XaGLcoZBs1iXuXGfZ1N-rXV5jU";
    
    if (window.__PRELOADED_CINEMATIC_VIDEO__) {
      isVideoReady = true;
      checkReady();
    } else {
      fetch(CINEMATIC_VIDEO_URL)
        .then(res => res.blob())
        .then(blob => {
          window.__PRELOADED_CINEMATIC_VIDEO__ = URL.createObjectURL(blob);
          isVideoReady = true;
          checkReady();
        })
        .catch(err => {
          console.error("Failed to preload video during loading screen", err);
          isVideoReady = true;
          checkReady();
        });
    }

    return () => {
      window.clearTimeout(safetyTimer);
      window.clearTimeout(finishTimer);
      window.clearTimeout(playHeroTimer);
      window.cancelAnimationFrame(counterFrame);
      unlockScroll();
    };
  }, [isFinished]);

  if (isFinished) return null;

  return (
      <div
        ref={containerRef}
        className={[
          'fixed inset-0 z-[9999] pointer-events-none flex loading-screen',
          isPlayingReveal ? 'loading-screen--playing' : '',
        ].filter(Boolean).join(' ')}
        aria-hidden="true"
      >
      {/* White columns (background layer) */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`white-${i}`}
            ref={el => whiteColumnsRef.current[i] = el}
            className="flex-1 h-full bg-white loading-column loading-column--white"
            style={{
              marginLeft: i === 0 ? 0 : '-1px',
              willChange: 'transform',
              '--column-index': i,
            }}
          />
        ))}
      </div>

      {/* Black columns (foreground layer) */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`black-${i}`}
            ref={el => blackColumnsRef.current[i] = el}
            className="flex-1 h-full bg-black loading-column loading-column--black"
            style={{
              marginLeft: i === 0 ? 0 : '-1px',
              willChange: 'transform',
              '--column-index': i,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <div className="mix-blend-difference flex flex-col md:flex-row items-center gap-1.5 md:gap-4 text-[clamp(2rem,10vw,2.7rem)] md:text-5xl font-bold tracking-[0.12em] md:tracking-[0.2em] uppercase mb-10 md:mb-12 px-4 text-center leading-none [font-family:Oswald,sans-serif]" style={{ willChange: 'transform' }}>
          <div className="flex loading-wordmark loading-wordmark--brand" ref={text1Ref} style={{ willChange: 'transform' }}>
            {"BRAND".split('').map((letter, i) => (
              <div key={i} className="overflow-hidden">
                <span
                  ref={el => letters1Ref.current[i] = el}
                  className="block will-change-transform loading-letter"
                  style={{ '--letter-index': i }}
                >
                  {letter}
                </span>
              </div>
            ))}
          </div>
          <div className="flex loading-wordmark loading-wordmark--crafters" ref={text2Ref} style={{ willChange: 'transform' }}>
            {"CRAFTERS".split('').map((letter, i) => (
              <div key={i} className="overflow-hidden">
                <span
                  ref={el => letters2Ref.current[i] = el}
                  className="block will-change-transform loading-letter"
                  style={{ '--letter-index': i + 5 }}
                >
                  {letter}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center w-64 max-w-[80vw]">
          <div className="w-full flex justify-between text-xs tracking-widest mb-2 font-medium">
            <span className="loading-text">LOADING</span>
            <span ref={counterRef} className="loading-text">0%</span>
          </div>
          <div className="w-full h-[2px] bg-white/20 overflow-hidden relative loading-text">
            <div 
              ref={lineRef}
              className="absolute inset-0 bg-white loading-line"
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>
      </div>
      </div>
  );
};

export default LoadingScreen;

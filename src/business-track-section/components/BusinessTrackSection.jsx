import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BusinessFeatureCard } from './BusinessFeatureCard';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { DEFAULT_WHATSAPP_URL } from '../../utils/whatsapp';

const MIN_HORIZONTAL_TRAVEL_VW = 294.894;

const DESKTOP_BREAKPOINT = 1024;
const MOBILE_BREAKPOINT = 640;
const SECTION_CARD_TEXT_TRAVEL_REM = 2;
const SECOND_SECTION_SCROLL_SPEED = 1.78;
const TRANSFORM_PRECISION = 1000;

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  {
    variant: 'personalized',
    title: 'Strategy',
    description: 'Define positioning, audience,\nand direction before design\nbegins.',
    indexLabel: '01',
    videoSrc: '/video/1stcard.mp4',
    rotation: -10,
    textPanel: '#2a1b0b',
    accent: '#2a1b0b',
  },
  {
    variant: 'private',
    title: 'Identity',
    description: 'Build a visual identity\nthat feels distinct, recognizable,\nand consistent.',
    indexLabel: '02',
    videoSrc: '/video/2ndcard.mp4',
    layers: [
      {
        className: 'bt-business-layer--private-back',
        rotation: 5,
      },
    ],
    rotation: -5,
    textPanel: '#FF681F',
    accent: '#FF681F',
  },
  {
    variant: 'branded',
    title: 'Experience',
    description: 'Create websites, apps,\nand digital journeys\nthat feel smooth\nand conversion-ready.',
    indexLabel: '03',
    videoSrc: '/video/3rdcard.mp4',
    rotation: -10,
    textPanel: '#2a1b0b',
    accent: '#2a1b0b',
  },
  {
    variant: 'integrated',
    title: 'Growth',
    description: 'Connect SEO, campaigns,\nand digital marketing\ninto measurable results.',
    indexLabel: '04',
    videoSrc: 'https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/2nd%20seaction/4th.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvMm5kIHNlYWN0aW9uLzR0aC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMDk4Njc5LCJleHAiOjE4Njk0OTg2Nzl9.d8xi7YgZFUvTvVo5_JoQDsNOnb46ObRHvOEDb_NR72s',
    layers: [
      {
        className: 'bt-business-layer--integrated-back',
        rotation: 10,
      },
      {
        className: 'bt-business-layer--integrated-note',
        rotation: -14,
      },
    ],
    rotation: 3,
    textPanel: '#FF681F',
    accent: '#FF681F',
  },
];

function BusinessIntroPanel() {
  const visualRef = useRef(null);
  const contentRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!visualRef.current || !contentRef.current) return undefined;

    const visualElement = visualRef.current;
    const triggerElement = visualElement.closest('.bt-business-intro__container') ?? visualElement;
    const eyebrow = visualElement.querySelector('.bt-business-intro__eyebrow');
    const logo = visualElement.querySelector('.bt-business-intro__logo');
    const elements = contentRef.current.querySelectorAll(
      '.bt-business-intro__headline-line, .bt-business-intro__body, .bt-business-intro__actions a'
    );

    if (prefersReducedMotion) {
      gsap.set([eyebrow, logo, ...elements], { clearProps: 'opacity,transform' });
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          overwrite: 'auto',
        },
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 72%',
          once: true,
        },
      });

      timeline
        .fromTo(
          eyebrow,
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.36 },
          0,
        )
        .fromTo(
          logo,
          { y: 42, scale: 0.92, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.72 },
          0.03,
        )
        .fromTo(
          elements,
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            stagger: 0.045,
          },
          0.1,
        );
    });

    return () => context.revert();
  }, [prefersReducedMotion]);

  return (
    <>
      <div className="bt-business-intro__visual" ref={visualRef}>
        <div className="bt-business-intro__eyebrow" aria-hidden="true">
          <span className="bt-business-intro__spark">✳</span>
          <span className="bt-business-intro__label-window">
            <span className="bt-business-intro__label-track">
          <span>BRAND SYSTEMS IN MOTION</span>
          <span>BRAND SYSTEMS IN MOTION</span>
          <span>BRAND SYSTEMS IN MOTION</span>
            </span>
          </span>
        </div>

        <div className="main bt-business-intro__logo"><div className="up"><div className="loaders"><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div><div className="loader"></div></div><div className="loadersB"><div className="loaderA"><div className="ball0"></div></div><div className="loaderA"><div className="ball1"></div></div><div className="loaderA"><div className="ball2"></div></div><div className="loaderA"><div className="ball3"></div></div><div className="loaderA"><div className="ball4"></div></div><div className="loaderA"><div className="ball5"></div></div><div className="loaderA"><div className="ball6"></div></div><div className="loaderA"><div className="ball7"></div></div><div className="loaderA"><div className="ball8"></div></div></div></div></div>
      </div>

      <div className="bt-business-intro__content" ref={contentRef}>
        <h2 id="business-track-heading" className="bt-business-intro__headline">
          <span className="bt-business-intro__headline-line">
            WE CRAFT ICONIC BRANDS
          </span>
          <span className="bt-business-intro__headline-line">
            BUILD ELITE PLATFORMS
          </span>
          <span className="bt-business-intro__headline-line bt-business-intro__muted">
            PRODUCE STUNNING CGI
          </span>
          <span className="bt-business-intro__headline-line bt-business-intro__muted">
            &amp; DRIVE BUSINESS GROWTH
          </span>
        </h2>

        <p className="bt-business-intro__body">
          We connect brand identity, digital experience, creative content, and growth strategy into one focused system — built to help your business look credible, move faster, and stand out online.
        </p>

        <div className="bt-business-intro__actions">
          <a href="/about" className="bt-business-intro__primary">
            OUR STORY <span aria-hidden="true">✦</span>
          </a>
          <a
            href={DEFAULT_WHATSAPP_URL}
            className="bt-business-intro__secondary"
            target="_blank"
            rel="noreferrer"
          >
            CONTACT US <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}

export function BusinessTrackSection() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const headerRef = useRef(null);

  const cardRefs = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const useHorizontalTrack = !prefersReducedMotion;





  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const sectionElement = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    let removeRefreshListener = null;
    let resizeObserver = null;
    let refreshFrame = 0;
    let refreshTimer = 0;
    let setupFrame = 0;
    let isMounted = true;
    let context = null;

    const setupAnimations = () => {
      ScrollTrigger.config({
        ignoreMobileResize: true,
        limitCallbacks: true,
      });
      
      if (!isMounted) return;

      context = gsap.context(() => {
        if (useHorizontalTrack && stickyRef.current && trackRef.current) {
          const stickyElement = stickyRef.current;
          const trackElement = trackRef.current;

          const getDistance = () =>
            Math.max(trackElement.scrollWidth - stickyElement.offsetWidth, 0);

          let layoutMetrics = null;

          const getMotionSettings = () => {
            return {
              mainScrub: 0.42,
              layerScrub: 0.32,
              accentScrub: 0.28,
              colorScrub: 0.32,
            };
          };

          const measureLayout = () => {
            const viewportHeight = window.innerHeight;
            const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
            const isTablet = window.innerWidth > MOBILE_BREAKPOINT && window.innerWidth <= DESKTOP_BREAKPOINT;
            const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT;
            const maxMultiplier = isMobile ? 9 : isTablet ? 18 : 17;
            const minScroll = viewportHeight * (isMobile ? 2.8 : isTablet ? 5.6 : 6.5);
            const maxScroll = viewportHeight * maxMultiplier;
            const distanceMultiplier = isMobile ? 1.15 : isTablet ? 3.25 : 3.7;
            const travelDistance = getDistance();

            layoutMetrics = {
              exitHold: viewportHeight * (isDesktop ? 0.28 : 0.6),
              scrollDelay: viewportHeight * (isDesktop ? 0.05 : 0.08),
              scrollLength:
                Math.min(Math.max(travelDistance * distanceMultiplier, minScroll), maxScroll) /
                SECOND_SECTION_SCROLL_SPEED,
              travelDistance,
              width: window.innerWidth,
            };

            return layoutMetrics;
          };

          const getLayoutMetrics = () => {
            return layoutMetrics ?? measureLayout();
          };

          const getScrollLength = () => getLayoutMetrics().scrollLength;
          const getScrollDelay = () => getLayoutMetrics().scrollDelay;
          const getExitHold = () => getLayoutMetrics().exitHold;
          const getViewportTravelDistance = () => getLayoutMetrics().travelDistance;

          const refreshHeight = () => {
            const { exitHold, scrollDelay, scrollLength } = getLayoutMetrics();
            sectionElement.style.height = `${scrollLength + scrollDelay + window.innerHeight + exitHold}px`;
            sectionElement.style.marginBottom = `-${window.innerHeight}px`;
          };

          let lastWidth = window.innerWidth;

          const requestRefresh = () => {
            window.clearTimeout(refreshTimer);
            refreshTimer = window.setTimeout(() => {
              if (window.innerWidth === lastWidth) {
                return;
              }
              lastWidth = window.innerWidth;

              window.cancelAnimationFrame(refreshFrame);
              refreshFrame = window.requestAnimationFrame(() => {
                layoutMetrics = null;
                refreshHeight();
                window.__lenis?.resize?.();
                ScrollTrigger.refresh();
              });
            }, 120);
          };

          refreshHeight();

          if ('ResizeObserver' in window) {
            resizeObserver = new ResizeObserver(requestRefresh);
            resizeObserver.observe(stickyElement);
            resizeObserver.observe(trackElement);
          }

          gsap.defaults({ ease: 'none', overwrite: 'auto', lazy: false });


          gsap.set(trackElement, {
            x: 0,
            z: 0,
            force3D: true,
            willChange: 'transform',
          });

          const motionSettings = getMotionSettings();
          const scrollDefaults = {
            trigger: sectionElement,
            start: 'top top',
            end: () => `+=${getScrollLength() + getScrollDelay()}`,
            scrub: motionSettings.mainScrub,
            invalidateOnRefresh: true,
          };

          const trackTween = gsap.timeline({
            scrollTrigger: {
              ...scrollDefaults,
              fastScrollEnd: true,
            },
          });

          trackTween.to(trackElement, {
            duration: () => {
              const total = getScrollLength() + getScrollDelay();
              return getScrollDelay() / total;
            }
          });

          trackTween.to(trackElement, {
            x: () => {
              const travel = getViewportTravelDistance();
              return -Math.round(travel * TRANSFORM_PRECISION) / TRANSFORM_PRECISION;
            },
            z: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skewX: 0,
            skewY: 0,
            ease: 'none',
            force3D: true,
            duration: () => {
              const total = getScrollLength() + getScrollDelay();
              return getScrollLength() / total;
            }
          }, ">");

          cards.forEach((card, index) => {
            const feature = featureCards[index];

            const paperLayers = card.querySelectorAll('[data-bt-business-paper]');
            const textLayer = card.querySelector('[data-bt-business-text]');
            const deviceLayer = card.querySelector('[data-bt-business-card]');
            const noteLayer = card.querySelector('[data-bt-business-note]');
            

            const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
            const isTablet = window.innerWidth > MOBILE_BREAKPOINT && window.innerWidth <= DESKTOP_BREAKPOINT;
            const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT;

            paperLayers.forEach((layer, layerIndex) => {
              const direction = layerIndex % 2 === 0 ? 1 : -1;
              let baseRotation = Number(layer.dataset.btLayerRotation ?? 0);
              const isIntegratedNote = layer.classList.contains('bt-business-layer--integrated-note') || layer.classList.contains('bt-business-layer--impact-note');
              const isIntegratedBack = layer.classList.contains('bt-business-layer--integrated-back');

              if (!isDesktop && isIntegratedNote) {
                baseRotation = 10;
              }

              let startX, endX, startRot, endRot;

              if (isIntegratedNote) {
                startX = isDesktop ? -14 : -11;
                endX = isDesktop ? -75 : -36;
                startRot = baseRotation + 8;
                endRot = baseRotation - 19;
              } else if (isIntegratedBack) {
                startX = isDesktop ? -18 : direction * -13;
                endX = isDesktop ? 18 : direction * 13;
                startRot = baseRotation + 11;
                endRot = baseRotation - 11;
              } else {
                let travelMultiplier = isDesktop ? 16 : (isTablet ? 11 : 7);
                let rotOffset = isDesktop ? 5 : 3;
                
                if (index === 1) {
                  travelMultiplier = isDesktop ? 16 : (isTablet ? 11 : 7);
                  rotOffset = isDesktop ? 5 : 3;
                }
                
                startX = direction * -travelMultiplier;
                endX = direction * travelMultiplier;
                startRot = baseRotation + direction * rotOffset;
                endRot = baseRotation + direction * -rotOffset;
              }

              gsap.fromTo(
                layer,
                {
                  xPercent: startX,
                  z: 0,
                  rotateZ: startRot,
                },
                {
                  xPercent: endX,
                  z: 0,
                  rotateZ: endRot,
                  ease: 'none',
                  force3D: index === 1 ? false : true,
                  scale: index === 1 ? 1 : undefined,
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: trackTween,
                    start: 'left right',
                    end: 'right left',
                    scrub: (isIntegratedNote || isIntegratedBack)
                      ? motionSettings.accentScrub
                      : motionSettings.layerScrub,
                    invalidateOnRefresh: true,
                  },
                },
              );
            });
            
            if (deviceLayer) {
              const baseRot = feature.rotation;

              if (index === 2) {
                gsap.fromTo(
                  deviceLayer,
                  { z: 0, rotateZ: -4 },
                  {
                    z: 0,
                    rotateZ: 14,
                    ease: 'none',
                    force3D: true,
                    scrollTrigger: {
                      trigger: card,
                      containerAnimation: trackTween,
                      start: 'left right',
                      end: 'right left',
                      scrub: motionSettings.layerScrub,
                      invalidateOnRefresh: true,
                    },
                  },
                );
              } else if (index === 0) {
                gsap.fromTo(
                  deviceLayer,
                  { z: 0, rotateZ: -20 },
                  {
                    z: 0,
                    rotateZ: 10,
                    ease: 'none',
                    force3D: true,
                    scrollTrigger: {
                      trigger: card,
                      containerAnimation: trackTween,
                      start: 'left right',
                      end: 'right left',
                      scrub: motionSettings.layerScrub,
                      invalidateOnRefresh: true,
                    },
                  },
                );
              } else if (index === 1 || index === 3) {
                gsap.fromTo(
                  deviceLayer,
                  { z: 0, rotateZ: baseRot - 13, xPercent: 11 },
                  {
                    z: 0,
                    rotateZ: baseRot + 13,
                    xPercent: -11,
                    ease: 'none',
                    force3D: index === 1 ? false : true,
                    scale: index === 1 ? 1 : undefined,
                    scrollTrigger: {
                      trigger: card,
                      containerAnimation: trackTween,
                      start: 'left right',
                      end: 'right left',
                      scrub: motionSettings.accentScrub,
                      invalidateOnRefresh: true,
                    },
                  },
                );
              }
            }

            if (noteLayer) {
              const baseRot = Number(noteLayer.dataset.rotation) || 0;
	              gsap.fromTo(
	                noteLayer,
	                { yPercent: isMobile ? 29 : 40, xPercent: isMobile ? -18 : -29, z: 0, rotateZ: baseRot - (isDesktop ? 32 : 18) },
	                {
	                  yPercent: isMobile ? -29 : -40,
	                  xPercent: isMobile ? 18 : 29,
	                  z: 0,
	                  rotateZ: baseRot + (isDesktop ? 32 : 18),
                  ease: 'none',
                  force3D: true,
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: trackTween,
                    start: 'left right',
                    end: 'right left',
                    scrub: motionSettings.layerScrub,
                    invalidateOnRefresh: true,
                  }
                }
              );
            }

            if (textLayer) {
              let textTravelRem = isDesktop ? 4.5 : isTablet ? 2.6 : SECTION_CARD_TEXT_TRAVEL_REM;
              if (index === 3) {
                textTravelRem = isDesktop ? 26 : isTablet ? 14 : 10;
              }
              const textScrub = isDesktop ? motionSettings.layerScrub : motionSettings.accentScrub;
              const textStart = isDesktop ? 'left 82%' : 'left right';
              const textEnd = isDesktop ? 'right 18%' : 'right left';

              gsap.fromTo(
                textLayer,
                { x: `${textTravelRem}rem`, z: 0 },
                {
                  x: `${-textTravelRem}rem`,
                  z: 0,
                  ease: 'none',
                  force3D: true,
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: trackTween,
                    start: textStart,
                    end: textEnd,
                    scrub: textScrub,
                    invalidateOnRefresh: true,
                  },
                },
              );
            }
          });

          if (process.env.NODE_ENV === 'development') {
            const btTriggers = ScrollTrigger.getAll().filter(t => t.trigger === sectionElement);
            if (btTriggers.length > 1) {
              console.warn('[Business Track] Guard: Duplicate ScrollTriggers detected:', btTriggers.length);
            }
          }

          return;
        }

        sectionElement.style.removeProperty('height');
        sectionElement.style.removeProperty('margin-bottom');

        if (trackRef.current) {
          gsap.set(trackRef.current, { clearProps: 'all' });
        }

        if (headerRef.current) {
          gsap.set(headerRef.current, { clearProps: 'all' });
        }

        gsap.set(cards, { clearProps: 'all' });

        return undefined;
      }, sectionRef);
    };

    const runSetup = () => {
      setupFrame = window.requestAnimationFrame(setupAnimations);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (isMounted) {
          runSetup();
        }
      });
    } else {
      runSetup();
    }

    return () => {
      isMounted = false;
      removeRefreshListener?.();
      resizeObserver?.disconnect();
      window.clearTimeout(refreshTimer);
      window.cancelAnimationFrame(setupFrame);
      window.cancelAnimationFrame(refreshFrame);
      sectionElement.style.removeProperty('height');
      sectionElement.style.removeProperty('margin-bottom');
      context?.revert();
    };
  }, [prefersReducedMotion, useHorizontalTrack]);

  if (!useHorizontalTrack) {
    return (
      <section
        id="business-track-section"
        ref={sectionRef}
        className="bt-business-section bt-business-section--reduced"
        aria-labelledby="business-track-heading"
      >
        <div className="bt-business-reduced">
          <header ref={headerRef} className="bt-business-intro bt-business-intro--reduced">
            <div className="bt-business-intro__container">
              <BusinessIntroPanel />
            </div>
          </header>

          <ul className="bt-business-reduced__list">
            {featureCards.map((feature, index) => (
              <BusinessFeatureCard
                key={feature.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                reduced
                {...feature}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      id="business-track-section"
      ref={sectionRef}
      className="bt-business-section bt-business-section--horizontal"
      aria-labelledby="business-track-heading"
    >
      <div ref={stickyRef} className="bt-business-camera">
        <div ref={trackRef} className="bt-business-frame">
          <header ref={headerRef} className="bt-business-intro">
            <div className="bt-business-intro__container">
              <BusinessIntroPanel />
            </div>
          </header>

          <ul className="bt-business-track">
            {featureCards.map((feature, index) => (
              <BusinessFeatureCard
                key={feature.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                {...feature}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

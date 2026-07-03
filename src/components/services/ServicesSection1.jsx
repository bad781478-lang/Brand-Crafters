import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { DEFAULT_WHATSAPP_URL } from '../../utils/whatsapp';

const AnimatedPhrase = ({ text, isItalic }) => {
  const phraseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.querySelectorAll('.inner-word'), {
              y: '0%',
              duration: 1.9,
              ease: 'expo.out',
              stagger: 0.05,
              delay: 0.4,
              overwrite: true
            });
          } else {
            // Only reset if it exits from the bottom of the screen (scrolling up)
            if (entry.boundingClientRect.top > 0) {
              gsap.set(entry.target.querySelectorAll('.inner-word'), {
                y: '120%',
                overwrite: true
              });
            }
          }
        });
      },
      { threshold: 0, rootMargin: '10px' }
    );

    if (phraseRef.current) {
      observer.observe(phraseRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <span ref={phraseRef} className={`inline-block mr-[0.25em] ${isItalic ? 'italic font-light' : ''}`}>
      {words.map((word, i) => (
        <span key={i} className={`inline-block overflow-hidden align-bottom pb-[0.1em] ${isItalic ? 'mr-[0.1em]' : 'mr-[0.25em]'}`}>
          <span className={`inner-word inline-block translate-y-[120%] will-change-transform leading-[1.1] ${isItalic ? 'pr-[0.15em]' : ''}`}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

const AnimatedCTA = () => {
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      gsap.set(containerRef.current, { y: 50, opacity: 0 });
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    gsap.killTweensOf([textRef.current, arrowRef.current]);
    gsap.fromTo(arrowRef.current, { x: '-100%' }, { x: '0%', duration: 0.3, ease: 'power2.in' });
    gsap.fromTo(textRef.current, { x: '0%' }, { 
      x: '125%', 
      duration: 0.3, 
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(textRef.current, { x: '-125%' });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([textRef.current, arrowRef.current]);
    gsap.fromTo(textRef.current, { x: '-125%' }, { x: '0%', duration: 0.3, ease: 'power2.out' });
    gsap.fromTo(arrowRef.current, { x: '0%' }, { 
      x: '200%', 
      duration: 0.3, 
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(arrowRef.current, { x: '-100%' });
      }
    });
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center opacity-0" style={{ marginTop: '12rem', marginBottom: '6rem' }}>
      <a 
        href={DEFAULT_WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-[#ffffff] text-[#000000] border border-[#ffffff] rounded-xl flex items-center justify-center cursor-pointer overflow-hidden transform-gpu"
        style={{ paddingTop: '19.5px', paddingBottom: '19.5px', paddingLeft: 'clamp(48px, 18vw, 151px)', paddingRight: 'clamp(48px, 18vw, 151px)' }}
      >
        <div className="relative overflow-hidden w-[101%] h-full flex items-center justify-center">
          <span ref={textRef} className="relative z-10 block text-center whitespace-nowrap will-change-transform font-body text-base font-medium">
            Book a Call
          </span>
          <span 
            ref={arrowRef} 
            className="absolute inset-0 z-20 flex items-center justify-center -translate-x-full will-change-transform w-[102%] ml-[-1px]"
            aria-hidden="true"
          >
            <span className="text-2xl leading-none">-&gt;</span>
          </span>
        </div>
      </a>
      
      <div 
        className="text-center text-white/80 font-body"
        style={{ marginTop: '30px', fontSize: '18px', lineHeight: '130%' }}
      >
        Not sure which service fits your needs?<br/>We'll figure it out together on the call.
      </div>
    </div>
  );
};

export default function ServicesSection1() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target.children, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      gsap.set(gridRef.current.children, { y: 50, opacity: 0 });
      observer.observe(gridRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleServiceImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) return;
    event.currentTarget.dataset.fallbackApplied = 'true';
    event.currentTarget.src = '/images/cta-bg.png';
  };

  const phrases = [
    { text: "We keep things", italic: false },
    { text: "simple.", italic: true },
    { text: "Four essential services", italic: false },
    { text: "that", italic: false, br: true },
    { text: "tackle", italic: true },
    { text: "the main", italic: false },
    { text: "obstacles", italic: true },
    { text: "growing", italic: false, br: true },
    { text: "and mid-sized brands face today.", italic: false }
  ];

  const desktopLines = [
    [
      { text: "We keep things", italic: false },
      { text: "simple.", italic: true },
      { text: "Four essential services", italic: false },
      { text: "that", italic: false }
    ],
    [
      { text: "tackle", italic: true },
      { text: "the main", italic: false },
      { text: "obstacles", italic: true },
      { text: "growing", italic: false }
    ],
    [
      { text: "and mid-sized brands face today.", italic: false }
    ]
  ];

  const cards = [
    {
      id: "brand-identity",
      title: "Brand\nIdentity",
      desc: "Building distinctive visual identities that communicate your brand's story with clarity.",
      link: "/services/brand-identity",
      images: (
        <div className="relative flex justify-center items-start w-full overflow-visible">
          <img
            src="/images/services/service-card-brand-identity-final.png"
            alt="Brand Identity"
            className="image-transform service-card-art service-card-art--brand relative object-contain origin-center z-10 mx-auto"
            style={{ height: '430px', marginTop: '-82px' }}
          />
        </div>
      )
    },
    {
      id: "websites-apps",
      title: "Websites &\nApps",
      desc: "Designing engaging digital experiences and scalable platforms built to grow with you.",
      link: "/services/websites-apps",
      images: (
        <div className="relative flex justify-center items-start w-full overflow-visible">
          <img
            src="/images/services/service-card-websites-apps-v2-transparent.png"
            alt="Websites & Apps"
            className="image-transform three service-card-art service-card-art--web object-contain origin-center mx-auto"
            style={{ width: '100%', height: '430px', marginTop: '-88px' }}
          />
        </div>
      )
    },
    {
      id: "creative-production",
      title: "Creative\nProduction",
      desc: "Premium content creation — from video production to 3D design and beyond.",
      link: "/services/creative-production",
      images: (
        <div className="relative flex justify-center items-start w-full overflow-visible">
          <img
            src="/images/services/service-card-creative-production.png"
            alt="Creative Production"
            className="image-transform four object-contain origin-center"
            style={{ width: '100%', height: '410px', marginTop: '-82px', marginRight: '8px' }}
          />
        </div>
      )
    },
    {
      id: "marketing-visibility",
      title: "Marketing &\nVisibility",
      desc: "Data-driven campaigns designed to accelerate growth and boost brand visibility.",
      link: "/services/marketing-visibility",
      images: (
        <div className="relative flex justify-center items-start w-full overflow-visible">
          <img
            src="https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/servisecards/marketing-visibility-growth.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvc2VydmlzZWNhcmRzL21hcmtldGluZy12aXNpYmlsaXR5LWdyb3d0aC5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyNjYzMzY0LCJleHAiOjMzMzE4NjYzMzY0fQ.iPBfsokaVaojeL7Y9odXYd_6mclO_NkZ47tuHX8yA4c"
            alt="Marketing & Visibility"
            className="image-transform object-contain origin-center mx-auto"
            style={{ height: '420px', marginTop: '-88px' }}
          />
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-[#000000] min-h-[145vh] flex flex-col justify-center">
      <section className="flex justify-center items-center px-8 bg-transparent w-full">
        <div 
          className="w-full flex flex-col items-center h-auto" 
          style={{ maxWidth: '1350px', paddingTop: '180px', paddingBottom: '64px' }}
        >
          
          <h1 
            aria-label="We keep things simple. Four essential services that tackle the main obstacles growing and mid-sized brands face today."
            className="text-white text-center font-headline font-medium tracking-tight text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] w-full flex flex-col items-center"
            style={{ marginTop: '40px', lineHeight: '1.1', maxWidth: '1350px' }}
          >
            <span aria-hidden="true" className="xl:hidden flex flex-wrap justify-center w-full" style={{ paddingLeft: '0.25em' }}>
              {phrases.map((phrase, i) => (
                <React.Fragment key={i}>
                  <AnimatedPhrase text={phrase.text} isItalic={phrase.italic} />
                  {phrase.br && <div className="basis-full h-0 hidden lg:block" />}
                </React.Fragment>
              ))}
            </span>
            <span aria-hidden="true" className="hidden xl:flex xl:flex-col xl:items-center w-full">
              {desktopLines.map((line, lineIndex) => (
                <span key={lineIndex} className="flex justify-center whitespace-nowrap w-full" style={{ paddingLeft: '0.25em' }}>
                  {line.map((phrase, phraseIndex) => (
                    <AnimatedPhrase
                      key={`${lineIndex}-${phraseIndex}`}
                      text={phrase.text}
                      isItalic={phrase.italic}
                    />
                  ))}
                </span>
              ))}
            </span>
          </h1>

          {/* CTA */}
          <AnimatedCTA />

          {/* Custom CSS for Card Hovers & Webflow Media Queries */}
          <style dangerouslySetInnerHTML={{__html: `
            .service-card-1x:hover .image-transform, .service-card-1x:hover .image-left {
              transform: rotate(-3deg) scale(1.03) !important;
            }
            .service-card-1x:hover .discover-pill {
              opacity: 1;
              transform: translateX(-20px);
            }
            .service-card-1x:hover .eye-icon {
              transform: translateX(70px);
            }
            .discover-pill {
              opacity: 0;
              transform: translateX(-100px);
              transition: all 500ms ease;
            }
            .eye-icon {
              transform: translateX(0px);
              transition: all 500ms ease;
            }
            .image-transform, .image-left {
              transition: transform 500ms ease;
            }
            .service-card-art {
              max-width: 440px;
              filter: drop-shadow(0 22px 26px rgba(0, 0, 0, 0.08));
            }
            .service-card-art--web {
              max-width: 470px;
            }

            /* Tablet Breakpoint (991px) */
            @media screen and (max-width: 991px) {
              .image-transform {
                height: 500px !important; margin-top: -44px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.two {
                height: 500px !important; margin-top: -26px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.three {
                margin-top: 4px !important; margin-bottom: 0 !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.four {
                margin-top: 13px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.five {
                height: 550px !important; margin-top: -56px !important; margin-left: auto !important; margin-right: auto !important;
              }
              .image-transform.clock {
                height: 400px !important; margin-top: 7px !important; margin-left: auto !important; margin-right: auto !important;
              }
              .image-left {
                transform: translate(52px, -7px) rotate(7deg) !important;
              }
              .image-left.two {
                transform: translate(-34px, -25px) !important;
              }
              .service-card-art {
                width: 100% !important;
                max-width: 470px;
                height: 500px !important;
                margin-top: -34px !important;
                margin-right: auto !important;
                margin-left: auto !important;
                transform: none !important;
              }
              .service-card-art--web {
                max-width: 500px;
                margin-top: -18px !important;
              }
            }

            /* Mobile Breakpoint (479px) */
            @media screen and (max-width: 479px) {
              .image-transform {
                height: 500px !important; margin-top: 10px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.two {
                height: 500px !important; margin-top: 61px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.three {
                object-fit: contain !important; width: auto !important; height: 500px !important; margin-top: -29px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.four {
                margin-top: -9px !important; margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.five {
                margin-left: auto !important; margin-right: auto !important; transform: none !important;
              }
              .image-transform.clock {
                height: 350px !important; margin-top: 4px !important; margin-left: auto !important; margin-right: auto !important; overflow: visible !important; transform: none !important;
              }
              .service-card-art {
                width: auto !important;
                max-width: none;
                height: 500px !important;
                margin-top: -28px !important;
                margin-right: auto !important;
                margin-left: auto !important;
                transform: none !important;
              }
              .service-card-art--web {
                height: 500px !important;
                margin-top: -30px !important;
                margin-right: auto !important;
                margin-left: auto !important;
                transform: none !important;
              }
            }
          `}} />

          {/* Cards Grid */}
          <div ref={gridRef} className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden" style={{ gap: '25px' }}>
            {cards.map((card, i) => (
              <a 
                href={card.link} 
                key={i} 
                id={card.id}
                className="service-card-1x group relative bg-[#ffffff] block w-full overflow-hidden"
                style={{ borderRadius: '10px', height: '100%', minHeight: '500px', paddingTop: '40px', opacity: 1, transform: 'translate3d(0,0,0) scale(1) rotate(0)', scrollMarginTop: '110px', boxShadow: '0 8px 30px rgba(255, 255, 255, 0.06)' }}
              >
                {/* Text Area */}
                <div className="flex flex-col text-center" style={{ gap: '30px', paddingLeft: '37px', paddingRight: '37px', marginBottom: '50px' }}>
                  <h2 className="text-[#000000] font-headline font-bold text-2xl tracking-tight leading-tight whitespace-pre-line">
                    {card.title}
                  </h2>
                  <p className="text-[#000000] font-body text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Images */}
                {card.images}

                {/* Discover Button */}
                <div className="absolute inset-x-0 bottom-0 w-full flex justify-center items-center pointer-events-none z-20" style={{ marginBottom: '40px' }}>
                  <div className="discover-pill bg-[#000000] text-[#ffffff] font-body font-bold text-sm tracking-wider flex items-center justify-center whitespace-nowrap" style={{ borderRadius: '100px', padding: '14px 24px' }}>
                    Discover More
                  </div>
                  <div className="eye-icon absolute bg-[#000000] rounded-full flex items-center justify-center w-10 h-10 shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                </div>

              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "../business-track-section/hooks/usePrefersReducedMotion";
import { DEFAULT_WHATSAPP_URL } from "../utils/whatsapp";
import "../post-second-theme.css";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const sectionElement = sectionRef.current;
    const wordElements = sectionElement.querySelectorAll(".cta-word-inner");
    const textElements = sectionElement.querySelectorAll(".cta-button, .cta-paragraph p");

    if (prefersReducedMotion) {
      gsap.set([...wordElements, ...textElements], { clearProps: "opacity,transform" });
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
          overwrite: "auto",
        },
        scrollTrigger: {
          trigger: sectionElement,
          start: "top 72%",
          toggleActions: "play reverse play reverse",
        },
      });

      timeline
        .fromTo(
          wordElements,
          { yPercent: 115 },
          { yPercent: 0, duration: 0.8, stagger: 0.1 },
          0
        )
        .fromTo(
          textElements,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.78, stagger: 0.12 },
          "-=0.4"
        );
    }, sectionElement);

    return () => context.revert();
  }, [prefersReducedMotion]);

  const line1Words = "Build a memorable brand.".split(" ");
  const line2Words = "Launch a premium digital experience.".split(" ");

  return (
    <section ref={sectionRef} className="cta-wrapper relative z-20 flex h-[80vh] min-h-0 w-full flex-col justify-end overflow-hidden bg-[var(--light-grey-surface)] md:h-auto md:min-h-[600px] lg:min-h-[800px]">
      <div className="background-content absolute inset-0 z-0 h-full w-full">
        <div className="hide-mobile hidden h-full w-full md:block">
          <img
            src="/images/cta.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-right"
          />
        </div>

        <div className="mobile relative block h-full w-full md:hidden">
          <div className="h-full w-full">
            <img
              src="/images/cta-mobile.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
          <div className="cta-gradient left absolute inset-0 opacity-0" />
          <div className="cta-gradient right absolute inset-0 opacity-0" />
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col justify-start gap-7 px-5 pb-6 pt-9 md:min-h-[600px] md:justify-between md:gap-0 md:px-8 md:pt-8 lg:min-h-[800px] lg:px-10 lg:pb-24 lg:pt-12">
        <div className="cta-header flex w-full max-w-4xl flex-col items-start text-left">
          <div className="cta-heading mb-8 flex flex-col md:mb-16 gap-2">
            <h2 className="text-size-display text-weight-regular in-line-mobile mb-1.5 font-headline text-[clamp(1.8rem,8vw,2.55rem)] font-[900] leading-[1.05] tracking-tight text-[var(--charcoal-black)] md:mb-2 md:text-[4rem] lg:text-[4.5rem] flex flex-wrap gap-x-[0.25em]">
              {line1Words.map((word, index) => (
                <div key={`l1-${index}`} className="overflow-hidden inline-block pb-1">
                  <div className="cta-word-inner inline-block">
                    {word}
                  </div>
                </div>
              ))}
            </h2>

            <h2 className="text-size-display text-weight-regular in-line-mobile mb-1.5 font-headline text-[clamp(1.8rem,8vw,2.55rem)] font-[900] leading-[1.05] tracking-tight text-[var(--charcoal-black)] md:mb-2 md:text-[4rem] lg:text-[4.5rem] flex flex-wrap gap-x-[0.25em]">
              {line2Words.map((word, index) => (
                <div key={`l2-${index}`} className="overflow-hidden inline-block pb-1">
                  <div className="cta-word-inner inline-block">
                    {word}
                  </div>
                </div>
              ))}
            </h2>
          </div>

          <Link
            to="/contact"
            className="cta-button white-mobile group relative inline-flex flex-col text-[var(--charcoal-black)]"
          >
            <div className="cta-button-content relative flex items-center gap-3 pb-2 md:gap-4 md:pb-3 border-b-2 border-[#111111]">
              <div className="text-size-regular cta font-body text-sm font-medium tracking-wide md:text-lg lg:text-xl">
                Get in touch
              </div>

              <div className="arrow-wrapper relative flex h-4 w-4 items-center overflow-hidden md:h-6 md:w-6">
                <div className="flex h-full w-full items-center transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-x-full" aria-hidden="true">
                  <span className="flex h-full w-full shrink-0 items-center justify-center leading-none">
                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6" strokeWidth={1.5} />
                  </span>
                  <span className="flex h-full w-full shrink-0 items-center justify-center leading-none">
                    <ArrowRight className="h-4 w-4 md:h-6 md:w-6" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </div>

          </Link>
        </div>

        <div className="cta-paragraph flex w-full max-w-[310px] flex-col items-start text-left md:max-w-[450px]">
          <p className="text-size-regular cta font-body text-[0.8rem] leading-[1.45] text-[var(--mid-grey)] opacity-60 md:text-base md:leading-[1.6] lg:text-lg">
            Tell us what you are building. We will help you shape the right identity, website, content, and growth direction for your next stage.
          </p>
        </div>
      </div>
    </section>
  );
}

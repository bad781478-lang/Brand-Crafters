import React, { useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../business-track-section/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Start with discovery",
    desc: "We understand your business, audience, goals, and what needs to change before we begin building.",
    bg: "bg-[#fcecf3]",
    numColor: "text-[#f5c6df]",
  },
  {
    num: "02",
    title: "Set the direction",
    desc: "We turn the brief into a clear strategy, project scope, timeline, and creative direction.",
    bg: "bg-[#e5f8f9]",
    numColor: "text-[#b2e8eb]",
  },
  {
    num: "03",
    title: "Build the system",
    desc: "Strategy becomes identity, website, content, and the tools your brand needs to work consistently.",
    bg: "bg-[#f1edfb]",
    numColor: "text-[#cec1f4]",
  },
  {
    num: "04",
    title: "Refine together",
    desc: "We share focused versions, collect useful feedback, and sharpen every important detail.",
    bg: "bg-[#fdf4df]",
    numColor: "text-[#f6e0b4]",
  },
  {
    num: "05",
    title: "Launch and grow",
    desc: "You receive a polished, ready-to-use brand system with support to move forward confidently.",
    bg: "bg-[#fbebe9]",
    numColor: "text-[#f3c0b8]",
  }
];

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const timeline = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      timeline
        .fromTo(".hiw-title-line",
          { yPercent: 120 },
          { yPercent: 0, duration: 1.15, stagger: 0.12 },
          0
        )
        .fromTo(".hiw-desc-line",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1 },
          0.18
        )
        .fromTo(".hiw-card-reveal",
          { y: 56, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 1.6, stagger: 0.18 },
          0.26
        );
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={sectionRef} className="relative z-40 w-full bg-white text-black py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Text */}
        <div className="lg:w-[30%] flex-shrink-0">
          <div className="sticky top-40">
            <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.05]">
              <div className="overflow-hidden pb-1">
                <div className="hiw-title-line">How it</div>
              </div>
              <div className="overflow-hidden pb-1">
                <div className="hiw-title-line">works?</div>
              </div>
            </h2>
            <p className="hiw-desc-line font-body text-lg md:text-xl text-black/80 leading-[1.6] max-w-sm">
              From the first conversation to final launch, every stage stays clear, collaborative, and focused on what your business needs next.
            </p>
          </div>
        </div>

        {/* Right Side: Grid of Cards */}
        <div className="lg:w-[70%]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`hiw-card-reveal relative rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 overflow-hidden min-h-[220px] sm:min-h-[240px] md:min-h-[360px] lg:min-h-[420px] flex flex-col ${step.bg}`}
              >
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="font-headline text-[1.1rem] md:text-2xl font-bold text-black mb-2 md:mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-[12px] md:text-[15px] text-black/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {/* Large Background Number */}
                <div 
                  aria-hidden="true"
                  className={`absolute bottom-[-0.25rem] right-2.5 md:bottom-[-2rem] md:right-auto md:left-4 lg:left-5 font-headline text-[4.5rem] sm:text-[5.5rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none select-none z-0 tracking-tighter ${step.numColor}`}
                >
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

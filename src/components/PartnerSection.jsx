import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./PartnerSection.css";

const headlineLines = [
  "STRATEGIC PARTNERS",
  "FOR AMBITIOUS BRANDS",
  "DELIVERING IMPACT",
  "AT EVERY TOUCHPOINT",
];

const introCopy =
  "We connect brand identity, digital experience, creative content, and growth strategy into one focused system — built to help your business look credible, move faster, and stand out online.";

const partnerPoints = [
  {
    eyebrow: "01 // Brand First",
    body: "Positioning, visual language, and business goals align before designing anything to ensure connected marketing.",
  },
  {
    eyebrow: "02 // Custom Systems",
    body: "Clean, fast, and responsive digital experiences from custom-coded websites to intuitive UI/UX design.",
  },
  {
    eyebrow: "03 // Growth Ready",
    body: "Structured content, premium visuals, and SEO basics designed to build organic discoverability.",
  },
];

const revealEase = [0.16, 1, 0.3, 1];

function RevealWords({ text, className, wordClassName = "" }) {
  const words = text.split(" ");

  return (
    <motion.p
      aria-label={text}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.024,
            delayChildren: 0.12,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className={`partner-reveal-word ${wordClassName}`}
          key={`${word}-${index}`}
          variants={{
            hidden: {
              opacity: 0,
              y: "0.85em",
              filter: "blur(6px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.44,
                ease: revealEase,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function PartnerSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const animationState = isInView || shouldReduceMotion ? "visible" : "hidden";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "112%", opacity: 0, rotateZ: 1.5 },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: { duration: 0.68, ease: revealEase },
    },
  };

  const pointVariants = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.58, ease: revealEase },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="partner-section sticky top-0 z-0 flex h-[100svh] w-full flex-col justify-start overflow-hidden bg-white pb-5 pt-14 text-black sm:pb-8 sm:pt-24 lg:pt-32 lg:pb-0"
      aria-labelledby="founder-led-heading"
    >
      {/* Minimal grid background for premium feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]" style={{
        backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col">
        <motion.div 
          variants={containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate={animationState}
          className="flex w-full flex-col gap-6 sm:gap-10 lg:gap-16"
        >
          {/* Top Row: Content */}
          <div className="flex flex-col items-start gap-4 sm:gap-8 lg:flex-row lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-[55%]">
              <h2
                id="founder-led-heading" 
                className="partner-headline flex flex-col [font-family:Oswald,sans-serif] text-[1.95rem] font-bold leading-[1.05] tracking-[0] text-black sm:text-5xl sm:leading-[1.08] md:text-[3.8rem] lg:text-[4.25rem] xl:text-[4.5rem]"
              >
                {headlineLines.map((line) => (
                  <span key={line} className="partner-headline-line overflow-hidden pb-1 sm:pb-2">
                    <motion.div
                      variants={lineVariants}
                      className="will-change-transform"
                    >
                      {line}
                    </motion.div>
                  </span>
                ))}
              </h2>
            </div>
            
            <div className="w-full lg:w-[45%] flex flex-col gap-6 lg:pt-4">
              <RevealWords
                text={introCopy}
                className="partner-intro flex flex-wrap [font-family:Outfit,sans-serif] text-base font-medium leading-[1.45] text-black sm:text-xl sm:leading-[1.55] lg:text-2xl"
                wordClassName="mr-[0.25em] mb-1"
              />
            </div>
          </div>

          {/* Bottom Row: 3 Minimal Items */}
          <div className="mt-0 grid grid-cols-1 gap-4 border-t border-gray-200 pt-5 sm:gap-8 sm:pt-8 md:grid-cols-3 lg:mt-8 lg:gap-12 lg:pt-12">
            {partnerPoints.map((point) => (
              <motion.article
                variants={pointVariants}
                className="group flex flex-col gap-2.5 sm:gap-3"
                key={point.eyebrow}
              >
                <span className="overflow-hidden">
                  <motion.span
                    className="inline-block [font-family:Oswald,sans-serif] text-[13px] font-bold uppercase tracking-[0] text-gray-400 transition-colors duration-300 group-hover:text-black sm:text-sm"
                    variants={lineVariants}
                  >
                    {point.eyebrow}
                  </motion.span>
                </span>
                <RevealWords
                  text={point.body}
                  className="partner-point-copy flex flex-wrap [font-family:Outfit,sans-serif] text-[14px] leading-[1.45] text-black sm:text-base sm:leading-relaxed lg:text-[17px]"
                  wordClassName="mr-[0.24em]"
                />
              </motion.article>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

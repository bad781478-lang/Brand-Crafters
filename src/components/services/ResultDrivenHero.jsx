import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ResultDrivenHero.css';

gsap.registerPlugin(ScrollTrigger);

const CUBE_IMAGES = {
  front: '/images/services/result-driven-hero-card-cube.webp',
  right: '/images/services/result-driven-hero-team-cube.webp',
  back: '/images/services/result-driven-hero-focus-cube.webp',
  left: '/images/services/result-driven-hero-app-rewards-cube.webp',
  top: '/images/services/result-driven-hero-reference-merch-cube.webp',
  bottom: '/images/services/result-driven-hero-reference-play-cube.webp',
};

export default function ResultDrivenHero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const cCubeRef = useRef(null);
  const cubeHolderRef = useRef(null);
  const cubeRef = useRef(null);
  const cubeWrapperRef = useRef(null);
  const rotateDeltaRef = useRef(0.1);
  const tickerActiveRef = useRef(false);

  useLayoutEffect(() => {


    const ctx = gsap.context(() => {
      // 1. Text Animation Reveal
      const words = headlineRef.current.querySelectorAll('.result-hero-word');
      
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top bottom-=25%',
        onEnter: () => {
          gsap.fromTo(words, 
            { opacity: 0, yPercent: 50, rotateX: -20 },
            { opacity: 1, yPercent: 0, rotateX: 0, duration: 1.2, ease: 'expo.out', stagger: 0.05 }
          );
        },
        once: true
      });

      // 2. Cube Animation Logic (matching requested specs)
      const baseSpeed = 0.4;
      const currentDelta = { value: baseSpeed };
      let currentRotationX = 0;
      let currentRotationY = 0;

      const rotateCube = () => {
        // Smoothly decay back to base speed when not scrolling
        currentDelta.value += (baseSpeed - currentDelta.value) * 0.05;
        
        currentRotationX += currentDelta.value;
        currentRotationY += currentDelta.value;

        gsap.set(cubeRef.current, {
          rotateY: currentRotationY,
          rotateX: currentRotationX
        });
      };

      gsap.timeline({
        paused: true,
        defaults: {
          ease: "power0",
        },
        scrollTrigger: {
          trigger: cubeWrapperRef.current,
          scrub: 0.2,
          start: "top top+=10",
          end: "bottom top",
          invalidateOnRefresh: true,
          onUpdate: ({ getVelocity }) => {
            // Apply velocity spike (can be positive or negative depending on scroll direction)
            // This allows the cube to spin backwards when scrolling up, 
            // and forwards when scrolling down, but always returns to positive baseSpeed.
            currentDelta.value = getVelocity() * 0.003;
          },
        },
      }).fromTo(cCubeRef.current, {
        y: 0,
      }, {
        y: cubeWrapperRef.current ? cubeWrapperRef.current.offsetHeight * 0.8 : 0,
      });

      // Separate ScrollTrigger just for toggling the auto-rotation
      ScrollTrigger.create({
        trigger: cubeWrapperRef.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: ({ isActive }) => {
          if (isActive) {
            gsap.ticker.add(rotateCube);
          } else {
            gsap.ticker.remove(rotateCube);
          }
        }
      });

      const introTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 3.2,
        },
        delay: 0.3,
      });

      introTimeline.fromTo(cubeHolderRef.current, {
        y: -window.innerHeight * 1.5,
        x: 0,
      }, {
        y: 0,
        x: Math.PI * 3,
        duration: 1.8,
        modifiers: {
          x: (value) => `${Math.sin(parseFloat(value)) * window.innerWidth * 0.1}px`,
        },
      });

      introTimeline.fromTo(currentDelta, {
        value: 10,
      }, {
        value: baseSpeed,
        ease: "expo.out",
      }, "<");

    }, heroRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  // Set body transition styles for global use
  useEffect(() => {
    document.body.style.transition = 'color 0.64s cubic-bezier(.36, .33, 0, 1), background 0.64s cubic-bezier(.36, .33, 0, 1)';
    // Note: Dark mode switching based on `data-color` attribute would normally be a global script
    // but the hero itself always maintains the light mode initially.
    return () => {
      document.body.style.transition = '';
    }
  }, []);

  return (
    <section ref={heroRef} className="result-hero hero">
      <div className="result-hero_container container">
        <div className="result-hero-perspective">
          <h1 ref={headlineRef} className="result-hero-headline" aria-label="Solutions That Build Brands">
            <span className="result-hero-line" aria-hidden="true">
              <span className="result-hero-word">SOLUTIONS</span>
              <span className="result-hero-word">THAT</span>
            </span>
            <span className="result-hero-line" aria-hidden="true">
              <span className="result-hero-word">BUILD</span>
              <span className="result-hero-word">BRANDS</span>
            </span>
          </h1>
        </div>
      </div>

      <div ref={cubeWrapperRef} className="cube_wrapper">
        <div ref={cCubeRef} className="c-cube">
          <div ref={cubeHolderRef} className="cube_holder">
            <div ref={cubeRef} className="cube">
              <div className="cube_face cube_face_front">
                <img src={CUBE_IMAGES.front} alt="Brand Identity" width="400" height="400" loading="eager" />
              </div>
              <div className="cube_face cube_face_right">
                <img src={CUBE_IMAGES.right} alt="Websites and UI" width="400" height="400" loading="eager" />
              </div>
              <div className="cube_face cube_face_back">
                <img src={CUBE_IMAGES.back} alt="Creative Production" width="400" height="400" loading="eager" />
              </div>
              <div className="cube_face cube_face_left">
                <img src={CUBE_IMAGES.left} alt="Marketing and Growth" width="400" height="400" loading="eager" />
              </div>
              <div className="cube_face cube_face_top">
                <img src={CUBE_IMAGES.top} alt="Brand Kit" width="400" height="400" loading="eager" />
              </div>
              <div className="cube_face cube_face_btm">
                <img src={CUBE_IMAGES.bottom} alt="Background" width="400" height="400" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

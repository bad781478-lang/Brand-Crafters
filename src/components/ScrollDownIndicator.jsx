import React from 'react';
import './ScrollDownIndicator.css';

const CustomWave = () => (
  <div aria-hidden="true" style={{ width: '65px', height: '60px', overflow: 'hidden', position: 'relative' }}>
    <div className="scroll-wave" style={{ position: 'absolute', top: 0, left: '-45px', width: '270px', height: '60px' }}>
      <svg 
        viewBox="0 0 270 60" 
        style={{
          display: 'block',
          height: '60px',
          width: '270px',
        }}
      >
        <path 
          d="M 0,-8 C 11.25,-8 11.25,8 22.5,8 C 33.75,8 33.75,-8 45,-8 C 56.25,-8 56.25,8 67.5,8 C 78.75,8 78.75,-8 90,-8 C 101.25,-8 101.25,8 112.5,8 C 123.75,8 123.75,-8 135,-8 C 146.25,-8 146.25,8 157.5,8 C 168.75,8 168.75,-8 180,-8 C 191.25,-8 191.25,8 202.5,8 C 213.75,8 213.75,-8 225,-8 C 236.25,-8 236.25,8 247.5,8 C 258.75,8 258.75,-8 270,-8" 
          fill="none" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          transform="translate(0, 30)"
        />
      </svg>
    </div>
  </div>
);

export default function ScrollDownIndicator({ href = "#section-3" }) {
  return (
    <a href={href} aria-label="Scroll down" className="scroll-down-container" style={{ position: "relative", zIndex: 9999 }}>
      <p className="scroll-text text-white" style={{ color: "white" }}>Scroll down</p>
      <div className="wave-animation-wrapper" aria-hidden="true">
        <CustomWave />
      </div>
    </a>
  );
}

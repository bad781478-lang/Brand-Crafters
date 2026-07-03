import React from 'react';
import './AboutElevatorPitch.css';

export default function AboutElevatorPitch() {
  return (
    <section className="about-elevator-pitch">
      <div className="aep-header">
        <h1 className="aep-title">Who we are</h1>
        <span className="aep-subtitle">(at a glance)</span>
      </div>

      <div className="aep-content">
        <div className="aep-text-block">
          <p className="aep-line aep-line-justify">
            A fully remote agency. <span className="aep-pill aep-pill--green">Bold</span> ideas, <span className="aep-pill aep-pill--yellow">Pro</span> SEO, <span className="aep-pill aep-pill--purple">Top</span> designs.
          </p>
          <p className="aep-line aep-line-justify">
            We build high-performing digital platforms from scratch.
          </p>
          <p className="aep-line aep-line-center">
            <span className="aep-pill aep-pill--pink">100%</span> dedicated team. <span className="aep-pill aep-pill--blue">Endless</span> creative potential.
          </p>
          <p className="aep-line aep-line-justify">
            Strategy, branding, custom SEO, and everything in between.
          </p>
        </div>
      </div>

      <div className="aep-footer">
        <p className="aep-scroll-text">Ready to dive deeper?<br/>Scroll down.</p>
        <div className="aep-scroll-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="11.5"></circle>
            <g className="aep-bounce-arrow">
              <line x1="12" y1="6" x2="12" y2="18"></line>
              <polyline points="7 13 12 18 17 13"></polyline>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './AboutFamily.css';
import founderImg from '../../assets/Founder.png';

export default function AboutFamily() {
  return (
    <section className="about-family">
      <div className="af-container">
        <div className="af-header">
          <h2 className="af-title">Leadership & Vision</h2>
          <span className="af-literally">(our foundation)</span>
        </div>

        <div className="af-quote">
          "Great work begins with trust. That's the foundation behind everything we create."
        </div>

        <div className="af-grid">
          <div className="af-hidden-content">
            <p className="af-caption">
              Meet <em>Aman Singh Rathore</em>, Founder & Chief Executive Officer.
            </p>
            <p className="af-hidden-para">
              Aman Singh Rathore built this agency on a simple philosophy: treating every client's brand with the same dedication as his own. We believe that true digital growth stems from genuine collaboration and strategic innovation.
            </p>
          </div>

          <div className="af-image-area">
            <img className="af-image" src={founderImg} alt="Aman Singh Rathore, Founder and CEO" />
            <div className="af-image-caption">
              <span className="af-founder-name">Aman Singh Rathore</span>
              <span className="af-founder-title">Founder & Chief Executive Officer</span>
            </div>
          </div>

          <div className="af-text-area">
            <p className="af-text-p1">
              Led by Aman Singh Rathore, our agency is rooted in the core values of transparency, trust, and relentless innovation. As Founder and CEO, Aman ensures that every project gets dedicated attention, treating our team and clients like an extended family.
            </p>
            <p className="af-text-p2">
              This tight-knit dynamic shapes exactly how we work. It means zero bureaucracy, seamless communication, and a collective drive to elevate your brand. We don't just build modern websites and visual identities; we build long-lasting partnerships.
            </p>
          </div>
        </div>

        <div className="af-hidden-bottom">
          <h3 className="af-hidden-heading">A Premier Creative & Digital Branding Agency.</h3>
          <p className="af-hidden-para">
            We are a forward-thinking creative studio specializing in brand strategy, visual identity, and high-performance web development. Our mission is to craft tailored digital solutions that attract loyal audiences and drive measurable business growth.
          </p>
        </div>
      </div>
    </section>
  );
}

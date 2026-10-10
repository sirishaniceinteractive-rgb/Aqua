import React, { useState, useEffect } from 'react';
import { Compass, Waves, Award, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 18;
      setMouseParallax({ x, y, rawX: e.clientX, rawY: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLocations = () => {
    const el = document.getElementById('locations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Randomized ambient underwater bubbles
  const ambientBubbles = [
    { left: '6%', size: 14, duration: '9s', delay: '0s', wobble: 1.4 },
    { left: '14%', size: 24, duration: '11s', delay: '2.5s', wobble: 2.1 },
    { left: '22%', size: 10, duration: '8s', delay: '1s', wobble: 0.8 },
    { left: '30%', size: 18, duration: '10s', delay: '4s', wobble: 1.9 },
    { left: '38%', size: 8, duration: '7.5s', delay: '0.5s', wobble: 2.5 },
    { left: '46%', size: 26, duration: '12s', delay: '3s', wobble: 1.2 },
    { left: '54%', size: 12, duration: '8.5s', delay: '1.8s', wobble: 3.0 },
    { left: '62%', size: 22, duration: '10.5s', delay: '5s', wobble: 0.5 },
    { left: '70%', size: 10, duration: '7s', delay: '2s', wobble: 2.2 },
    { left: '78%', size: 28, duration: '13s', delay: '3.8s', wobble: 1.7 },
    { left: '86%', size: 16, duration: '9.5s', delay: '0.8s', wobble: 2.8 },
    { left: '92%', size: 12, duration: '8s', delay: '4.5s', wobble: 1.1 },
    { left: '96%', size: 20, duration: '11.5s', delay: '1.5s', wobble: 1.8 },
  ];

  return (
    <section id="hero" className="hero-section">
      {/* Volumetric Sunlight Rays / God Rays Overlay */}
      <div className="hero-sun-rays" aria-hidden="true" />

      {/* Interactive Cursor Water Caustics Spotlight */}
      <div
        className="hero-cursor-spotlight"
        style={{
          transform: `translate3d(${mouseParallax.x * 25}px, ${mouseParallax.y * 20}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Floating Ambient Underwater Bubbles */}
      <div className="hero-ambient-bubbles-layer" aria-hidden="true">
        {ambientBubbles.map((b, i) => (
          <span
            key={i}
            className="ambient-bubble"
            style={{
              '--left': b.left,
              '--size': `${b.size}px`,
              '--duration': b.duration,
              '--delay': b.delay,
              '--wobble': b.wobble,
            }}
          />
        ))}
      </div>

      {/* 1. Left Hero Image: Exotic Blue Tropical Fish + Floating Tag */}
      <div
        className="hero-fish-left"
        style={{
          transform: `translate3d(${-mouseParallax.x * 0.9}px, ${-mouseParallax.y * 0.7}px, 0)`,
        }}
      >
        <div className="hero-fish-glow-left" />
        <img
          src="./images/hero_fish_blue_exotic.png"
          alt="Exotic Blue Neon Fish"
          className="hero-fish-left-img"
          loading="eager"
        />
        {/* Floating Mini Badge */}
        <div className="hero-floating-stat-badge left">
          <span className="stat-badge-pulse" />
          <span>Red Sea & Shipwrecks</span>
        </div>
      </div>

      {/* 2. Center Hero Image: Majestic Red Betta Fish with Flowing Fan Tail */}
      <div
        className="hero-center-betta-wrap"
        style={{
          transform: `translate3d(${mouseParallax.x * 0.5}px, ${mouseParallax.y * 0.4}px, 0)`,
        }}
      >
        {/* Air Bubbles Rising directly around the Betta fish */}
        <span className="diver-bubble" style={{ width: 10, height: 10, top: '38%', left: '46%', '--drift': '1.1', animationDelay: '0s' }} />
        <span className="diver-bubble" style={{ width: 7, height: 7, top: '32%', left: '52%', '--drift': '2.3', animationDelay: '0.7s' }} />
        <span className="diver-bubble" style={{ width: 13, height: 13, top: '25%', left: '44%', '--drift': '0.6', animationDelay: '1.4s' }} />
        <span className="diver-bubble" style={{ width: 6, height: 6, top: '40%', left: '49%', '--drift': '1.9', animationDelay: '2.1s' }} />
        <span className="diver-bubble" style={{ width: 9, height: 9, top: '18%', left: '48%', '--drift': '1.4', animationDelay: '2.8s' }} />

        <div className="hero-betta-glow" />
        <img
          src="./images/hero_betta_fish.png"
          alt="Majestic Red Betta Fish"
          className="hero-betta-img"
          loading="eager"
        />
      </div>

      {/* 3. Right Hero Image: Dual Fancy Multicolored Goldfish + Floating Tag */}
      <div
        className="hero-fish-right"
        style={{
          transform: `translate3d(${mouseParallax.x * 1.1}px, ${-mouseParallax.y * 0.8}px, 0)`,
        }}
      >
        <div className="hero-fish-glow-right" />
        <img
          src="./images/hero_fish_dual_goldfish.png"
          alt="Dual Fancy Multicolored Goldfish"
          className="hero-fish-right-img"
          loading="eager"
        />
        {/* Floating Mini Badge */}
        <div className="hero-floating-stat-badge right">
          <span className="stat-badge-pulse pink" />
          <span>Private VIP Expeditions</span>
        </div>
      </div>

      {/* Hero Typography & Branding Content */}
      <div className="hero-content">
        <div className="hero-badge-pill">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">Premium Diving Club • Est. 2012</span>
        </div>

        <h1 className="hero-main-title">AQUA SPHERE</h1>
        <p className="hero-subtitle">Discover the underwater world together with us</p>

        {/* Elegant Oceanic Divider */}
        <div className="hero-ornament-divider">
          <span className="ornament-line" />
          <span className="ornament-gem" />
          <span className="ornament-line" />
        </div>

        {/* Quick Highlights / Feature Pills */}
        <div className="hero-highlights-row">
          <div className="hero-highlight-item">
            <Waves size={16} color="#4DD9ED" />
            <span>Depth up to 40m</span>
          </div>
          <div className="hero-highlight-divider" />
          <div className="hero-highlight-item">
            <Award size={16} color="#F05DBD" />
            <span>PADI 5-Star Dive Center</span>
          </div>
          <div className="hero-highlight-divider" />
          <div className="hero-highlight-item">
            <Compass size={16} color="#27C8F5" />
            <span>45+ Global Expeditions</span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="hero-action-buttons">
          <button onClick={scrollToBooking} className="hero-btn-primary">
            <span>BOOK YOUR DIVE</span>
            <ChevronRight size={18} />
          </button>
          <button onClick={scrollToLocations} className="hero-btn-secondary">
            <span>EXPLORE LOCATIONS</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="hero-scroll-cue" onClick={scrollToAbout} role="button" tabIndex={0}>
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-wheel" />
        </div>
        <span>EXPLORE THE DEPTH</span>
      </div>
    </section>
  );
};

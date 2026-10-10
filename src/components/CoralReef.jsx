import React, { useState, useEffect } from 'react';

export const CoralReef = ({ variant = 'hero' }) => {
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMouseParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (variant === 'hero') {
    return (
      <>
        {/* Hero Left Coral */}
        <div
          className="hero-coral-left"
          style={{
            transform: `translate3d(${-mouseParallax.x * 0.8}px, ${-mouseParallax.y * 0.6}px, 0)`,
          }}
        >
          <img
            src="/images/hero_left_coral.png"
            alt="Pink Coral Left"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Hero Right Coral */}
        <div
          className="hero-coral-right"
          style={{
            transform: `translate3d(${mouseParallax.x * 0.9}px, ${-mouseParallax.y * 0.7}px, 0)`,
          }}
        >
          <img
            src="/images/hero_right_coral.png"
            alt="Pink Coral Right"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </>
    );
  }

  if (variant === 'bottom-panorama') {
    return (
      <img
        src="/images/bottom_coral_reef_hd.png"
        alt="Lush Ocean Floor Coral Reef Panorama"
        className="locations-bottom-reef-panorama"
        loading="lazy"
      />
    );
  }

  if (variant === 'about-anemone') {
    return (
      <div
        className="about-corner-coral"
        style={{
          transform: `translate3d(${mouseParallax.x * 0.5}px, ${mouseParallax.y * 0.4}px, 0)`,
        }}
      >
        <img
          src="/images/about_coral_anemone.png"
          alt="Glowing Sea Anemone"
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </div>
    );
  }

  return null;
};

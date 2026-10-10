import React, { useState, useEffect, useRef } from 'react';

export const Diver = () => {
  const [diverTransform, setDiverTransform] = useState({ x: 0, y: 0, rotate: 0 });
  const diverRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPct = (e.clientX / innerWidth - 0.5) * 2;
      const yPct = (e.clientY / innerHeight - 0.5) * 2;
      setDiverTransform({
        x: xPct * 15,
        y: yPct * 12,
        rotate: xPct * 4,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={diverRef}
      className="hero-diver-wrapper"
      style={{
        transform: `translate3d(${diverTransform.x}px, ${diverTransform.y}px, 0px) rotate(${diverTransform.rotate}deg)`,
      }}
    >
      {/* Regulator Bubbles */}
      <span className="diver-bubble" style={{ width: 8, height: 8, top: '25%', left: '46%', '--drift': '1.2', animationDelay: '0s' }} />
      <span className="diver-bubble" style={{ width: 6, height: 6, top: '23%', left: '48%', '--drift': '2.1', animationDelay: '0.9s' }} />
      <span className="diver-bubble" style={{ width: 10, height: 10, top: '20%', left: '45%', '--drift': '0.7', animationDelay: '1.7s' }} />
      <span className="diver-bubble" style={{ width: 5, height: 5, top: '24%', left: '49%', '--drift': '1.8', animationDelay: '2.5s' }} />

      {/* Diver Image from Reference */}
      <img
        src="/images/diver_silhouette_hd.png"
        alt="Scuba Diver"
        className="hero-diver-img"
        loading="eager"
      />
    </div>
  );
};

import React, { useState, useEffect } from 'react';

// 1. Featured Fish for Section "About Club" (Dual Fancy Multicolored Goldfish)
export const WingedFish = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPct = (e.clientX / innerWidth - 0.5) * 2;
      const yPct = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({
        x: xPct * 20,
        y: yPct * 16,
        rotate: xPct * 3.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="winged-fish-container">
      <div className="winged-fish-glow" />
      <img
        src="./images/about_featured_fish.png"
        alt="Featured Dual Fancy Goldfish"
        className="winged-fish-img"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) rotate(${mouseOffset.rotate}deg)`,
          width: '100%',
          maxWidth: '460px',
        }}
      />
    </div>
  );
};

// 2. Featured Tropical Fish for Section "Locations" (Vibrant Blue & Gold Cichlid)
export const TwoOrangeFish = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPct = (e.clientX / innerWidth - 0.5) * 2;
      const yPct = (e.clientY / innerHeight - 0.5) * 2;
      setMouseOffset({
        x: xPct * 22,
        y: yPct * 16,
        rotate: -xPct * 2.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="two-orange-fish-wrap"
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) rotate(${mouseOffset.rotate}deg)`,
      }}
    >
      <img
        src="./images/locations_blue_gold_fish.png"
        alt="Vibrant Blue & Gold Tropical Fish"
        className="two-orange-fish-img"
        style={{
          width: '100%',
          maxWidth: '440px',
          filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 25px rgba(39, 200, 245, 0.45))',
        }}
      />
    </div>
  );
};

// 3. School of Blue Striped Damselfish Swimming across bottom of "Locations"
export const SwimmingFishSchool = () => {
  return (
    <div className="swimming-fish-lane" aria-hidden="true">
      {/* Primary School of Damselfish */}
      <img
        src="./images/locations_fish_school.png"
        alt=""
        className="swimming-fish-single"
        style={{
          width: 'clamp(200px, 22vw, 290px)',
          height: 'auto',
          maxHeight: '260px',
          objectFit: 'contain',
          top: '15px',
          animationDuration: '24s',
          animationDelay: '0s',
          '--swim-seed': '1.5',
          opacity: 0.92,
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.6))',
        }}
      />
      {/* Secondary Staggered School */}
      <img
        src="./images/locations_fish_school.png"
        alt=""
        className="swimming-fish-single"
        style={{
          width: 'clamp(150px, 17vw, 220px)',
          height: 'auto',
          maxHeight: '200px',
          objectFit: 'contain',
          top: '55px',
          animationDuration: '29s',
          animationDelay: '12s',
          '--swim-seed': '2.8',
          opacity: 0.78,
          filter: 'drop-shadow(0 8px 15px rgba(0, 0, 0, 0.5))',
        }}
      />
    </div>
  );
};

// 4. Reef Fish Group with Seagrass & Stones (Bottom Corner Decoration)
export const LocationsReefCluster = () => {
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMouseParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="locations-reef-cluster-wrap"
      style={{
        position: 'absolute',
        left: '20px',
        bottom: '20px',
        zIndex: 5,
        pointerEvents: 'none',
        transform: `translate3d(${mouseParallax.x * 0.7}px, ${-mouseParallax.y * 0.5}px, 0)`,
      }}
    >
      <img
        src="./images/locations_reef_cluster.png"
        alt="Reef Fish & Seagrass Cluster"
        style={{
          width: 'clamp(200px, 24vw, 360px)',
          height: 'auto',
          filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 20px rgba(77, 217, 237, 0.3))',
        }}
        loading="lazy"
      />
    </div>
  );
};

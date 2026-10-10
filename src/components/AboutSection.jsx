import React from 'react';
import { WingedFish } from './Fish';
import { CoralReef } from './CoralReef';
import { ShieldCheck, Anchor, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Photorealistic Featured Fish */}
          <div className="about-fish-col">
            <WingedFish />
          </div>

          {/* Right Column: Club Information */}
          <div className="about-content-col">
            <span className="section-tag">AQUA SPHERE</span>

            <div className="heading-row-with-badge">
              <h2 className="section-title">About The Club</h2>
              <span className="since-badge">SINCE 2012</span>
            </div>

            <div className="pink-divider" />

            <p className="about-description">
              Aqua Sphere is a premier professional diving club that has been guiding ocean enthusiasts into
              the breathtaking beauty of the underwater realm for over a decade. We deliver uncompromising safety,
              luxurious instruction, bespoke global expeditions, and elite-grade diving equipment.
            </p>

            {/* Club Achievements / Metrics */}
            <div className="about-metrics-grid">
              <div className="metric-card">
                <div className="metric-number">12+</div>
                <div className="metric-label">Years of Flawless Experience</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">3,800+</div>
                <div className="metric-label">Certified Scuba Divers</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">45+</div>
                <div className="metric-label">Bespoke Global Locations</div>
              </div>
              <div className="metric-card">
                <div className="metric-number">100%</div>
                <div className="metric-label">PADI Safety Standards</div>
              </div>
            </div>

            {/* Club Pillar Features */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#C0D8F0' }}>
                <ShieldCheck size={18} color="#27C8F5" />
                <span>Full Insurance & Guided Dives</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#C0D8F0' }}>
                <Anchor size={18} color="#F05DBD" />
                <span>Private Yacht Fleet & Base</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#C0D8F0' }}>
                <GraduationCap size={18} color="#4DD9ED" />
                <span>PADI 5-Star Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Sea Anemone & Coral at bottom right */}
      <CoralReef variant="about-anemone" />
    </section>
  );
};

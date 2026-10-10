import React, { useState } from 'react';
import { TwoOrangeFish, SwimmingFishSchool, LocationsReefCluster } from './Fish';
import { CoralReef } from './CoralReef';
import { Compass, Waves, Eye, Thermometer } from 'lucide-react';

export const LocationsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locationsData = [
    {
      title: 'Red Sea Coral Sanctuaries',
      region: 'Egypt (Sharm El Sheikh, Dahab, Ras Mohammed)',
      depth: 'Up to 40 m',
      visibility: '35–45 m',
      temp: '+26°C ... +29°C',
      description:
        'Crystal turquoise waters, the legendary Dahab Blue Hole, and pristine soft & hard coral gardens teeming with thousands of vibrant reef species.',
    },
    {
      title: 'Black Sea Historic Shipwrecks',
      region: 'Black Sea Coastline & Sunken Canyons',
      depth: '18–45 m',
      visibility: '15–25 m',
      temp: '+18°C ... +22°C',
      description:
        'Atmospheric historic wreck diving: naval vessels, deep underwater caverns, ancient amphoras, and mysterious underwater canyons.',
    },
    {
      title: 'Freshwater Lakes & Deep Quarries',
      region: 'Alpine Lakes, Blue Quarries & Deep Training Basins',
      depth: '8–25 m',
      visibility: '6–12 m',
      temp: '+14°C ... +20°C',
      description:
        'All-season specialized technical training, submerged artifact trails, underwater forests, and prime facilities for mastering buoyancy.',
    },
    {
      title: 'Exotic Ocean Atolls (Maldives & Indonesia)',
      region: 'Indian Ocean & Coral Triangle',
      depth: '5–50 m',
      visibility: '40+ m',
      temp: '+28°C ... +31°C',
      description:
        'Encounter majestic manta rays, whale sharks, schooling barracudas, and spectacular coral pinnacles in world-renowned marine reserves.',
    },
  ];

  return (
    <section id="locations" className="locations-section">
      <div className="container">
        <div className="locations-grid">
          {/* Left Column: Locations Details */}
          <div className="locations-content-col">
            <span className="section-tag">AQUA SPHERE EXPEDITIONS</span>
            <h2 className="section-title">Expedition Locations</h2>
            <div className="pink-divider" />

            <p className="locations-intro">
              We curate world-class diving expeditions across the planet's most mesmerizing underwater realms:
            </p>

            <div className="locations-list">
              {locationsData.map((loc, idx) => (
                <div key={loc.title}>
                  <button
                    className={`location-item-btn ${selectedLocation === idx ? 'active' : ''}`}
                    onClick={() => setSelectedLocation(idx)}
                  >
                    <span className="location-name">
                      <span className="location-bullet-dot" />
                      {loc.title}
                    </span>
                    <span className="location-badge">EXPLORE</span>
                  </button>

                  {/* Expanded Location Info */}
                  {selectedLocation === idx && (
                    <div
                      style={{
                        padding: '1.2rem 1.4rem',
                        margin: '0.5rem 0 1rem 0',
                        background: 'rgba(3, 19, 47, 0.75)',
                        border: '1px solid rgba(77, 217, 237, 0.25)',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        color: '#D1E3F5',
                        lineHeight: 1.6,
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '1.5rem',
                          flexWrap: 'wrap',
                          marginBottom: '0.8rem',
                          fontSize: '0.82rem',
                          color: '#27C8F5',
                        }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Compass size={14} /> {loc.region}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Waves size={14} /> Depth: {loc.depth}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Eye size={14} /> Visibility: {loc.visibility}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Thermometer size={14} /> {loc.temp}
                        </span>
                      </div>
                      <p>{loc.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Two Orange Fancy Tropical Fish */}
          <div className="locations-fish-col">
            <TwoOrangeFish />
          </div>
        </div>
      </div>

      {/* Swimming Tropical Fish School moving across bottom */}
      <SwimmingFishSchool />

      {/* Reef Fish Cluster with Seagrass & Stones */}
      <LocationsReefCluster />

      {/* Rich Coral Reef Panorama framing the bottom */}
      <CoralReef variant="bottom-panorama" />
    </section>
  );
};

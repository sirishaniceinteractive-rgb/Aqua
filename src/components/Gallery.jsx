import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      src: './images/gallery/gallery_1.jpg',
      title: 'Coral Gardens of Ras Mohammed',
      location: 'Red Sea, Egypt',
      span: true,
    },
    {
      src: './images/gallery/gallery_2.jpg',
      title: 'Vibrant Schools of Barracuda & Reef Life',
      location: 'Andaman Sea',
      span: false,
    },
    {
      src: './images/gallery/gallery_3.jpg',
      title: 'Sunbeams Piercing Dos Ojos Cenote Cavern',
      location: 'Yucatán Peninsula',
      span: false,
    },
    {
      src: './images/gallery/gallery_4.jpg',
      title: 'Majestic Oceanic Manta Ray Encounter',
      location: 'Maldives Atolls',
      span: false,
    },
    {
      src: './images/gallery/gallery_5.jpg',
      title: 'Historic Sunken Shipwreck Expedition',
      location: 'Black Sea Depths',
      span: true,
    },
    {
      src: './images/gallery/gallery_6.jpg',
      title: 'Bioluminescent Deep Reef Formations',
      location: 'Indian Ocean',
      span: false,
    },
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div style={{ maxWidth: '750px', textAlign: 'center', margin: '0 auto' }}>
          <span className="section-tag">EXPEDITION CHRONICLES</span>
          <h2 className="section-title">Underwater Gallery</h2>
          <div className="pink-divider" style={{ width: '120px', margin: '1.2rem auto' }} />
          <p style={{ color: '#C4D9F0', fontSize: '1.05rem', fontWeight: 300 }}>
            Every dive is an unforgettable adventure captured in oceanic depths.
            Experience the magic of the underwater world through the lenses of our expedition divers.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-item ${item.span ? 'span-2' : ''}`}
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
            >
              <img src={item.src} alt={item.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-location-tag">{item.location}</span>
                <h4 className="gallery-caption">{item.title}</h4>
                <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', color: '#27C8F5' }}>
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-modal" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setActiveImage(null)} aria-label="Close">
              <X size={32} />
            </button>
            <img src={activeImage.src} alt={activeImage.title} className="lightbox-img" />
            <div style={{ marginTop: '1.2rem', textAlign: 'center' }}>
              <span className="gallery-location-tag" style={{ display: 'block', marginBottom: '0.3rem' }}>
                {activeImage.location}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

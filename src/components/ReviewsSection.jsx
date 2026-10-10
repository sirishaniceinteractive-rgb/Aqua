import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Michael Hayes',
      role: 'Advanced Open Water Diver',
      dives: '48 Logged Dives',
      rating: 5,
      text: 'The Red Sea expedition with Aqua Sphere completely redefined my love for diving. Absolute weightlessness, pristine dive briefing, and unmatched attention to diver safety at every moment.',
      date: 'September 2025',
    },
    {
      name: 'Elena Rostova',
      role: 'Open Water Diver (PADI)',
      dives: '14 Logged Dives',
      rating: 5,
      text: "Started completely from scratch in the club's 5-meter deep training basin. The instructors are remarkably patient, and the Scubapro gear was pristine. In just two weeks, I was gliding above Dahab's vibrant coral reefs!",
      date: 'August 2025',
    },
    {
      name: 'Marcus Sterling',
      role: 'Deep & Wreck Explorer',
      dives: '120+ Logged Dives',
      rating: 5,
      text: 'The deep historic shipwreck expedition was truly extraordinary. Meticulous decompression planning, Enriched Nitrox mixtures, and high-caliber logistics. I recommend Aqua Sphere to any serious diver!',
      date: 'July 2025',
    },
  ];

  return (
    <section id="reviews" className="reviews-section" style={{ position: 'relative', padding: '7rem 0', zIndex: 6 }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="section-tag">DIVER TESTIMONIALS</span>
          <h2 className="section-title">Expedition Stories</h2>
          <div className="pink-divider" style={{ width: '100px', margin: '1.2rem auto' }} />
          <p style={{ color: '#C0D5EC', fontSize: '1.05rem', fontWeight: 300 }}>
            Over 3,800 certified club graduates have unlocked the beauty of the world's oceans with us.
            Here is what our divers have to say about their journey.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F05DBD" color="#F05DBD" />
                    ))}
                  </div>
                  <Quote size={24} color="rgba(39, 200, 245, 0.4)" />
                </div>

                <p style={{ color: '#D3E5F8', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{rev.text}"
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.2rem' }}>{rev.name}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#27C8F5', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={13} /> {rev.role}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: '#A9A6FF', display: 'block' }}>{rev.dives}</span>
                  <span style={{ fontSize: '0.72rem', color: '#7E9BB8' }}>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

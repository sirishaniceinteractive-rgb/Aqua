import React from 'react';
import { ChevronUp, MapPin, Phone, Mail, Send, Compass } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg viewBox="0 0 64 64" width="34" height="34" fill="none">
                <path
                  d="M32 6 C18 6 12 18 12 28 C12 38 18 44 22 46 L20 54 L14 56 L14 58 L50 58 L50 56 L44 54 L42 46 C46 44 52 38 52 28 C52 18 46 6 32 6 Z"
                  stroke="#4DD9ED"
                  strokeWidth="2.4"
                  fill="none"
                />
                <circle cx="32" cy="27" r="10" stroke="#F4F7FF" strokeWidth="2" />
                <circle cx="32" cy="27" r="7" stroke="#27C8F5" strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="32" y1="17" x2="32" y2="37" stroke="#F4F7FF" strokeWidth="1.2" />
                <line x1="22" y1="27" x2="42" y2="27" stroke="#F4F7FF" strokeWidth="1.2" />
              </svg>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.15em', fontWeight: 700 }}>
                  AQUA SPHERE
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#27C8F5', textTransform: 'uppercase' }}>
                  DIVING CLUB
                </div>
              </div>
            </div>
            <p className="footer-desc">
              Premier high-category diving club. World-class international certifications,
              bespoke deep-sea expeditions, and the timeless wonder of the underwater realm since 2012.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Club</a></li>
              <li><a href="#courses" className="footer-link">Diving Courses</a></li>
              <li><a href="#equipment" className="footer-link">Facilities & Gear</a></li>
              <li><a href="#locations" className="footer-link">Expedition Locations</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links-list">
              <li><a href="#courses" className="footer-link">Open Water Diver</a></li>
              <li><a href="#courses" className="footer-link">Advanced Adventurer</a></li>
              <li><a href="#courses" className="footer-link">Wreck Penetration</a></li>
              <li><a href="#courses" className="footer-link">Enriched Air Nitrox</a></li>
              <li><a href="#courses" className="footer-link">Junior Scuba Explorer</a></li>
              <li><a href="#courses" className="footer-link">Bespoke VIP Expeditions</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B2C8DF', fontSize: '0.9rem' }}>
                <MapPin size={16} color="#27C8F5" /> Harbor Marina Pier 7, Waterfront Promenade
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B2C8DF', fontSize: '0.9rem' }}>
                <Phone size={16} color="#27C8F5" /> +1 (800) 428-AQUA
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B2C8DF', fontSize: '0.9rem' }}>
                <Mail size={16} color="#27C8F5" /> info@aquaspherediving.com
              </li>
            </ul>

            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" title="Instagram">
                <Send size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" title="Facebook">
                <Compass size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2012–2026 AQUA SPHERE Diving Club. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4DD9ED', fontSize: '0.85rem' }}
          >
            <span>BACK TO TOP</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

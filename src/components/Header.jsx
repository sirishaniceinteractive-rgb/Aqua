import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Download } from 'lucide-react';

export const Header = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Procedural Web Audio Underwater Ambiance Synthesizer
  const toggleUnderwaterAudio = () => {
    if (!audioCtx) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        
        // Brown noise for deep ocean rumble
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 2.5; // boost
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        // Low-pass filter to sound deep underwater
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();
        setAudioCtx({ ctx, gainNode });
        setIsAudioPlaying(true);
      } catch (e) {
        console.error('Audio could not be initialized:', e);
      }
    } else {
      if (isAudioPlaying) {
        audioCtx.ctx.suspend();
        setIsAudioPlaying(false);
      } else {
        audioCtx.ctx.resume();
        setIsAudioPlaying(true);
      }
    }
  };

  const navLinks = [
    { label: 'ABOUT CLUB', href: '#about' },
    { label: 'COURSES', href: '#courses' },
    { label: 'FACILITIES', href: '#equipment' },
    { label: 'LOCATIONS', href: '#locations' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Left: Diving Helmet Logo */}
        <a href="#hero" className="header-logo-link" aria-label="AQUA SPHERE Home">
          <div className="logo-icon-wrap">
            <svg viewBox="0 0 64 64" width="40" height="40" fill="none">
              <defs>
                <linearGradient id="headerHelmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4DD9ED" />
                  <stop offset="50%" stopColor="#27C8F5" />
                  <stop offset="100%" stopColor="#F05DBD" />
                </linearGradient>
              </defs>
              <path
                d="M32 6 C18 6 12 18 12 28 C12 38 18 44 22 46 L20 54 L14 56 L14 58 L50 58 L50 56 L44 54 L42 46 C46 44 52 38 52 28 C52 18 46 6 32 6 Z"
                stroke="url(#headerHelmGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="32" cy="27" r="10" stroke="#F4F7FF" strokeWidth="2" />
              <circle cx="32" cy="27" r="7" stroke="#27C8F5" strokeWidth="1.2" strokeDasharray="2 2" />
              <line x1="32" y1="17" x2="32" y2="37" stroke="#F4F7FF" strokeWidth="1.2" />
              <line x1="22" y1="27" x2="42" y2="27" stroke="#F4F7FF" strokeWidth="1.2" />
              <ellipse cx="15" cy="28" rx="2" ry="5" stroke="#F4F7FF" strokeWidth="1.4" />
              <ellipse cx="49" cy="28" rx="2" ry="5" stroke="#F4F7FF" strokeWidth="1.4" />
              <rect x="29" y="3" width="6" height="3" rx="1.5" stroke="#4DD9ED" strokeWidth="1.4" />
              <circle cx="26" cy="51" r="1.2" fill="#F05DBD" />
              <circle cx="32" cy="52" r="1.2" fill="#F05DBD" />
              <circle cx="38" cy="51" r="1.2" fill="#F05DBD" />
            </svg>
          </div>
          <div className="logo-text-wrap">
            <span className="logo-brand">AQUA SPHERE</span>
            <span className="logo-sub">DIVING CLUB</span>
          </div>
        </a>

        {/* Center: Navigation Pills */}
        <nav className="nav-pills-container" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-pill-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Booking CTA & Audio Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleUnderwaterAudio}
            className="social-btn"
            style={{ width: '38px', height: '38px' }}
            title={isAudioPlaying ? 'Mute ocean ambiance' : 'Play atmospheric ocean ambiance'}
            aria-label="Toggle Ocean Sound"
          >
            {isAudioPlaying ? <Volume2 size={18} color="#27C8F5" /> : <VolumeX size={18} color="#9BB3CE" />}
          </button>

          <a
            href="./AQUA_SPHERE_WEBSITE.zip"
            download="AQUA_SPHERE_WEBSITE.zip"
            className="social-btn"
            style={{
              width: 'auto',
              padding: '0 0.9rem',
              height: '38px',
              borderRadius: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              color: '#4DD9ED',
              textDecoration: 'none',
              border: '1px solid rgba(77, 217, 237, 0.4)',
            }}
            title="Download AQUA SPHERE ZIP Archive"
          >
            <Download size={16} />
            <span style={{ fontWeight: 600, letterSpacing: '0.05em' }}>ZIP</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="header-cta-btn"
            id="header-booking-trigger"
          >
            BOOK DIVE
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" onClick={() => setMobileMenuOpen(false)}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="header-cta-btn"
            style={{ marginTop: '1.5rem', padding: '0.85rem 2.4rem' }}
          >
            BOOK DIVE
          </button>
        </div>
      )}
    </>
  );
};

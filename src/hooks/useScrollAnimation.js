import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Center Betta Fish Scroll Parallax (dives deeper as user scrolls)
      gsap.to('.hero-center-betta-wrap', {
        y: 190,
        scale: 0.85,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // 2. Hero Typography Fade & Scale Out
      gsap.to('.hero-content', {
        y: -100,
        opacity: 0.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.hero-section',
          start: '20% top',
          end: '85% top',
          scrub: 1,
        },
      });

      // 3. Hero Left & Right Fish Parallax Displace
      gsap.to('.hero-fish-left', {
        x: -70,
        y: 80,
        rotation: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to('.hero-fish-right', {
        x: 70,
        y: 90,
        rotation: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // 4. About Section Reveal Animations
      gsap.from('.about-fish-col', {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 75%',
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.from('.about-content-col > *', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // 5. Locations Section Reveal & Fish Swimming Scroll Shift
      gsap.from('.locations-content-col > *', {
        x: -50,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.locations-section',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
        },
      });

      gsap.from('.locations-fish-col', {
        x: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.locations-section',
          start: 'top 70%',
          toggleActions: 'play reverse play reverse',
        },
      });

      // Parallax on Two Orange Fish as user scrolls through locations
      gsap.to('.two-orange-fish-wrap', {
        y: -50,
        x: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.locations-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });

      // 6. Courses Section Cards Stagger (Reliable visibility)
      gsap.fromTo(
        '.course-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.courses-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 7. Equipment Section Cards Stagger
      gsap.fromTo(
        '.equipment-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.equipment-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 8. Gallery Items Reveal
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 9. Booking Form Card Reveal
      gsap.fromTo(
        '.booking-card-wrapper',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.booking-section',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
};

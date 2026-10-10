import React, { useState } from 'react';
import { Header } from './components/Header';
import { UnderwaterScene } from './components/UnderwaterScene';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LocationsSection } from './components/LocationsSection';
import { CoursesSection } from './components/CoursesSection';
import { EquipmentSection } from './components/EquipmentSection';
import { Gallery } from './components/Gallery';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export function App() {
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState('');

  // Initialize GSAP ScrollTrigger animations
  useScrollAnimation();

  const handleOpenBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourse = (courseTitle) => {
    setSelectedCourseForBooking(courseTitle);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="aqua-sphere-app">
      {/* 3D WebGL Underwater Scene (God rays, floating particles, rising bubbles, mouse parallax) */}
      <UnderwaterScene />

      {/* Ambient Caustics & Lighting Overlays */}
      <div className="underwater-ambient-overlay" aria-hidden="true" />
      <div className="water-caustics-layer" aria-hidden="true" />

      {/* Fixed Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Underwater Journey Content */}
      <main>
        {/* Fullscreen Hero Section */}
        <Hero />

        {/* Section 1: About the Club ("ABOUT CLUB") */}
        <AboutSection />

        {/* Section 2: Locations ("LOCATIONS") */}
        <LocationsSection />

        {/* Section 3: Diving Courses ("COURSES") */}
        <CoursesSection onSelectCourse={handleSelectCourse} />

        {/* Section 4: Facilities & Equipment ("EQUIPMENT") */}
        <EquipmentSection />

        {/* Section 5: Photo Gallery & Lightbox */}
        <Gallery />

        {/* Section 6: Diver Reviews & Testimonials */}
        <ReviewsSection />

        {/* Section 7: Booking CTA & Form */}
        <BookingSection preselectedCourse={selectedCourseForBooking} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

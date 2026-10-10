import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Waves, Award } from 'lucide-react';

export const CoursesSection = ({ onSelectCourse }) => {
  const courses = [
    {
      id: 'beginner',
      title: 'Beginner Diving',
      subtitle: 'Open Water Diver (PADI / CMAS)',
      difficulty: 'Beginner Level',
      difficultyColor: '#27C8F5',
      duration: '4 Days • 5 Dives',
      depth: 'Up to 18 Meters',
      price: '$380',
      image: './images/courses/course_beginner.jpg',
      description:
        'The premier starting point for newcomers. Master diving physics, underwater signaling, buoyancy control, and earn your lifetime international certification.',
      features: [
        'Comprehensive Theory + Confined Water Pool Training',
        '4 Guided Open Water Ocean Dives',
        'Full Suite of Premium Scubapro Gear Provided',
        'Lifetime Worldwide PADI Diver Certification',
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Diving',
      subtitle: 'Advanced Open Water Diver',
      difficulty: 'Advanced Level',
      difficultyColor: '#F05DBD',
      duration: '3 Days • 5 Dives',
      depth: 'Up to 30 Meters',
      price: '$450',
      image: './images/courses/course_advanced.jpg',
      description:
        'Expand your underwater boundaries: deep dives, underwater compass navigation, night diving adventures, and honing pin-point buoyancy.',
      features: [
        'Deep Water Dive to 30 Meters',
        'Underwater Compass Navigation & Orientation',
        'Night Diving with Tactical Lights',
        'Current & Drift Diving Mastery',
      ],
    },
    {
      id: 'deepsea',
      title: 'Deep Sea Exploration',
      subtitle: 'Deep & Wreck Explorer Spec',
      difficulty: 'Expert / Specialty',
      difficultyColor: '#A9A6FF',
      duration: '5 Days • 8 Dives',
      depth: 'Up to 40 Meters (Nitrox)',
      price: '$620',
      image: './images/courses/course_deepsea.jpg',
      description:
        'For experienced divers seeking oceanic mysteries: sunken ship penetrations, enriched air (Nitrox) gas mixtures, and decompression protocols.',
      features: [
        'Historic Wreck Penetration & Line Laying',
        'Enriched Air Nitrox Specialty Certification',
        'Decompression & Safety Surface Protocols',
        'Complimentary 4K Underwater Cinematic Video',
      ],
    },
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="courses-header">
          <span className="section-tag">TRAINING & CERTIFICATION</span>
          <h2 className="section-title">Diving Courses</h2>
          <div className="pink-divider" style={{ width: '120px', margin: '1.2rem auto' }} />
          <p style={{ color: '#C0D5EC', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.7 }}>
            International PADI and CMAS standards. Master instructors with 15+ years of active expedition practice
            and personalized one-on-one mentorship for every student.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card-image-wrap">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card-image"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span
                  className="course-card-badge"
                  style={{ borderColor: course.difficultyColor, color: course.difficultyColor }}
                >
                  {course.difficulty}
                </span>
              </div>

              <div className="course-card-body">
                <h3 className="course-title">{course.title}</h3>
                <div style={{ color: '#27C8F5', fontSize: '0.88rem', marginBottom: '0.8rem', letterSpacing: '0.04em', fontWeight: 500 }}>
                  {course.subtitle}
                </div>
                <p className="course-desc">{course.description}</p>

                <div className="course-meta-row">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#B5CCE5', fontSize: '0.85rem' }}>
                    <Clock size={15} color="#27C8F5" /> {course.duration}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#B5CCE5', fontSize: '0.85rem' }}>
                    <Waves size={15} color="#4DD9ED" /> {course.depth}
                  </span>
                  <span style={{ fontWeight: 700, color: '#F05DBD', fontSize: '1.2rem' }}>
                    {course.price}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', marginBottom: '1.6rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {course.features.map((f, i) => (
                    <li key={i} style={{ fontSize: '0.84rem', color: '#B8D2ED', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <ShieldCheck size={15} color="#4DD9ED" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="course-btn"
                  onClick={() => onSelectCourse && onSelectCourse(course.title)}
                >
                  <span>ENROLL IN COURSE</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

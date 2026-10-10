import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Calendar, User, Mail, Phone, BookOpen, Send } from 'lucide-react';

export const BookingSection = ({ preselectedCourse = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    course: preselectedCourse || 'Beginner Diving (Open Water Diver)',
    date: '',
    experience: 'Beginner (No experience — learning from scratch)',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    if (!formData.contact.trim()) {
      errs.contact = 'Please provide your phone number or email address';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact) &&
      !/^[\d\+\s\(\)\-]{7,20}$/.test(formData.contact)
    ) {
      errs.contact = 'Please enter a valid email or phone number';
    }
    if (!formData.date) {
      errs.date = 'Please select your preferred dive date';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#27C8F5', '#4DD9ED', '#F05DBD', '#A9A6FF', '#ffffff'],
      });
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="booking-card-wrapper">
          <div className="booking-card-glow" />

          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag">RESERVATIONS & CONSULTATION</span>
            <h2 className="section-title">Discover the Underwater Realm</h2>
            <div className="pink-divider" style={{ width: '100px', margin: '1rem auto' }} />
            <p style={{ color: '#D4E6FA', fontSize: '1.15rem', fontWeight: 300, maxWidth: '640px', margin: '0 auto' }}>
              Reserve your dive session and embark on extraordinary underwater discoveries.
              Our expedition coordinator will connect with you within 15 minutes.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                background: 'rgba(3, 19, 47, 0.6)',
                borderRadius: '20px',
                border: '1px solid #27C8F5',
              }}
            >
              <CheckCircle2 size={64} color="#27C8F5" style={{ margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '0.8rem' }}>
                Your Expedition Booking is Confirmed!
              </h3>
              <p style={{ color: '#D1E3F5', maxWidth: '520px', margin: '0 auto 1.8rem auto', lineHeight: 1.7 }}>
                Thank you, <strong>{formData.name}</strong>! We have reserved your spot for the program{' '}
                <strong>«{formData.course}»</strong> on <strong>{formData.date}</strong>. Our dive master
                will contact you shortly to coordinate briefing schedules and custom gear fittings.
              </p>
              <button
                className="header-cta-btn"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    contact: '',
                    course: 'Beginner Diving (Open Water Diver)',
                    date: '',
                    experience: 'Beginner (No experience — learning from scratch)',
                    notes: '',
                  });
                }}
              >
                SUBMIT ANOTHER RESERVATION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="booking-form-grid">
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                  {errors.name && (
                    <span style={{ color: '#F05DBD', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Contact (Phone / Email) */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contact">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="+1 (555) 234-5678 or diver@example.com"
                    value={formData.contact}
                    onChange={handleChange}
                    className="form-input"
                  />
                  {errors.contact && (
                    <span style={{ color: '#F05DBD', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertCircle size={14} /> {errors.contact}
                    </span>
                  )}
                </div>

                {/* Course Selection */}
                <div className="form-group">
                  <label className="form-label" htmlFor="course">
                    Select Program or Expedition
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Beginner Diving (Open Water Diver)">Beginner Diving (Open Water Diver)</option>
                    <option value="Advanced Diving (Advanced Open Water)">Advanced Diving (Advanced Open Water)</option>
                    <option value="Deep Sea Exploration (Wreck & Deep)">Deep Sea Exploration (Wreck & Deep)</option>
                    <option value="Introductory Trial Dive (Discover Scuba)">Introductory Trial Dive (Discover Scuba)</option>
                    <option value="Red Sea Coral Expedition">Red Sea Coral Expedition</option>
                    <option value="Black Sea Historic Wreck Tour">Black Sea Historic Wreck Tour</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="form-group">
                  <label className="form-label" htmlFor="date">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && (
                    <span style={{ color: '#F05DBD', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertCircle size={14} /> {errors.date}
                    </span>
                  )}
                </div>

                {/* Experience */}
                <div className="form-group full-span">
                  <label className="form-label" htmlFor="experience">
                    Your Current Diving Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Beginner (No experience — learning from scratch)">Beginner (No experience — learning from scratch)</option>
                    <option value="Certified OWD (Up to 18m)">Certified OWD (Up to 18 meters)</option>
                    <option value="Certified AOWD (Up to 30m)">Certified AOWD (Up to 30 meters)</option>
                    <option value="Master / Rescue / Technical Diver">Master / Rescue / Deep Technical Diver</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="full-span">
                  <button type="submit" className="form-submit-btn" disabled={loading}>
                    {loading ? 'SUBMITTING RESERVATION...' : 'BOOK YOUR EXPEDITION'}
                  </button>
                  <p className="form-disclaimer">
                    * By submitting this booking, you agree to the processing of personal data for dive logistics.
                    Designed for interactive presentation; in production this connects to a secured reservation API.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

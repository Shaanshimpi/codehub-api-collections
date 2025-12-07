'use client'

import React from 'react'
import './event-styles.css'

export default function EventWebsitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="event-navbar">
        <div className="event-container">
          <div className="event-logo">Tech Summit 2024</div>
          <ul className="event-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Large Banner Style */}
      <section id="home" className="event-hero">
        <div className="event-hero-content">
          <h1>Tech Summit 2024</h1>
          <p className="event-hero-date">March 15-17, 2024</p>
          <p className="event-hero-location">San Francisco Convention Center</p>
          <a href="#register" className="event-cta-button">Register Now</a>
        </div>
      </section>

      {/* Schedule Section - Timeline Style */}
      <section id="schedule" className="event-schedule">
        <div className="event-container">
          <h2>Event Schedule</h2>
          <div className="event-schedule-list">
            <div className="event-schedule-item">
              <div className="event-time">9:00 AM</div>
              <div className="event-schedule-content">
                <h3>Opening Keynote</h3>
                <p>Welcome address and conference overview</p>
              </div>
            </div>
            <div className="event-schedule-item">
              <div className="event-time">10:30 AM</div>
              <div className="event-schedule-content">
                <h3>Workshop: Web Development</h3>
                <p>Hands-on session on modern web technologies</p>
              </div>
            </div>
            <div className="event-schedule-item">
              <div className="event-time">2:00 PM</div>
              <div className="event-schedule-content">
                <h3>Panel Discussion</h3>
                <p>Industry leaders discuss future trends</p>
              </div>
            </div>
            <div className="event-schedule-item">
              <div className="event-time">4:00 PM</div>
              <div className="event-schedule-content">
                <h3>Networking Session</h3>
                <p>Connect with peers and industry professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section - Card Grid */}
      <section id="speakers" className="event-speakers">
        <div className="event-container">
          <h2>Featured Speakers</h2>
          <div className="event-speakers-grid">
            <div className="event-speaker-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Speaker" className="event-speaker-image" />
              <h3>Alex Johnson</h3>
              <p className="event-speaker-role">CEO, TechCorp</p>
            </div>
            <div className="event-speaker-card">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Speaker" className="event-speaker-image" />
              <h3>Sarah Williams</h3>
              <p className="event-speaker-role">Lead Developer</p>
            </div>
            <div className="event-speaker-card">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" alt="Speaker" className="event-speaker-image" />
              <h3>Michael Chen</h3>
              <p className="event-speaker-role">Design Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section - Centered CTA */}
      <section id="register" className="event-register">
        <div className="event-container">
          <div className="event-register-content">
            <h2>Join Us at Tech Summit 2024</h2>
            <p>Don&apos;t miss out on this incredible opportunity to learn, network, and grow.</p>
            <a href="#" className="event-register-button">Register Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="event-footer">
        <div className="event-container">
          <p>&copy; 2024 Tech Summit. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



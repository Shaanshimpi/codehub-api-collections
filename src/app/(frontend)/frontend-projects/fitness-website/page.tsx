'use client'

import React from 'react'
import './fitness-styles.css'

export default function FitnessWebsitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fitness-navbar">
        <div className="fitness-container">
          <div className="fitness-logo">FitZone</div>
          <ul className="fitness-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#membership">Membership</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="fitness-hero">
        <div className="fitness-container">
          <div className="fitness-hero-content">
            <h1>Transform Your Body, Transform Your Life</h1>
            <p>Join FitZone and start your fitness journey today</p>
            <a href="#membership" className="fitness-cta-button">Join Now</a>
          </div>
        </div>
      </section>

      {/* Programs Section - Complex Flex Layout */}
      <section id="programs" className="fitness-programs">
        <div className="fitness-container">
          <h2>Our Programs</h2>
          <div className="fitness-programs-wrapper">
            <div className="fitness-program-main">
              <div className="fitness-program-card fitness-featured">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" alt="Strength Training" className="fitness-program-image" />
                <div className="fitness-program-details">
                  <div className="fitness-program-header">
                    <h3>Strength Training</h3>
                    <span className="fitness-program-duration">12 Weeks</span>
                  </div>
                  <p>Build muscle and increase strength with our comprehensive training program.</p>
                  <div className="fitness-program-features">
                    <span className="fitness-feature-tag">3x per week</span>
                    <span className="fitness-feature-tag">Personal trainer</span>
                    <span className="fitness-feature-tag">Nutrition guide</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fitness-program-list">
              <div className="fitness-program-item">
                <div className="fitness-program-item-content">
                  <div className="fitness-program-item-info">
                    <h4>Cardio Blast</h4>
                    <p>High-intensity cardio workouts</p>
                  </div>
                  <span className="fitness-program-item-duration">8 Weeks</span>
                </div>
              </div>
              <div className="fitness-program-item">
                <div className="fitness-program-item-content">
                  <div className="fitness-program-item-info">
                    <h4>Yoga & Flexibility</h4>
                    <p>Improve flexibility and mindfulness</p>
                  </div>
                  <span className="fitness-program-item-duration">6 Weeks</span>
                </div>
              </div>
              <div className="fitness-program-item">
                <div className="fitness-program-item-content">
                  <div className="fitness-program-item-info">
                    <h4>Weight Loss</h4>
                    <p>Targeted program for weight management</p>
                  </div>
                  <span className="fitness-program-item-duration">10 Weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="fitness-trainers">
        <div className="fitness-container">
          <h2>Our Trainers</h2>
          <div className="fitness-trainers-grid">
            <div className="fitness-trainer-card">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop" alt="Trainer" className="fitness-trainer-image" />
              <div className="fitness-trainer-info">
                <div className="fitness-trainer-header">
                  <h3>Mike Johnson</h3>
                  <span className="fitness-trainer-specialty">Strength Coach</span>
                </div>
                <p className="fitness-trainer-bio">10+ years of experience in strength training and bodybuilding.</p>
              </div>
            </div>
            <div className="fitness-trainer-card">
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=400&fit=crop" alt="Trainer" className="fitness-trainer-image" />
              <div className="fitness-trainer-info">
                <div className="fitness-trainer-header">
                  <h3>Sarah Martinez</h3>
                  <span className="fitness-trainer-specialty">Yoga Instructor</span>
                </div>
                <p className="fitness-trainer-bio">Certified yoga instructor specializing in flexibility and mindfulness.</p>
              </div>
            </div>
            <div className="fitness-trainer-card">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop" alt="Trainer" className="fitness-trainer-image" />
              <div className="fitness-trainer-info">
                <div className="fitness-trainer-header">
                  <h3>David Lee</h3>
                  <span className="fitness-trainer-specialty">Cardio Expert</span>
                </div>
                <p className="fitness-trainer-bio">Expert in high-intensity interval training and endurance programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="fitness-membership">
        <div className="fitness-container">
          <h2>Membership Plans</h2>
          <div className="fitness-membership-grid">
            <div className="fitness-membership-card">
              <div className="fitness-membership-header">
                <h3>Basic</h3>
                <div className="fitness-membership-price">$29<span>/month</span></div>
              </div>
              <ul className="fitness-membership-features">
                <li>Gym access</li>
                <li>Basic equipment</li>
                <li>Locker room</li>
              </ul>
            </div>
            <div className="fitness-membership-card fitness-membership-featured">
              <div className="fitness-membership-badge">Popular</div>
              <div className="fitness-membership-header">
                <h3>Premium</h3>
                <div className="fitness-membership-price">$59<span>/month</span></div>
              </div>
              <ul className="fitness-membership-features">
                <li>All Basic features</li>
                <li>Group classes</li>
                <li>Personal trainer (2x/month)</li>
                <li>Nutrition consultation</li>
              </ul>
            </div>
            <div className="fitness-membership-card">
              <div className="fitness-membership-header">
                <h3>Elite</h3>
                <div className="fitness-membership-price">$99<span>/month</span></div>
              </div>
              <ul className="fitness-membership-features">
                <li>All Premium features</li>
                <li>Unlimited personal training</li>
                <li>Custom meal plans</li>
                <li>24/7 gym access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fitness-footer">
        <div className="fitness-container">
          <p>&copy; 2024 FitZone. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



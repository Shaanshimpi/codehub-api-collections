'use client'

import React from 'react'
import './landing-styles.css'

export default function LandingPagePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="landing-navbar">
        <div className="landing-container">
          <div className="landing-logo">ProductX</div>
          <ul className="landing-nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Centered with CTA */}
      <section className="landing-hero">
        <div className="landing-container">
          <div className="landing-hero-content">
            <h1>Transform Your Workflow</h1>
            <p className="landing-hero-subtitle">The all-in-one solution for modern teams</p>
            <p className="landing-hero-description">Streamline your processes, boost productivity, and achieve more with our powerful platform.</p>
            <div className="landing-hero-buttons">
              <a href="#pricing" className="landing-btn-primary">Get Started</a>
              <a href="#features" className="landing-btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Three Column Grid */}
      <section id="features" className="landing-features">
        <div className="landing-container">
          <h2>Why Choose ProductX</h2>
          <div className="landing-features-grid">
            <div className="landing-feature-box">
              <h3>Fast Performance</h3>
              <p>Lightning-fast speed that keeps your team productive</p>
            </div>
            <div className="landing-feature-box">
              <h3>Easy Integration</h3>
              <p>Seamlessly connect with your existing tools</p>
            </div>
            <div className="landing-feature-box">
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Cards in Row */}
      <section id="pricing" className="landing-pricing">
        <div className="landing-container">
          <h2>Simple Pricing</h2>
          <div className="landing-pricing-grid">
            <div className="landing-pricing-card">
              <h3>Basic</h3>
              <div className="landing-price">$9<span>/month</span></div>
              <ul className="landing-pricing-features">
                <li>Up to 5 users</li>
                <li>Basic features</li>
                <li>Email support</li>
              </ul>
              <a href="#" className="landing-btn-outline">Choose Plan</a>
            </div>
            <div className="landing-pricing-card landing-featured">
              <div className="landing-badge">Popular</div>
              <h3>Pro</h3>
              <div className="landing-price">$29<span>/month</span></div>
              <ul className="landing-pricing-features">
                <li>Up to 25 users</li>
                <li>All features</li>
                <li>Priority support</li>
              </ul>
              <a href="#" className="landing-btn-primary">Choose Plan</a>
            </div>
            <div className="landing-pricing-card">
              <h3>Enterprise</h3>
              <div className="landing-price">$99<span>/month</span></div>
              <ul className="landing-pricing-features">
                <li>Unlimited users</li>
                <li>Advanced features</li>
                <li>Dedicated support</li>
              </ul>
              <a href="#" className="landing-btn-outline">Choose Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Horizontal Scroll Style */}
      <section className="landing-testimonials">
        <div className="landing-container">
          <h2>What Our Customers Say</h2>
          <div className="landing-testimonials-list">
            <div className="landing-testimonial-item">
              <p className="landing-testimonial-text">&quot;ProductX has completely transformed how we work. Highly recommended!&quot;</p>
              <p className="landing-testimonial-author">- Sarah Johnson, CEO</p>
            </div>
            <div className="landing-testimonial-item">
              <p className="landing-testimonial-text">&quot;The best investment we&apos;ve made for our team. Game changer!&quot;</p>
              <p className="landing-testimonial-author">- Mike Chen, Director</p>
            </div>
            <div className="landing-testimonial-item">
              <p className="landing-testimonial-text">&quot;Simple, powerful, and exactly what we needed. Love it!&quot;</p>
              <p className="landing-testimonial-author">- Emily Davis, Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="landing-contact">
        <div className="landing-container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today and see how ProductX can help your team succeed.</p>
          <div className="landing-contact-info">
            <p>Email: hello@productx.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-container">
          <p>&copy; 2024 ProductX. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



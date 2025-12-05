'use client'

import React from 'react'
import './business-styles.css'

export default function BusinessSitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="business-navbar">
        <div className="business-container">
          <div className="business-nav-content">
            <div className="business-logo">TechSolutions</div>
            <ul className="business-nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#about">About</a></li>
            </ul>
            <div className="business-nav-cta">
              <a href="#contact" className="business-cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="business-hero">
        <div className="business-container">
          <div className="business-hero-wrapper">
            <div className="business-hero-content">
              <h1>Transform Your Business with Technology</h1>
              <p>We provide innovative solutions to help your business grow and succeed in the digital age.</p>
              <div className="business-hero-buttons">
                <a href="#services" className="business-btn-primary">Our Services</a>
                <a href="#contact" className="business-btn-secondary">Contact Us</a>
              </div>
            </div>
            <div className="business-hero-image">
              <div className="business-image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="business-services">
        <div className="business-container">
          <div className="business-section-header">
            <h2>Our Services</h2>
            <p>Comprehensive solutions for your business needs</p>
          </div>
          <div className="business-services-grid">
            <div className="business-service-card">
              <div className="business-service-icon"></div>
              <div className="business-service-content">
                <h3>Web Development</h3>
                <p>Custom websites built with modern technologies to enhance your online presence.</p>
                <ul className="business-service-features">
                  <li>Responsive Design</li>
                  <li>SEO Optimization</li>
                  <li>Fast Performance</li>
                </ul>
              </div>
            </div>
            <div className="business-service-card">
              <div className="business-service-icon"></div>
              <div className="business-service-content">
                <h3>Cloud Solutions</h3>
                <p>Scalable cloud infrastructure to support your business growth and operations.</p>
                <ul className="business-service-features">
                  <li>Data Security</li>
                  <li>24/7 Support</li>
                  <li>Cost Effective</li>
                </ul>
              </div>
            </div>
            <div className="business-service-card">
              <div className="business-service-icon"></div>
              <div className="business-service-content">
                <h3>Digital Marketing</h3>
                <p>Strategic marketing campaigns to reach your target audience and drive results.</p>
                <ul className="business-service-features">
                  <li>Social Media</li>
                  <li>Content Strategy</li>
                  <li>Analytics & Reports</li>
                </ul>
              </div>
            </div>
            <div className="business-service-card">
              <div className="business-service-icon"></div>
              <div className="business-service-content">
                <h3>Consulting</h3>
                <p>Expert advice to help you make informed decisions and optimize your processes.</p>
                <ul className="business-service-features">
                  <li>Strategy Planning</li>
                  <li>Process Optimization</li>
                  <li>Technology Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="business-team">
        <div className="business-container">
          <div className="business-section-header">
            <h2>Our Team</h2>
            <p>Meet the experts behind our success</p>
          </div>
          <div className="business-team-grid">
            <div className="business-team-member">
              <div className="business-member-image"></div>
              <div className="business-member-info">
                <div className="business-member-header">
                  <h3>Sarah Johnson</h3>
                  <span className="business-member-role">CEO & Founder</span>
                </div>
                <p className="business-member-bio">15+ years of experience in technology and business strategy.</p>
                <div className="business-member-contact">
                  <span>sarah@techsolutions.com</span>
                </div>
              </div>
            </div>
            <div className="business-team-member">
              <div className="business-member-image"></div>
              <div className="business-member-info">
                <div className="business-member-header">
                  <h3>Michael Chen</h3>
                  <span className="business-member-role">CTO</span>
                </div>
                <p className="business-member-bio">Expert in cloud architecture and software development.</p>
                <div className="business-member-contact">
                  <span>michael@techsolutions.com</span>
                </div>
              </div>
            </div>
            <div className="business-team-member">
              <div className="business-member-image"></div>
              <div className="business-member-info">
                <div className="business-member-header">
                  <h3>Emily Rodriguez</h3>
                  <span className="business-member-role">Marketing Director</span>
                </div>
                <p className="business-member-bio">Specializes in digital marketing and brand development.</p>
                <div className="business-member-contact">
                  <span>emily@techsolutions.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="business-about">
        <div className="business-container">
          <div className="business-about-wrapper">
            <div className="business-about-content">
              <h2>About TechSolutions</h2>
              <p>We are a leading technology consulting firm dedicated to helping businesses thrive in the digital landscape. With over a decade of experience, we&apos;ve helped hundreds of companies transform their operations and achieve their goals.</p>
              <div className="business-stats">
                <div className="business-stat-item">
                  <div className="business-stat-number">500+</div>
                  <div className="business-stat-label">Projects Completed</div>
                </div>
                <div className="business-stat-item">
                  <div className="business-stat-number">200+</div>
                  <div className="business-stat-label">Happy Clients</div>
                </div>
                <div className="business-stat-item">
                  <div className="business-stat-number">50+</div>
                  <div className="business-stat-label">Team Members</div>
                </div>
              </div>
            </div>
            <div className="business-about-features">
              <div className="business-feature-item">
                <div className="business-feature-icon"></div>
                <div className="business-feature-text">
                  <h4>Innovation</h4>
                  <p>Cutting-edge solutions for modern challenges</p>
                </div>
              </div>
              <div className="business-feature-item">
                <div className="business-feature-icon"></div>
                <div className="business-feature-text">
                  <h4>Reliability</h4>
                  <p>Trusted partner for your business needs</p>
                </div>
              </div>
              <div className="business-feature-item">
                <div className="business-feature-icon"></div>
                <div className="business-feature-text">
                  <h4>Excellence</h4>
                  <p>Commitment to quality in everything we do</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="business-contact">
        <div className="business-container">
          <div className="business-contact-wrapper">
            <div className="business-contact-info">
              <h2>Get In Touch</h2>
              <div className="business-contact-details">
                <div className="business-contact-item">
                  <div className="business-contact-label">Address</div>
                  <div className="business-contact-value">123 Business Street, Suite 100</div>
                </div>
                <div className="business-contact-item">
                  <div className="business-contact-label">Phone</div>
                  <div className="business-contact-value">(555) 123-4567</div>
                </div>
                <div className="business-contact-item">
                  <div className="business-contact-label">Email</div>
                  <div className="business-contact-value">info@techsolutions.com</div>
                </div>
              </div>
            </div>
            <div className="business-contact-hours">
              <h3>Business Hours</h3>
              <div className="business-hours-list">
                <div className="business-hour-row">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="business-hour-row">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="business-hour-row">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="business-footer">
        <div className="business-container">
          <div className="business-footer-content">
            <div className="business-footer-section">
              <h4>TechSolutions</h4>
              <p>Transforming businesses through technology innovation.</p>
            </div>
            <div className="business-footer-section">
              <h4>Quick Links</h4>
              <ul className="business-footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="business-footer-section">
              <h4>Services</h4>
              <ul className="business-footer-links">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">Digital Marketing</a></li>
                <li><a href="#services">Consulting</a></li>
              </ul>
            </div>
            <div className="business-footer-section">
              <h4>Contact</h4>
              <ul className="business-footer-links">
                <li>info@techsolutions.com</li>
                <li>(555) 123-4567</li>
                <li>123 Business Street</li>
              </ul>
            </div>
          </div>
          <div className="business-footer-bottom">
            <p>&copy; 2024 TechSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}


'use client'

import React from 'react'
import './portfolio-styles.css'

export default function PortfolioSitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="portfolio-navbar">
        <div className="portfolio-container">
          <div className="portfolio-logo">JD</div>
          <ul className="portfolio-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Different Layout */}
      <section id="home" className="portfolio-hero">
        <div className="portfolio-container">
          <div className="portfolio-hero-wrapper">
            <div className="portfolio-hero-text">
              <h1>John Doe</h1>
              <p className="portfolio-hero-subtitle">Frontend Developer</p>
              <p className="portfolio-hero-description">I create beautiful and functional websites that help businesses grow online.</p>
            </div>
            <div className="portfolio-hero-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="John Doe" className="portfolio-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Different Card Style */}
      <section id="work" className="portfolio-work">
        <div className="portfolio-container">
          <h2>Featured Work</h2>
          <div className="portfolio-work-list">
            <div className="portfolio-work-item">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop" alt="E-commerce Platform" className="portfolio-work-image" />
              <div className="portfolio-work-content">
                <h3>E-commerce Platform</h3>
                <p>Full-featured online store with shopping cart and payment system.</p>
              </div>
            </div>
            <div className="portfolio-work-item">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop" alt="Blog Application" className="portfolio-work-image" />
              <div className="portfolio-work-content">
                <h3>Blog Application</h3>
                <p>Content management system for creating and publishing articles.</p>
              </div>
            </div>
            <div className="portfolio-work-item">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" alt="Analytics Dashboard" className="portfolio-work-image" />
              <div className="portfolio-work-content">
                <h3>Analytics Dashboard</h3>
                <p>Real-time data visualization and reporting interface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Different Layout */}
      <section id="about" className="portfolio-about">
        <div className="portfolio-container">
          <div className="portfolio-about-content">
            <h2>About Me</h2>
            <p>I am a passionate web developer specializing in frontend technologies. With years of experience, I focus on creating user-friendly interfaces and clean, maintainable code.</p>
            <div className="portfolio-skills-list">
              <div className="portfolio-skill-tag">HTML</div>
              <div className="portfolio-skill-tag">CSS</div>
              <div className="portfolio-skill-tag">JavaScript</div>
              <div className="portfolio-skill-tag">React</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-contact">
        <div className="portfolio-container">
          <h2>Get In Touch</h2>
          <div className="portfolio-contact-info">
            <p>Email: john.doe@example.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="portfolio-container">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

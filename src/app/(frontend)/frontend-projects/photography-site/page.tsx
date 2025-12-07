'use client'

import React from 'react'
import './photography-styles.css'

export default function PhotographySitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="photo-navbar">
        <div className="photo-container">
          <div className="photo-logo">Lens & Light</div>
          <ul className="photo-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Minimal with Image */}
      <section id="home" className="photo-hero">
        <div className="photo-hero-content">
          <h1>Capturing Life&apos;s Moments</h1>
          <p>Professional photography services for all your special occasions</p>
        </div>
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop" alt="Photography" className="photo-hero-image" />
      </section>

      {/* Gallery Section - Masonry Style Grid */}
      <section id="gallery" className="photo-gallery">
        <div className="photo-container">
          <h2>Portfolio Gallery</h2>
          <div className="photo-gallery-grid">
            <div className="photo-gallery-item photo-large">
              <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=800&fit=crop" alt="Portrait" className="photo-gallery-img" />
            </div>
            <div className="photo-gallery-item">
              <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&h=400&fit=crop" alt="Nature" className="photo-gallery-img" />
            </div>
            <div className="photo-gallery-item">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop" alt="Landscape" className="photo-gallery-img" />
            </div>
            <div className="photo-gallery-item">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop" alt="Wedding" className="photo-gallery-img" />
            </div>
            <div className="photo-gallery-item">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop" alt="Event" className="photo-gallery-img" />
            </div>
            <div className="photo-gallery-item photo-wide">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop" alt="Cityscape" className="photo-gallery-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Horizontal Cards */}
      <section className="photo-services">
        <div className="photo-container">
          <h2>Our Services</h2>
          <div className="photo-services-list">
            <div className="photo-service-card">
              <h3>Portrait Photography</h3>
              <p>Professional headshots and personal portraits</p>
            </div>
            <div className="photo-service-card">
              <h3>Wedding Photography</h3>
              <p>Capture your special day with beautiful memories</p>
            </div>
            <div className="photo-service-card">
              <h3>Event Photography</h3>
              <p>Document your corporate and social events</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Two Column with Image */}
      <section id="about" className="photo-about">
        <div className="photo-container">
          <div className="photo-about-wrapper">
            <div className="photo-about-text">
              <h2>About Lens & Light</h2>
              <p>With over 10 years of experience, we specialize in capturing authentic moments and creating timeless photographs. Our passion for photography drives us to deliver exceptional results for every client.</p>
              <p>We believe every moment deserves to be preserved beautifully, whether it&apos;s a wedding, corporate event, or personal portrait session.</p>
            </div>
            <div className="photo-about-image">
              <img src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=600&fit=crop" alt="Photographer" className="photo-about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="photo-footer">
        <div className="photo-container">
          <p>&copy; 2024 Lens & Light Photography. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



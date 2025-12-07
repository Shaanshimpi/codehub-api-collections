'use client'

import React from 'react'
import './real-estate-styles.css'

export default function RealEstatePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="estate-navbar">
        <div className="estate-container">
          <div className="estate-logo">Prime Properties</div>
          <ul className="estate-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#listings">Listings</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="estate-hero">
        <div className="estate-container">
          <div className="estate-hero-content">
            <h1>Find Your Dream Home</h1>
            <p>Discover premium properties in the best locations</p>
          </div>
        </div>
      </section>

      {/* Listings Section - Complex Grid with Filters */}
      <section id="listings" className="estate-listings">
        <div className="estate-container">
          <div className="estate-listings-header">
            <h2>Featured Properties</h2>
            <div className="estate-filters">
              <div className="estate-filter-item">All</div>
              <div className="estate-filter-item">For Sale</div>
              <div className="estate-filter-item">For Rent</div>
            </div>
          </div>
          <div className="estate-properties-grid">
            <div className="estate-property-card">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" alt="Property" className="estate-property-image" />
              <div className="estate-property-content">
                <div className="estate-property-header">
                  <div className="estate-property-info">
                    <h3>Modern Family Home</h3>
                    <p className="estate-property-location">Downtown District</p>
                  </div>
                  <div className="estate-property-price">$450,000</div>
                </div>
                <div className="estate-property-details">
                  <span className="estate-detail-item">3 Beds</span>
                  <span className="estate-detail-item">2 Baths</span>
                  <span className="estate-detail-item">1,800 sqft</span>
                </div>
              </div>
            </div>
            <div className="estate-property-card">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" alt="Property" className="estate-property-image" />
              <div className="estate-property-content">
                <div className="estate-property-header">
                  <div className="estate-property-info">
                    <h3>Luxury Apartment</h3>
                    <p className="estate-property-location">Riverside Area</p>
                  </div>
                  <div className="estate-property-price">$320,000</div>
                </div>
                <div className="estate-property-details">
                  <span className="estate-detail-item">2 Beds</span>
                  <span className="estate-detail-item">2 Baths</span>
                  <span className="estate-detail-item">1,200 sqft</span>
                </div>
              </div>
            </div>
            <div className="estate-property-card">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" alt="Property" className="estate-property-image" />
              <div className="estate-property-content">
                <div className="estate-property-header">
                  <div className="estate-property-info">
                    <h3>Spacious Villa</h3>
                    <p className="estate-property-location">Hillside View</p>
                  </div>
                  <div className="estate-property-price">$680,000</div>
                </div>
                <div className="estate-property-details">
                  <span className="estate-detail-item">4 Beds</span>
                  <span className="estate-detail-item">3 Baths</span>
                  <span className="estate-detail-item">2,500 sqft</span>
                </div>
              </div>
            </div>
            <div className="estate-property-card">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" alt="Property" className="estate-property-image" />
              <div className="estate-property-content">
                <div className="estate-property-header">
                  <div className="estate-property-info">
                    <h3>Cozy Townhouse</h3>
                    <p className="estate-property-location">City Center</p>
                  </div>
                  <div className="estate-property-price">$280,000</div>
                </div>
                <div className="estate-property-details">
                  <span className="estate-detail-item">2 Beds</span>
                  <span className="estate-detail-item">1 Bath</span>
                  <span className="estate-detail-item">1,000 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="estate-agents">
        <div className="estate-container">
          <h2>Our Agents</h2>
          <div className="estate-agents-list">
            <div className="estate-agent-card">
              <div className="estate-agent-header">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Agent" className="estate-agent-image" />
                <div className="estate-agent-info">
                  <h3>Robert Smith</h3>
                  <p className="estate-agent-role">Senior Agent</p>
                </div>
              </div>
              <div className="estate-agent-stats">
                <div className="estate-stat">
                  <span className="estate-stat-number">150+</span>
                  <span className="estate-stat-label">Properties Sold</span>
                </div>
                <div className="estate-stat">
                  <span className="estate-stat-number">10+</span>
                  <span className="estate-stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="estate-agent-card">
              <div className="estate-agent-header">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" alt="Agent" className="estate-agent-image" />
                <div className="estate-agent-info">
                  <h3>Jennifer Brown</h3>
                  <p className="estate-agent-role">Luxury Specialist</p>
                </div>
              </div>
              <div className="estate-agent-stats">
                <div className="estate-stat">
                  <span className="estate-stat-number">200+</span>
                  <span className="estate-stat-label">Properties Sold</span>
                </div>
                <div className="estate-stat">
                  <span className="estate-stat-number">12+</span>
                  <span className="estate-stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="estate-agent-card">
              <div className="estate-agent-header">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" alt="Agent" className="estate-agent-image" />
                <div className="estate-agent-info">
                  <h3>Michael Davis</h3>
                  <p className="estate-agent-role">Commercial Agent</p>
                </div>
              </div>
              <div className="estate-agent-stats">
                <div className="estate-stat">
                  <span className="estate-stat-number">120+</span>
                  <span className="estate-stat-label">Properties Sold</span>
                </div>
                <div className="estate-stat">
                  <span className="estate-stat-number">8+</span>
                  <span className="estate-stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="estate-about">
        <div className="estate-container">
          <h2>About Prime Properties</h2>
          <p>We are a trusted real estate agency with over 20 years of experience helping clients find their perfect homes. Our team of expert agents is dedicated to providing exceptional service and making your real estate journey smooth and successful.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="estate-footer">
        <div className="estate-container">
          <p>&copy; 2024 Prime Properties. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



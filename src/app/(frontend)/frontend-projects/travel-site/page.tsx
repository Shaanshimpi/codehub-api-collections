'use client'

import React from 'react'
import './travel-styles.css'

export default function TravelSitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="travel-navbar">
        <div className="travel-container">
          <div className="travel-logo">Wanderlust</div>
          <ul className="travel-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="travel-hero">
        <div className="travel-hero-content">
          <h1>Discover Amazing Places</h1>
          <p>Your next adventure awaits. Explore breathtaking destinations around the world.</p>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="travel-destinations">
        <div className="travel-container">
          <h2>Popular Destinations</h2>
          <div className="travel-destination-grid">
            <div className="travel-destination-card">
              <div className="travel-destination-image"></div>
              <h3>Paris, France</h3>
              <p>The City of Light awaits you with its iconic landmarks and romantic atmosphere.</p>
            </div>
            <div className="travel-destination-card">
              <div className="travel-destination-image"></div>
              <h3>Tokyo, Japan</h3>
              <p>Experience the perfect blend of traditional culture and modern innovation.</p>
            </div>
            <div className="travel-destination-card">
              <div className="travel-destination-image"></div>
              <h3>Santorini, Greece</h3>
              <p>Stunning sunsets, white-washed buildings, and crystal-clear waters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="travel-services">
        <div className="travel-container">
          <h2>Our Services</h2>
          <div className="travel-services-grid">
            <div className="travel-service-item">
              <h3>Flight Booking</h3>
              <p>Find the best flight deals to your dream destination.</p>
            </div>
            <div className="travel-service-item">
              <h3>Hotel Reservations</h3>
              <p>Book comfortable accommodations for your stay.</p>
            </div>
            <div className="travel-service-item">
              <h3>Travel Guides</h3>
              <p>Get expert recommendations and travel tips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="travel-about">
        <div className="travel-container">
          <h2>About Wanderlust Travel</h2>
          <p>We are passionate about creating unforgettable travel experiences. With over 10 years in the industry, we&apos;ve helped thousands of travelers discover their dream destinations.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="travel-footer">
        <div className="travel-container">
          <p>&copy; 2024 Wanderlust Travel. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}


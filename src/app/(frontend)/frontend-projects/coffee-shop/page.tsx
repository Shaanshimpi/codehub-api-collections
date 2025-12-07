'use client'

import React from 'react'
import './coffee-styles.css'

export default function CoffeeShopPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="coffee-navbar">
        <div className="coffee-container">
          <div className="coffee-logo">Brew & Bean</div>
          <ul className="coffee-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Full Width Image Background */}
      <section id="home" className="coffee-hero">
        <div className="coffee-hero-overlay">
          <div className="coffee-hero-content">
            <h1>Welcome to Brew & Bean</h1>
            <p>Fresh coffee, cozy atmosphere, perfect moments</p>
          </div>
        </div>
      </section>

      {/* Menu Section - Vertical List Style */}
      <section id="menu" className="coffee-menu">
        <div className="coffee-container">
          <h2>Our Menu</h2>
          <div className="coffee-menu-list">
            <div className="coffee-menu-item">
              <div className="coffee-menu-info">
                <h3>Espresso</h3>
                <p>Rich and bold Italian coffee</p>
              </div>
              <div className="coffee-menu-price">$3.50</div>
            </div>
            <div className="coffee-menu-item">
              <div className="coffee-menu-info">
                <h3>Cappuccino</h3>
                <p>Espresso with steamed milk foam</p>
              </div>
              <div className="coffee-menu-price">$4.50</div>
            </div>
            <div className="coffee-menu-item">
              <div className="coffee-menu-info">
                <h3>Latte</h3>
                <p>Smooth espresso with steamed milk</p>
              </div>
              <div className="coffee-menu-price">$4.75</div>
            </div>
            <div className="coffee-menu-item">
              <div className="coffee-menu-info">
                <h3>Americano</h3>
                <p>Espresso with hot water</p>
              </div>
              <div className="coffee-menu-price">$3.75</div>
            </div>
            <div className="coffee-menu-item">
              <div className="coffee-menu-info">
                <h3>Mocha</h3>
                <p>Espresso with chocolate and milk</p>
              </div>
              <div className="coffee-menu-price">$5.00</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Horizontal Cards */}
      <section className="coffee-features">
        <div className="coffee-container">
          <div className="coffee-features-grid">
            <div className="coffee-feature-card">
              <h3>Fresh Beans</h3>
              <p>Daily roasted coffee beans</p>
            </div>
            <div className="coffee-feature-card">
              <h3>Cozy Space</h3>
              <p>Comfortable seating area</p>
            </div>
            <div className="coffee-feature-card">
              <h3>Free WiFi</h3>
              <p>Stay connected while you relax</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="coffee-about">
        <div className="coffee-container">
          <div className="coffee-about-wrapper">
            <div className="coffee-about-image">
              <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop" alt="Coffee shop interior" className="coffee-about-img" />
            </div>
            <div className="coffee-about-text">
              <h2>About Brew & Bean</h2>
              <p>We are passionate about serving the finest coffee in town. Our beans are carefully selected and roasted daily to ensure the perfect cup every time. Visit us for a warm atmosphere and exceptional coffee experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="coffee-footer">
        <div className="coffee-container">
          <p>&copy; 2024 Brew & Bean. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



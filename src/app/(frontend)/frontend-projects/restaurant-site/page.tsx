'use client'

import React from 'react'
import './restaurant-styles.css'

export default function RestaurantSitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="restaurant-navbar">
        <div className="restaurant-container">
          <div className="restaurant-logo">Bella Vista</div>
          <ul className="restaurant-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="#hours">Hours</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="restaurant-hero">
        <div className="restaurant-hero-content">
          <h1>Welcome to Bella Vista</h1>
          <p>Authentic Italian cuisine in the heart of the city</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="restaurant-menu">
        <div className="restaurant-container">
          <h2>Our Menu</h2>
          <div className="restaurant-menu-wrapper">
            <div className="restaurant-menu-categories">
              <div className="restaurant-category-item">Appetizers</div>
              <div className="restaurant-category-item">Main Courses</div>
              <div className="restaurant-category-item">Desserts</div>
              <div className="restaurant-category-item">Beverages</div>
            </div>
            <div className="restaurant-menu-items">
              <div className="restaurant-menu-section">
                <h3>Appetizers</h3>
                <div className="restaurant-item-row">
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Bruschetta</span>
                      <span className="restaurant-item-price">$8</span>
                    </div>
                    <p className="restaurant-item-desc">Fresh tomatoes, basil, and mozzarella on toasted bread</p>
                  </div>
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Caprese Salad</span>
                      <span className="restaurant-item-price">$10</span>
                    </div>
                    <p className="restaurant-item-desc">Mozzarella, tomatoes, and fresh basil</p>
                  </div>
                </div>
                <div className="restaurant-item-row">
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Antipasto Platter</span>
                      <span className="restaurant-item-price">$14</span>
                    </div>
                    <p className="restaurant-item-desc">Selection of Italian cured meats and cheeses</p>
                  </div>
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Garlic Bread</span>
                      <span className="restaurant-item-price">$6</span>
                    </div>
                    <p className="restaurant-item-desc">Freshly baked bread with garlic butter</p>
                  </div>
                </div>
              </div>

              <div className="restaurant-menu-section">
                <h3>Main Courses</h3>
                <div className="restaurant-item-row">
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Spaghetti Carbonara</span>
                      <span className="restaurant-item-price">$16</span>
                    </div>
                    <p className="restaurant-item-desc">Classic Roman pasta with eggs, cheese, and pancetta</p>
                  </div>
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Margherita Pizza</span>
                      <span className="restaurant-item-price">$12</span>
                    </div>
                    <p className="restaurant-item-desc">Tomato sauce, mozzarella, and fresh basil</p>
                  </div>
                </div>
                <div className="restaurant-item-row">
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Chicken Parmesan</span>
                      <span className="restaurant-item-price">$18</span>
                    </div>
                    <p className="restaurant-item-desc">Breaded chicken with marinara and mozzarella</p>
                  </div>
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Lasagna</span>
                      <span className="restaurant-item-price">$17</span>
                    </div>
                    <p className="restaurant-item-desc">Layered pasta with meat sauce and cheese</p>
                  </div>
                </div>
              </div>

              <div className="restaurant-menu-section">
                <h3>Desserts</h3>
                <div className="restaurant-item-row">
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Tiramisu</span>
                      <span className="restaurant-item-price">$9</span>
                    </div>
                    <p className="restaurant-item-desc">Classic Italian dessert with coffee and mascarpone</p>
                  </div>
                  <div className="restaurant-menu-item">
                    <div className="restaurant-item-header">
                      <span className="restaurant-item-name">Gelato</span>
                      <span className="restaurant-item-price">$7</span>
                    </div>
                    <p className="restaurant-item-desc">Italian ice cream in various flavors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section id="specials" className="restaurant-specials">
        <div className="restaurant-container">
          <h2>Today's Specials</h2>
          <div className="restaurant-specials-grid">
            <div className="restaurant-special-card">
              <h3>Chef's Special</h3>
              <p className="restaurant-special-name">Osso Buco</p>
              <p className="restaurant-special-desc">Braised veal shanks with risotto</p>
              <p className="restaurant-special-price">$24</p>
            </div>
            <div className="restaurant-special-card">
              <h3>Soup of the Day</h3>
              <p className="restaurant-special-name">Minestrone</p>
              <p className="restaurant-special-desc">Traditional Italian vegetable soup</p>
              <p className="restaurant-special-price">$8</p>
            </div>
            <div className="restaurant-special-card">
              <h3>Wine Special</h3>
              <p className="restaurant-special-name">Chianti Classico</p>
              <p className="restaurant-special-desc">Half price on bottles</p>
              <p className="restaurant-special-price">$25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="restaurant-hours">
        <div className="restaurant-container">
          <div className="restaurant-hours-wrapper">
            <div className="restaurant-hours-info">
              <h2>Hours & Location</h2>
              <div className="restaurant-hours-list">
                <div className="restaurant-hour-item">
                  <span className="restaurant-day">Monday - Thursday</span>
                  <span className="restaurant-time">11:00 AM - 10:00 PM</span>
                </div>
                <div className="restaurant-hour-item">
                  <span className="restaurant-day">Friday - Saturday</span>
                  <span className="restaurant-time">11:00 AM - 11:00 PM</span>
                </div>
                <div className="restaurant-hour-item">
                  <span className="restaurant-day">Sunday</span>
                  <span className="restaurant-time">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="restaurant-location-info">
              <h3>Visit Us</h3>
              <p>123 Main Street</p>
              <p>Downtown District</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@bellavista.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="restaurant-about">
        <div className="restaurant-container">
          <h2>About Bella Vista</h2>
          <p>We bring authentic Italian flavors to your table. Our chefs use traditional recipes passed down through generations, combined with fresh, locally sourced ingredients.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="restaurant-footer">
        <div className="restaurant-container">
          <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}


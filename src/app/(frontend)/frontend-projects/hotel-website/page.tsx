'use client'

import React from 'react'
import './hotel-styles.css'

export default function HotelWebsitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="hotel-navbar">
        <div className="hotel-container">
          <div className="hotel-nav-content">
            <div className="hotel-logo">Grand Plaza</div>
            <ul className="hotel-nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hotel-nav-cta">
              <a href="#rooms" className="hotel-book-button">Book Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hotel-hero">
        <div className="hotel-container">
          <div className="hotel-hero-wrapper">
            <div className="hotel-hero-content">
              <div className="hotel-hero-text">
                <h1>Luxury Awaits</h1>
                <div className="hotel-hero-subtitle-wrapper">
                  <p className="hotel-hero-subtitle">Experience world-class hospitality at Grand Plaza Hotel</p>
                  <div className="hotel-hero-badge">5 Star Rated</div>
                </div>
                <p className="hotel-hero-description">Indulge in comfort, elegance, and exceptional service in the heart of the city.</p>
                <div className="hotel-hero-features">
                  <div className="hotel-hero-feature-item">
                    <span className="hotel-feature-icon">✓</span>
                    <span>Free WiFi</span>
                  </div>
                  <div className="hotel-hero-feature-item">
                    <span className="hotel-feature-icon">✓</span>
                    <span>24/7 Service</span>
                  </div>
                  <div className="hotel-hero-feature-item">
                    <span className="hotel-feature-icon">✓</span>
                    <span>Best Location</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel-hero-image-section">
              <div className="hotel-hero-image">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=500&fit=crop" alt="Hotel" className="hotel-hero-img" />
              </div>
              <div className="hotel-hero-stats">
                <div className="hotel-stat-item">
                  <div className="hotel-stat-number">500+</div>
                  <div className="hotel-stat-label">Rooms</div>
                </div>
                <div className="hotel-stat-item">
                  <div className="hotel-stat-number">25+</div>
                  <div className="hotel-stat-label">Years</div>
                </div>
                <div className="hotel-stat-item">
                  <div className="hotel-stat-number">50K+</div>
                  <div className="hotel-stat-label">Guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="hotel-booking">
        <div className="hotel-container">
          <div className="hotel-booking-wrapper">
            <div className="hotel-booking-header">
              <h2>Book Your Stay</h2>
              <p>Find the perfect room for your next visit</p>
            </div>
            <div className="hotel-booking-form">
              <div className="hotel-booking-row">
                <div className="hotel-booking-field">
                  <label>Check In</label>
                  <div className="hotel-booking-input-wrapper">
                    <input type="date" />
                  </div>
                </div>
                <div className="hotel-booking-field">
                  <label>Check Out</label>
                  <div className="hotel-booking-input-wrapper">
                    <input type="date" />
                  </div>
                </div>
                <div className="hotel-booking-field">
                  <label>Guests</label>
                  <div className="hotel-booking-input-wrapper">
                    <select>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="hotel-booking-submit">
                  <button className="hotel-book-now-btn">Check Availability</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section - Complex Card Layout */}
      <section id="rooms" className="hotel-rooms">
        <div className="hotel-container">
          <div className="hotel-rooms-header">
            <div className="hotel-rooms-title-section">
              <h2>Our Rooms</h2>
              <p>Choose from our selection of luxurious accommodations</p>
            </div>
            <div className="hotel-rooms-filter">
              <button className="hotel-filter-btn active">All</button>
              <button className="hotel-filter-btn">Suites</button>
              <button className="hotel-filter-btn">Standard</button>
            </div>
          </div>
          <div className="hotel-rooms-wrapper">
            <div className="hotel-rooms-main">
              <div className="hotel-room-card hotel-room-featured">
                <div className="hotel-room-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=500&fit=crop" alt="Suite" className="hotel-room-image" />
                  <div className="hotel-room-badge">Featured</div>
                </div>
                <div className="hotel-room-content">
                  <div className="hotel-room-header">
                    <div className="hotel-room-info">
                      <div className="hotel-room-title-row">
                        <h3>Presidential Suite</h3>
                        <div className="hotel-room-rating">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                      </div>
                      <div className="hotel-room-meta">
                        <p className="hotel-room-location">Top Floor</p>
                        <span className="hotel-room-size">1200 sq ft</span>
                      </div>
                    </div>
                    <div className="hotel-room-price">
                      <div className="hotel-price-main">
                        <span className="hotel-price-amount">$499</span>
                        <span className="hotel-price-period">/night</span>
                      </div>
                      <div className="hotel-price-note">Best Value</div>
                    </div>
                  </div>
                  <div className="hotel-room-features-list">
                    <span className="hotel-room-feature">King Bed</span>
                    <span className="hotel-room-feature">Living Area</span>
                    <span className="hotel-room-feature">City View</span>
                    <span className="hotel-room-feature">Jacuzzi</span>
                  </div>
                  <div className="hotel-room-footer">
                    <button className="hotel-room-book-btn">Book Now</button>
                    <a href="#" className="hotel-room-details">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel-rooms-sidebar">
              <div className="hotel-room-item">
                <div className="hotel-room-item-image">
                  <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=200&h=150&fit=crop" alt="Deluxe" />
                </div>
                <div className="hotel-room-item-content">
                  <div className="hotel-room-item-info">
                    <div className="hotel-room-item-header">
                      <h4>Deluxe Room</h4>
                      <div className="hotel-room-item-rating">★★★★☆</div>
                    </div>
                    <div className="hotel-room-item-features">
                      <span>Queen Bed</span>
                      <span>City View</span>
                    </div>
                  </div>
                  <div className="hotel-room-item-footer">
                    <div className="hotel-room-item-price">$199/night</div>
                    <button className="hotel-room-item-btn">Book</button>
                  </div>
                </div>
              </div>
              <div className="hotel-room-item">
                <div className="hotel-room-item-image">
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=200&h=150&fit=crop" alt="Executive" />
                </div>
                <div className="hotel-room-item-content">
                  <div className="hotel-room-item-info">
                    <div className="hotel-room-item-header">
                      <h4>Executive Room</h4>
                      <div className="hotel-room-item-rating">★★★★★</div>
                    </div>
                    <div className="hotel-room-item-features">
                      <span>King Bed</span>
                      <span>Balcony</span>
                    </div>
                  </div>
                  <div className="hotel-room-item-footer">
                    <div className="hotel-room-item-price">$299/night</div>
                    <button className="hotel-room-item-btn">Book</button>
                  </div>
                </div>
              </div>
              <div className="hotel-room-item">
                <div className="hotel-room-item-image">
                  <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=150&fit=crop" alt="Standard" />
                </div>
                <div className="hotel-room-item-content">
                  <div className="hotel-room-item-info">
                    <div className="hotel-room-item-header">
                      <h4>Standard Room</h4>
                      <div className="hotel-room-item-rating">★★★☆☆</div>
                    </div>
                    <div className="hotel-room-item-features">
                      <span>Double Bed</span>
                      <span>Garden View</span>
                    </div>
                  </div>
                  <div className="hotel-room-item-footer">
                    <div className="hotel-room-item-price">$149/night</div>
                    <button className="hotel-room-item-btn">Book</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="hotel-amenities">
        <div className="hotel-container">
          <div className="hotel-amenities-header">
            <h2>Hotel Amenities</h2>
            <p>Everything you need for a perfect stay</p>
          </div>
          <div className="hotel-amenities-wrapper">
            <div className="hotel-amenities-main">
              <div className="hotel-amenity-card hotel-amenity-featured">
                <div className="hotel-amenity-image">
                  <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop" alt="Spa" />
                </div>
                <div className="hotel-amenity-content">
                  <div className="hotel-amenity-header">
                    <div className="hotel-amenity-title-section">
                      <h3>Spa & Wellness</h3>
                      <div className="hotel-amenity-tags">
                        <span>Relaxation</span>
                        <span>Rejuvenation</span>
                      </div>
                    </div>
                    <span className="hotel-amenity-icon">💆</span>
                  </div>
                  <p>Relax and rejuvenate at our world-class spa facility with professional therapists and premium treatments.</p>
                  <div className="hotel-amenity-footer">
                    <span className="hotel-amenity-hours">Open 6 AM - 10 PM</span>
                    <a href="#" className="hotel-amenity-link">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel-amenities-grid">
              <div className="hotel-amenity-card">
                <div className="hotel-amenity-header">
                  <div className="hotel-amenity-title-wrapper">
                    <h3>Fine Dining</h3>
                    <div className="hotel-amenity-rating">★★★★★</div>
                  </div>
                  <span className="hotel-amenity-icon">🍽️</span>
                </div>
                <p>Exquisite cuisine at our award-winning restaurants</p>
                <div className="hotel-amenity-details">
                  <span>3 Restaurants</span>
                  <span>•</span>
                  <span>24/7 Room Service</span>
                </div>
              </div>
              <div className="hotel-amenity-card">
                <div className="hotel-amenity-header">
                  <div className="hotel-amenity-title-wrapper">
                    <h3>Fitness Center</h3>
                    <div className="hotel-amenity-rating">★★★★★</div>
                  </div>
                  <span className="hotel-amenity-icon">🏋️</span>
                </div>
                <p>State-of-the-art gym equipment available 24/7</p>
                <div className="hotel-amenity-details">
                  <span>5000 sq ft</span>
                  <span>•</span>
                  <span>Personal Trainers</span>
                </div>
              </div>
              <div className="hotel-amenity-card">
                <div className="hotel-amenity-header">
                  <div className="hotel-amenity-title-wrapper">
                    <h3>Swimming Pool</h3>
                    <div className="hotel-amenity-rating">★★★★★</div>
                  </div>
                  <span className="hotel-amenity-icon">🏊</span>
                </div>
                <p>Rooftop infinity pool with stunning city views</p>
                <div className="hotel-amenity-details">
                  <span>Rooftop</span>
                  <span>•</span>
                  <span>Pool Bar</span>
                </div>
              </div>
              <div className="hotel-amenity-card">
                <div className="hotel-amenity-header">
                  <div className="hotel-amenity-title-wrapper">
                    <h3>Business Center</h3>
                    <div className="hotel-amenity-rating">★★★★★</div>
                  </div>
                  <span className="hotel-amenity-icon">💼</span>
                </div>
                <p>Fully equipped meeting rooms and conference facilities</p>
                <div className="hotel-amenity-details">
                  <span>10 Meeting Rooms</span>
                  <span>•</span>
                  <span>Event Space</span>
                </div>
              </div>
              <div className="hotel-amenity-card">
                <div className="hotel-amenity-header">
                  <div className="hotel-amenity-title-wrapper">
                    <h3>Concierge Service</h3>
                    <div className="hotel-amenity-rating">★★★★★</div>
                  </div>
                  <span className="hotel-amenity-icon">🎩</span>
                </div>
                <p>24/7 concierge assistance for all your needs</p>
                <div className="hotel-amenity-details">
                  <span>24/7 Available</span>
                  <span>•</span>
                  <span>Multi-lingual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="hotel-testimonials">
        <div className="hotel-container">
          <div className="hotel-testimonials-header">
            <h2>Guest Reviews</h2>
            <div className="hotel-testimonials-rating">
              <div className="hotel-overall-rating">
                <span className="hotel-rating-number">4.8</span>
                <div className="hotel-rating-stars">★★★★★</div>
              </div>
              <p>Based on 2,500+ reviews</p>
            </div>
          </div>
          <div className="hotel-testimonials-grid">
            <div className="hotel-testimonial-card">
              <div className="hotel-testimonial-header">
                <div className="hotel-testimonial-author">
                  <div className="hotel-author-avatar">JD</div>
                  <div className="hotel-author-info">
                    <h4>John Doe</h4>
                    <p>Business Traveler</p>
                  </div>
                </div>
                <div className="hotel-testimonial-rating">★★★★★</div>
              </div>
              <p className="hotel-testimonial-text">"Exceptional service and luxurious accommodations. The staff went above and beyond to make our stay memorable."</p>
              <div className="hotel-testimonial-footer">
                <span>Stayed in: Presidential Suite</span>
                <span>•</span>
                <span>Verified Guest</span>
              </div>
            </div>
            <div className="hotel-testimonial-card">
              <div className="hotel-testimonial-header">
                <div className="hotel-testimonial-author">
                  <div className="hotel-author-avatar">SM</div>
                  <div className="hotel-author-info">
                    <h4>Sarah Miller</h4>
                    <p>Family Vacation</p>
                  </div>
                </div>
                <div className="hotel-testimonial-rating">★★★★★</div>
              </div>
              <p className="hotel-testimonial-text">"Perfect location and amazing amenities. The kids loved the pool and we enjoyed the fine dining experience."</p>
              <div className="hotel-testimonial-footer">
                <span>Stayed in: Executive Room</span>
                <span>•</span>
                <span>Verified Guest</span>
              </div>
            </div>
            <div className="hotel-testimonial-card">
              <div className="hotel-testimonial-header">
                <div className="hotel-testimonial-author">
                  <div className="hotel-author-avatar">RW</div>
                  <div className="hotel-author-info">
                    <h4>Robert Wilson</h4>
                    <p>Honeymoon</p>
                  </div>
                </div>
                <div className="hotel-testimonial-rating">★★★★☆</div>
              </div>
              <p className="hotel-testimonial-text">"Beautiful rooms with stunning views. The spa treatment was incredible. Highly recommend for special occasions."</p>
              <div className="hotel-testimonial-footer">
                <span>Stayed in: Deluxe Room</span>
                <span>•</span>
                <span>Verified Guest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="hotel-gallery">
        <div className="hotel-container">
          <h2>Photo Gallery</h2>
          <div className="hotel-gallery-grid">
            <div className="hotel-gallery-item">
              <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop" alt="Gallery" className="hotel-gallery-image" />
            </div>
            <div className="hotel-gallery-item">
              <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop" alt="Gallery" className="hotel-gallery-image" />
            </div>
            <div className="hotel-gallery-item">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop" alt="Gallery" className="hotel-gallery-image" />
            </div>
            <div className="hotel-gallery-item">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop" alt="Gallery" className="hotel-gallery-image" />
            </div>
            <div className="hotel-gallery-item">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop" alt="Gallery" className="hotel-gallery-image" />
            </div>
            <div className="hotel-gallery-item">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" alt="Gallery" className="hotel-gallery-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="hotel-contact">
        <div className="hotel-container">
          <div className="hotel-contact-wrapper">
            <div className="hotel-contact-info">
              <h2>Contact Us</h2>
              <div className="hotel-contact-details">
                <div className="hotel-contact-item">
                  <div className="hotel-contact-label">Address</div>
                  <div className="hotel-contact-value">123 Luxury Avenue, Downtown</div>
                </div>
                <div className="hotel-contact-item">
                  <div className="hotel-contact-label">Phone</div>
                  <div className="hotel-contact-value">(555) 123-4567</div>
                </div>
                <div className="hotel-contact-item">
                  <div className="hotel-contact-label">Email</div>
                  <div className="hotel-contact-value">info@grandplaza.com</div>
                </div>
              </div>
            </div>
            <div className="hotel-location-info">
              <h3>Location</h3>
              <p>Centrally located in the heart of the city, Grand Plaza Hotel offers easy access to major attractions, shopping districts, and business centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hotel-footer">
        <div className="hotel-container">
          <div className="hotel-footer-content">
            <div className="hotel-footer-section">
              <h4>Grand Plaza</h4>
              <p>Luxury hospitality since 1995</p>
            </div>
            <div className="hotel-footer-section">
              <h4>Quick Links</h4>
              <ul className="hotel-footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#amenities">Amenities</a></li>
              </ul>
            </div>
            <div className="hotel-footer-section">
              <h4>Contact</h4>
              <ul className="hotel-footer-links">
                <li>info@grandplaza.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="hotel-footer-bottom">
            <p>&copy; 2024 Grand Plaza Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}


'use client'

import React from 'react'
import './fashion-styles.css'

export default function FashionStorePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fashion-navbar">
        <div className="fashion-container">
          <div className="fashion-logo">StyleHub</div>
          <ul className="fashion-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="fashion-hero">
        <div className="fashion-container">
          <div className="fashion-hero-content">
            <h1>New Season Collection</h1>
            <p>Discover the latest trends in fashion</p>
            <a href="#collection" className="fashion-shop-button">Shop Now</a>
          </div>
        </div>
      </section>

      {/* Collection Section - Complex Product Grid */}
      <section id="collection" className="fashion-collection">
        <div className="fashion-container">
          <div className="fashion-collection-header">
            <h2>Our Collection</h2>
            <div className="fashion-collection-filters">
              <div className="fashion-filter-tag">All</div>
              <div className="fashion-filter-tag">Women</div>
              <div className="fashion-filter-tag">Men</div>
              <div className="fashion-filter-tag">Accessories</div>
            </div>
          </div>
          <div className="fashion-products-grid">
            <div className="fashion-product-card">
              <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop" alt="Product" className="fashion-product-image" />
              <div className="fashion-product-content">
                <div className="fashion-product-header">
                  <h3>Summer Dress</h3>
                  <span className="fashion-product-price">$89</span>
                </div>
                <p className="fashion-product-category">Women&apos;s Collection</p>
              </div>
            </div>
            <div className="fashion-product-card">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop" alt="Product" className="fashion-product-image" />
              <div className="fashion-product-content">
                <div className="fashion-product-header">
                  <h3>Classic Suit</h3>
                  <span className="fashion-product-price">$299</span>
                </div>
                <p className="fashion-product-category">Men&apos;s Collection</p>
              </div>
            </div>
            <div className="fashion-product-card">
              <img src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop" alt="Product" className="fashion-product-image" />
              <div className="fashion-product-content">
                <div className="fashion-product-header">
                  <h3>Designer Handbag</h3>
                  <span className="fashion-product-price">$159</span>
                </div>
                <p className="fashion-product-category">Accessories</p>
              </div>
            </div>
            <div className="fashion-product-card">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop" alt="Product" className="fashion-product-image" />
              <div className="fashion-product-content">
                <div className="fashion-product-header">
                  <h3>Casual Blazer</h3>
                  <span className="fashion-product-price">$129</span>
                </div>
                <p className="fashion-product-category">Women&apos;s Collection</p>
              </div>
            </div>
            <div className="fashion-product-card">
              <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" alt="Product" className="fashion-product-image" />
              <div className="fashion-product-content">
                <div className="fashion-product-header">
                  <h3>Leather Jacket</h3>
                  <span className="fashion-product-price">$249</span>
                </div>
                <p className="fashion-product-category">Men&apos;s Collection</p>
              </div>
            </div>
            <div className="fashion-product-card">
              <img src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop" alt="Product" className="fashion-product-image" />
              <div className="fashion-product-content">
                <div className="fashion-product-header">
                  <h3>Silk Scarf</h3>
                  <span className="fashion-product-price">$49</span>
                </div>
                <p className="fashion-product-category">Accessories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook Section - Image Gallery */}
      <section className="fashion-lookbook">
        <div className="fashion-container">
          <h2>Style Lookbook</h2>
          <div className="fashion-lookbook-grid">
            <div className="fashion-lookbook-item fashion-lookbook-large">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop" alt="Lookbook" className="fashion-lookbook-image" />
            </div>
            <div className="fashion-lookbook-item">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop" alt="Lookbook" className="fashion-lookbook-image" />
            </div>
            <div className="fashion-lookbook-item">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop" alt="Lookbook" className="fashion-lookbook-image" />
            </div>
            <div className="fashion-lookbook-item fashion-lookbook-wide">
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop" alt="Lookbook" className="fashion-lookbook-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="fashion-about">
        <div className="fashion-container">
          <div className="fashion-about-content">
            <h2>About StyleHub</h2>
            <p>We are a premium fashion boutique dedicated to bringing you the latest trends and timeless classics. Our curated collection features high-quality pieces from emerging and established designers.</p>
            <div className="fashion-about-features">
              <div className="fashion-about-feature">
                <h4>Quality First</h4>
                <p>We select only the finest materials and craftsmanship</p>
              </div>
              <div className="fashion-about-feature">
                <h4>Trend Setting</h4>
                <p>Stay ahead with the latest fashion trends</p>
              </div>
              <div className="fashion-about-feature">
                <h4>Customer Care</h4>
                <p>Dedicated support for all your fashion needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fashion-footer">
        <div className="fashion-container">
          <p>&copy; 2024 StyleHub. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



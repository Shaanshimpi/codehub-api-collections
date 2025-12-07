'use client'

import React from 'react'
import './tech-styles.css'

export default function TechStartupPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="tech-navbar">
        <div className="tech-container">
          <div className="tech-nav-wrapper">
            <div className="tech-logo-group">
              <div className="tech-logo-icon">TS</div>
              <div className="tech-logo-text">
                <span className="tech-logo-name">TechStart</span>
                <span className="tech-logo-subtitle">Innovation Platform</span>
              </div>
            </div>
            <ul className="tech-nav-links">
              <li><a href="#product">Product</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#investors">Investors</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
            <div className="tech-nav-cta">
              <a href="#demo" className="tech-demo-btn">Request Demo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Complex Split Layout */}
      <section id="home" className="tech-hero">
        <div className="tech-container">
          <div className="tech-hero-layout">
            <div className="tech-hero-left">
              <div className="tech-hero-badge">🚀 New Product Launch</div>
              <h1>Transform Your Business with AI-Powered Solutions</h1>
              <p className="tech-hero-description">We help companies leverage cutting-edge technology to streamline operations, boost productivity, and drive innovation.</p>
              <div className="tech-hero-actions">
                <a href="#demo" className="tech-btn-primary">Get Started</a>
                <a href="#features" className="tech-btn-secondary">Watch Demo</a>
              </div>
              <div className="tech-hero-metrics">
                <div className="tech-metric-item">
                  <div className="tech-metric-value">10K+</div>
                  <div className="tech-metric-label">Active Users</div>
                </div>
                <div className="tech-metric-item">
                  <div className="tech-metric-value">500+</div>
                  <div className="tech-metric-label">Companies</div>
                </div>
                <div className="tech-metric-item">
                  <div className="tech-metric-value">99.9%</div>
                  <div className="tech-metric-label">Uptime</div>
                </div>
              </div>
            </div>
            <div className="tech-hero-right">
              <div className="tech-hero-visual">
                <div className="tech-visual-card tech-card-1">
                  <div className="tech-card-header">
                    <div className="tech-card-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="tech-card-content">
                    <div className="tech-card-line"></div>
                    <div className="tech-card-line"></div>
                    <div className="tech-card-line short"></div>
                  </div>
                </div>
                <div className="tech-visual-card tech-card-2">
                  <div className="tech-card-header">
                    <div className="tech-card-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="tech-card-content">
                    <div className="tech-card-line"></div>
                    <div className="tech-card-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section - Complex Grid with Nested Cards */}
      <section id="product" className="tech-product">
        <div className="tech-container">
          <div className="tech-section-header">
            <h2>Our Product</h2>
            <p>Everything you need to scale your business efficiently</p>
          </div>
          <div className="tech-product-grid">
            <div className="tech-product-card tech-product-featured">
              <div className="tech-product-icon">⚡</div>
              <div className="tech-product-content">
                <div className="tech-product-header">
                  <h3>Lightning Fast Performance</h3>
                  <span className="tech-product-badge">Popular</span>
                </div>
                <p>Experience blazing-fast load times and seamless user experience with our optimized infrastructure.</p>
                <div className="tech-product-features-list">
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>Sub-second response times</span>
                  </div>
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>99.9% uptime guarantee</span>
                  </div>
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>Global CDN network</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-product-card">
              <div className="tech-product-icon">🔒</div>
              <div className="tech-product-content">
                <div className="tech-product-header">
                  <h3>Enterprise Security</h3>
                </div>
                <p>Bank-level encryption and security protocols to keep your data safe and compliant.</p>
                <div className="tech-product-features-list">
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>SOC 2 certified</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-product-card">
              <div className="tech-product-icon">📊</div>
              <div className="tech-product-content">
                <div className="tech-product-header">
                  <h3>Advanced Analytics</h3>
                </div>
                <p>Real-time insights and analytics to make data-driven decisions for your business.</p>
                <div className="tech-product-features-list">
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>Custom dashboards</span>
                  </div>
                  <div className="tech-feature-check-item">
                    <span className="tech-check-icon">✓</span>
                    <span>Export reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Complex Two-Column with Sidebar */}
      <section id="features" className="tech-features">
        <div className="tech-container">
          <div className="tech-features-header">
            <h2>Key Features</h2>
            <p>Powerful tools to help you succeed</p>
          </div>
          <div className="tech-features-layout">
            <div className="tech-features-main">
              <div className="tech-feature-item tech-feature-large">
                <div className="tech-feature-image-section">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Feature" className="tech-feature-image" />
                  <div className="tech-feature-overlay">
                    <div className="tech-overlay-content">
                      <h3>AI-Powered Automation</h3>
                      <p>Automate repetitive tasks and focus on what matters most.</p>
                    </div>
                  </div>
                </div>
                <div className="tech-feature-details">
                  <div className="tech-feature-meta">
                    <span className="tech-feature-category">Automation</span>
                    <div className="tech-feature-stats">
                      <span>85% time saved</span>
                      <span>•</span>
                      <span>10K+ tasks automated</span>
                    </div>
                  </div>
                  <h3>Intelligent Workflow Automation</h3>
                  <p>Our AI engine learns from your workflows and suggests optimizations to improve efficiency and reduce manual work.</p>
                  <div className="tech-feature-tags">
                    <span className="tech-tag">Machine Learning</span>
                    <span className="tech-tag">Smart Routing</span>
                    <span className="tech-tag">Predictive Analytics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-features-sidebar">
              <div className="tech-feature-sidebar-item">
                <div className="tech-sidebar-icon">🔗</div>
                <div className="tech-sidebar-content">
                  <h4>Seamless Integrations</h4>
                  <p>Connect with 200+ popular tools and services.</p>
                  <div className="tech-sidebar-footer">
                    <span className="tech-sidebar-link">Learn More →</span>
                  </div>
                </div>
              </div>
              <div className="tech-feature-sidebar-item">
                <div className="tech-sidebar-icon">🌐</div>
                <div className="tech-sidebar-content">
                  <h4>Multi-Platform Support</h4>
                  <p>Works seamlessly across web, mobile, and desktop.</p>
                  <div className="tech-sidebar-footer">
                    <span className="tech-sidebar-link">Learn More →</span>
                  </div>
                </div>
              </div>
              <div className="tech-feature-sidebar-item">
                <div className="tech-sidebar-icon">⚙️</div>
                <div className="tech-sidebar-content">
                  <h4>Customizable Workflows</h4>
                  <p>Tailor the platform to match your unique needs.</p>
                  <div className="tech-sidebar-footer">
                    <span className="tech-sidebar-link">Learn More →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Complex Profile Cards */}
      <section id="team" className="tech-team">
        <div className="tech-container">
          <div className="tech-section-header">
            <h2>Meet Our Team</h2>
            <p>The brilliant minds behind TechStart</p>
          </div>
          <div className="tech-team-grid">
            <div className="tech-team-card tech-team-lead">
              <div className="tech-team-avatar-section">
                <div className="tech-team-avatar">AC</div>
                <div className="tech-team-badge">CEO & Founder</div>
              </div>
              <div className="tech-team-info">
                <div className="tech-team-header">
                  <h3>Alex Chen</h3>
                  <div className="tech-team-social">
                    <a href="#" className="tech-social-icon">in</a>
                    <a href="#" className="tech-social-icon">tw</a>
                  </div>
                </div>
                <p className="tech-team-role">Former VP at TechCorp, 15+ years in tech</p>
                <div className="tech-team-expertise">
                  <span className="tech-expertise-tag">Strategy</span>
                  <span className="tech-expertise-tag">Leadership</span>
                  <span className="tech-expertise-tag">Innovation</span>
                </div>
                <div className="tech-team-stats">
                  <div className="tech-team-stat">
                    <span className="tech-stat-number">10+</span>
                    <span className="tech-stat-label">Years Experience</span>
                  </div>
                  <div className="tech-team-stat">
                    <span className="tech-stat-number">50+</span>
                    <span className="tech-stat-label">Team Members Led</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-team-card">
              <div className="tech-team-avatar-section">
                <div className="tech-team-avatar">SJ</div>
              </div>
              <div className="tech-team-info">
                <div className="tech-team-header">
                  <h3>Sarah Johnson</h3>
                  <div className="tech-team-social">
                    <a href="#" className="tech-social-icon">in</a>
                  </div>
                </div>
                <p className="tech-team-role">CTO, Ex-Google Engineer</p>
                <div className="tech-team-expertise">
                  <span className="tech-expertise-tag">Engineering</span>
                  <span className="tech-expertise-tag">AI/ML</span>
                </div>
                <div className="tech-team-stats">
                  <div className="tech-team-stat">
                    <span className="tech-stat-number">12+</span>
                    <span className="tech-stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-team-card">
              <div className="tech-team-avatar-section">
                <div className="tech-team-avatar">MR</div>
              </div>
              <div className="tech-team-info">
                <div className="tech-team-header">
                  <h3>Michael Rodriguez</h3>
                  <div className="tech-team-social">
                    <a href="#" className="tech-social-icon">in</a>
                    <a href="#" className="tech-social-icon">tw</a>
                  </div>
                </div>
                <p className="tech-team-role">Head of Product, Former Startup Founder</p>
                <div className="tech-team-expertise">
                  <span className="tech-expertise-tag">Product</span>
                  <span className="tech-expertise-tag">UX</span>
                </div>
                <div className="tech-team-stats">
                  <div className="tech-team-stat">
                    <span className="tech-stat-number">8+</span>
                    <span className="tech-stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section - Complex Logo Grid */}
      <section id="investors" className="tech-investors">
        <div className="tech-container">
          <div className="tech-investors-header">
            <div className="tech-investors-title-group">
              <h2>Backed by Leading Investors</h2>
              <p>Trusted by industry leaders and venture capital firms</p>
            </div>
            <div className="tech-investors-stats">
              <div className="tech-investor-stat-box">
                <span className="tech-investor-stat-value">$50M</span>
                <span className="tech-investor-stat-label">Series B</span>
              </div>
            </div>
          </div>
          <div className="tech-investors-grid">
            <div className="tech-investor-logo-card">
              <div className="tech-logo-placeholder">
                <span className="tech-logo-text">Venture Capital</span>
              </div>
              <div className="tech-investor-info">
                <h4>Sequoia Capital</h4>
                <p>Lead Investor</p>
              </div>
            </div>
            <div className="tech-investor-logo-card">
              <div className="tech-logo-placeholder">
                <span className="tech-logo-text">VC Partners</span>
              </div>
              <div className="tech-investor-info">
                <h4>Andreessen Horowitz</h4>
                <p>Series A Lead</p>
              </div>
            </div>
            <div className="tech-investor-logo-card">
              <div className="tech-logo-placeholder">
                <span className="tech-logo-text">Tech Ventures</span>
              </div>
              <div className="tech-investor-info">
                <h4>Accel Partners</h4>
                <p>Seed Investor</p>
              </div>
            </div>
            <div className="tech-investor-logo-card">
              <div className="tech-logo-placeholder">
                <span className="tech-logo-text">Growth Fund</span>
              </div>
              <div className="tech-investor-info">
                <h4>General Catalyst</h4>
                <p>Series B Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section - Complex Job Listings */}
      <section id="careers" className="tech-careers">
        <div className="tech-container">
          <div className="tech-section-header">
            <h2>Join Our Team</h2>
            <p>Help us build the future of technology</p>
          </div>
          <div className="tech-careers-layout">
            <div className="tech-careers-main">
              <div className="tech-job-card tech-job-featured">
                <div className="tech-job-header">
                  <div className="tech-job-title-group">
                    <h3>Senior Full-Stack Engineer</h3>
                    <div className="tech-job-badges">
                      <span className="tech-job-badge">Full-time</span>
                      <span className="tech-job-badge tech-badge-remote">Remote</span>
                    </div>
                  </div>
                  <div className="tech-job-location">San Francisco, CA</div>
                </div>
                <div className="tech-job-content">
                  <p className="tech-job-description">We&apos;re looking for an experienced full-stack engineer to join our growing team and help build the next generation of our platform.</p>
                  <div className="tech-job-requirements">
                    <div className="tech-requirement-section">
                      <h4>Requirements:</h4>
                      <ul className="tech-requirement-list">
                        <li>5+ years of experience with React and Node.js</li>
                        <li>Strong understanding of cloud infrastructure</li>
                        <li>Experience with AI/ML integration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tech-job-footer">
                    <div className="tech-job-salary">$150K - $200K</div>
                    <a href="#" className="tech-apply-btn">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-careers-sidebar">
              <div className="tech-job-sidebar-item">
                <div className="tech-sidebar-job-header">
                  <h4>Product Designer</h4>
                  <span className="tech-sidebar-job-badge">Full-time</span>
                </div>
                <div className="tech-sidebar-job-meta">
                  <span>San Francisco</span>
                  <span>•</span>
                  <span>$120K - $160K</span>
                </div>
                <a href="#" className="tech-sidebar-apply">Apply →</a>
              </div>
              <div className="tech-job-sidebar-item">
                <div className="tech-sidebar-job-header">
                  <h4>DevOps Engineer</h4>
                  <span className="tech-sidebar-job-badge">Full-time</span>
                </div>
                <div className="tech-sidebar-job-meta">
                  <span>Remote</span>
                  <span>•</span>
                  <span>$130K - $180K</span>
                </div>
                <a href="#" className="tech-sidebar-apply">Apply →</a>
              </div>
              <div className="tech-job-sidebar-item">
                <div className="tech-sidebar-job-header">
                  <h4>Marketing Manager</h4>
                  <span className="tech-sidebar-job-badge">Full-time</span>
                </div>
                <div className="tech-sidebar-job-meta">
                  <span>New York</span>
                  <span>•</span>
                  <span>$100K - $140K</span>
                </div>
                <a href="#" className="tech-sidebar-apply">Apply →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tech-footer">
        <div className="tech-container">
          <div className="tech-footer-content">
            <div className="tech-footer-brand">
              <div className="tech-footer-logo">
                <div className="tech-footer-logo-icon">TS</div>
                <div className="tech-footer-logo-text">
                  <span>TechStart</span>
                  <span>Innovation Platform</span>
                </div>
              </div>
              <p>Building the future of business technology, one innovation at a time.</p>
            </div>
            <div className="tech-footer-links-group">
              <div className="tech-footer-column">
                <h5>Product</h5>
                <ul className="tech-footer-links">
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#integrations">Integrations</a></li>
                  <li><a href="#api">API</a></li>
                </ul>
              </div>
              <div className="tech-footer-column">
                <h5>Company</h5>
                <ul className="tech-footer-links">
                  <li><a href="#about">About</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>
              <div className="tech-footer-column">
                <h5>Resources</h5>
                <ul className="tech-footer-links">
                  <li><a href="#docs">Documentation</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#community">Community</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tech-footer-bottom">
            <p>&copy; 2024 TechStart. All rights reserved.</p>
            <div className="tech-footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}


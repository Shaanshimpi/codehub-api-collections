'use client'

import React from 'react'
import './education-styles.css'

export default function EducationPlatformPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="edu-navbar">
        <div className="edu-container">
          <div className="edu-nav-wrapper">
            <div className="edu-logo-section">
              <div className="edu-logo">EduLearn</div>
              <div className="edu-logo-tagline">Learn. Grow. Succeed.</div>
            </div>
            <ul className="edu-nav-links">
              <li><a href="#courses">Courses</a></li>
              <li><a href="#instructors">Instructors</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
            </ul>
            <div className="edu-nav-actions">
              <a href="#login" className="edu-login-btn">Login</a>
              <a href="#signup" className="edu-signup-btn">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Unique Centered Layout with Stats */}
      <section id="home" className="edu-hero">
        <div className="edu-container">
          <div className="edu-hero-content">
            <div className="edu-hero-main">
              <h1>Transform Your Future with Online Learning</h1>
              <p className="edu-hero-description">Join thousands of students mastering new skills with our comprehensive courses taught by industry experts.</p>
              <div className="edu-hero-cta">
                <a href="#courses" className="edu-primary-btn">Browse Courses</a>
                <a href="#about" className="edu-secondary-btn">Learn More</a>
              </div>
            </div>
            <div className="edu-hero-stats-wrapper">
              <div className="edu-hero-stats">
                <div className="edu-stat-box">
                  <div className="edu-stat-content">
                    <div className="edu-stat-number">50K+</div>
                    <div className="edu-stat-label">Active Students</div>
                  </div>
                </div>
                <div className="edu-stat-box">
                  <div className="edu-stat-content">
                    <div className="edu-stat-number">500+</div>
                    <div className="edu-stat-label">Courses Available</div>
                  </div>
                </div>
                <div className="edu-stat-box">
                  <div className="edu-stat-content">
                    <div className="edu-stat-number">200+</div>
                    <div className="edu-stat-label">Expert Instructors</div>
                  </div>
                </div>
                <div className="edu-stat-box">
                  <div className="edu-stat-content">
                    <div className="edu-stat-number">95%</div>
                    <div className="edu-stat-label">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section - Unique Sidebar Layout */}
      <section id="courses" className="edu-courses">
        <div className="edu-container">
          <div className="edu-courses-header">
            <div className="edu-section-title-group">
              <h2>Featured Courses</h2>
              <p>Hand-picked courses to accelerate your learning journey</p>
            </div>
            <div className="edu-courses-filter">
              <button className="edu-filter-tag active">All Categories</button>
              <button className="edu-filter-tag">Web Development</button>
              <button className="edu-filter-tag">Design</button>
              <button className="edu-filter-tag">Business</button>
            </div>
          </div>
          <div className="edu-courses-layout">
            <div className="edu-courses-main">
              <div className="edu-course-card edu-course-featured">
                <div className="edu-course-image-section">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" alt="Course" className="edu-course-image" />
                  <div className="edu-course-badge">Bestseller</div>
                  <div className="edu-course-level">Advanced</div>
                </div>
                <div className="edu-course-body">
                  <div className="edu-course-header">
                    <div className="edu-course-category">Web Development</div>
                    <div className="edu-course-rating">
                      <span className="edu-rating-stars">★★★★★</span>
                      <span className="edu-rating-count">(4.8)</span>
                    </div>
                  </div>
                  <h3>Complete Full-Stack Web Development</h3>
                  <p className="edu-course-description">Master frontend and backend technologies to build modern web applications from scratch.</p>
                  <div className="edu-course-meta">
                    <div className="edu-course-info">
                      <span className="edu-meta-item">
                        <span className="edu-meta-icon">👤</span>
                        <span>12,500 students</span>
                      </span>
                      <span className="edu-meta-item">
                        <span className="edu-meta-icon">⏱️</span>
                        <span>45 hours</span>
                      </span>
                      <span className="edu-meta-item">
                        <span className="edu-meta-icon">📚</span>
                        <span>120 lessons</span>
                      </span>
                    </div>
                  </div>
                  <div className="edu-course-footer">
                    <div className="edu-course-pricing">
                      <span className="edu-price-current">$89.99</span>
                      <span className="edu-price-original">$199.99</span>
                    </div>
                    <button className="edu-enroll-btn">Enroll Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="edu-courses-sidebar">
              <div className="edu-course-mini-card">
                <div className="edu-mini-course-image">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop" alt="Course" />
                  <div className="edu-mini-course-badge">New</div>
                </div>
                <div className="edu-mini-course-content">
                  <div className="edu-mini-course-header">
                    <h4>UI/UX Design Mastery</h4>
                    <div className="edu-mini-rating">★★★★☆</div>
                  </div>
                  <div className="edu-mini-course-meta">
                    <span>Design</span>
                    <span>•</span>
                    <span>8,200 students</span>
                  </div>
                  <div className="edu-mini-course-footer">
                    <span className="edu-mini-price">$79.99</span>
                    <button className="edu-mini-enroll">View</button>
                  </div>
                </div>
              </div>
              <div className="edu-course-mini-card">
                <div className="edu-mini-course-image">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop" alt="Course" />
                </div>
                <div className="edu-mini-course-content">
                  <div className="edu-mini-course-header">
                    <h4>Data Science Fundamentals</h4>
                    <div className="edu-mini-rating">★★★★★</div>
                  </div>
                  <div className="edu-mini-course-meta">
                    <span>Data Science</span>
                    <span>•</span>
                    <span>15,300 students</span>
                  </div>
                  <div className="edu-mini-course-footer">
                    <span className="edu-mini-price">$94.99</span>
                    <button className="edu-mini-enroll">View</button>
                  </div>
                </div>
              </div>
              <div className="edu-course-mini-card">
                <div className="edu-mini-course-image">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=150&fit=crop" alt="Course" />
                </div>
                <div className="edu-mini-course-content">
                  <div className="edu-mini-course-header">
                    <h4>Digital Marketing Pro</h4>
                    <div className="edu-mini-rating">★★★★☆</div>
                  </div>
                  <div className="edu-mini-course-meta">
                    <span>Marketing</span>
                    <span>•</span>
                    <span>9,800 students</span>
                  </div>
                  <div className="edu-mini-course-footer">
                    <span className="edu-mini-price">$69.99</span>
                    <button className="edu-mini-enroll">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section - Unique Grid with Profile Cards */}
      <section id="instructors" className="edu-instructors">
        <div className="edu-container">
          <div className="edu-instructors-header">
            <h2>Meet Our Expert Instructors</h2>
            <p>Learn from industry professionals with years of real-world experience</p>
          </div>
          <div className="edu-instructors-grid">
            <div className="edu-instructor-card">
              <div className="edu-instructor-avatar-section">
                <div className="edu-instructor-avatar">JD</div>
                <div className="edu-instructor-badge">Top Rated</div>
              </div>
              <div className="edu-instructor-info">
                <div className="edu-instructor-header">
                  <h3>John Davis</h3>
                  <div className="edu-instructor-rating">★★★★★</div>
                </div>
                <p className="edu-instructor-title">Senior Full-Stack Developer</p>
                <div className="edu-instructor-stats">
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">15</span>
                    <span className="edu-stat-label">Courses</span>
                  </div>
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">45K</span>
                    <span className="edu-stat-label">Students</span>
                  </div>
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">4.9</span>
                    <span className="edu-stat-label">Rating</span>
                  </div>
                </div>
                <div className="edu-instructor-skills">
                  <span className="edu-skill-tag">JavaScript</span>
                  <span className="edu-skill-tag">React</span>
                  <span className="edu-skill-tag">Node.js</span>
                </div>
              </div>
            </div>
            <div className="edu-instructor-card">
              <div className="edu-instructor-avatar-section">
                <div className="edu-instructor-avatar">SM</div>
              </div>
              <div className="edu-instructor-info">
                <div className="edu-instructor-header">
                  <h3>Sarah Martinez</h3>
                  <div className="edu-instructor-rating">★★★★★</div>
                </div>
                <p className="edu-instructor-title">UX Design Lead</p>
                <div className="edu-instructor-stats">
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">12</span>
                    <span className="edu-stat-label">Courses</span>
                  </div>
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">32K</span>
                    <span className="edu-stat-label">Students</span>
                  </div>
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">4.8</span>
                    <span className="edu-stat-label">Rating</span>
                  </div>
                </div>
                <div className="edu-instructor-skills">
                  <span className="edu-skill-tag">Figma</span>
                  <span className="edu-skill-tag">UI Design</span>
                  <span className="edu-skill-tag">Prototyping</span>
                </div>
              </div>
            </div>
            <div className="edu-instructor-card">
              <div className="edu-instructor-avatar-section">
                <div className="edu-instructor-avatar">RW</div>
                <div className="edu-instructor-badge">Featured</div>
              </div>
              <div className="edu-instructor-info">
                <div className="edu-instructor-header">
                  <h3>Robert Wilson</h3>
                  <div className="edu-instructor-rating">★★★★☆</div>
                </div>
                <p className="edu-instructor-title">Data Science Expert</p>
                <div className="edu-instructor-stats">
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">18</span>
                    <span className="edu-stat-label">Courses</span>
                  </div>
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">58K</span>
                    <span className="edu-stat-label">Students</span>
                  </div>
                  <div className="edu-instructor-stat">
                    <span className="edu-stat-value">4.7</span>
                    <span className="edu-stat-label">Rating</span>
                  </div>
                </div>
                <div className="edu-instructor-skills">
                  <span className="edu-skill-tag">Python</span>
                  <span className="edu-skill-tag">Machine Learning</span>
                  <span className="edu-skill-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Unique Card Layout */}
      <section id="pricing" className="edu-pricing">
        <div className="edu-container">
          <div className="edu-pricing-header">
            <h2>Choose Your Learning Plan</h2>
            <p>Flexible pricing options to suit your learning goals</p>
          </div>
          <div className="edu-pricing-cards">
            <div className="edu-pricing-card">
              <div className="edu-pricing-header-section">
                <h3>Basic</h3>
                <div className="edu-pricing-amount">
                  <span className="edu-price-symbol">$</span>
                  <span className="edu-price-number">19</span>
                  <span className="edu-price-period">/month</span>
                </div>
                <p className="edu-pricing-description">Perfect for casual learners</p>
              </div>
              <div className="edu-pricing-features">
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Access to 50+ courses</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Certificate of completion</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Community support</span>
                </div>
                <div className="edu-feature-item disabled">
                  <span className="edu-feature-check">✗</span>
                  <span>1-on-1 mentoring</span>
                </div>
              </div>
              <button className="edu-pricing-btn">Get Started</button>
            </div>
            <div className="edu-pricing-card edu-pricing-featured">
              <div className="edu-pricing-badge">Most Popular</div>
              <div className="edu-pricing-header-section">
                <h3>Pro</h3>
                <div className="edu-pricing-amount">
                  <span className="edu-price-symbol">$</span>
                  <span className="edu-price-number">49</span>
                  <span className="edu-price-period">/month</span>
                </div>
                <p className="edu-pricing-description">Best for serious learners</p>
              </div>
              <div className="edu-pricing-features">
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Access to all courses</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Premium certificates</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Priority support</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>1-on-1 mentoring</span>
                </div>
              </div>
              <button className="edu-pricing-btn edu-pricing-btn-primary">Get Started</button>
            </div>
            <div className="edu-pricing-card">
              <div className="edu-pricing-header-section">
                <h3>Enterprise</h3>
                <div className="edu-pricing-amount">
                  <span className="edu-price-symbol">$</span>
                  <span className="edu-price-number">199</span>
                  <span className="edu-price-period">/month</span>
                </div>
                <p className="edu-pricing-description">For teams and organizations</p>
              </div>
              <div className="edu-pricing-features">
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Everything in Pro</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Team management</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Custom learning paths</span>
                </div>
                <div className="edu-feature-item">
                  <span className="edu-feature-check">✓</span>
                  <span>Dedicated support</span>
                </div>
              </div>
              <button className="edu-pricing-btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Unique Horizontal Layout */}
      <section className="edu-testimonials">
        <div className="edu-container">
          <div className="edu-testimonials-header">
            <h2>What Our Students Say</h2>
            <div className="edu-testimonials-stats">
              <div className="edu-overall-stats">
                <span className="edu-overall-rating">4.8</span>
                <div className="edu-overall-stars">★★★★★</div>
              </div>
              <p>Based on 25,000+ reviews</p>
            </div>
          </div>
          <div className="edu-testimonials-list">
            <div className="edu-testimonial-item">
              <div className="edu-testimonial-content">
                <div className="edu-testimonial-rating">★★★★★</div>
                <p>&quot;This platform changed my career. The courses are comprehensive and the instructors are amazing!&quot;</p>
              </div>
              <div className="edu-testimonial-author">
                <div className="edu-testimonial-avatar">MJ</div>
                <div className="edu-testimonial-info">
                  <h4>Michael Johnson</h4>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>
            <div className="edu-testimonial-item">
              <div className="edu-testimonial-content">
                <div className="edu-testimonial-rating">★★★★★</div>
                <p>&quot;Best investment in my education. The practical projects helped me land my dream job.&quot;</p>
              </div>
              <div className="edu-testimonial-author">
                <div className="edu-testimonial-avatar">EB</div>
                <div className="edu-testimonial-info">
                  <h4>Emily Brown</h4>
                  <p>UX Designer</p>
                </div>
              </div>
            </div>
            <div className="edu-testimonial-item">
              <div className="edu-testimonial-content">
                <div className="edu-testimonial-rating">★★★★☆</div>
                <p>&quot;Great platform with excellent course quality. Highly recommend for anyone looking to upskill.&quot;</p>
              </div>
              <div className="edu-testimonial-author">
                <div className="edu-testimonial-avatar">DT</div>
                <div className="edu-testimonial-info">
                  <h4>David Taylor</h4>
                  <p>Data Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Unique Accordion-like Layout */}
      <section className="edu-faq">
        <div className="edu-container">
          <div className="edu-faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our platform</p>
          </div>
          <div className="edu-faq-grid">
            <div className="edu-faq-item">
              <div className="edu-faq-question">
                <h3>How do I access my courses?</h3>
                <span className="edu-faq-icon">+</span>
              </div>
              <p className="edu-faq-answer">Once you enroll, you can access all your courses from your dashboard. Courses are available 24/7 and you can learn at your own pace.</p>
            </div>
            <div className="edu-faq-item">
              <div className="edu-faq-question">
                <h3>Are certificates included?</h3>
                <span className="edu-faq-icon">+</span>
              </div>
              <p className="edu-faq-answer">Yes! All plans include certificates of completion. Pro and Enterprise plans include premium certificates with verification.</p>
            </div>
            <div className="edu-faq-item">
              <div className="edu-faq-question">
                <h3>Can I cancel anytime?</h3>
                <span className="edu-faq-icon">+</span>
              </div>
              <p className="edu-faq-answer">Absolutely. You can cancel your subscription at any time. You&apos;ll retain access until the end of your billing period.</p>
            </div>
            <div className="edu-faq-item">
              <div className="edu-faq-question">
                <h3>Do you offer refunds?</h3>
                <span className="edu-faq-icon">+</span>
              </div>
              <p className="edu-faq-answer">We offer a 30-day money-back guarantee. If you&apos;re not satisfied, contact us within 30 days for a full refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="edu-footer">
        <div className="edu-container">
          <div className="edu-footer-content">
            <div className="edu-footer-section">
              <div className="edu-footer-brand">
                <h4>EduLearn</h4>
                <p>Empowering learners worldwide with quality education.</p>
              </div>
            </div>
            <div className="edu-footer-section">
              <h5>Platform</h5>
              <ul className="edu-footer-links">
                <li><a href="#courses">Browse Courses</a></li>
                <li><a href="#instructors">Instructors</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
            <div className="edu-footer-section">
              <h5>Support</h5>
              <ul className="edu-footer-links">
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="edu-footer-section">
              <h5>Connect</h5>
              <div className="edu-social-links">
                <a href="#" className="edu-social-link">Facebook</a>
                <a href="#" className="edu-social-link">Twitter</a>
                <a href="#" className="edu-social-link">LinkedIn</a>
                <a href="#" className="edu-social-link">Instagram</a>
              </div>
            </div>
          </div>
          <div className="edu-footer-bottom">
            <p>&copy; 2024 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}



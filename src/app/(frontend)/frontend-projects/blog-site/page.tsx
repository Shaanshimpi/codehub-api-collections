'use client'

import React from 'react'
import './blog-styles.css'

export default function BlogSitePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="blog-navbar">
        <div className="blog-container">
          <div className="blog-logo">Tech Blog</div>
          <ul className="blog-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-content">
            <h1>Latest Tech Insights</h1>
            <p>Stay updated with the latest trends in technology and development</p>
          </div>
        </div>
      </section>

      {/* Main Content Area - Complex Flex Layout */}
      <section id="articles" className="blog-main">
        <div className="blog-container">
          <div className="blog-layout">
            {/* Main Articles Column */}
            <div className="blog-articles">
              <div className="blog-article-card blog-featured">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop" alt="Featured article" className="blog-article-image" />
                <div className="blog-article-content">
                  <div className="blog-article-meta">
                    <span className="blog-category">Web Development</span>
                    <span className="blog-date">March 15, 2024</span>
                  </div>
                  <h2>Getting Started with Modern Web Development</h2>
                  <p>Learn the fundamentals of building modern web applications with the latest tools and frameworks.</p>
                  <a href="#" className="blog-read-more">Read More →</a>
                </div>
              </div>

              <div className="blog-articles-list">
                <div className="blog-article-card blog-small">
                  <div className="blog-article-wrapper">
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" alt="Article" className="blog-article-image-small" />
                    <div className="blog-article-content-small">
                      <div className="blog-article-meta">
                        <span className="blog-category">CSS</span>
                        <span className="blog-date">March 12, 2024</span>
                      </div>
                      <h3>Mastering CSS Flexbox</h3>
                      <p>Complete guide to understanding and using flexbox layouts effectively.</p>
                    </div>
                  </div>
                </div>

                <div className="blog-article-card blog-small">
                  <div className="blog-article-wrapper">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop" alt="Article" className="blog-article-image-small" />
                    <div className="blog-article-content-small">
                      <div className="blog-article-meta">
                        <span className="blog-category">JavaScript</span>
                        <span className="blog-date">March 10, 2024</span>
                      </div>
                      <h3>JavaScript Best Practices</h3>
                      <p>Essential tips and tricks for writing clean and efficient JavaScript code.</p>
                    </div>
                  </div>
                </div>

                <div className="blog-article-card blog-small">
                  <div className="blog-article-wrapper">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop" alt="Article" className="blog-article-image-small" />
                    <div className="blog-article-content-small">
                      <div className="blog-article-meta">
                        <span className="blog-category">Design</span>
                        <span className="blog-date">March 8, 2024</span>
                      </div>
                      <h3>UI/UX Design Principles</h3>
                      <p>Key principles every designer should know for creating great user experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="blog-sidebar-section">
                <h3>Categories</h3>
                <ul className="blog-categories-list">
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Tutorials</a></li>
                </ul>
              </div>

              <div className="blog-sidebar-section">
                <h3>Recent Posts</h3>
                <div className="blog-recent-posts">
                  <div className="blog-recent-item">
                    <div className="blog-recent-content">
                      <h4>CSS Grid Layout Guide</h4>
                      <span className="blog-recent-date">March 5, 2024</span>
                    </div>
                  </div>
                  <div className="blog-recent-item">
                    <div className="blog-recent-content">
                      <h4>React Hooks Explained</h4>
                      <span className="blog-recent-date">March 3, 2024</span>
                    </div>
                  </div>
                  <div className="blog-recent-item">
                    <div className="blog-recent-content">
                      <h4>Responsive Design Tips</h4>
                      <span className="blog-recent-date">March 1, 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-sidebar-section">
                <h3>About</h3>
                <p>Tech Blog is dedicated to sharing knowledge about web development, design, and technology trends.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="blog-footer">
        <div className="blog-container">
          <p>&copy; 2024 Tech Blog. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



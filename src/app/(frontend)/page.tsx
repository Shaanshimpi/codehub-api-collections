import Link from 'next/link'
import React from 'react'

import './styles.css'

export default async function HomePage() {
  return (
    <div className="docs-home">
      <header className="hero">
        <div className="brand-mark">
          <span className="brand-icon">CH</span>
          <div>
            <p className="brand-title">CodeHub</p>
            <p className="brand-subtitle">Learning Platform</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">CodeHub Resources</p>
          <h1>Practice with APIs and Frontend Projects</h1>
          <p>
            Explore our collection of API documentation and frontend project ideas. Perfect for students looking to
            practice and build real-world applications.
          </p>
        </div>
      </header>

      <section className="card-grid">
        <article className="collection-card">
          <p className="card-label">Section</p>
          <h2>API Collections</h2>
          <p>
            Practice CRUD operations with ready-made API collections. Each collection includes comprehensive REST API
            documentation with endpoints, fields, and examples.
          </p>
          <ul>
            <li>
              <strong>Students</strong> · Collection
            </li>
            <li>
              <strong>Cars</strong> · Collection
            </li>
            <li>
              <strong>Books</strong> · Collection
            </li>
            <li>+5 more collections</li>
          </ul>
          <Link href="/apis" className="link">
            Explore APIs →
          </Link>
        </article>

        <article className="collection-card">
          <p className="card-label">Section</p>
          <h2>Frontend Projects</h2>
          <p>
            Discover simple HTML and CSS project ideas designed for students to practice. Each project focuses on
            building beautiful, responsive websites like travel sites, portfolios, and more.
          </p>
          <ul>
            <li>
              <strong>Travel Site</strong> · Beginner
            </li>
            <li>
              <strong>Portfolio Site</strong> · Beginner
            </li>
            <li>
              <strong>Restaurant Site</strong> · Beginner
            </li>
            <li>+3 more projects</li>
          </ul>
          <Link href="/frontend-projects" className="link">
            View Projects →
          </Link>
        </article>
      </section>
    </div>
  )
}

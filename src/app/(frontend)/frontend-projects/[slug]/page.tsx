import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

import '../../styles.css'

const projects: Record<string, { title: string; level: number; html: string; css: string }> = {
  'travel-site': {
    title: 'Travel Website',
    level: 1,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wanderlust Travel - Explore the World</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">Wanderlust</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Discover Amazing Places</h1>
            <p>Your next adventure awaits. Explore breathtaking destinations around the world.</p>
            <a href="#destinations" class="btn-primary">Explore Now</a>
        </div>
    </section>

    <!-- Destinations Section -->
    <section id="destinations" class="destinations">
        <div class="container">
            <h2>Popular Destinations</h2>
            <div class="destination-grid">
                <div class="destination-card">
                    <div class="destination-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    <h3>Paris, France</h3>
                    <p>The City of Light awaits you with its iconic landmarks and romantic atmosphere.</p>
                    <a href="#" class="btn-secondary">Learn More</a>
                </div>
                <div class="destination-card">
                    <div class="destination-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
                    <h3>Tokyo, Japan</h3>
                    <p>Experience the perfect blend of traditional culture and modern innovation.</p>
                    <a href="#" class="btn-secondary">Learn More</a>
                </div>
                <div class="destination-card">
                    <div class="destination-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"></div>
                    <h3>Santorini, Greece</h3>
                    <p>Stunning sunsets, white-washed buildings, and crystal-clear waters.</p>
                    <a href="#" class="btn-secondary">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="packages">
        <div class="container">
            <h2>Travel Packages</h2>
            <div class="package-grid">
                <div class="package-card">
                    <h3>Weekend Getaway</h3>
                    <div class="price">$299</div>
                    <ul>
                        <li>2 Nights Accommodation</li>
                        <li>Breakfast Included</li>
                        <li>City Tour</li>
                        <li>Airport Transfer</li>
                    </ul>
                    <a href="#" class="btn-primary">Book Now</a>
                </div>
                <div class="package-card featured">
                    <div class="badge">Popular</div>
                    <h3>Week Adventure</h3>
                    <div class="price">$899</div>
                    <ul>
                        <li>7 Nights Accommodation</li>
                        <li>All Meals Included</li>
                        <li>Multiple Tours</li>
                        <li>Travel Insurance</li>
                    </ul>
                    <a href="#" class="btn-primary">Book Now</a>
                </div>
                <div class="package-card">
                    <h3>Luxury Escape</h3>
                    <div class="price">$1,499</div>
                    <ul>
                        <li>5-Star Hotel</li>
                        <li>Premium Dining</li>
                        <li>Private Guide</li>
                        <li>Spa Access</li>
                    </ul>
                    <a href="#" class="btn-primary">Book Now</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Wanderlust Travel</h2>
            <p>We are passionate about creating unforgettable travel experiences. With over 10 years in the industry, we've helped thousands of travelers discover their dream destinations.</p>
            <p>Our mission is to make travel accessible, enjoyable, and memorable for everyone. From budget-friendly trips to luxury escapes, we have something for every traveler.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Get In Touch</h2>
            <form class="contact-form">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" class="btn-primary">Send Message</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Wanderlust Travel. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #667eea;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #667eea;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 150px 20px;
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

/* Buttons */
.btn-primary {
    display: inline-block;
    padding: 12px 30px;
    background: #fff;
    color: #667eea;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: transform 0.3s;
}

.btn-primary:hover {
    transform: translateY(-2px);
}

.btn-secondary {
    display: inline-block;
    padding: 10px 20px;
    background: transparent;
    color: #667eea;
    text-decoration: none;
    border: 2px solid #667eea;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s;
}

.btn-secondary:hover {
    background: #667eea;
    color: white;
}

/* Destinations Section */
.destinations {
    padding: 80px 20px;
    background: #f8f9fa;
}

.destinations h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
}

.destination-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.destination-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.destination-card:hover {
    transform: translateY(-5px);
}

.destination-image {
    height: 200px;
    width: 100%;
}

.destination-card h3 {
    padding: 1.5rem 1.5rem 0.5rem;
    color: #333;
}

.destination-card p {
    padding: 0 1.5rem;
    color: #666;
    margin-bottom: 1rem;
}

.destination-card .btn-secondary {
    margin: 0 1.5rem 1.5rem;
}

/* Packages Section */
.packages {
    padding: 80px 20px;
}

.packages h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
}

.package-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.package-card {
    background: white;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    position: relative;
    transition: all 0.3s;
}

.package-card:hover {
    border-color: #667eea;
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
}

.package-card.featured {
    border-color: #667eea;
    border-width: 3px;
}

.badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: #667eea;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
}

.package-card h3 {
    margin-bottom: 1rem;
    color: #333;
}

.price {
    font-size: 2.5rem;
    font-weight: bold;
    color: #667eea;
    margin-bottom: 1.5rem;
}

.package-card ul {
    list-style: none;
    margin-bottom: 2rem;
    text-align: left;
}

.package-card ul li {
    padding: 0.5rem 0;
    color: #666;
}

.package-card ul li:before {
    content: "✓ ";
    color: #667eea;
    font-weight: bold;
}

/* About Section */
.about {
    padding: 80px 20px;
    background: #f8f9fa;
    text-align: center;
}

.about h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
}

.about p {
    max-width: 800px;
    margin: 0 auto 1rem;
    color: #666;
    font-size: 1.1rem;
}

/* Contact Section */
.contact {
    padding: 80px 20px;
}

.contact h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #667eea;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 2rem 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        gap: 1rem;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .destination-grid,
    .package-grid {
        grid-template-columns: 1fr;
    }
}`
  },
}

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return notFound()
  }

  return (
    <div className="docs-page">
      <div className="brand-mark">
        <span className="brand-icon">CH</span>
        <div>
          <p className="brand-title">CodeHub</p>
          <p className="brand-subtitle">Frontend Projects</p>
        </div>
      </div>
      <Link className="back-link" href="/frontend-projects">
        ← All Projects
      </Link>

      <p className="eyebrow">Level {project.level} Project</p>
      <h1>{project.title}</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>HTML Code</h2>
        <pre
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '1.5rem',
            borderRadius: '8px',
            overflow: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#fff' }}>
            {project.html}
          </code>
        </pre>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>CSS Code</h2>
        <pre
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '1.5rem',
            borderRadius: '8px',
            overflow: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#fff' }}>
            {project.css}
          </code>
        </pre>
      </section>

      <section style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px', border: '1px solid rgba(102, 126, 234, 0.3)' }}>
        <h2>Instructions</h2>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>Create a new folder for your project</li>
          <li>Create an <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>index.html</code> file and paste the HTML code</li>
          <li>Create a <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>styles.css</code> file and paste the CSS code</li>
          <li>Make sure both files are in the same folder</li>
          <li>Open <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>index.html</code> in your browser to see your travel site!</li>
        </ol>
      </section>
    </div>
  )
}


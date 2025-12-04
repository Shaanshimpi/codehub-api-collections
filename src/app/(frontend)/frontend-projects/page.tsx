'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import '../styles.css'

type FrontendProject = {
  slug: string
  title: string
  description: string
  level: 1 | 2 | 3
  technologies: string[]
  features: string[]
  estimatedTime: string
}

const frontendProjects: FrontendProject[] = [
  {
    slug: 'travel-site',
    title: 'Travel Website',
    description: 'Create a beautiful travel website showcasing destinations, travel packages, and booking information.',
    level: 1,
    technologies: ['HTML', 'CSS'],
    features: [
      'Hero section with destination images',
      'Travel packages gallery',
      'About section',
      'Contact form',
      'Responsive navigation',
    ],
    estimatedTime: '3-5 days',
  },
  {
    slug: 'portfolio-site',
    title: 'Portfolio Website',
    description: 'Build a personal portfolio website to showcase your projects, skills, and experience.',
    level: 1,
    technologies: ['HTML', 'CSS'],
    features: [
      'About me section',
      'Projects showcase',
      'Skills section',
      'Contact information',
      'Responsive design',
    ],
    estimatedTime: '3-5 days',
  },
  {
    slug: 'landing-page',
    title: 'Product Landing Page',
    description: 'Create an attractive landing page for a product or service with features and call-to-action sections.',
    level: 1,
    technologies: ['HTML', 'CSS'],
    features: [
      'Hero section with headline',
      'Features showcase',
      'Testimonials section',
      'Pricing table',
      'Call-to-action buttons',
    ],
    estimatedTime: '3-4 days',
  },
  {
    slug: 'restaurant-site',
    title: 'Restaurant Website',
    description: 'Design a restaurant website with menu, location, hours, and reservation information.',
    level: 2,
    technologies: ['HTML', 'CSS'],
    features: [
      'Menu section with food items',
      'Restaurant gallery',
      'Location and hours',
      'Contact form',
      'Hero section with food images',
    ],
    estimatedTime: '4-6 days',
  },
  {
    slug: 'blog-site',
    title: 'Blog Website',
    description: 'Build a simple blog website with article listings, post pages, and a clean reading experience.',
    level: 2,
    technologies: ['HTML', 'CSS'],
    features: [
      'Blog post listings',
      'Individual post pages',
      'Sidebar with categories',
      'Author information',
      'Responsive layout',
    ],
    estimatedTime: '5-7 days',
  },
  {
    slug: 'business-site',
    title: 'Business Website',
    description: 'Create a professional business website with services, team, and contact information.',
    level: 3,
    technologies: ['HTML', 'CSS'],
    features: [
      'Services section',
      'Team member profiles',
      'Company information',
      'Contact form',
      'Footer with social links',
    ],
    estimatedTime: '5-7 days',
  },
  {
    slug: 'event-website',
    title: 'Event Website',
    description: 'Design a website for an event, conference, or festival with schedule, speakers, and registration.',
    level: 1,
    technologies: ['HTML', 'CSS'],
    features: [
      'Event schedule',
      'Speaker profiles',
      'Registration section',
      'Venue information',
      'Gallery of past events',
    ],
    estimatedTime: '3-4 days',
  },
  {
    slug: 'photography-site',
    title: 'Photography Portfolio',
    description: 'Create a stunning photography portfolio to showcase your best work in an elegant gallery format.',
    level: 1,
    technologies: ['HTML', 'CSS'],
    features: [
      'Image gallery grid',
      'Portfolio categories',
      'About photographer section',
      'Contact form',
      'Lightbox image viewer',
    ],
    estimatedTime: '3-5 days',
  },
  {
    slug: 'coffee-shop',
    title: 'Coffee Shop Website',
    description: 'Build a cozy coffee shop website featuring menu, location, hours, and the shop atmosphere.',
    level: 1,
    technologies: ['HTML', 'CSS'],
    features: [
      'Coffee menu',
      'Shop ambiance gallery',
      'Location and hours',
      'Contact information',
      'Special offers section',
    ],
    estimatedTime: '3-4 days',
  },
  {
    slug: 'fitness-website',
    title: 'Fitness Website',
    description: 'Design a fitness or gym website with workout programs, trainers, and membership information.',
    level: 2,
    technologies: ['HTML', 'CSS'],
    features: [
      'Workout programs',
      'Trainer profiles',
      'Membership plans',
      'Class schedule',
      'Before/after gallery',
    ],
    estimatedTime: '4-6 days',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Website',
    description: 'Create a real estate website showcasing property listings with images, details, and contact forms.',
    level: 2,
    technologies: ['HTML', 'CSS'],
    features: [
      'Property listings grid',
      'Property detail pages',
      'Search filters',
      'Agent profiles',
      'Contact form',
    ],
    estimatedTime: '5-7 days',
  },
  {
    slug: 'music-band',
    title: 'Music Band Website',
    description: 'Build a website for a music band with tour dates, discography, videos, and merchandise.',
    level: 2,
    technologies: ['HTML', 'CSS'],
    features: [
      'Tour dates calendar',
      'Music player section',
      'Band members',
      'Merchandise shop',
      'Video gallery',
    ],
    estimatedTime: '4-6 days',
  },
  {
    slug: 'fashion-store',
    title: 'Fashion Store',
    description: 'Design a fashion boutique website with product showcase, lookbook, and brand story.',
    level: 2,
    technologies: ['HTML', 'CSS'],
    features: [
      'Product catalog',
      'Lookbook gallery',
      'Brand story section',
      'Size guide',
      'Newsletter signup',
    ],
    estimatedTime: '5-6 days',
  },
  {
    slug: 'hotel-website',
    title: 'Hotel Website',
    description: 'Create a luxurious hotel website with room types, amenities, booking information, and gallery.',
    level: 3,
    technologies: ['HTML', 'CSS'],
    features: [
      'Room types showcase',
      'Amenities section',
      'Photo gallery',
      'Location map',
      'Booking inquiry form',
    ],
    estimatedTime: '6-8 days',
  },
  {
    slug: 'education-platform',
    title: 'Education Platform',
    description: 'Build an educational website with courses, instructors, testimonials, and enrollment information.',
    level: 3,
    technologies: ['HTML', 'CSS'],
    features: [
      'Course catalog',
      'Instructor profiles',
      'Student testimonials',
      'Pricing plans',
      'FAQ section',
    ],
    estimatedTime: '6-7 days',
  },
  {
    slug: 'tech-startup',
    title: 'Tech Startup Website',
    description: 'Design a modern tech startup website with product features, team, investors, and careers section.',
    level: 3,
    technologies: ['HTML', 'CSS'],
    features: [
      'Product features',
      'Team section',
      'Investor logos',
      'Careers page',
      'Blog section',
    ],
    estimatedTime: '6-8 days',
  },
]

export default function FrontendProjectsPage() {
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3 | 'all'>('all')

  const filteredProjects =
    selectedLevel === 'all' ? frontendProjects : frontendProjects.filter((project) => project.level === selectedLevel)

  return (
    <div className="docs-home">
      <header className="hero">
        <div className="brand-mark">
          <span className="brand-icon">CH</span>
          <div>
            <p className="brand-title">CodeHub</p>
            <p className="brand-subtitle">Frontend Projects</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Practice Projects</p>
          <h1>Frontend Projects for Students</h1>
          <p>
            Explore our curated list of HTML and CSS projects designed to help you practice web design and layout.
            Each project includes requirements, features, and focuses on building beautiful, responsive websites.
            Projects are categorized by design difficulty level (1-3).
          </p>
        </div>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>Filter by level:</p>
          <button
            onClick={() => setSelectedLevel('all')}
            className={`filter-button ${selectedLevel === 'all' ? 'filter-button-active' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedLevel(1)}
            className={`filter-button ${selectedLevel === 1 ? 'filter-button-active' : ''}`}
          >
            Level 1
          </button>
          <button
            onClick={() => setSelectedLevel(2)}
            className={`filter-button ${selectedLevel === 2 ? 'filter-button-active' : ''}`}
          >
            Level 2
          </button>
          <button
            onClick={() => setSelectedLevel(3)}
            className={`filter-button ${selectedLevel === 3 ? 'filter-button-active' : ''}`}
          >
            Level 3
          </button>
        </div>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </p>
      </section>

      <section className="card-grid">
        {filteredProjects.map((project) => (
          <Link key={project.slug} href={`/frontend-projects/${project.slug}`} style={{ textDecoration: 'none' }}>
            <article className="collection-card collection-card-clickable">
              <p className="card-label">Level {project.level}</p>
              <h2>{project.title}</h2>
            </article>
          </Link>
        ))}
      </section>
    </div>
  )
}

'use client'

import React from 'react'
import './music-styles.css'

export default function MusicBandPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="music-navbar">
        <div className="music-container">
          <div className="music-logo">The Echoes</div>
          <ul className="music-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#tour">Tour</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#band">Band</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="music-hero">
        <div className="music-container">
          <div className="music-hero-content">
            <h1>The Echoes</h1>
            <p>Rock &apos;n&apos; Roll Since 2015</p>
            <a href="#music" className="music-play-button">Listen Now</a>
          </div>
        </div>
      </section>

      {/* Tour Dates Section - Complex List Layout */}
      <section id="tour" className="music-tour">
        <div className="music-container">
          <h2>Upcoming Shows</h2>
          <div className="music-tour-list">
            <div className="music-tour-item">
              <div className="music-tour-date">
                <div className="music-date-day">15</div>
                <div className="music-date-month">MAR</div>
              </div>
              <div className="music-tour-details">
                <div className="music-tour-header">
                  <h3>Spring Festival</h3>
                  <span className="music-tour-venue">Central Park</span>
                </div>
                <div className="music-tour-info">
                  <span className="music-tour-location">New York, NY</span>
                  <span className="music-tour-time">8:00 PM</span>
                </div>
              </div>
              <div className="music-tour-action">
                <a href="#" className="music-ticket-button">Get Tickets</a>
              </div>
            </div>
            <div className="music-tour-item">
              <div className="music-tour-date">
                <div className="music-date-day">22</div>
                <div className="music-date-month">MAR</div>
              </div>
              <div className="music-tour-details">
                <div className="music-tour-header">
                  <h3>Summer Concert</h3>
                  <span className="music-tour-venue">Riverside Arena</span>
                </div>
                <div className="music-tour-info">
                  <span className="music-tour-location">Los Angeles, CA</span>
                  <span className="music-tour-time">7:30 PM</span>
                </div>
              </div>
              <div className="music-tour-action">
                <a href="#" className="music-ticket-button">Get Tickets</a>
              </div>
            </div>
            <div className="music-tour-item">
              <div className="music-tour-date">
                <div className="music-date-day">05</div>
                <div className="music-date-month">APR</div>
              </div>
              <div className="music-tour-details">
                <div className="music-tour-header">
                  <h3>Music Hall Show</h3>
                  <span className="music-tour-venue">Grand Theater</span>
                </div>
                <div className="music-tour-info">
                  <span className="music-tour-location">Chicago, IL</span>
                  <span className="music-tour-time">8:00 PM</span>
                </div>
              </div>
              <div className="music-tour-action">
                <a href="#" className="music-ticket-button">Get Tickets</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section - Album Grid */}
      <section id="music" className="music-albums">
        <div className="music-container">
          <h2>Latest Releases</h2>
          <div className="music-albums-grid">
            <div className="music-album-card">
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" alt="Album" className="music-album-image" />
              <div className="music-album-info">
                <h3>Midnight Dreams</h3>
                <p className="music-album-year">2024</p>
              </div>
            </div>
            <div className="music-album-card">
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop" alt="Album" className="music-album-image" />
              <div className="music-album-info">
                <h3>Electric Nights</h3>
                <p className="music-album-year">2023</p>
              </div>
            </div>
            <div className="music-album-card">
              <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop" alt="Album" className="music-album-image" />
              <div className="music-album-info">
                <h3>Wild Hearts</h3>
                <p className="music-album-year">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band Members Section */}
      <section id="band" className="music-band">
        <div className="music-container">
          <h2>The Band</h2>
          <div className="music-band-members">
            <div className="music-member-card">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=250&h=300&fit=crop" alt="Band member" className="music-member-image" />
              <div className="music-member-details">
                <h3>Alex Turner</h3>
                <p className="music-member-role">Lead Vocals & Guitar</p>
              </div>
            </div>
            <div className="music-member-card">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=250&h=300&fit=crop" alt="Band member" className="music-member-image" />
              <div className="music-member-details">
                <h3>Jordan Blake</h3>
                <p className="music-member-role">Bass Guitar</p>
              </div>
            </div>
            <div className="music-member-card">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=250&h=300&fit=crop" alt="Band member" className="music-member-image" />
              <div className="music-member-details">
                <h3>Sam Wilson</h3>
                <p className="music-member-role">Drums</p>
              </div>
            </div>
            <div className="music-member-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=300&fit=crop" alt="Band member" className="music-member-image" />
              <div className="music-member-details">
                <h3>Chris Martinez</h3>
                <p className="music-member-role">Keyboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="music-footer">
        <div className="music-container">
          <p>&copy; 2024 The Echoes. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}



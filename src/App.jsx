import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="website">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <span>✝</span>
          <div>
            <strong>JESUS FAMILY CHURCH</strong>
            <small>AUSTRALIA</small>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#ministries">Ministries</a>
          <a href="#events">Events</a>
          <a href="#sermons">Sermons</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">

          <button className="language">
            <Globe size={17} />
            EN
            </button>

            <a href="#contact" className="visit-button">
              Plan Your Visit
              </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </nav>

      {/* Hero Section */}
<section className="hero-section" id="home">

  <div className="hero-overlay"></div>

  <div className="hero-content">

    <p className="hero-label">
      JESUS FAMILY CHURCH AUSTRALIA
    </p>

    <h1>
      A Place to
      <br />
      <span>Worship, Belong & Grow</span>
    </h1>

    <p className="hero-description">
      A multicultural Christian church family in Melbourne,
      welcoming people from different cultures, languages and backgrounds.
    </p>

    <div className="hero-buttons">

      <a href="#contact" className="primary-button">
        Plan Your Visit
      </a>

      <a href="#events" className="secondary-button">
        Explore Events
      </a>

    </div>

    <div className="hero-location">
      <span>📍</span>
      <div>
        <strong>Join us this Sunday</strong>
        <p>Thomastown, Victoria, Australia</p>
      </div>
    </div>

  </div>

  <div className="hero-scroll">
    <span>SCROLL TO EXPLORE</span>
    <div></div>
  </div>

</section>


      
      {/* Welcome Section */}
      <section className="welcome-section" id="about">

        <div className="welcome-content">

          <p className="section-label">
            WELCOME TO OUR CHURCH
          </p>

          <h2>
            One Family. Many Cultures.
            <br />
            <span>One Faith in Christ.</span>
          </h2>

          <p>
            Jesus Family Church Australia is a multicultural Christian
            church in Melbourne where people from different cultures,
            languages and backgrounds come together to worship Jesus,
            grow in faith and build meaningful relationships.
          </p>

          <p>
            Whether you are new to Melbourne, looking for a church
            family, or simply seeking a place to connect with God,
            you are warmly welcome here.
          </p>

          <button className="primary-button">
            Learn More About Us
          </button>

        </div>

        <div className="welcome-card">

          <div className="cross-icon">✝</div>

          <h3>Faith • Family • Fellowship</h3>

          <p>
            A welcoming church community for everyone.
          </p>

        </div>

      </section>

      {/* Services Section */}
      <section className="services-section" id="services">

        <div className="section-heading">
          <p className="section-label">JOIN US THIS SUNDAY</p>

          <h2>
            Worship With <span>Us</span>
          </h2>

          <p>
            Come as you are and experience worship, fellowship and
            God's love with our church family.
          </p>
        </div>

        <div className="service-cards">

          <div className="service-card">
            <div className="service-icon">🕊️</div>

            <h3>Sunday Worship Service</h3>

            <p className="service-time">
              Every Sunday
            </p>

            <p>
              2:30 PM – 4:30 PM
            </p>

            <p className="service-description">
              Join us for worship, prayer, God's Word and fellowship.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">👨‍👩‍👧</div>

            <h3>Sunday School & Youth</h3>

            <p className="service-time">
              Every Sunday
            </p>

            <p>
              3:30 PM – 4:30 PM
            </p>

            <p className="service-description">
              A welcoming environment where children and young people
              can learn, grow and connect.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🌍</div>

            <h3>Multilingual Worship</h3>

            <p className="service-time">
              Worship in your language
            </p>

            <p className="languages">
              English • Tamil • Telugu • Hindi
              <br />
              Malayalam • Sinhala
            </p>

            <p className="service-description">
              Our multicultural church welcomes people from many
              different cultural and language backgrounds.
            </p>
          </div>

        </div>

        <div className="service-location">
          <strong>📍 Our Location</strong>
          <p>
            Spring Street Hall, 1 Spring St, Thomastown, VIC 3074
          </p>
        </div>

      </section>
            {/* Events Section */}
      <section className="events-section" id="events">

        <div className="section-heading">
          <p className="section-label">WHAT'S HAPPENING</p>

          <h2>
            Upcoming <span>Events</span>
          </h2>

          <p>
            Join our church family for worship, fellowship and special
            events throughout the year.
          </p>
        </div>

        <div className="event-cards">

          <div className="event-card">
            <div className="event-date">
              <strong>21</strong>
              <span>SEP</span>
            </div>

            <div className="event-content">
              <p className="event-type">SPECIAL SERVICE</p>

              <h3>Family Worship Sunday</h3>

              <p>
                A special time of worship, prayer and fellowship
                with our church family.
              </p>

              <div className="event-info">
                🕐 2:30 PM – 4:30 PM
              </div>

              <div className="event-info">
                📍 Thomastown, VIC
              </div>

              <button className="event-button">
                View Event →
              </button>
            </div>
          </div>


          <div className="event-card">
            <div className="event-date">
              <strong>28</strong>
              <span>SEP</span>
            </div>

            <div className="event-content">
              <p className="event-type">YOUTH MINISTRY</p>

              <h3>Youth Fellowship</h3>

              <p>
                An encouraging time for young people to connect,
                learn and grow together in Christ.
              </p>

              <div className="event-info">
                🕐 3:30 PM – 4:30 PM
              </div>

              <div className="event-info">
                📍 Thomastown, VIC
              </div>

              <button className="event-button">
                View Event →
              </button>
            </div>
          </div>


          <div className="event-card">
            <div className="event-date">
              <strong>05</strong>
              <span>OCT</span>
            </div>

            <div className="event-content">
              <p className="event-type">CHURCH EVENT</p>

              <h3>Community Fellowship</h3>

              <p>
                Come together as one church family for fellowship,
                friendship and celebration.
              </p>

              <div className="event-info">
                🕐 2:30 PM – 4:30 PM
              </div>

              <div className="event-info">
                📍 Thomastown, VIC
              </div>

              <button className="event-button">
                View Event →
              </button>
            </div>
          </div>

        </div>

      </section>
            {/* Ministries Section */}
      <section className="ministries-section" id="ministries">

        <div className="section-heading">
          <p className="section-label">GROW TOGETHER</p>

          <h2>
            Our <span>Ministries</span>
          </h2>

          <p>
            There is a place for everyone at Jesus Family Church.
            Discover opportunities to connect, serve and grow in faith.
          </p>
        </div>

        <div className="ministry-cards">

          <div className="ministry-card">
            <div className="ministry-icon">👧</div>

            <h3>Kids Ministry</h3>

            <p>
              Helping children discover God's love through Bible
              teaching, activities, friendship and fun.
            </p>

            <button className="ministry-button">
              Learn More →
            </button>
          </div>

          <div className="ministry-card">
            <div className="ministry-icon">🙏</div>

            <h3>Prayer Ministry</h3>

            <p>
              A place to seek God together through prayer, worship
              and spiritual encouragement.
            </p>

            <button className="ministry-button">
              Learn More →
            </button>
          </div>

          <div className="ministry-card">
            <div className="ministry-icon">🎵</div>

            <h3>Worship Ministry</h3>

            <p>
              Using music and worship to glorify God and lead our
              church family into His presence.
            </p>

            <button className="ministry-button">
              Learn More →
            </button>
          </div>

          <div className="ministry-card">
            <div className="ministry-icon">👥</div>

            <h3>Youth Ministry</h3>

            <p>
              Encouraging young people to build friendships, grow
              in faith and discover their purpose in Christ.
            </p>

            <button className="ministry-button">
              Learn More →
            </button>
          </div>

        </div>

      </section>
            {/* Sermons Section */}
      <section className="sermons-section" id="sermons">

        <div className="section-heading">
          <p className="section-label">WATCH & LISTEN</p>

          <h2>
            Latest <span>Sermons</span>
          </h2>

          <p>
            Be encouraged by God's Word wherever you are.
            Watch and listen to messages from our church family.
          </p>
        </div>

        <div className="sermon-cards">

          <div className="sermon-card">
            <div className="sermon-image">
              <div className="play-icon">▶</div>
            </div>

            <div className="sermon-content">
              <p className="sermon-category">SUNDAY MESSAGE</p>

              <h3>Walking by Faith</h3>

              <p className="sermon-speaker">
                Sunday Worship Service
              </p>

              <p className="sermon-date">
                September 2026
              </p>

              <button className="sermon-button">
                Watch Sermon →
              </button>
            </div>
          </div>


          <div className="sermon-card">
            <div className="sermon-image">
              <div className="play-icon">▶</div>
            </div>

            <div className="sermon-content">
              <p className="sermon-category">SUNDAY MESSAGE</p>

              <h3>Growing Together in Christ</h3>

              <p className="sermon-speaker">
                Sunday Worship Service
              </p>

              <p className="sermon-date">
                August 2026
              </p>

              <button className="sermon-button">
                Watch Sermon →
              </button>
            </div>
          </div>


          <div className="sermon-card">
            <div className="sermon-image">
              <div className="play-icon">▶</div>
            </div>

            <div className="sermon-content">
              <p className="sermon-category">SPECIAL MESSAGE</p>

              <h3>A Church Family for Everyone</h3>

              <p className="sermon-speaker">
                Jesus Family Church Australia
              </p>

              <p className="sermon-date">
                August 2026
              </p>

              <button className="sermon-button">
                Watch Sermon →
              </button>
            </div>
          </div>

        </div>

        <div className="sermon-action">
          <button className="primary-button">
            View All Sermons →
          </button>
        </div>

      </section>
            {/* Gallery Section */}
      <section className="gallery-section" id="gallery">

        <div className="section-heading">
          <p className="section-label">OUR CHURCH FAMILY</p>

          <h2>
            Moments of <span>Faith & Fellowship</span>
          </h2>

          <p>
            Take a glimpse into the life of our church family,
            from worship and fellowship to ministry and community.
          </p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80"
              alt="Church worship"
            />
            <div className="gallery-overlay">
              <h3>Worship</h3>
              <p>Gathering together in God's presence</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80"
              alt="Church fellowship"
            />
            <div className="gallery-overlay">
              <h3>Fellowship</h3>
              <p>Growing together as one family</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=900&q=80"
              alt="Community gathering"
            />
            <div className="gallery-overlay">
              <h3>Community</h3>
              <p>Connecting with people and families</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=80"
              alt="Children ministry"
            />
            <div className="gallery-overlay">
              <h3>Kids Ministry</h3>
              <p>Helping children learn and grow</p>
            </div>
          </div>

        </div>

        <div className="gallery-action">
          <button className="primary-button">
            View Full Gallery →
          </button>
        </div>

      </section>
            {/* Contact / Plan Your Visit Section */}
      <section className="contact-section" id="contact">

        <div className="contact-content">

          <div className="contact-text">

            <p className="section-label">PLAN YOUR VISIT</p>

            <h2>
              We'd Love to <span>Welcome You</span>
            </h2>

            <p>
              Whether you're visiting for the first time or looking
              for a church family in Melbourne, we would love to meet you.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Our Location</strong>
                  <p>
                    Spring Street Hall,<br />
                    1 Spring St, Thomastown,<br />
                    VIC 3074, Australia
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <strong>Sunday Service</strong>
                  <p>
                    Sunday Worship: 2:30 PM – 4:30 PM<br />
                    Sunday School & Youth: 3:30 PM – 4:30 PM
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Contact Us</strong>
                  <p>
                    +61 432 248 276<br />
                    +61 432 361 918
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p>
                    jesusfamilychurchaustralia@gmail.com
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="map-card">

            <div className="map-placeholder">
              <div className="map-pin">📍</div>

              <h3>Jesus Family Church Australia</h3>

              <p>
                Thomastown, Victoria
              </p>

              <button className="primary-button">
                Get Directions →
              </button>
            </div>

          </div>

        </div>

      </section>
            {/* Footer */}
      <footer className="footer">

        <div className="footer-content">

          <div className="footer-about">
            <div className="footer-logo">
              <span>✝</span>
              <div>
                <strong>JESUS FAMILY CHURCH</strong>
                <small>AUSTRALIA</small>
              </div>
            </div>

            <p>
              A multicultural Christian church family in Melbourne,
              welcoming people from different cultures, languages
              and backgrounds.
            </p>

            <div className="footer-socials">
              <a href="#contact">Facebook</a>
              <a href="#contact">Instagram</a>
              <a href="#contact">YouTube</a>
            </div>
          </div>


          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>


          <div className="footer-column">
            <h3>Ministries</h3>

            <a href="#ministries">Kids Ministry</a>
            <a href="#ministries">Youth Ministry</a>
            <a href="#ministries">Prayer Ministry</a>
            <a href="#ministries">Worship Ministry</a>
            <a href="#sermons">Sermons</a>
          </div>


          <div className="footer-column">
            <h3>Contact</h3>

            <p>📍 Spring Street Hall</p>
            <p>1 Spring St, Thomastown</p>
            <p>VIC 3074, Australia</p>

            <p className="footer-space">
              📞 +61 432 248 276
            </p>

            <p>📧 jesusfamilychurchaustralia@gmail.com</p>
          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Jesus Family Church Australia. All rights reserved.
          </p>

          <div>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms</a>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default App
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import churchLogo from "../assets/churchlogo.jpeg"
import worshipHome from "../assets/worshiphome.webp"
import welcomeChurch from "../assets/welcomechurch.jpg"
import DailyBibleVerse from "../components/DailyBibleVerse.jsx";
import worshipPhoto from "../assets/homegallery/worship.jpg";
import fellowshipPhoto from "../assets/homegallery/fellowship.jpg";
import communityPhoto from "../assets/homegallery/community.jpg";
import kidsMinistryPhoto from "../assets/homegallery/kids.webp";
import '../App.css'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="website">


      {/* Hero Section */}
<section
  className="hero-section"
  id="home"
  style={{ backgroundImage: `url(${worshipHome})` }}
>

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
      Come as you are and worship with us in Telugu, Hindi, English, Tamil, Malayalam and Sinhala. Everyone is welcome to be part of our church family.
    </p>

    <div className="hero-buttons">

<a href="/get-in-touch" className="primary-button">
  Plan Your Visit
</a>

      <a href="#events" className="secondary-button">
        What's Happening
      </a>

    </div>

  </div>

  <div className="hero-scroll">
    <span>SCROLL TO EXPLORE</span>
    <div></div>
  </div>

</section>
{/* BIBLE VERSE OF THE DAY */}
      <DailyBibleVerse />

     {/* Welcome Section */}
<section className="welcome-section">

  <div className="welcome-container">

    <div className="welcome-content">

      <p className="section-label">
        WELCOME TO OUR CHURCH
      </p>

      <h2>
        One Family • Many
        <br />
        Cultures •
        <br />
        <span>One Faith in Christ</span>
      </h2>

      <p className="welcome-text">
        Come and visit our vibrant multilingual Christian congregation
        and feel a difference while experiencing the heavenly touch.
        Here we will strengthen your faith, encourage you, comfort you
        and help you live lives worthy of God, who calls you into His Kingdom.
      </p>

      <p className="welcome-text">
        We can't wait to have you join our close, loving, and spiritual
        Jesus family. Once again, welcome to Jesus Family Church Australia -
        where everyone is valued, accepted, and loved.
      </p>

      <a href="/about" className="learn-more-link">
        Learn More About Us →
      </a>

    </div>

    <div className="welcome-image">

      <img
        src={welcomeChurch}
        alt="Jesus Family Church Australia"
      />

    </div>

  </div>

</section> 

     
      {/* Services Section */}
      <section className="services-section" id="services">

        <div className="section-heading">

          <p className="section-label">
            JOIN US AND GROW TOGETHER
          </p>

          <h2>
            Worship With <span>Us</span>
          </h2>

          <p>
            Join our church family for worship, Bible study,
            prayer and fellowship as we grow together in faith.
          </p>

        </div>

        <div className="service-cards">

          {/* Sunday Worship */}
          <div className="service-card">

            <h3>Sunday Worship Service</h3>

            <p className="service-time">Every Sunday</p>

            <p>2:30 PM – 4:30 PM</p>

            <p className="service-description">
              Join us for worship, prayer, God's Word and fellowship.
            </p>

          </div>

          {/* Kids and Youth */}
          <div className="service-card">

            <h3>Kids & Youth Ministry</h3>

            <p className="service-time">Every Sunday</p>

            <p>3:30 PM – 4:30 PM</p>

            <p className="service-description">
              A welcoming environment where children and young people
              can learn, grow and connect in faith.
            </p>

          </div>

          {/* Fasting and Prayer */}
          <div className="service-card">

            <h3>Fasting & Prayer</h3>

            <p className="service-time">Once a month</p>

            <p className="service-description">
              Come together in prayer and seek God's presence as a church family.
            </p>

          </div>

          {/* Bible Studies */}
          <div className="service-card">

            <h3>Bible Studies</h3>

            <p className="service-time">Twice a month</p>

            <p className="service-description">
              Explore God's Word together and grow in understanding and faith.
            </p>

          </div>

          {/* Men's and Women's Fellowship */}
          <div className="service-card">

            <h3>Men's & Women's Fellowship</h3>

            <p className="service-time">Every 3 months</p>

            <p className="service-description">
              Build meaningful connections through fellowship, encouragement
              and shared faith.
            </p>

          </div>

          {/* Multilingual Worship */}
          <div className="service-card">

            <h3>Multilingual Worship</h3>

            <p className="service-time">Worship in your language</p>

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

          <strong>Our Location</strong>

          <p>
            Spring Street Hall, 1 Spring St, Thomastown, VIC 3074
          </p>

        </div>

      </section>

     ```jsx
{/* Events Section */}
<section className="events-section" id="events">
  <div className="section-heading">
    <p className="section-label">WHAT'S HAPPENING</p>

    <h2>
      Upcoming <span>Events</span>
    </h2>

    <p>
      Join our church family for worship, fellowship and opportunities
      to grow together in faith.
    </p>
  </div>

  <div className="event-cards">
    {/* Event 1 */}
    <div className="event-card">
      <div className="event-date">
        <strong>EVERY</strong>
        <span>SUNDAY</span>
      </div>

      <div className="event-content">
        <p className="event-type">WEEKLY WORSHIP</p>

        <h3>Sunday Worship Service</h3>

        <p>
          Come together for worship, prayer and God's Word.
          Everyone is welcome.
        </p>

        <div className="event-info">
          2:30 PM – 4:30 PM
        </div>

        <div className="event-info">
          Spring Street Hall, Thomastown
        </div>
      </div>
    </div>

    {/* Event 2 */}
    <div className="event-card">
      <div className="event-date">
        <strong>EVERY</strong>
        <span>SUNDAY</span>
      </div>

      <div className="event-content">
        <p className="event-type">KIDS & YOUTH</p>

        <h3>Sunday School & Youth</h3>

        <p>
          A welcoming space for children and young people to learn,
          build friendships and grow in Christ.
        </p>

        <div className="event-info">
          3:30 PM – 4:30 PM
        </div>

        <div className="event-info">
          Spring Street Hall, Thomastown
        </div>
      </div>
    </div>

    {/* Event 3 */}
    <div className="event-card">
      <div className="event-date">
        <strong>MONTHLY</strong>
        <span>GATHERING</span>
      </div>

      <div className="event-content">
        <p className="event-type">PRAYER & FELLOWSHIP</p>

        <h3>Church Prayer & Fellowship</h3>

        <p>
          Join our church family for prayer, Bible study and fellowship.
          Contact the church for upcoming dates.
        </p>

        <div className="event-info">
          Dates announced by the church
        </div>

        <div className="event-info">
          Spring Street Hall, Thomastown
        </div>
      </div>
    </div>
  </div>

  <div className="events-action">
    <a href="/whats-happening" className="primary-button">
      View What's Happening →
    </a>
  </div>
</section>
      {/* Ministries Section */}
<section className="ministries-section" id="ministries">

  <div className="section-heading">

    <p className="section-label">
      GROW TOGETHER
    </p>

    <h2>
      Our <span>Ministries</span>
    </h2>

    <p>
      There is a place for everyone at Jesus Family Church.
      Discover opportunities to connect, serve and grow in faith.
    </p>

  </div>


  <div className="ministry-cards">

    {/* Kids Ministry */}
    <div className="ministry-card">

      <h3>
        Kids Ministry
      </h3>

      <p>
        Helping children discover God's love through Bible
        teaching, activities, friendship and fun.
      </p>

    </div>


    {/* Youth Ministry */}
    <div className="ministry-card">

      <h3>
        Youth Ministry
      </h3>

      <p>
        Encouraging young people to build friendships, grow
        in faith and discover their purpose in Christ.
      </p>

    </div>


    {/* Men & Women Ministry */}
    <div className="ministry-card">

      <h3>
        Men & Women Ministry
      </h3>

      <p>
        Building meaningful relationships through fellowship,
        prayer, Bible study, encouragement and serving together
        as a church family.
      </p>

    </div>
    <div className="ministries-action">
  <a href="/ministries" className="primary-button">
    Explore All Ministries →
  </a>
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
          {/* Sermon 1 */}
          <div className="sermon-card">
            <a
              className="sermon-image"
              href="https://www.youtube.com/watch?v=tWIUkTGyokU"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the latest Sunday sermon"
              style={{
                backgroundImage:
                  "url(https://img.youtube.com/vi/tWIUkTGyokU/hqdefault.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="play-icon">▶</div>
            </a>

            <div className="sermon-content">
              <p className="sermon-category">SUNDAY MESSAGE</p>
              <h3>Walking by Faith</h3>
              <p className="sermon-speaker">Sunday Worship Service</p>
              <p className="sermon-date">October 2026</p>

              <a
                className="sermon-button"
                href="https://www.youtube.com/watch?v=tWIUkTGyokU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Sermon →
              </a>
            </div>
          </div>

          {/* Sermon 2 */}
          <div className="sermon-card">
            <a
              className="sermon-image"
              href="https://www.youtube.com/watch?v=JO7U4NQDGLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch another church sermon"
              style={{
                backgroundImage:
                  "url(https://img.youtube.com/vi/JO7U4NQDGLE/hqdefault.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="play-icon">▶</div>
            </a>

            <div className="sermon-content">
              <p className="sermon-category">SUNDAY MESSAGE</p>
              <h3>Growing Together in Christ</h3>
              <p className="sermon-speaker">Sunday Worship Service</p>
              <p className="sermon-date">2026</p>

              <a
                className="sermon-button"
                href="https://www.youtube.com/watch?v=JO7U4NQDGLE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Sermon →
              </a>
            </div>
          </div>

          {/* Sermon 3 */}
          <div className="sermon-card">
            <a
              className="sermon-image"
              href="https://www.youtube.com/watch?v=MZ6cl7vYjKA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch a special church message"
              style={{
                backgroundImage:
                  "url(https://img.youtube.com/vi/MZ6cl7vYjKA/hqdefault.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="play-icon">▶</div>
            </a>

            <div className="sermon-content">
              <p className="sermon-category">SPECIAL MESSAGE</p>
              <h3>A Church Family for Everyone</h3>
              <p className="sermon-speaker">
                Jesus Family Church Australia
              </p>
              <p className="sermon-date">2026</p>

              <a
                className="sermon-button"
                href="https://www.youtube.com/watch?v=MZ6cl7vYjKA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Sermon →
              </a>
            </div>
          </div>
        </div>

        <div className="sermon-action">
          <a className="primary-button" href="/sermons">
            View All Sermons →
          </a>
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
  src={worshipPhoto}
  alt="Jesus Family Church Australia congregation worshipping together"
  loading="lazy"
/>


            <div className="gallery-overlay">
              <h3>Worship</h3>
              <p>Gathering together in God's presence</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
  src={fellowshipPhoto}
  alt="Jesus Family Church Australia members enjoying fellowship"
  loading="lazy"
/>

            <div className="gallery-overlay">
              <h3>Fellowship</h3>
              <p>Growing together as one family</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
  src={communityPhoto}
  alt="Jesus Family Church Australia community gathering"
  loading="lazy"
/>

            <div className="gallery-overlay">
              <h3>Community</h3>
              <p>Connecting with people and families</p>
            </div>
          </div>

          <div className="gallery-item">
            <img
  src={kidsMinistryPhoto}
  alt="Children participating in church Sunday School"
  loading="lazy"
/>

            <div className="gallery-overlay">
              <h3>Kids Ministry</h3>
              <p>Helping children learn and grow</p>
            </div>
          </div>
        </div>

        <div className="gallery-action">
          <a className="primary-button" href="/gallery">
            View Full Gallery →
          </a>
        </div>
      </section>

      {/* Contact / Plan Your Visit Section */}
      <section className="contact-section" id="contact">

        <div className="contact-content">

          <div className="contact-text">

            <p className="section-label">
              PLAN YOUR VISIT
            </p>

            <h2>
              We'd Love to <span>Welcome You</span>
            </h2>

            <p>
              Whether you're visiting for the first time or looking
              for a church family in Melbourne, we would love to meet you.
            </p>


            <div className="contact-details">

              <div className="contact-item">

                <div className="contact-icon">
                  📍
                </div>

                <div>

                  <strong>
                    Our Location
                  </strong>

                  <p>
                    Spring Street Hall,<br />
                    1 Spring St, Thomastown,<br />
                    VIC 3074, Australia
                  </p>

                </div>

              </div>


              <div className="contact-item">


                <div>

                  <strong>
                    Sunday Service
                  </strong>

                  <p>
                    Sunday Worship: 2:30 PM – 4:30 PM<br />
                    Sunday School & Youth: 3:30 PM – 4:30 PM
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <div>

                  <strong>
                    Contact Us
                  </strong>

                  <p>
                    +61 432 248 276<br />
                    +61 432 361 918
                  </p>

                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  ✉️
                </div>

                <div>

                  <strong>
                    Email
                  </strong>

                  <p>
                    jesusfamilychurchaustralia@gmail.com
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className="map-card">

            <div className="map-placeholder">

              <div className="map-pin">
                📍
              </div>

              <h3>
                Jesus Family Church Australia
              </h3>

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

    </div>
  )
}

export default Home

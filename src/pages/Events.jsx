
function Events() {
  const events = [
    {
      date: 'EVERY SUNDAY',
      title: 'Sunday Worship Service',
      time: '2:30 PM – 4:30 PM',
      location: 'Spring Street Hall, Thomastown',
      description:
        'Join us for worship, prayer, the Word of God and fellowship as a church family.',
      type: 'Worship',
    },
    {
      date: 'EVERY SUNDAY',
      title: 'Sunday School & Youth',
      time: '3:30 PM – 4:30 PM',
      location: 'Spring Street Hall, Thomastown',
      description:
        'A special time for children and young people to learn, grow and connect together.',
      type: 'Family',
    },
    {
      date: 'MONTHLY',
      title: 'Fasting & Prayer',
      time: 'Details will be announced',
      location: 'Jesus Family Church Australia',
      description:
        'Come together as a church family for prayer, fasting and seeking God.',
      type: 'Prayer',
    },
    {
      date: 'UPCOMING',
      title: 'Bible Study',
      time: 'Details will be announced',
      location: 'Jesus Family Church Australia',
      description:
        'Grow deeper in the Word of God through teaching, discussion and fellowship.',
      type: 'Bible Study',
    },
  ]

  return (
    <div className="events-page">

      {/* HERO */}
      <section className="events-hero">
        <div className="events-hero-overlay">

          <p className="events-small-title">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>Church Events</h1>

          <p>
            Join us for worship, prayer, Bible study,
            fellowship and special gatherings throughout the year.
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="events-intro">

        <p className="section-label">
          JOIN US
        </p>

        <h2>
          Upcoming Events
        </h2>

        <p className="events-intro-text">
          There is always an opportunity to connect, grow and worship
          together at Jesus Family Church Australia. Come as you are,
          bring your family and be part of our church community.
        </p>

      </section>


      {/* EVENTS */}
      <section className="events-list-section">

        <div className="events-grid">

          {events.map((event, index) => (
            <div
              className="beautiful-event-card"
              key={index}
            >

              <div className="event-card-top">

                <span className="event-date">
                  {event.date}
                </span>

                <span className="event-type">
                  {event.type}
                </span>

              </div>


              <div className="event-card-content">

                <h3>
                  {event.title}
                </h3>


                <div className="event-detail">
                  <span>🕐</span>
                  <p>{event.time}</p>
                </div>


                <div className="event-detail">
                  <span>📍</span>
                  <p>{event.location}</p>
                </div>


                <p className="event-description">
                  {event.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* CALL TO ACTION */}
      <section className="events-cta">

        <div>

          <p className="section-label">
            YOU ARE WELCOME HERE
          </p>

          <h2>
            Come and Worship With Us
          </h2>

          <p>
            We would love to welcome you and your family.
            Join us this Sunday and experience the warmth
            of our church family.
          </p>

        </div>


        <a
          href="/get-in-touch"
          className="events-cta-button"
        >
          Plan Your Visit
        </a>

      </section>

    </div>
  )
}

export default Events
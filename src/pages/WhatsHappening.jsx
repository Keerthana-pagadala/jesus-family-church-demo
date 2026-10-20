import { Link } from 'react-router-dom'
function WhatsHappening() {
  const updates = [
    {
      category: 'THIS SUNDAY',
      title: 'Sunday Worship Service',
      description:
        'Join our church family for worship, prayer, the Word of God and fellowship.',
      time: '2:30 PM – 4:30 PM',
      location: 'Spring Street Hall, Thomastown',
    },
    {
      category: 'YOUTH & CHILDREN',
      title: 'Sunday School & Youth',
      description:
        'A special time for children and young people to learn, grow and connect together.',
      time: '3:30 PM – 4:30 PM',
      location: 'Spring Street Hall, Thomastown',
    },
    {
      category: 'PRAYER',
      title: 'Fasting & Prayer',
      description:
        'Come together as a church family to pray, seek God and encourage one another.',
      time: 'Details will be announced',
      location: 'Jesus Family Church Australia',
    },
    {
      category: 'GROW IN THE WORD',
      title: 'Bible Study',
      description:
        'Grow deeper in the Word of God through teaching, discussion and fellowship.',
      time: 'Details will be announced',
      location: 'Jesus Family Church Australia',
    },
    {
      category: 'SPECIAL GUESTS',
      title: 'Visiting Pastors',
      description:
        'We welcome visiting pastors and ministers who come to share the Word of God and encourage our church family.',
      time: 'Dates will be announced',
      location: 'Spring Street Hall, Thomastown',
    },
    {
      category: 'CHURCH FAMILY',
      title: 'Special Gatherings',
      description:
        'Join us for special gatherings, fellowship and celebrations as we come together as one church family.',
      time: 'Details will be announced',
      location: 'Jesus Family Church Australia',
    },
    {
      category: 'UPCOMING',
      title: 'Upcoming Church Events',
      description:
        'Stay updated with upcoming church events, celebrations, conferences and other special occasions.',
      time: 'Details will be announced',
      location: 'Jesus Family Church Australia',
    },
  ]

  return (
    <div className="whats-happening-page">

      {/* HERO */}
      <section className="whats-happening-hero">

        <div className="whats-happening-overlay">

          <p>JESUS FAMILY CHURCH AUSTRALIA</p>

          <h1>What's Happening</h1>

          <span>
            Stay connected with everything happening in our church family.
          </span>

        </div>

      </section>


      {/* INTRO */}
      <section className="whats-happening-intro">

        <p className="section-label">
          STAY CONNECTED
        </p>

        <h2>
          What's Happening at Church
        </h2>

        <p>
          Find out about upcoming services, prayer gatherings,
          Bible studies, youth activities, visiting pastors,
          special gatherings and upcoming church events.
        </p>

      </section>


      {/* UPDATES */}
      <section className="whats-happening-list">

        <div className="updates-grid">

          {updates.map((update, index) => (

            <div
              className="update-card"
              key={index}
            >

              <div className="update-category">
                {update.category}
              </div>


              <h3>
                {update.title}
              </h3>


              <p className="update-description">
                {update.description}
              </p>


              <div className="update-info">

                <div>
                  <span>🕐</span>
                  <span>{update.time}</span>
                </div>

                <div>
                  <span>📍</span>
                  <span>{update.location}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* BOTTOM CTA */}
      <section className="whats-happening-bottom">

        <p className="section-label">
          YOU ARE WELCOME
        </p>

        <h2>
          Come and Be Part of Our Church Family
        </h2>

        <p>
          Whether you are visiting for the first time or have been
          part of our church family for years, there is a place for you.
        </p>

        <Link to="/get-in-touch">
         Plan Your Visit
        </Link>

      </section>

    </div>
  )
}

export default WhatsHappening


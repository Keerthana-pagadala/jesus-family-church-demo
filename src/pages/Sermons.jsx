
function Sermons() {
  const latestSermon = {
    title: 'Latest Sunday Sermon',
    speaker: 'Jesus Family Church Australia',
    date: 'October 2026',
    videoId: 'tWIUkTGyokU',
  }

  const previousSermons = [
    {
      title: 'Church Sermon',
      speaker: 'Jesus Family Church Australia',
      date: '2026',
      videoId: 'JO7U4NQDGLE',
    },
    {
      title: 'Church Sermon',
      speaker: 'Jesus Family Church Australia',
      date: '2026',
      videoId: 'MZ6cl7vYjKA',
    },
    {
      title: 'Church Sermon',
      speaker: 'Jesus Family Church Australia',
      date: '2026',
      videoId: 'mjf3SXwY9S0',
    },
  ]

  return (
    <div className="sermons-page">

      {/* HERO */}
      <section className="sermons-hero">

        <div className="sermons-hero-overlay">

          <p className="sermons-label">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>Sermons</h1>

          <p>
            Watch, listen and grow in the Word of God
            wherever you are.
          </p>

        </div>

      </section>


      {/* LATEST SERMON */}
      <section className="latest-sermon-section">

        <div className="section-heading">

          <p className="section-label">
            LATEST MESSAGE
          </p>

          <h2>
            This Week's <span>Sermon</span>
          </h2>

          <p>
            Join us as we grow together through God's Word,
            worship and teaching.
          </p>

        </div>


        <div className="featured-sermon">

          {/* YOUTUBE VIDEO */}
          <div className="sermon-video">

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tWIUkTGyokU?si=e9jUqYOeQvchRkIU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>


          {/* SERMON INFORMATION */}
          <div className="featured-sermon-info">

            <p className="sermon-category">
              LATEST SERMON
            </p>

            <h2>
              {latestSermon.title}
            </h2>

            <p className="sermon-speaker">
              {latestSermon.speaker}
            </p>

            <p className="sermon-date">
              📅 {latestSermon.date}
            </p>

            <p className="sermon-description">
              Be encouraged and strengthened through the
              message shared with our church family.
            </p>

            <a
              href={`https://www.youtube.com/watch?v=${latestSermon.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Watch on YouTube →
            </a>

          </div>

        </div>

      </section>


      {/* PREVIOUS SERMONS */}
      <section className="previous-sermons-section">

        <div className="section-heading">

          <p className="section-label">
            SERMON LIBRARY
          </p>

          <h2>
            Previous <span>Sermons</span>
          </h2>

          <p>
            Catch up on messages from previous weeks
            and continue growing in faith.
          </p>

        </div>


        <div className="previous-sermons-grid">

          {previousSermons.map((sermon, index) => (

            <div
              className="previous-sermon-card"
              key={index}
            >

              {/* YOUTUBE VIDEO */}
              <div className="previous-sermon-video">

                <iframe
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>


              {/* SERMON DETAILS */}
              <div className="previous-sermon-content">

                <p className="sermon-category">
                  SERMON
                </p>

                <h3>
                  {sermon.title}
                </h3>

                <p>
                  {sermon.speaker}
                </p>

                <span>
                  📅 {sermon.date}
                </span>

                <a
                  href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sermon-watch-button"
                >
                  Watch Sermon →
                </a>

              </div>

            </div>

          ))}
          </div>

        
<div className="view-all-sermons">
  <a
    href="https://www.youtube.com/@jesusfamilychurchaustralia9865"
    target="_blank"
    rel="noopener noreferrer"
    className="primary-button"
  >
    View All Sermons →
  </a>


        </div>

      </section>


      {/* BOTTOM SECTION */}
      <section className="sermons-bottom">

        <p className="section-label">
          GROW IN FAITH
        </p>

        <h2>
          God's Word Is For Everyone
        </h2>

        <p>
          Whether you are joining us in person or watching
          from home, we pray these messages encourage,
          strengthen and inspire you.
        </p>

        <a href="/get-in-touch">
          Plan Your Visit
        </a>

      </section>

    </div>
  )
}

export default Sermons
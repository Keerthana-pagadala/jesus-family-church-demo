
import youthImage from "../assets/gallery/youthmin.jpg";
import kidsImage from "../assets/gallery/kidsmin.webp";
import womenImage from "../assets/gallery/womenmin.webp";
import prayerWorshipImage from "../assets/prayerworship.jpg";

function Ministries() {
  const ministries = [
    {
      number: "01",
      title: "Youth Ministry",
      subtitle: "Growing in Faith",
      description:
        "A welcoming place for young people to grow in faith, build friendships, discover their purpose, and serve God together.",
      image: youthImage,
    },

    {
      number: "02",
      title: "Kids Ministry",
      subtitle: "Growing with Joy",
      description:
        "Helping children discover God's love through Bible stories, worship, prayer, activities, friendship, and joyful learning.",
      image: kidsImage,
    },

    {
      number: "03",
      title: "Men & Women Ministry",
      subtitle: "Growing Together",
      description:
        "Building meaningful relationships through fellowship, prayer, Bible study, encouragement, and serving together as a church family.",
      image: womenImage,
    },

    {
      number: "04",
      title: "Prayer & Worship Ministry",
      subtitle: "Growing in God's Presence",
      description:
        "Coming together through prayer and worship to seek God, grow in faith, encourage one another, and experience His presence as a church family.",
      image: prayerWorshipImage,
    },
  ];

  return (
    <div className="website">

      {/* HERO */}
      <section className="ministries-hero">

        <div className="ministries-hero-overlay"></div>

        <div className="ministries-hero-content">

          <p className="ministries-label">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>Our Ministries</h1>

          <p>
            Places to connect, grow, serve and discover God's purpose together.
          </p>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="ministries-intro">

        <div className="ministries-container">

          <p className="section-label">
            OUR CHURCH FAMILY
          </p>

          <h2>
            Growing Together in
            <span> Faith & Fellowship</span>
          </h2>

          <p>
            At Jesus Family Church Australia, we believe church is a place
            where everyone can belong. Our ministries provide opportunities
            for children, young people, men and women to grow in faith,
            build meaningful relationships, and serve together.
          </p>

        </div>

      </section>


      {/* MINISTRY CARDS */}
      <section className="ministries-cards-section">

        <div className="ministries-container">

          <div className="ministries-card-grid">

            {ministries.map((ministry) => (

              <div
                className="ministry-card"
                key={ministry.number}
              >

                <div className="ministry-card-image">

                  <img
                    src={ministry.image}
                    alt={ministry.title}
                  />

                  <span className="ministry-card-number">
                    {ministry.number}
                  </span>

                </div>

                <div className="ministry-card-content">

                  <p>{ministry.subtitle}</p>

                  <h3>{ministry.title}</h3>

                  <div className="ministry-card-description">
                    {ministry.description}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* WELCOME SECTION */}
      <section className="ministries-community">

        <div className="ministries-community-container">

          <p className="section-label">
            YOU ARE WELCOME HERE
          </p>

          <h2>
            Come and Be Part of
            <span> Our Church Family</span>
          </h2>

          <p>
            Whatever your age or stage of life, there is a place for you
            at Jesus Family Church Australia.
          </p>
<a href="/get-in-touch" className="ministries-contact-button">
  Get in Touch →
</a>
</div>
      </section>

    </div>
  );
}

export default Ministries;

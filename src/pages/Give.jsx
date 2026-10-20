import giveImage from "../assets/gallery/give.jpg";

function Give() {
  return (
    <div className="website">

      {/* GIVE HERO */}
      <section
        className="give-hero"
        style={{ backgroundImage: `url(${giveImage})` }}
      >
        <div className="give-hero-overlay"></div>

        <div className="give-hero-content">
          <p className="give-label">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>Give</h1>

          <p>
            Giving from the heart. Helping others with love.
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="give-intro">
        <div className="give-container">

          <p className="section-label">
            GIVING WITH PURPOSE
          </p>

          <h2>Your Giving Makes a Difference</h2>

          <p>
            God’s kingdom is built through the generosity of His people.
            Giving is an act of worship and an important part of supporting
            the mission of our church.
          </p>

          <p>
            Through your generosity, we are able to serve our local community,
            share the love of God, support ministry, and reach people both
            locally and around the world.
          </p>

          <p>
            Every contribution, no matter the size, helps us continue this
            mission of faith, love, and compassion.
          </p>

          <p>
            Thank you for partnering with us and helping us make a difference
            in the lives of others.
          </p>

        </div>
      </section>


      {/* DIRECT DEPOSIT */}
      <section className="direct-deposit-section">
        <div className="give-container">

          <p className="section-label">
            TITHES & OFFERINGS
          </p>

          <h2>Give Through Direct Deposit</h2>

          <p className="deposit-intro">
            Your tithes and offerings can be transferred by direct deposit
            into our church account.
          </p>

          <div className="bank-card">

            <div className="bank-card-top">
              <div className="heart-icon">♥</div>

              <div>
                <h3>For Tithes & Offerings</h3>
                <p>Jesus Family Church Australia</p>
              </div>
            </div>

            <div className="bank-details">

              <div className="bank-row">
                <span>Bank Name</span>
                <strong>Commonwealth Bank</strong>
              </div>

              <div className="bank-row">
                <span>Account Name</span>
                <strong>
                  Jesus Family Church Australia Inc or JFCA Inc.
                </strong>
              </div>

              <div className="bank-row">
                <span>BSB No</span>
                <strong>063-777</strong>
              </div>

              <div className="bank-row">
                <span>Account No</span>
                <strong>1032 3998</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="give-about-section">
        <div className="give-container">

          <div className="give-heart">
            ♥
          </div>

          <h2>Give With Love</h2>

          <p>
            Your generosity allows us to continue sharing the love of Jesus,
            supporting ministry, serving our community and reaching people
            around the world.
          </p>

          <a href="/about" className="give-about-button">
            Learn More About Us
          </a>

        </div>
      </section>


      {/* THANK YOU */}
      <section className="give-thank-you">
        <div className="give-container">

          <h2>Thank You for Your Generosity</h2>

          <p>
            Thank you for partnering with Jesus Family Church Australia.
            Together, we can continue to make a difference through faith,
            love and compassion.
          </p>

          <p className="give-verse">
            “God loves a cheerful giver.”
          </p>

        </div>
      </section>

    </div>
  )
}

export default Give

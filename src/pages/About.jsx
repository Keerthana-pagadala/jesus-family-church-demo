import pastorImage from "../assets/gallery/pastor.png";
import visionMissionImage from "../assets/visionmission.jpg";
import aboutImage from "../assets/gallery/about.jpg";
function About() {
  return (
    <div className="about-page">

      {/* =========================
          ABOUT US
      ========================= */}
      <section 
         className="about-hero"
         style={{ backgroundImage: `url(${aboutImage})` }}
         >
         
        <div className="about-container">

          <p className="about-label">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>About Us</h1>

          <p className="about-intro">
            Jesus Family Church has drawn its inspiration from missionaries
            who sacrificed the comforts of this world and instead placed the
            burden of the Gospel on their shoulders.
          </p>

        </div>
      </section>


      {/* =========================
          OUR VISION
      ========================= */}
      <section className="about-section vision-section">
        <div className="about-container about-two-column">

          <div className="about-text">
            <p className="section-label">OUR VISION</p>

            <h2>Sharing the Hope of Jesus Christ</h2>

            <p>
              The world needs Jesus Christ. Our vision is to help free people
              from sin, darkness, and bondage through the Gospel of Jesus Christ.
            </p>

            <p>
              We seek to cultivate an atmosphere of love, grace, faith, and
              fellowship where individuals are empowered to discover and live
              out their God-given purpose in Christ.
            </p>

            <p>
              Through this vision, we desire to establish and strengthen
              churches across Australia and share the hope of Jesus Christ
              with people from diverse communities.
            </p>
          </div>

          <div className="about-image">
            <img
              src={visionMissionImage}
              alt="Jesus Family Church worship and mission"
            />
          </div>

        </div>
      </section>


      {/* =========================
    OUR MISSION
========================= */}
<section className="about-section mission-section">
  <div className="about-container">

    <div className="section-heading">
      <p className="section-label">OUR MISSION</p>

      <h2>Sharing Faith. Building Churches. Serving Communities.</h2>

      <p className="mission-intro">
        Jesus Family Church Australia is committed to sharing the Gospel,
        strengthening churches, and supporting communities across Australia
        and beyond.
      </p>
    </div>


    <div className="mission-grid">

      <div className="mission-card">
        <div className="mission-number">01</div>

        <div className="mission-card-content">
          <h3>Growing Churches</h3>

          
<p>
  To develop churches across Australia.
</p>

        </div>
      </div>


      <div className="mission-card">
        <div className="mission-number">02</div>

        <div className="mission-card-content">
          <h3>Supporting Churches</h3>

          
<p>
  To establish and support churches overseas.
</p>

        </div>
      </div>


      <div className="mission-card">
        <div className="mission-number">03</div>

        <div className="mission-card-content">
          <h3>Supporting Missionaries</h3>

          <p>
            To support missionaries and evangelists who have limited
            resources as they work to spread the Gospel.
          </p>
        </div>
      </div>

    </div>


    <div className="mission-bottom">

      <div className="mission-quote">
        <span className="quote-mark">“</span>

        <p>
          Our mission is to share the hope of Jesus Christ, strengthen
          churches and support those who carry the Gospel to communities
          across Australia and beyond.
        </p>
      </div>

      <a
        href="/christian-beliefs"
        className="beliefs-link"
      >
        Explore Our Beliefs
        <span>→</span>
      </a>

    </div>

  </div>
</section>

      {/* =========================
          MESSAGE FROM PASTOR
      ========================= */}
      <section className="about-section pastor-section">
        <div className="about-container">

          <div className="section-heading">
            
<p className="section-label">MESSAGE FROM THE SENIOR PASTOR AND FOUNDER</p>

            <h2>A Message of Faith & Purpose</h2>
          </div>

          <div className="pastor-layout">

            <div className="pastor-image">
              <img
                src={pastorImage}
                alt="Pastor Edward Wesley - Jesus Family Church Australia"
              />
            </div>

            <div className="pastor-message">

              <p className="pastor-greeting">
                Greetings to you in the name of our Lord and Saviour Jesus Christ.
              </p>

              <p>
                I was born and brought up in a Methodist family in Batticaloa,
                Sri Lanka. My father is a Reverend, and my mother is involved
                in the ministry with him. I was brought up in a very devoted
                and spiritual Christian family built on Christian principles.
                My father and his family were involved in Christian missions
                and helped people with their needs during the early days.
                Currently, most of them are pastors all over the world.
              </p>

              <p>
                When I was a teenager, I used to support churches with their
                ministries, including church, village, and evangelism ministries.
              </p>

              <p>
                Ever since I was a teenager, I have had a passion for serving
                the Lord and wanted to do more and more for Him. I faced so
                many trials and tribulations while spreading the Word of God,
                but God was always there for me, saving me from many
                life-threatening situations.
              </p>

              <p>
                I got married to my beautiful wife, Gail, by the pure will of
                God in 2003, and we migrated to Australia. Through God’s grace,
                I was able to attain a manager position in one of the leading
                banks in Australia. We had two beautiful daughters, and life
                was good.
              </p>

              <p>
                Despite the external success, as time passed, I felt that
                something was missing. I had forgotten the reason God brought
                me to this country. I went looking for the reason for my
                emptiness, and that’s when God revealed His purpose and plan
                for me. It was a purpose for which He brought me to this
                country: to spread the Word of God, to bring light to those
                in darkness, and to relieve people living in bondage
                (Joel 2:18-32).
              </p>

              <p>
                For 8 years, I worshipped God in an Australian church as a
                non-active member. In 2014, we, as a family, started our
                ministry at home with the faith and hope that Jesus would
                bless my work.
              </p>

              <p>
                Amidst numerous trials and tribulations, my wife was a great
                support to me during this difficult period. In 2016, I was
                ordained as a pastor at Jesus Family Church USA, and
                registered our church, “Jesus Family Church Australia”, in 2016.
              </p>

              <p>
                My father, Rev. Wesley Rajadurai, is a pillar of our ministry
                who has given much spiritual support and advice. The Lord
                started doing mighty things through me, and now I can finally
                understand God’s plan for placing me in this country.
              </p>

              <blockquote>
                “He said to them, ‘Go into all the world and preach the gospel
                to all creation.’” — Mark 16:15
              </blockquote>

              <p>
                Our ministry is growing by the grace of our Lord. I humbly
                request you to pray for our ministry and all persecuted
                Christian brothers and sisters suffering around the world.
                I hope this testimony of mine helps encourage your faith in
                the Lord Jesus Christ.
              </p>

              
<p className="pastor-signature">
  In Christ,<br />
  <strong>Senior Pastor and Founder Edward Wesley</strong>
</p>


            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CLOSING MESSAGE
      ========================= */}
      <section className="about-closing">
        <div className="about-container">

          <h2>Come & Worship With Us</h2>

          <p>
            Come and visit our vibrant multilingual Christian congregation
            and feel a difference while experiencing the heavenly touch.
            Here we will strengthen your faith, encourage you, comfort you
            and help you live lives worthy of God, who calls you into His Kingdom.
          </p>

          <a href="/get-in-touch" className="about-button">
            Get In Touch
          </a>

        </div>
      </section>

    </div>
  )
}

export default About
import jesusImage from "../assets/gallery/jesus.jpg";
import spiritImage from "../assets/gallery/sprit.jpg";
import bibleImage from "../assets/gallery/bible.jpg";
import humansImage from "../assets/gallery/humans.jpg";
import salvationImage from "../assets/gallery/salvation.jpg";
import beliefHeroImage from "../assets/gallery/beliefhero1.jpg";

function Beliefs() {
  return (
    <div className="beliefs-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="beliefs-hero">
        <div className="beliefs-container">

          <p className="beliefs-label">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>Our Beliefs</h1>

          <p>
            Discover the faith, hope and truth that guide our church
            and our walk with Jesus Christ.
          </p>

        </div>
      </section>


      {/* =========================
          INTRODUCTION
      ========================= */}
      <section className="beliefs-intro">
        <div className="beliefs-container beliefs-intro-content">

          <p className="beliefs-section-label">
            OUR FAITH
          </p>

          <h2>What We Believe</h2>

          <p>
            Our Christian beliefs are rooted in the foundational truths of
            the Christian faith as revealed in the Bible. We believe in the
            deity of Jesus Christ, salvation by grace through faith, the
            authority of Scripture, the power of prayer, and the importance
            of living out our faith through love and service to others.
          </p>

          <p>
            These Christian beliefs guide our actions, shape our relationships,
            and strengthen our mission to share the hope and love of Christ
            with the world.
          </p>

        </div>
      </section>


      {/* =========================
          GOD THE FATHER
      ========================= */}
      <section className="belief-block father-belief">
        <div className="beliefs-container">

          <div className="belief-text-only">

            <p className="beliefs-section-label">
              01 — GOD THE FATHER
            </p>

            <h2>Our Heavenly Father</h2>

            <p>
              God is the eternal Creator and sovereign Ruler of the universe,
              existing in three distinct persons: the Father, the Son, and the
              Holy Spirit.
            </p>

            <p>
              As the Creator, God brought the universe into existence through
              His divine power and wisdom. He sustains all things by His word
              and governs the course of history according to His divine plan
              and purpose.
            </p>

            <p>
              He is portrayed in Scripture as a compassionate and merciful
              Father who cares deeply for His creation and desires a
              relationship with His children.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          JESUS CHRIST
      ========================= */}
      <section className="belief-block jesus-belief">
        <div className="beliefs-container belief-two-column">

          <div className="belief-image">
            <img
              src={jesusImage}
              alt="Jesus Christ"
            />
          </div>

          <div className="belief-content">

            <p className="beliefs-section-label">
              02 — JESUS CHRIST
            </p>

            <h2>Jesus Christ, Our Saviour & Lord</h2>

            <p>
              Jesus Christ, the Son of God, is at the heart of our Christian
              faith. He lived a sinless life and willingly gave His life on
              the cross as the perfect sacrifice for the sins of humanity.
            </p>

            <p>
              Through His death and resurrection, Jesus offers forgiveness,
              reconciliation with God, and eternal life to all who believe
              in Him.
            </p>

            <p>
              After rising from the dead on the third day, Jesus ascended to
              Heaven and is seated at the right hand of the Father. We believe
              that Jesus Christ will return as King of Kings and Lord of Lords,
              as promised in Scripture.
            </p>

            <p>
              At Jesus Family Church, we proclaim Jesus Christ as our Savior
              and Lord and invite everyone to experience His love, grace,
              and transforming power.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          HOLY SPIRIT
      ========================= */}
      <section className="belief-block spirit-belief">
        <div className="beliefs-container belief-two-column reverse-mobile">

          <div className="belief-content">

            <p className="beliefs-section-label">
              03 — HOLY SPIRIT
            </p>

            <h2>The Presence of God Within Us</h2>

            <p>
              The Holy Spirit is central to our Christian beliefs and is the
              presence of God at work in the world and in the lives of believers.
              We believe the Holy Spirit is fully God, together with God the
              Father and Jesus Christ.
            </p>

            <div className="spirit-points">

              <div className="spirit-point">
                <h3>Guidance</h3>
                <p>
                  The Holy Spirit guides us, gives us wisdom, and helps us
                  understand God's will.
                </p>
              </div>

              <div className="spirit-point">
                <h3>Comfort</h3>
                <p>
                  The Holy Spirit gives comfort, strength, and encouragement,
                  especially during difficult times.
                </p>
              </div>

              <div className="spirit-point">
                <h3>Empowerment</h3>
                <p>
                  The Holy Spirit equips believers with spiritual gifts and
                  strength to serve God and others.
                </p>
              </div>

              <div className="spirit-point">
                <h3>Conviction</h3>
                <p>
                  The Holy Spirit helps us recognize sin and leads us toward
                  repentance and faith in Jesus Christ.
                </p>
              </div>

              <div className="spirit-point">
                <h3>Transformation</h3>
                <p>
                  The Holy Spirit changes our hearts and lives, helping us
                  grow in love, joy, peace, patience, kindness, goodness,
                  faithfulness, gentleness, and self-control.
                </p>
              </div>

            </div>

          </div>

          <div className="belief-image">
            <img
              src={spiritImage}
              alt="The Holy Spirit"
            />
          </div>

        </div>
      </section>


      {/* =========================
          THE BIBLE
      ========================= */}
      <section className="belief-block bible-belief">
        <div className="beliefs-container belief-two-column">

          <div className="belief-image">
            <img
              src={bibleImage}
              alt="The Holy Bible"
            />
          </div>

          <div className="belief-content">

            <p className="beliefs-section-label">
              04 — THE BIBLE
            </p>

            <h2>God's Word</h2>

            <p>
              The Bible is central to our Christian beliefs. It is the Word
              of God, containing divine revelation and guidance for humanity.
            </p>

            <p>
              We believe that the Bible communicates God's will, character,
              and purpose, providing spiritual nourishment, guidance for
              living, and insight into the nature of God's relationship with us.
            </p>

            <p>
              We view the Bible as authoritative, trustworthy, and infallible
              in matters of faith and practice. It reveals God's plan for
              salvation through Jesus Christ and offers comfort, encouragement,
              and conviction for believers.
            </p>

            <p>
              Through its teachings, we seek to understand God's love, mercy,
              and justice, and to live in accordance with His will as revealed
              in Scripture.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          HUMAN BEINGS
      ========================= */}
      <section className="belief-block humans-belief">
        <div className="beliefs-container belief-two-column reverse-mobile">

          <div className="belief-content">

            <p className="beliefs-section-label">
              05 — HUMAN BEINGS
            </p>

            <h2>Created in God's Image</h2>

            <p>
              Our Christian beliefs teach that people are made in the
              spiritual image of God, to be like Him in character.
            </p>

            <p>
              People are the supreme object of God's creation. Although every
              person has tremendous potential for good, all of us are marred
              by an attitude of disobedience towards God, called sin.
            </p>

            <p>
              This attitude separates people from God and causes many
              problems in life.
            </p>

          </div>

          <div className="belief-image">
            <img
              src={humansImage}
              alt="Human beings created in God's image"
            />
          </div>

        </div>
      </section>


      {/* =========================
          SALVATION
      ========================= */}
      <section className="belief-block salvation-belief">
        <div className="beliefs-container belief-two-column">

          <div className="belief-image">
            <img
              src={salvationImage}
              alt="Salvation through Jesus Christ"
            />
          </div>

          <div className="belief-content">

            <p className="beliefs-section-label">
              06 — SALVATION
            </p>

            <h2>Saved by Grace Through Faith</h2>

            <p>
              Salvation is a central part of our Christian beliefs and is
              freely offered by God, but it requires our acceptance.
            </p>

            <p>
              No amount of self-improvement or good deeds can atone for our
              sins. Only by placing our trust in Jesus Christ, who offers
              forgiveness for our sins, can we be saved from the consequences
              of our sins.
            </p>

            <p>
              When we relinquish control of our lives and put our faith in
              Jesus, we experience salvation. Whoever believes in Jesus Christ
              will not perish but instead have eternal life.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          CLOSING
      ========================= */}
      <section className="beliefs-closing">

        <div className="beliefs-container">

          <p className="beliefs-section-label">
            WALK WITH US
          </p>

          <h2>Grow in Faith With Us</h2>

          <p>
            Come and visit our vibrant multilingual Christian congregation
            and experience the love, grace and hope of Jesus Christ.
            We would love to welcome you into our church family.
          </p>

          <a
            href="/get-in-touch"
            className="beliefs-button"
          >
            Get In Touch
          </a>

        </div>

      </section>

    </div>
  )
}

export default Beliefs
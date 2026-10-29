
import contactHero from "../assets/gallery/getintouch.jpg";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Languages,
  Send,
  MessageCircle,
} from "lucide-react";
import "../App.css";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
const [submissionMessage, setSubmissionMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);


function handleChange(event) {
  const { name, value } = event.target;

  setFormData((previous) => ({
    ...previous,
    [name]: value,
  }));
}

async function handleSubmit(event) {
  event.preventDefault();

  setIsSubmitting(true);
  setSubmissionMessage("");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "500670db-4952-4fa0-a966-f2121884c102",
        subject: "Website Contact Enquiry - " + formData.name,
        from_name: "Jesus Family Church Australia",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        replyto: formData.email,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setSubmissionMessage(
        "Thank you! Your message has been sent successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setSubmissionMessage(
        result.message || "Your message could not be sent. Please try again."
      );
    }
  } catch {
    setSubmissionMessage(
      "Unable to send your message. Please check your internet connection and try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <div className="get-in-touch-page">

      

<section
  className="contact-hero"
  style={{
    backgroundImage: `url(${contactHero})`
  }}
>
  <div className="contact-hero-content">
    <p className="contact-eyebrow">
      JESUS FAMILY CHURCH AUSTRALIA
    </p>

    <h1>Get In Touch</h1>

    <p>
      We'd love to hear from you. Whether you have a question,
      need prayer, or would like to visit us, you're always welcome.
    </p>

    <a href="#contact-details" className="contact-hero-button">
      Contact Our Church
    </a>
  </div>
</section>

      {/* INTRODUCTION */}
      <section className="contact-intro">
        <p className="contact-section-label">WE'RE HERE FOR YOU</p>

        <h2>
          Let's Connect <span>With Each Other</span>
        </h2>

        <p>
          Jesus Family Church Australia is a multicultural church
          family where people from different backgrounds and
          languages come together in faith. Reach out to us or
          join us for a Sunday service.
        </p>
      </section>

      {/* CONTACT FORM AND DETAILS */}
      <section className="contact-main-section" id="contact-details">
        <div className="contact-main-container">

          {/* CONTACT FORM */}
          <div className="contact-form-box">
            <p className="contact-section-label">SEND US A MESSAGE</p>

            <h2>We'd Love to Hear From You</h2>

            <p className="contact-form-description">
              Fill in the form below and send your message directly to our church.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we help you?"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>


              
              <button
                type="submit"
                className="contact-submit-button"
                disabled={isSubmitting}
              >
              <Send size={17} />
               {isSubmitting ? "Sending..." : "Send Message"}
              </button>


              
             {submissionMessage && (
               <p className="contact-form-notice" role="status">
                {submissionMessage}
               </p>
             )}

            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="contact-info-box">
            <p className="contact-section-label">CONTACT INFORMATION</p>

            <h2>Connect With Us</h2>

            <p className="contact-info-intro">
              We look forward to welcoming you and your family.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={22} />
              </div>

              <div>
                <h3>Our Location</h3>
                <p>Spring Street Hall</p>
                <p>1 Spring St, Thomastown</p>
                <p>VIC 3074, Australia</p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Spring+Street+Hall+1+Spring+St+Thomastown+VIC+3074+Australia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={22} />
              </div>

              <div>
                <h3>Email Us</h3>
                <a href="mailto:jesusfamilychurchaustralia@gmail.com">
                  jesusfamilychurchaustralia@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={22} />
              </div>

              
<div>
  <h3>Call Us</h3>

  <a href="tel:0481010181">
    0481 010 181
  </a>
  <br />

  <a href="tel:0430027451">
    0430 027 451
  </a>
  <br />

  <a href="tel:+61432248276">
    +61 432 248 276
  </a>
</div>

            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Clock size={22} />
              </div>

              <div>
                <h3>Sunday Service</h3>
                <p>Sunday, 2:30 PM – 4:30 PM</p>
                <p>Sunday School &amp; Youth, 3:30 PM – 4:30 PM</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Languages size={22} />
              </div>

              <div>
                <h3>Languages</h3>
                <p>
                  English, Telugu, Tamil, Hindi, Malayalam
                  and Sinhala
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <div className="contact-map-heading">
          <p className="contact-section-label">FIND US</p>
          <h2>We Look Forward to Meeting You</h2>
          <p>
            Join our church family for worship, fellowship and
            spiritual growth.
          </p>
        </div>

        <div className="contact-map-container">
          <iframe
            title="Jesus Family Church Australia Location"
            src="https://maps.google.com/maps?q=Spring%20Street%20Hall%2C%201%20Spring%20St%2C%20Thomastown%20VIC%203074%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* FINAL INVITATION */}
      <section className="contact-visit-section">
        <div className="contact-visit-icon">
          <MessageCircle size={28} />
        </div>

        <h2>You Are Always Welcome Here</h2>

        <p>
          Come as you are. We'd be happy to meet you, pray with
          you, and welcome you into our church family.
        </p>

        <a href="/ministries" className="ministries-contact-button">
  Explore Our Ministries →
</a>
      </section>

    </div>
  );
}

export default GetInTouch;

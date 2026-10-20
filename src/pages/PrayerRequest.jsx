
import { useState } from "react";
import prayerImage from "../assets/gallery/prayer.jpg";

function PrayerRequest() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "",
    prayer: "",
    privacy: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

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
    setSubmissionSuccess(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "500670db-4952-4fa0-a966-f2121884c102",
          subject: "Prayer Request - Jesus Family Church Australia",
          from_name: "Jesus Family Church Australia - Prayer Request",
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          prayer_request: formData.prayer,
          privacy_preference: formData.privacy,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionSuccess(true);
        setSubmissionMessage(
          "Thank you for sharing your prayer request. Our church has received your submission."
        );

        setFormData({
          name: "",
          date: "",
          phone: "",
          prayer: "",
          privacy: "",
        });
      } else {
        setSubmissionMessage(
          result.message ||
            "Your prayer request could not be submitted. Please try again."
        );
      }
    } catch {
      setSubmissionMessage(
        "Unable to submit your prayer request. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="website">
      {/* PRAYER HERO */}
      <section
        className="prayer-hero"
        style={{ backgroundImage: `url(${prayerImage})` }}
      >
        <div className="prayer-hero-overlay"></div>

        <div className="prayer-hero-content">
          <p className="prayer-label">
            JESUS FAMILY CHURCH AUSTRALIA
          </p>

          <h1>Prayer Request</h1>

          <p>Share your prayer request with us</p>
        </div>
      </section>

      {/* PRAYER INTRO */}
      <section className="prayer-main">
        <div className="prayer-container">
          <div className="prayer-intro">
            <p className="section-label">WE ARE HERE TO PRAY</p>

            <h2>We Would Love to Pray With You</h2>

            <p>
              If you have a prayer request, please share it with us.
              Our church family would be honoured to pray for you.
            </p>

            <div className="prayer-message">
              <span>♥</span>

              <p>
                You don't have to walk through difficult moments alone.
                We believe in the power of prayer and would be blessed
                to stand with you in prayer.
              </p>
            </div>
          </div>

          {/* PRAYER REQUEST FORM */}
          <div className="prayer-form-card">
            <div className="prayer-form-heading">
              <p className="form-label">
                JESUS FAMILY CHURCH AUSTRALIA
              </p>

              <h3>Prayer Request Form</h3>

              <p>
                Please fill in the details below and let us know how
                we can pray for you.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* YOUR NAME */}
              <div className="prayer-field">
                <label htmlFor="prayer-name">Your Name</label>

                <input
                  type="text"
                  id="prayer-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* DATE */}
              <div className="prayer-field">
                <label htmlFor="prayer-date">Date</label>

                <input
                  type="date"
                  id="prayer-date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PHONE NUMBER */}
              <div className="prayer-field">
                <label htmlFor="prayer-phone">Your Phone Number</label>

                <input
                  type="tel"
                  id="prayer-phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PRAYER REQUEST */}
              <div className="prayer-field">
                <label htmlFor="prayer-text">
                  What is the Prayer Request?
                </label>

                <textarea
                  id="prayer-text"
                  name="prayer"
                  rows="7"
                  placeholder="Please share your prayer request with us..."
                  value={formData.prayer}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* PRIVACY */}
              <div className="prayer-privacy">
                <h4>Would you like this request kept private?</h4>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="privacy"
                    value="private"
                    checked={formData.privacy === "private"}
                    onChange={handleChange}
                    required
                  />

                  <span>Yes, please</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="privacy"
                    value="share"
                    checked={formData.privacy === "share"}
                    onChange={handleChange}
                  />

                  <span>No, please share</span>
                </label>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="prayer-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Prayer Request"}
              </button>

              {submissionMessage && (
                <p
                  className="contact-form-notice"
                  role="status"
                  aria-live="polite"
                >
                  {submissionMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="prayer-closing">
        <div className="prayer-closing-container">
          <div className="prayer-cross">✝</div>

          <h2>You Are in Our Prayers</h2>

          <p>
            Whatever you are going through, know that you are not alone.
            Our church family is here to pray with you, encourage you,
            and support you.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrayerRequest;

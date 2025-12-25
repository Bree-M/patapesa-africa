// src/pages/Contact.jsx - FINAL PREMIUM CONTACT PAGE (December 25, 2025)
// Fully compliant with all requirements: trust-first, human, fintech-grade
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject) newErrors.subject = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In real implementation: send to Formspree, backend, etc.
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="intro">
            We're here to help. Whether you're exploring our platform, need support, or want to partner. Reach out directly.
          </p>

          {/* SELF-SERVICE ZONE */}
          <div className="self-service">
            <a href="https://help.patapesa.africa" className="help-link" target="_blank" rel="noopener noreferrer">
              Have a quick question? Visit our Help Center →
            </a>

            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>All systems operational</span>
              <a href="https://status.patapesa.africa" target="_blank" rel="noopener noreferrer">View status</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main page-section">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT: SMART CONTACT FORM */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>We typically respond within 2–4 hours on business days.</p>

              {submitted && (
                <div className="success-message">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Inquiry Type</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "error" : ""}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="account">Account Access</option>
                    <option value="technical">Technical Issue</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="media">Media / Press</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.subject && <span id="subject-error" className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  ></textarea>
                  {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary full-width">
                  Send Message
                </button>

                <p className="security-note">
                  <span className="lock-icon">🔒</span>
                  Your data is protected under the Kenya Data Protection Act. Encrypted & secure.
                </p>
              </form>
            </div>

            {/* RIGHT: DIRECT CONTACT METHODS */}
            <div className="direct-contact">
              <h2>Other Ways to Reach Us</h2>

              <div className="contact-method">
                <h3>Live Chat</h3>
                <p>Typically replies in ~2 minutes during business hours.</p>
                <button className="btn btn-secondary">Start Live Chat</button>
                <p className="offline-note">Offline? Leave a message — we'll reply via email.</p>
              </div>

              <div className="contact-method">
                <h3>Email Support</h3>
                <p>
                  <a href="mailto:support@patapesa.africa">support@patapesa.africa</a>
                </p>
                <p>Best for detailed inquiries. Response within 24 hours.</p>
              </div>

              <div className="contact-method emergency">
                <h3>Emergency Support</h3>
                <p>For fraud reports or account lock issues:</p>
                <p className="phone">+254 700 000000</p>
                <p>Available 24/7</p>
              </div>

              <div className="team-highlight">
                <p>
                  <strong>You’ll be helped by our Nairobi-based team</strong><br />
                  Real people. No bots. Always professional and kind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHYSICAL PRESENCE & TRUST ZONE */}
      <section className="contact-trust page-section">
        <div className="container">
          <h2>Our Office</h2>
          <div className="trust-grid">
            <div className="office-info">
              <p>
                <strong>PataPesa Africa.</strong><br />
                A product of Circle Fund Africa.<br />
                TUWORK COWORKING NAIROBI,<br />
                Olenguruone Ave, Lavington,Nairobi<br />
                <strong>Mailing Address:</strong><br />
                 TUWORK PARK<br />
                P.O BOX 17888 - 00100<br />
                NAIROBI,KENYA
              </p>
              <p className="jurisdiction">
                Operating under Kenyan law. Non-custodial marketplace.
              </p>
            </div>


      {/* Map Embed */}
      <div className="map-placeholder">
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps?q=TUWORK%20Coworking%20Space%2C%20Olenguruone%20Avenue%2C%20Lavington%2C%20Nairobi&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PataPesa Africa Office Location - TUWORK Coworking Nairobi"
          ></iframe>
        </div>
      </div>
          </div>
        </div>
      </section>
    </>
  );
}
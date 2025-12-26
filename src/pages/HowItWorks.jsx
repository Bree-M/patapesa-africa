// src/pages/HowItWorks.jsx - FINAL PREMIUM HOW IT WORKS PAGE (December 26, 2025)
// Fully compliant with all requirements: transparent, trust-first, human, conversion-focused
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is my money ever held by PataPesa?",
      a: "No. PataPesa is a non-custodial platform. We never touch or hold your funds. All transactions flow directly between you and the licensed provider via secure routing.",
    },
    {
      q: "How long do transactions take?",
      a: "Most transactions are instant or complete within minutes, depending on the provider and payment method (M-Pesa, bank transfer, card, or stablecoin).",
    },
    {
      q: "Can I connect multiple banks or wallets?",
      a: "Yes. You can securely link multiple accounts — M-Pesa, bank accounts, cards, and crypto wallets — for seamless access across services.",
    },
    {
      q: "What happens if a provider declines my request?",
      a: "You’ll receive a clear notification with the reason. We’ll immediately suggest alternative verified providers that match your needs.",
    },
    {
      q: "Are there transaction limits?",
      a: "Limits are set by individual providers, not PataPesa. We show limits clearly during comparison so you can choose what works best for you.",
    },
  ];

  return (
    <>
      {/* 3. HERO SECTION */}
      <section className="how-hero">
        <div className="container">
          <h1>How PataPesa Works. <br />Simple, Secure, and Built for You</h1>
          <p className="sub">
            From onboarding to transactions, see exactly how PataPesa connects you to trusted financial services — with full control in your hands.
          </p>

          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <button className="btn btn-secondary video-trigger">
              Watch 60s Demo
            </button>
          </div>

          {/* Optional subtle video preview placeholder */}
          <div className="hero-video-preview">
            <div className="video-placeholder">
              <span className="play-icon">▶</span>
              <p>App interface walkthrough</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE APP WALKTHROUGH - SCROLL-BASED */}
      <section className="walkthrough page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Your Journey on PataPesa</h2>
          <div className="walkthrough-steps">
            <div className="step active" data-step="1">
              <div className="step-content">
                <h3>1. Secure Onboarding</h3>
                <p>Quick KYC verification with bank-grade encryption. Your data is protected under Kenya Data Protection Act.</p>
              </div>
              <div className="step-visual">
                <div className="mockup-placeholder onboarding"></div>
              </div>
            </div>

            <div className="step" data-step="2">
              <div className="step-content">
                <h3>2. Smart Matching</h3>
                <p>Tell us your goals. Our intelligent system recommends verified providers tailored to your needs.</p>
              </div>
              <div className="step-visual">
                <div className="mockup-placeholder matching"></div>
              </div>
            </div>

            <div className="step" data-step="3">
              <div className="step-content">
                <h3>3. Direct Action</h3>
                <p>Connect instantly. Save, borrow, invest, or pay — directly with providers. We never hold your money.</p>
              </div>
              <div className="step-visual">
                <div className="mockup-placeholder transaction"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEP-BY-STEP USER JOURNEY */}
      <section className="user-journey page-section">
        <div className="container">
          <h2 className="section-title">Your Journey in 3 Phases</h2>

          <div className="journey-grid">
            <div className="journey-phase">
              <div className="phase-icon">🔐</div>
              <h3>Phase 1: Security & Setup</h3>
              <ul>
                <li>Fast, compliant identity verification</li>
                <li>End-to-end data encryption</li>
                <li>Full alignment with Kenya Data Protection Act</li>
              </ul>
              <div className="trust-badge">Bank-grade security from day one</div>
            </div>

            <div className="journey-phase">
              <div className="phase-icon">💳</div>
              <h3>Phase 2: Funding & Linking</h3>
              <ul>
                <li>Connect M-Pesa, banks, cards, or wallets</li>
                <li>Secure tokenization — no storage of sensitive details</li>
                <li>You remain in full control of your accounts</li>
              </ul>
            </div>

            <div className="journey-phase">
              <div className="phase-icon">✅</div>
              <h3>Phase 3: Take Action Instantly</h3>
              <ul>
                <li>Save automatically with high-yield options</li>
                <li>Apply for credit with pre-qualified offers</li>
                <li>Access financial coaching and wellness programs</li>
                <li>Pay or transfer securely across channels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE TECH BEHIND THE MAGIC */}
      <section className="tech-stack page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">The Tech Behind the Magic</h2>
          <div className="tech-grid">
            <div className="tech-block">
              <h3>Non-Custodial Architecture</h3>
              <p>Direct provider-to-user connections. PataPesa never sees or holds funds.</p>
            </div>
            <div className="tech-block">
              <h3>Secure API Integration</h3>
              <p>Encrypted channels with real-time monitoring and fraud detection.</p>
            </div>
            <div className="tech-block">
              <h3>Intelligent Matching Engine</h3>
              <p>Privacy-preserving AI that learns your needs without compromising data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE FAQ */}
      <section className="faq-section page-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle">{activeFaq === index ? "−" : "+"}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VIDEO DEMO SECTION */}
      <section className="video-demo page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">See It in Action</h2>
          <p className="video-intro">Watch how simple and secure PataPesa is — in under 60 seconds.</p>
          <div className="video-container">
            {/* Replace with real video in production */}
            <div className="video-placeholder large">
              <span className="play-icon large">▶</span>
              <p>60-second explainer video</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SUPPORT & HELP CTA */}
      <section className="support-cta page-section">
        <div className="container">
          <h2>Need Help Getting Started?</h2>
          <p>Our Nairobi-based team is ready to assist you — calmly and professionally.</p>
          <div className="support-buttons">
            <Link to="/help" className="btn btn-secondary">Visit Help Center</Link>
            <button className="btn btn-primary">Chat with Support</button>
          </div>
          <p className="support-note">
            Typically replies in ~2 minutes during business hours (EAT)
          </p>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="final-cta page-section">
        <div className="container">
          <h2>Ready to Experience Smarter Finance?</h2>
          <p>Join thousands already simplifying their financial lives with PataPesa.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary large">Get Started</Link>
            <Link to="/contact" className="btn btn-secondary large">Create Free Account</Link>
          </div>
        </div>
      </section>
    </>
  );
}
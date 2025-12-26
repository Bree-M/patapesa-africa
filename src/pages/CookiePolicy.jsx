// src/pages/CookiePolicy.jsx - FINAL COOKIE POLICY PAGE (December 26, 2025)
// Privacy-forward, consent-first, regulatory compliant, plain language
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="cookie-hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p className="sub">
            We use cookies and similar technologies to make PataPesa work properly, improve your experience, and understand how the platform is used — always with your control and privacy in mind.
          </p>
          <p className="update-note">
            <strong>Last updated:</strong> December 2025 • Version 1.3
          </p>
        </div>
      </section>

      {/* INTRODUCTION & CONSENT */}
      <section className="cookie-intro page-section">
        <div className="container">
          <h2>How We Use Cookies</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and provide insights into how we can improve.
          </p>
          <p>
            <strong>We do not load non-essential cookies until you give permission.</strong> 
            Only cookies required for the platform to work are active by default.
          </p>
          <p>
            You can manage your preferences at any time using the <button className="link-btn">Cookie Preferences</button> button (usually in the bottom-right corner).
          </p>
        </div>
      </section>

      {/* COOKIE CATEGORIES */}
      <section className="cookie-categories page-section bg-subtle">
        <div className="container">
          <h2>Types of Cookies We Use</h2>

          <div className="categories-grid">
            {/* ESSENTIAL */}
            <div className="category-card essential">
              <h3>Essential Cookies</h3>
              <p className="status">Always active • Cannot be disabled</p>
              <p>
                These are strictly necessary for core functionality — such as staying logged in, preventing fraud, and ensuring secure transactions.
              </p>
              <ul>
                <li>Session management & authentication</li>
                <li>CSRF protection tokens</li>
                <li>Load balancing & routing</li>
                <li>Security & fraud detection markers</li>
              </ul>
              <p className="note">
                <strong>Consent not required</strong> — they are essential for safety and service delivery.
              </p>
            </div>

            {/* FUNCTIONAL */}
            <div className="category-card">
              <h3>Functional Cookies</h3>
              <p className="status">Optional • Off by default</p>
              <p>
                Remember your preferences to make the platform more personal.
              </p>
              <ul>
                <li>Language and region settings</li>
                <li>Accessibility preferences (e.g., text size)</li>
                <li>Interface theme (light/dark mode)</li>
              </ul>
            </div>

            {/* ANALYTICS */}
            <div className="category-card">
              <h3>Analytics Cookies</h3>
              <p className="status">Optional • Off by default</p>
              <p>
                Help us understand how visitors use PataPesa so we can improve performance and features.
              </p>
              <ul>
                <li>Aggregated, anonymized usage data</li>
                <li>Page views, navigation paths</li>
                <li>Performance metrics</li>
              </ul>
              <p className="note">
                Data retained for up to 14 months • No personal identifiers shared.
              </p>
            </div>

            {/* THIRD-PARTY */}
            <div className="category-card">
              <h3>Third-Party Cookies</h3>
              <p className="status">Optional • Off by default</p>
              <p>
                Used only when you interact with embedded services (e.g., support chat, analytics tools).
              </p>
              <ul>
                <li>Support platform (e.g., Intercom or self-hosted)</li>
                <li>Analytics providers (e.g., Google Analytics – anonymized IP)</li>
              </ul>
              <p className="note">
                Each provider is listed in our preference center with purpose and retention details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND COOKIES */}
      <section className="beyond-cookies page-section">
        <div className="container">
          <h2>Beyond Cookies: Other Tracking Technologies</h2>
          <p>
            We may also use the following technologies for similar purposes:
          </p>

          <ul className="tech-list">
            <li><strong>Local Storage</strong> — Stores preferences locally in your browser (e.g., saved filters)</li>
            <li><strong>Session Storage</strong> — Temporary data cleared when you close the tab</li>
            <li><strong>Web Beacons / Pixels</strong> — Small images that confirm email opens or page visits (analytics only)</li>
          </ul>

          <p>
            These technologies follow the same consent rules as cookies and can be managed through your browser settings.
          </p>
        </div>
      </section>

      {/* USER CONTROL */}
      <section className="user-control page-section bg-subtle">
        <div className="container">
          <h2>Your Control & Rights</h2>

          <div className="control-grid">
            <div className="control-item">
              <h3>Manage Preferences</h3>
              <p>
                Click the “Cookie Preferences” button (bottom-right) to change your settings at any time.
              </p>
            </div>
            <div className="control-item">
              <h3>Browser Settings</h3>
              <p>
                You can block or delete cookies directly in your browser:
              </p>
              <ul>
                <li>Chrome: Settings → Privacy → Cookies</li>
                <li>Safari: Preferences → Privacy</li>
                <li>Firefox: Options → Privacy & Security</li>
                <li>Edge: Settings → Cookies and site permissions</li>
              </ul>
            </div>
            <div className="control-item">
              <h3>Global Privacy Control (GPC)</h3>
              <p>
                If your browser sends a Global Privacy Control signal, we automatically treat it as a request to opt out of non-essential cookies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA & AI */}
      <section className="data-ai page-section">
        <div className="container">
          <h2>Data Processing & AI</h2>
          <p>
            <strong>Data collected via cookies is not used to train AI models.</strong><br />
            Our AI systems rely only on anonymized, aggregated behavioral signals to improve matching and recommendations.
          </p>

          <h3>Data Location & Transfers</h3>
          <p>
            Core user data is stored on secure servers located in Kenya.<br />
            Where data is processed internationally, we use approved safeguards including Standard Contractual Clauses (SCCs) in compliance with the Kenya Data Protection Act (2019).
          </p>
        </div>
      </section>

      {/* CONTACT & LEGAL */}
      <section className="contact-legal page-section bg-subtle">
        <div className="container">
          <h2>Questions or Requests?</h2>
          <p>
            Contact our Data Protection Officer:<br />
            <a href="mailto:privacy@patapesa.africa">privacy@patapesa.africa</a>
          </p>

          <p>
            Related policies:<br />
            <Link to="/privacy">Privacy Policy</Link> • 
            <Link to="/data-protection">Data Protection</Link> • 
            <Link to="/security">Security</Link>
          </p>

          <p className="regulatory">
            PataPesa Africa is a registered Data Controller under the Kenya Data Protection Act (2019).
          </p>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="cookie-summary page-section">
        <div className="container">
          <blockquote>
            Your privacy is not a feature — it’s a right.<br />
            PataPesa Africa is committed to transparency, control, and trust in every digital interaction.
          </blockquote>
        </div>
      </section>
    </>
  );
}
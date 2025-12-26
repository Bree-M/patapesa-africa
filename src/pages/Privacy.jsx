// src/pages/Privacy.jsx - FINAL PRIVACY POLICY PAGE (December 26, 2025)
// Trust-first, transparent, regulatory-compliant, human-readable
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* HERO - PRIVACY NUTRITION LABEL */}
      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="sub">
            Your data is not a commodity. It’s a responsibility. At PataPesa, privacy is not optional — it’s foundational.
          </p>

          <div className="update-note">
            <strong>Last Updated:</strong> 14 August 2025 • Version 2.1
          </div>

          {/* PRIVACY NUTRITION LABEL */}
          <div className="nutrition-label">
            <h2>Privacy at a Glance</h2>
            <table className="nutrition-table">
              <thead>
                <tr>
                  <th>What We Collect</th>
                  <th>Why We Collect It</th>
                  <th>Legal Basis</th>
                  <th>Stored Where</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account Info<br /><small>Name, phone, email, ID (if required)</small></td>
                  <td>Account creation & verification</td>
                  <td>Contract</td>
                  <td>Kenya</td>
                </tr>
                <tr>
                  <td>Transactions<br /><small>Payments, balances, history</small></td>
                  <td>Service delivery & audits</td>
                  <td>Legal obligation</td>
                  <td>Kenya</td>
                </tr>
                <tr>
                  <td>Device Data<br /><small>IP, device type, browser</small></td>
                  <td>Security & fraud prevention</td>
                  <td>Legitimate interest</td>
                  <td>Kenya / EU</td>
                </tr>
                <tr>
                  <td>Marketing Data<br /><small>Preferences, communication history</small></td>
                  <td>Updates & insights</td>
                  <td>Consent</td>
                  <td>Optional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="recent-changes">
            <h3>Recent Changes</h3>
            <ul>
              <li>Added biometric data clarification</li>
              <li>Updated cross-border data transfer disclosures</li>
              <li>Introduced AI decision-making transparency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE DATA CATEGORIES */}
      <section className="data-categories page-section bg-subtle">
        <div className="container">
          <h2>What Data We Collect & Why</h2>

          <div className="accordion">
            <div className={`accordion-item ${openSection === "identifiers" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("identifiers")}>
                <h3>Personal Identifiers</h3>
                <span className="toggle">{openSection === "identifiers" ? "−" : "+"}</span>
              </button>
              {openSection === "identifiers" && (
                <div className="accordion-content">
                  <p>We collect your name, phone number, email, and national ID (only when required for regulated services).</p>
                  <p><strong>Purpose:</strong> To create and verify your account securely.</p>
                  <p><strong>Legal Basis:</strong> Contractual necessity</p>
                </div>
              )}
            </div>

            <div className={`accordion-item ${openSection === "transactions" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("transactions")}>
                <h3>Transactional & Financial Data</h3>
                <span className="toggle">{openSection === "transactions" ? "−" : "+"}</span>
              </button>
              {openSection === "transactions" && (
                <div className="accordion-content">
                  <p>Includes payment records, wallet balances, and settlement history.</p>
                  <p><strong>Purpose:</strong> Execute transactions and comply with AML/CFT regulations.</p>
                  <p><strong>Legal Basis:</strong> Legal obligation</p>
                </div>
              )}
            </div>

            <div className={`accordion-item ${openSection === "device" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("device")}>
                <h3>Device & Technical Data</h3>
                <span className="toggle">{openSection === "device" ? "−" : "+"}</span>
              </button>
              {openSection === "device" && (
                <div className="accordion-content">
                  <p>IP address, device type, operating system, and browser metadata.</p>
                  <p><strong>Purpose:</strong> Fraud detection, security monitoring, and service improvement.</p>
                  <p><strong>Legal Basis:</strong> Legitimate interest</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BIOMETRIC DATA */}
      <section className="biometric page-section">
        <div className="container">
          <h2>Biometric Data</h2>
          <div className="highlight-card">
            <p>
              <strong>PataPesa does not store biometric data.</strong>
            </p>
            <p>
              Face ID and fingerprint authentication happen locally on your device. No biometric templates are transmitted or stored on our servers. Authentication uses secure OS-level APIs (Apple / Android).
            </p>
          </div>
        </div>
      </section>

      {/* THIRD-PARTY & TRANSFERS */}
      <section className="third-party page-section bg-subtle">
        <div className="container">
          <h2>Third Parties & Cross-Border Transfers</h2>

          <div className="third-party-table">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Purpose</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payment Rails</td>
                  <td>M-Pesa, Partner Banks</td>
                  <td>Transaction processing</td>
                  <td>Kenya</td>
                </tr>
                <tr>
                  <td>Infrastructure</td>
                  <td>AWS, Cloudflare</td>
                  <td>Secure hosting & delivery</td>
                  <td>EU / USA</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>Privacy-safe tools</td>
                  <td>Performance insights</td>
                  <td>EU / USA</td>
                </tr>
                <tr>
                  <td>Messaging</td>
                  <td>Email/SMS gateways</td>
                  <td>Notifications</td>
                  <td>EU / USA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="transfer-note">
            <strong>We do not sell personal data.</strong> Cross-border transfers occur only for infrastructure reliability and security, governed by Standard Contractual Clauses (SCCs) and the Kenya Data Protection Act (2019).
          </p>
        </div>
      </section>

      {/* USER RIGHTS */}
      <section className="user-rights page-section">
        <div className="container">
          <h2>Your Rights</h2>
          <div className="rights-grid">
            <div className="right-item">
              <h3>Access & Correction</h3>
              <p>View and update your data in-app or request a copy.</p>
            </div>
            <div className="right-item">
              <h3>Deletion</h3>
              <p>Delete your account and associated data anytime.</p>
            </div>
            <div className="right-item">
              <h3>Restriction & Objection</h3>
              <p>Limit processing or object to marketing/profiling.</p>
            </div>
            <div className="right-item">
              <h3>Portability</h3>
              <p>Export your data in CSV or JSON format.</p>
            </div>
          </div>
          <p className="rights-cta">
            Exercise your rights via the app or email <a href="mailto:privacy@patapesa.africa">privacy@patapesa.africa</a>
          </p>
        </div>
      </section>

      {/* AI TRANSPARENCY */}
      <section className="ai-transparency page-section bg-subtle">
        <div className="container">
          <h2>AI & Automated Decisions</h2>
          <p>
            PataPesa uses AI-assisted systems to recommend financial products and optimize service matching.
          </p>
          <p className="highlight">
            <strong>No fully automated decisions with legal or financial impact.</strong><br />
            You can always request a human review, explanation, or manual override.
          </p>
        </div>
      </section>

      {/* CHILDREN'S DATA */}
      <section className="childrens-data page-section">
        <div className="container">
          <h2>Children’s Privacy</h2>
          <p>
            PataPesa is not intended for users under 18. We apply age-gating at onboarding.<br />
            If data is collected unintentionally, it will be deleted upon request with parent/guardian verification.
          </p>
        </div>
      </section>

      {/* RETENTION */}
      <section className="retention page-section bg-subtle">
        <div className="container">
          <h2>Data Retention</h2>
          <table className="retention-table">
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Account Info</td><td>While active + 30 days</td></tr>
              <tr><td>Financial Records</td><td>7 years (AML law)</td></tr>
              <tr><td>Support Tickets</td><td>24 months</td></tr>
              <tr><td>Analytics</td><td>12–18 months</td></tr>
            </tbody>
          </table>
          <p>
            Data is securely deleted using cryptographic wiping. Backups follow a rolling purge schedule.
          </p>
        </div>
      </section>

      {/* CONTACT & GOVERNANCE */}
      <section className="privacy-contact page-section">
        <div className="container">
          <h2>Contact Our Data Protection Officer</h2>
          <p>
            For privacy questions or rights requests:<br />
            <a href="mailto:privacy@patapesa.africa">privacy@patapesa.africa</a>
          </p>
          <p className="regulatory">
            PataPesa Africa is a registered Data Controller under the Kenya Data Protection Act, 2019.
          </p>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="privacy-closing page-section bg-subtle">
        <div className="container">
          <blockquote>
            Your data is not a commodity. It’s a responsibility.<br />
            At PataPesa, privacy is not optional — it’s foundational.
          </blockquote>
        </div>
      </section>
    </>
  );
}
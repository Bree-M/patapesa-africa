// src/pages/DataProtection.jsx - FINAL DATA PROTECTION PAGE (December 26, 2025)
// Regulatory-compliant, trust-first, user-centric, calm & authoritative
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DataProtection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* HERO - USER-FIRST COMMITMENT */}
      <section className="dp-hero">
        <div className="container">
          <h1>Your Data. Your Rights. Our Responsibility.</h1>
          <p className="sub">
            At PataPesa, we believe your personal data belongs to you. We only collect and process what is necessary to deliver secure, reliable financial services.
          </p>

          {/* TRUST BADGE ROW */}
          <div className="dp-badges">
            <div className="badge">
              <span className="icon">✅</span>
              Kenya Data Protection Act (2019) Compliant
            </div>
            <div className="badge">
              <span className="icon">📋</span>
              ODPC Registered
            </div>
            <div className="badge">
              <span className="icon">🔒</span>
              Secure by Design
            </div>
            <div className="badge">
              <span className="icon">🛡️</span>
              Privacy-by-Default Architecture
            </div>
          </div>

          <div className="update-note">
            <strong>Last Updated:</strong> December 2025 • Version 2.3
          </div>
        </div>
      </section>

      {/* SCOPE & LEGAL POSITIONING */}
      <section className="dp-scope page-section bg-subtle">
        <div className="container">
          <h2>Scope & Legal Role</h2>

          <div className="scope-content">
            <p>
              This Data Protection Policy applies to the PataPesa mobile app, web platform, APIs, and partner integrations.
            </p>
            <p>
              It covers all users located in Kenya and any users whose data is processed within Kenya.
            </p>

            <div className="highlight-card">
              <p>
                <strong>PataPesa Africa acts as both a Data Controller and, in certain partner integrations, a Data Processor,</strong> as defined under the Kenya Data Protection Act, 2019.
              </p>
              <ul>
                <li><strong>Controller:</strong> We determine the purpose and means of processing your data for core services.</li>
                <li><strong>Processor:</strong> We process data on behalf of regulated partners (e.g., banks, SACCOs) under strict agreements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DATA RESIDENCY */}
      <section className="dp-residency page-section">
        <div className="container">
          <h2>Data Residency & Sovereignty</h2>

          <div className="residency-content">
            <p>
              <strong>All primary user data is stored on secure servers located in Kenya.</strong>
            </p>
            <p>
              Our hosting providers comply with ISO 27001 and undergo regular security assessments.
            </p>

            <div className="highlight-card">
              <p>
                <strong>We do not transfer personal data outside Kenya without legal basis and user awareness.</strong><br />
                Any exceptional cross-border transfers are protected by Standard Contractual Clauses (SCCs) and ODPC-approved safeguards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USER CONSENT & CONTROL */}
      <section className="dp-control page-section bg-subtle">
        <div className="container">
          <h2>Your Consent & Control</h2>

          <div className="control-grid">
            <div className="control-item">
              <h3>Granular Consent</h3>
              <p>You control:</p>
              <ul>
                <li>Marketing communications</li>
                <li>Analytics participation</li>
                <li>Product personalization</li>
              </ul>
              <p>Manage via in-app Privacy Settings or Cookie Preferences.</p>
            </div>

            <div className="control-item">
              <h3>Right to Erasure</h3>
              <p>Request deletion of your account and data anytime.</p>
              <p>Financial records may be retained for AML obligations.</p>
            </div>

            <div className="control-item">
              <h3>Data Portability</h3>
              <p>Export your:</p>
              <ul>
                <li>Transaction history</li>
                <li>Account profile</li>
                <li>Activity logs</li>
              </ul>
              <p>In CSV or JSON format — delivered securely within 7–14 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY CONTROLS */}
      <section className="dp-security page-section">
        <div className="container">
          <h2>Security Controls & Defense</h2>

          <div className="security-grid">
            <div className="security-item">
              <h3>Encryption Standards</h3>
              <ul>
                <li>Data at rest: AES-256</li>
                <li>Data in transit: TLS 1.3</li>
                <li>Key rotation & strict access controls</li>
              </ul>
            </div>

            <div className="security-item">
              <h3>Third-Party Vetting</h3>
              <p>All vendors undergo:</p>
              <ul>
                <li>Security & privacy due diligence</li>
                <li>Signed Data Processing Agreements</li>
                <li>Minimum security benchmarks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BREACH RESPONSE */}
      <section className="dp-breach page-section bg-subtle">
        <div className="container">
          <h2>Incident Response & Breach Notification</h2>

          <p>
            In the unlikely event of a data incident, we follow a strict protocol:
          </p>
          <ol>
            <li>Detection & containment</li>
            <li>Assessment of impact</li>
            <li>Notification to affected users and ODPC (within 72 hours where required)</li>
            <li>Remediation and prevention measures</li>
          </ol>

          <div className="highlight-card">
            <p>
              <strong>Data Protection Officer (DPO):</strong><br />
              <a href="mailto:dpo@patapesa.africa">dpo@patapesa.africa</a><br />
              Available for breach concerns, rights requests, and regulatory inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* RECORDS & ACCOUNTABILITY */}
      <section className="dp-accountability page-section">
        <div className="container">
          <h2>Records & Accountability</h2>

          <p>
            We maintain detailed Records of Processing Activities (RoPA) covering:
          </p>
          <ul>
            <li>Data categories</li>
            <li>Purpose of processing</li>
            <li>Retention periods</li>
            <li>Security safeguards</li>
          </ul>

          <p>Available to the ODPC upon request.</p>
        </div>
      </section>

      {/* RETENTION & DELETION */}
      <section className="dp-retention page-section bg-subtle">
        <div className="container">
          <h2>Data Retention & Secure Deletion</h2>

          <table className="retention-table">
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Account Data</td><td>While account active + 30 days</td></tr>
              <tr><td>Financial Records</td><td>7 years (AML compliance)</td></tr>
              <tr><td>Support Tickets</td><td>24 months</td></tr>
              <tr><td>Analytics Logs</td><td>12–18 months</td></tr>
            </tbody>
          </table>

          <p>
            <strong>Secure disposal:</strong> Cryptographic wiping, key destruction, and backup expiration enforcement.
          </p>
        </div>
      </section>

      {/* FINAL TRUST STATEMENT */}
      <section className="dp-closing page-section">
        <div className="container">
          <blockquote>
            Data protection is not a feature — it is a responsibility.<br />
            At PataPesa, we design every system with privacy, dignity, and accountability at its core.
          </blockquote>
        </div>
      </section>
    </>
  );
}
// src/pages/Compliance.jsx - FINAL COMPLIANCE PAGE (December 26, 2025)
// Institutional-grade, regulatory-ready, trust-first transparency
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Compliance() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* HERO - COMPLIANCE BY DESIGN */}
      <section className="compliance-hero">
        <div className="container">
          <h1>Built on Trust. Governed by Law. Designed for Africa.</h1>
          <p className="sub">
            PataPesa operates within Kenya’s regulatory framework while setting new standards for transparency, security, and responsible innovation.
          </p>

          {/* TRUST BADGE ROW */}
          <div className="compliance-badges">
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
        </div>
      </section>

      {/* REGULATORY STATUS */}
      <section className="regulatory-status page-section">
        <div className="container">
          <h2>Regulatory Status & Registration</h2>

          <div className="status-content">
            <p>
              PataPesa Africa Ltd is a registered company in Kenya and operates as a regulated financial technology platform.
            </p>
            <p>
              We are registered with the Office of the Data Protection Commissioner (ODPC) as both a Data Controller and Data Processor.
            </p>
            <p>
              Our operations align with oversight from the Central Bank of Kenya (CBK) and other relevant authorities.
            </p>

            <div className="frameworks">
              <h3>Key Regulatory Frameworks (2025)</h3>
              <ul className="framework-list">
                <li>Kenya Data Protection Act, 2019</li>
                <li>Virtual Asset Service Providers (VASP) Bill, 2025</li>
                <li>Non-Deposit Taking Credit Providers Regulations, 2025</li>
                <li>Proceeds of Crime and Anti-Money Laundering Act (POCAMLA)</li>
                <li>Consumer Protection Act</li>
                <li>Capital Markets Authority guidelines (where applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONSUMER PROTECTION */}
      <section className="consumer-protection page-section bg-subtle">
        <div className="container">
          <h2>Consumer Protection & Fair Practices</h2>

          <div className="protection-grid">
            <div className="protection-item">
              <h3>Pricing Transparency</h3>
              <p>All fees are disclosed before confirmation — no hidden charges.</p>
              <p>Clear breakdown of platform, network, and partner fees.</p>
            </div>
            <div className="protection-item">
              <h3>Complaints & Disputes</h3>
              <p>Acknowledgment within 24 hours • Resolution within 14 business days.</p>
              <p>Right to escalate to CBK or relevant regulator if unresolved.</p>
            </div>
            <div className="protection-item">
              <h3>Vulnerable User Support</h3>
              <p>Clear language • Optional spending controls • Human review for high-risk actions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA PROTECTION */}
      <section className="data-governance page-section">
        <div className="container">
          <h2>Data Protection & Privacy Governance</h2>

          <div className="governance-content">
            <p>
              PataPesa acts as a Data Controller and, where applicable, a Data Processor under the Kenya Data Protection Act.
            </p>
            <p>
              <strong>All primary user data is stored on Kenyan-based servers.</strong><br />
              Cross-border transfers occur only under user consent and Standard Contractual Clauses (SCCs).
            </p>

            <h3>Your Rights</h3>
            <ul className="rights-list">
              <li>Access your data</li>
              <li>Correct inaccuracies</li>
              <li>Request erasure</li>
              <li>Receive data in portable format</li>
              <li>Object to processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AML / CFT */}
      <section className="aml-cft page-section bg-subtle">
        <div className="container">
          <h2>AML / CFT & Financial Crime Prevention</h2>

          <div className="aml-grid">
            <div className="aml-item">
              <h3>KYC / KYB Procedures</h3>
              <p>Tiered verification • Ongoing monitoring</p>
            </div>
            <div className="aml-item">
              <h3>Transaction Monitoring</h3>
              <p>AI-driven detection • Real-time alerts • FRC reporting where required</p>
            </div>
            <div className="aml-item">
              <h3>Governance</h3>
              <p>Appointed Money Laundering Reporting Officer (MLRO) • Regular internal audits</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 SPECIALIZED ALIGNMENT */}
      <section className="specialized page-section">
        <div className="container">
          <h2>2025 Specialized Regulatory Alignment</h2>

          <div className="special-grid">
            <div className="special-item">
              <h3>Virtual Asset Service Provider (VASP)</h3>
              <p>Full compliance with registration, wallet screening, and blockchain analytics.</p>
            </div>
            <div className="special-item">
              <h3>Non-Deposit Credit Compliance</h3>
              <p>Transparent disclosures for any credit-related services.</p>
            </div>
            <div className="special-item">
              <h3>ESG & Sustainability</h3>
              <p>Commitment to inclusive finance, financial literacy, and sustainable infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY OVERVIEW */}
      <section className="security-overview page-section bg-subtle">
        <div className="container">
          <h2>Security & Technical Governance</h2>
          <ul className="security-list">
            <li>AES-256 encryption at rest</li>
            <li>TLS 1.3 in transit</li>
            <li>Zero-Trust Architecture</li>
            <li>Annual penetration testing & independent audits</li>
          </ul>
          <p>
            Full details: <Link to="/security">Security Page →</Link>
          </p>
        </div>
      </section>

      {/* AUDIT & ACCOUNTABILITY */}
      <section className="audit page-section">
        <div className="container">
          <h2>Audit, Oversight & Accountability</h2>

          <p>
            We maintain detailed Records of Processing Activities (RoPA) and undergo regular independent audits.
          </p>
          <p>
            Designated officers:<br />
            <strong>Data Protection Officer (DPO)</strong> • <strong>Money Laundering Reporting Officer (MLRO)</strong><br />
            Contact available via secure channels.
          </p>
        </div>
      </section>

      {/* SANDBOX & INNOVATION */}
      <section className="innovation page-section bg-subtle">
        <div className="container">
          <h2>Regulatory Sandbox & Responsible Innovation</h2>
          <p>
            We actively engage with CBK and CMA sandbox programs to test innovations safely before public release.
          </p>
          <p>
            Every new feature undergoes compliance review — ethics and responsibility by design.
          </p>
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <section className="compliance-summary page-section">
        <div className="container">
          <blockquote>
            At PataPesa, compliance is not a checkbox — it’s a culture.<br />
            We operate transparently, protect users by design, and innovate responsibly within Kenya’s evolving financial ecosystem.
          </blockquote>

          <div className="related-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/security">Security</Link>
            <Link to="/contact">Contact Compliance Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
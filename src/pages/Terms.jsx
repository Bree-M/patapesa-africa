// src/pages/Terms.jsx - FINAL TERMS OF SERVICE PAGE (December 26, 2025)
// Clear, firm, transparent — human-first with layered legal depth
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      {/* HERO - CLARITY & TRANSPARENCY */}
      <section className="terms-hero">
        <div className="container">
          <h1>Clear Terms. Full Transparency. Your Control.</h1>
          <p className="sub">
            These Terms explain how PataPesa works, what you can expect from us, and what we expect from you — in plain language.
          </p>

          <div className="terms-meta">
            <p><strong>Version:</strong> 2.4</p>
            <p><strong>Effective Date:</strong> December 26, 2025</p>
            <p><strong>Last Updated:</strong> December 26, 2025</p>
            <Link to="#changelog" className="link">View Change Log →</Link>
          </div>
        </div>
      </section>

      {/* HUMAN SUMMARY - PLAIN ENGLISH */}
      <section className="terms-summary page-section bg-subtle">
        <div className="container">
          <h2>Terms in Plain English</h2>
          <ul className="summary-list">
            <li><strong>You own your money and keys.</strong> PataPesa never holds your funds or private keys — you are in full control.</li>
            <li><strong>We connect you securely.</strong> We route transactions directly to licensed providers using PesaDirect™.</li>
            <li><strong>Stablecoins have risks.</strong> USDT/USDC may lose value — we don’t guarantee peg stability.</li>
            <li><strong>Compliance is mandatory.</strong> We follow Kenyan AML/CTF laws and may ask for verification or source of funds.</li>
            <li><strong>Keep your account safe.</strong> You’re responsible for device security and recovery phrases — we cannot recover lost access.</li>
            <li><strong>No illegal use.</strong> Fraud, sanctions evasion, or commercial resale on personal accounts is prohibited.</li>
            <li><strong>Kenyan law applies.</strong> Disputes are resolved under Kenyan jurisdiction.</li>
          </ul>
        </div>
      </section>

      {/* FULL LEGAL TEXT - ACCORDION */}
      <section className="terms-legal page-section">
        <div className="container">
          <h2>Full Terms of Service</h2>

          <div className="accordion">
            {/* NON-CUSTODIAL & SELF-SOVEREIGNTY */}
            <div className={`accordion-item ${openSection === "custody" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("custody")}>
                <h3>1. Non-Custodial Nature & Your Responsibility</h3>
                <span className="toggle">{openSection === "custody" ? "−" : "+"}</span>
              </button>
              {openSection === "custody" && (
                <div className="accordion-content">
                  <p>
                    <strong>PataPesa does not custody user funds, private keys, or recovery phrases.</strong> You are the sole controller of your digital assets.
                  </p>
                  <p>
                    You are responsible for:
                  </p>
                  <ul>
                    <li>Securing your device and credentials</li>
                    <li>Safely storing recovery phrases</li>
                    <li>Preventing unauthorized access</li>
                  </ul>
                  <p>
                    PataPesa cannot reset private keys, reverse transactions, or recover lost assets. <strong>No Keys = No Recovery.</strong>
                  </p>
                </div>
              )}
            </div>

            {/* PESADIRECT & STABLECOINS */}
            <div className={`accordion-item ${openSection === "pesadirect" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("pesadirect")}>
                <h3>2. PesaDirect™ & Stablecoin Operations</h3>
                <span className="toggle">{openSection === "pesadirect" ? "−" : "+"}</span>
              </button>
              {openSection === "pesadirect" && (
                <div className="accordion-content">
                  <p>
                    PesaDirect™ enables instant settlement via mobile money, bank rails, or on-chain stablecoins (USDT/USDC).
                  </p>
                  <p>
                    <strong>Risk Disclosure:</strong> PataPesa does not guarantee the value stability of any digital asset. Stablecoins may lose parity with fiat currency due to market conditions.
                  </p>
                  <p>
                    Network fees (gas) may apply and fluctuate. Fees are either bundled or passed through transparently.
                  </p>
                </div>
              )}
            </div>

            {/* COMPLIANCE & AML */}
            <div className={`accordion-item ${openSection === "compliance" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("compliance")}>
                <h3>3. Compliance, AML & Regulatory Obligations</h3>
                <span className="toggle">{openSection === "compliance" ? "−" : "+"}</span>
              </button>
              {openSection === "compliance" && (
                <div className="accordion-content">
                  <p>
                    We comply with Kenyan AML/CTF regulations, including:
                  </p>
                  <ul>
                    <li>Identity verification (KYC)</li>
                    <li>Transaction monitoring</li>
                    <li>Suspicious Activity Reporting (SAR)</li>
                    <li>Travel Rule information sharing where required</li>
                  </ul>
                  <p>
                    We may request proof of source of funds. Failure to comply may result in account suspension.
                  </p>
                </div>
              )}
            </div>

            {/* SERVICE AVAILABILITY */}
            <div className={`accordion-item ${openSection === "availability" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("availability")}>
                <h3>4. Service Availability & Limitations</h3>
                <span className="toggle">{openSection === "availability" ? "−" : "+"}</span>
              </button>
              {openSection === "availability" && (
                <div className="accordion-content">
                  <p>
                    Target uptime: 99.9%. We are not liable for downtime due to maintenance, network issues, or force majeure.
                  </p>
                  <p>
                    Exploiting bugs or vulnerabilities is prohibited and may result in termination and legal action.
                  </p>
                </div>
              )}
            </div>

            {/* ACCEPTABLE USE */}
            <div className={`accordion-item ${openSection === "use" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("use")}>
                <h3>5. Acceptable Use</h3>
                <span className="toggle">{openSection === "use" ? "−" : "+"}</span>
              </button>
              {openSection === "use" && (
                <div className="accordion-content">
                  <p>Prohibited activities include:</p>
                  <ul>
                    <li>Use from sanctioned jurisdictions</li>
                    <li>Fraud, money laundering, terrorism financing</li>
                    <li>Unauthorized commercial resale on personal accounts</li>
                  </ul>
                  <p>Business use requires enrollment under Partner tiers.</p>
                </div>
              )}
            </div>

            {/* DISPUTE RESOLUTION */}
            <div className={`accordion-item ${openSection === "dispute" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("dispute")}>
                <h3>6. Dispute Resolution & Governing Law</h3>
                <span className="toggle">{openSection === "dispute" ? "−" : "+"}</span>
              </button>
              {openSection === "dispute" && (
                <div className="accordion-content">
                  <p>
                    Governed by the laws of Kenya.<br />
                    Disputes resolved through arbitration in Nairobi.<br />
                    Class actions waived — disputes handled individually.
                  </p>
                  <p>
                    These Terms do not override your rights under the Kenyan Consumer Protection Act or Data Protection Act.
                  </p>
                </div>
              )}
            </div>

            {/* ELECTRONIC CONSENT */}
            <div className={`accordion-item ${openSection === "consent" ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleSection("consent")}>
                <h3>7. Electronic Communications</h3>
                <span className="toggle">{openSection === "consent" ? "−" : "+"}</span>
              </button>
              {openSection === "consent" && (
                <div className="accordion-content">
                  <p>
                    By using PataPesa, you consent to electronic agreements and communications via app notifications, email, and dashboard messages.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CHANGE LOG */}
      <section className="changelog page-section bg-subtle" id="changelog">
        <div className="container">
          <h2>Change Log</h2>
          <ul className="changelog-list">
            <li><strong>December 26, 2025 — v2.4</strong>: Clarified stablecoin risk disclosure and network fee handling.</li>
            <li><strong>August 14, 2025 — v2.3</strong>: Added Travel Rule compliance details.</li>
            <li><strong>June 1, 2025 — v2.2</strong>: Introduced non-custodial ownership emphasis.</li>
          </ul>
        </div>
      </section>

      {/* FINAL DISCLAIMER */}
      <section className="terms-disclaimer page-section">
        <div className="container">
          <div className="disclaimer-box">
            <p>
              <strong>By continuing to use PataPesa, you acknowledge that you understand and accept these Terms of Service.</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
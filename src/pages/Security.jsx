// src/pages/Security.jsx - FINAL PREMIUM SECURITY PAGE (December 26, 2025)
// Fully compliant: trust-first, transparent, authoritative, human
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Security() {
  const [scoreAnswers, setScoreAnswers] = useState({
    mfa: false,
    phrase: false,
    alerts: false,
    recovery: false,
  });

  const handleScoreChange = (key) => {
    setScoreAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateScore = () => {
    const answeredYes = Object.values(scoreAnswers).filter(v => v).length;
    return (answeredYes / 4) * 100;
  };

  const score = calculateScore();

  return (
    <>
      {/* 2. HERO SECTION - THE SECURITY PROMISE */}
      <section className="security-hero">
        <div className="container">
          <h1>Security You Can Trust. Protection You Can See.</h1>
          <p className="sub">
            PataPesa is built with security at its core — combining advanced cryptography, regulatory compliance, and continuous monitoring to protect every transaction.
          </p>

          <div className="security-badge">
            <span className="status-dot"></span>
            <span>Last Independent Security Audit: March 2025</span>
          </div>

          {/* Animated Shield Placeholder */}
          <div className="shield-animation">
            <div className="shield-icon">🛡️</div>
            <div className="scan-line"></div>
          </div>
        </div>
      </section>

      {/* 3. CORE SECURITY ARCHITECTURE */}
      <section className="core-architecture page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Built for Safety. Designed for Trust.</h2>
          <div className="architecture-grid">
            <div className="arch-card">
              <div className="arch-icon">🔒</div>
              <h3>End-to-End Encryption</h3>
              <p>
                All sensitive data is encrypted in transit and at rest using industry-leading standards. 
                Even PataPesa cannot access your private credentials or transaction details.
              </p>
            </div>
            <div className="arch-card highlight">
              <div className="arch-icon">🛡️</div>
              <h3>Non-Custodial Architecture</h3>
              <p>
                <strong>You stay in control.</strong> PataPesa never holds, touches, or stores your money. 
                Funds move directly between you and licensed providers.
              </p>
            </div>
            <div className="arch-card">
              <div className="arch-icon">✅</div>
              <h3>Zero-Trust Security</h3>
              <p>
                Every request is verified. No device, user, or system is trusted by default — 
                even inside our network. Continuous authentication and least-privilege access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGULATORY & LEGAL COMPLIANCE */}
      <section className="regulatory page-section">
        <div className="container">
          <h2 className="section-title">Regulatory Compliance & Governance</h2>
          <div className="compliance-grid">
            <div className="compliance-item">
              <h3>Kenya Data Protection Act (2019)</h3>
              <p>Full compliance with ODPC requirements. Registered data controller.</p>
            </div>
            <div className="compliance-item">
              <h3>Data Residency</h3>
              <p>All sensitive user data stored on secure servers in Kenya.</p>
            </div>
            <div className="compliance-item">
              <h3>Data Protection Officer</h3>
              <p>Appointed DPO oversees privacy and compliance. Contact: dpo@patapesa.africa</p>
            </div>
            <div className="compliance-item">
              <h3>Regular Audits</h3>
              <p>Independent security and compliance audits conducted quarterly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. USER ACCOUNT PROTECTION */}
      <section className="account-protection page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Your Account Protection</h2>
          <div className="protection-grid">
            <div className="protection-card">
              <h3>Next-Gen Authentication</h3>
              <ul>
                <li>Passkeys & biometric login (preferred)</li>
                <li>Authenticator apps (TOTP)</li>
                <li>SMS fallback only</li>
              </ul>
            </div>
            <div className="protection-card">
              <h3>Anti-Phishing Protection</h3>
              <p>
                Set a personal security phrase that appears in every official PataPesa email — 
                so you always know it’s really us.
              </p>
            </div>
            <div className="protection-card">
              <h3>Emergency Kill Switch</h3>
              <p>
                Instantly freeze all activity from any device if you suspect compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FRAUD PREVENTION & MONITORING */}
      <section className="fraud-prevention page-section">
        <div className="container">
          <h2 className="section-title">Fraud Prevention & Monitoring</h2>
          <div className="fraud-grid">
            <div className="fraud-item">
              <h3>Real-Time Monitoring</h3>
              <p>AI-powered anomaly detection flags unusual patterns instantly.</p>
            </div>
            <div className="fraud-item">
              <h3>Behavior Analysis</h3>
              <p>Privacy-preserving scoring identifies risks without invasive tracking.</p>
            </div>
            <div className="fraud-item">
              <h3>Bug Bounty Program</h3>
              <p>We partner with ethical researchers to find and fix vulnerabilities before they’re exploited.</p>
              <a href="mailto:security@patapesa.africa" className="link">Report a vulnerability →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE SECURITY SCORECARD */}
      <section className="security-score page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Your Personal Security Score</h2>
          <p className="section-intro">
            Answer a few quick questions to see how secure your setup is.
          </p>

          <div className="score-form">
            <label>
              <input type="checkbox" checked={scoreAnswers.mfa} onChange={() => handleScoreChange("mfa")} />
              Do you use multi-factor authentication (MFA)?
            </label>
            <label>
              <input type="checkbox" checked={scoreAnswers.phrase} onChange={() => handleScoreChange("phrase")} />
              Have you set a personal anti-phishing phrase?
            </label>
            <label>
              <input type="checkbox" checked={scoreAnswers.alerts} onChange={() => handleScoreChange("alerts")} />
              Do you have login alerts enabled?
            </label>
            <label>
              <input type="checkbox" checked={scoreAnswers.recovery} onChange={() => handleScoreChange("recovery")} />
              Is your recovery email/phone up to date and secure?
            </label>
          </div>

          <div className="score-result">
            <div className="score-circle" style={{ "--score": `${score}%` }}>
              <span className="score-number">{score}%</span>
            </div>
            <p className="score-message">
              {score === 100 ? "Excellent! Your account is highly secure." :
               score >= 75 ? "Good work — just a few more steps for maximum protection." :
               score >= 50 ? "You're on the right track. Consider enabling more protections." :
               "Let's strengthen your security. Start with MFA and alerts."}
            </p>
          </div>
        </div>
      </section>

      {/* 8. DATA HANDLING TRANSPARENCY */}
      <section className="data-handling page-section">
        <div className="container">
          <h2 className="section-title">Transparent Data Handling</h2>
          <div className="data-grid">
            <div className="data-item">
              <h3>Data Minimization</h3>
              <p>We collect only what’s necessary to provide service.</p>
            </div>
            <div className="data-item">
              <h3>Purpose-Limited Processing</h3>
              <p>Your data is used only for intended functions — never sold or shared.</p>
            </div>
            <div className="data-item">
              <h3>Encrypted Backups</h3>
              <p>Regular, encrypted backups with strict access controls.</p>
            </div>
            <div className="data-item">
              <h3>Audit Logging</h3>
              <p>All access to systems is logged and monitored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RESPONSIBLE DISCLOSURE */}
      <section className="responsible-disclosure page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Responsible Disclosure</h2>
          <p className="section-intro">
            Found a potential vulnerability? We take security reports seriously and respond quickly.
          </p>
          <div className="disclosure-info">
            <p>
              Report to: <a href="mailto:security@patapesa.africa">security@patapesa.africa</a><br />
              Expected acknowledgment: Within 72 hours<br />
              Safe harbor: We will not take legal action for good-faith reports
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL SECURITY ACTION CTA */}
      <section className="security-cta page-section">
        <div className="container">
          <h2>Have a Security Concern?</h2>
          <p>We’re here to help — calmly and professionally.</p>
          <div className="cta-buttons">
            <a href="mailto:security@patapesa.africa" className="btn btn-primary large">
              Report a Security Concern
            </a>
            <Link to="/privacy" className="btn btn-secondary large">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
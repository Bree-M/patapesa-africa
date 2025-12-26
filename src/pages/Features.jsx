// src/pages/Features.jsx - FINAL PREMIUM FEATURES & SOLUTIONS PAGE (December 26, 2025)
// Dual-audience (Individuals + Institutions), trust-first, conversion-optimized
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Features() {
  const [audience, setAudience] = useState("individuals"); // "individuals" or "institutions"

  return (
    <>
      {/* 3. HERO SECTION */}
      <section className="features-hero">
        <div className="container">
          <h1>PataPesa: Solutions for Smarter Finance & Scalable Growth</h1>
          <p className="sub">
            One platform. Multiple solutions. Built for individuals, businesses, and institutions powering Africa’s financial future.
          </p>

          {/* PERSONA SWITCHER */}
          <div className="audience-switcher">
            <button
              className={`switch-btn ${audience === "individuals" ? "active" : ""}`}
              onClick={() => setAudience("individuals")}
            >
              For Individuals
            </button>
            <button
              className={`switch-btn ${audience === "institutions" ? "active" : ""}`}
              onClick={() => setAudience("institutions")}
            >
              For Institutions
            </button>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL SOLUTIONS */}
      {audience === "individuals" && (
        <>
          <section className="individual-solutions page-section">
            <div className="container">
              <h2 className="section-title">Solutions for Individuals</h2>

              <div className="solutions-grid">
                <div className="solution-card">
                  <div className="solution-icon">💰</div>
                  <h3>Financial Wellness Suite</h3>
                  <p>Smart tools to manage money confidently.</p>
                  <ul>
                    <li>Automated expense categorization</li>
                    <li>Smart budgeting insights</li>
                    <li>Spending trends & alerts</li>
                  </ul>
                  <div className="dashboard-preview">
                    <div className="mockup-placeholder wellness"></div>
                  </div>
                </div>

                <div className="solution-card">
                  <div className="solution-icon">📈</div>
                  <h3>Wealth Building & Investments</h3>
                  <p>Grow wealth with accessible, flexible options.</p>
                  <ul>
                    <li>Goal-based savings plans</li>
                    <li>Micro-investments from KES 100</li>
                    <li>Access to regulated investment partners</li>
                  </ul>
                  <div className="trust-badge">
                    Regulated Providers Only • No Hidden Fees
                  </div>
                </div>

                <div className="solution-card highlight">
                  <div className="solution-icon">⚡</div>
                  <h3>PesaFlow™ Payments Engine</h3>
                  <p>Fast, secure, non-custodial payments.</p>
                  <ul>
                    <li>M-Pesa & Airtel Money</li>
                    <li>Visa / Mastercard</li>
                    <li>Stablecoins (USDT / USDC)</li>
                    <li>Real-time settlement</li>
                  </ul>
                  <div className="trust-badge highlight">
                    <strong>Non-Custodial • You Control Your Funds</strong>
                  </div>
                </div>
              </div>

              <div className="individual-cta">
                <Link to="/contact" className="btn btn-primary large">Download the App</Link>
                <Link to="/how-it-works" className="btn btn-secondary large">See How It Works</Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* INSTITUTION SOLUTIONS */}
      {audience === "institutions" && (
        <>
          <section className="institution-solutions page-section">
            <div className="container">
              <h2 className="section-title">Digital Infrastructure for Institutions</h2>

              <div className="solutions-grid">
                <div className="solution-card">
                  <div className="solution-icon">🏢</div>
                  <h3>Digital Branch Solution</h3>
                  <p>Launch a digital presence without rebuilding your tech stack.</p>
                  <ul>
                    <li>White-label customer experience</li>
                    <li>Branded journeys and onboarding</li>
                    <li>AI-powered user matching</li>
                  </ul>
                </div>

                <div className="solution-card">
                  <div className="solution-icon">🔌</div>
                  <h3>API & Integration Layer</h3>
                  <p>Modern APIs for rapid deployment.</p>
                  <ul>
                    <li>PesaFlow™ instant settlement APIs</li>
                    <li>Sandbox environment for testing</li>
                    <li>Webhooks & comprehensive docs</li>
                  </ul>
                </div>

                <div className="solution-card">
                  <div className="solution-icon">📊</div>
                  <h3>Analytics & ROI Engine</h3>
                  <p>Actionable intelligence for growth.</p>
                  <ul>
                    <li>Real-time performance dashboards</li>
                    <li>Conversion & funnel analytics</li>
                    <li>CBK-ready audit logs</li>
                  </ul>
                </div>
              </div>

              <div className="institution-cta">
                <Link to="/partners" className="btn btn-primary large">Partner With Us</Link>
                <a href="https://developers.patapesa.africa" target="_blank" rel="noopener noreferrer" className="btn btn-secondary large">
                  View API Docs
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 6. TECHNICAL AUTHORITY & TRUST SIGNALS */}
      <section className="tech-trust page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Built on Secure, Compliant Infrastructure</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">☁️</div>
              <p>AWS Cloud Infrastructure</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <p>Encrypted by Design</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🛡️</div>
              <p>Non-Custodial Architecture</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🇰🇪</div>
              <p>Kenyan Data Residency</p>
            </div>
          </div>
          <p className="trust-statement">
            Trusted by regulated financial institutions across Africa.
          </p>
        </div>
      </section>

      {/* 7. INTERACTIVE CALCULATOR (SIMPLE) */}
      <section className="calculator page-section">
        <div className="container">
          <h2 className="section-title">Estimate Your Impact</h2>
          <div className="calc-card">
            <p>Monthly active users or transaction volume?</p>
            {/* Simple placeholder calculator - can be enhanced later */}
            <div className="calc-placeholder">
              <p>Projected monthly reach: <strong>5,000+</strong> high-intent users</p>
              <p>Potential revenue uplift: <strong>20–40%</strong></p>
            </div>
            <p className="calc-note">Contact our partnerships team for a personalized projection.</p>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA BLOCK */}
      <section className="features-cta page-section">
        <div className="container">
          <h2>Ready to Build the Future of Finance?</h2>
          <div className="cta-buttons">
            {audience === "individuals" ? (
              <>
                <Link to="/contact" className="btn btn-primary large">Get Started</Link>
                <Link to="/contact" className="btn btn-secondary large">Create Free Account</Link>
              </>
            ) : (
              <>
                <Link to="/partners" className="btn btn-primary large">Talk to Sales</Link>
                <Link to="/contact" className="btn btn-secondary large">Request Demo</Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
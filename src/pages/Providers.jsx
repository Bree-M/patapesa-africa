// src/pages/Partners.jsx - FINAL PREMIUM PARTNERS PAGE (December 26, 2025)
// Unified B2B conversion engine: infrastructure-focused, trust-first, investor-grade
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Partners() {
  const [formData, setFormData] = useState({
    organization: "",
    category: "",
    license: "",
    email: "",
    volume: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.organization.trim()) newErrors.organization = "Organization name is required";
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.license.trim()) newErrors.license = "License number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          organization: "",
          category: "",
          license: "",
          email: "",
          volume: "",
          message: "",
        });
      }, 6000);
    }
  };

  return (
    <>
      {/* 3. HERO SECTION - THE NETWORK EFFECT */}
      <section className="partners-hero" id="overview">
        <div className="container">
          <h1>The Infrastructure Powering Financial Access Across Africa</h1>
          <p className="sub">
            Join 50+ regulated institutions using PataPesa to reach high-intent users, simplify payments, and scale securely.
          </p>

          <div className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => window.scrollTo({ top: document.querySelector("#apply").offsetTop - 100, behavior: "smooth" })}
            >
              Become a Partner
            </button>
            <a href="https://developers.patapesa.africa" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View API Docs
            </a>
          </div>

          <div className="trust-badge">
            Trusted by regulated institutions across East Africa • CBK-aligned • ODPC compliant
          </div>
        </div>
      </section>

      {/* 4. TRUST BANNER - LOGO CAROUSEL */}
      <section className="trust-banner page-section bg-subtle">
        <div className="container">
          <p className="trust-statement">Our Growing Partner Network</p>
          <div className="partner-logos">
            <img src="/partners/mpesa.png" alt="M-Pesa" />
            <img src="/partners/equity.png" alt="Equity Bank" />
            <img src="/partners/kcb.png" alt="KCB Group" />
            <img src="/partners/coop.png" alt="Co-operative Bank" />
            <img src="/partners/sacco.png" alt="Umoja SACCO" />
            <img src="/partners/jubilee.png" alt="Jubilee Insurance" />
          </div>
        </div>
      </section>

      {/* 5. APP-IN-ACTION - PROVIDER DASHBOARD */}
      <section className="dashboard-preview page-section">
        <div className="container">
          <h2 className="section-title">What Providers See Inside PataPesa</h2>
          <p className="section-intro">
            A single dashboard to manage customers, compliance, and revenue.
          </p>

          <div className="dashboard-mockup">
            <div className="mockup-screen">
              <div className="mockup-header">
                <h3>Provider Dashboard</h3>
                <span className="highlight">KES 18.7M</span> <span>Settled this month</span>
              </div>
              <div className="metric-grid">
                <div className="metric">
                  <strong>9,842</strong>
                  <span>Active Users</span>
                </div>
                <div className="metric">
                  <strong>1,237</strong>
                  <span>New Leads</span>
                </div>
                <div className="metric">
                  <strong>98.2%</strong>
                  <span>Conversion Rate</span>
                </div>
                <div className="metric success">
                  <strong>T+0</strong>
                  <span>Settlement Complete</span>
                </div>
              </div>
              <div className="annotation">
                Real-time insights • Automated reconciliation • Instant settlement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PESAFLOW™ - CORE DIFFERENTIATOR */}
      <section className="pesaflow page-section bg-subtle" id="pesa-flow">
        <div className="container">
          <h2 className="section-title">PesaDirect™ — Instant, Non-Custodial Settlement Infrastructure</h2>
          <p className="section-intro">
            Funds move directly from user to provider — instantly, securely, and without PataPesa ever touching them.
          </p>

          <div className="pesaflow-features">
            <div className="feature">
              <h3>T+0 Settlement</h3>
              <p>Real-time payouts across all channels.</p>
            </div>
            <div className="feature">
              <h3>Multi-Rail Support</h3>
              <p>M-Pesa, bank transfers, cards, USDT/USDC.</p>
            </div>
            <div className="feature">
              <h3>Non-Custodial</h3>
              <p>PataPesa never holds or routes funds.</p>
            </div>
            <div className="feature">
              <h3>Automated Reconciliation</h3>
              <p>Reduce ops overhead with instant matching.</p>
            </div>
          </div>

          <div className="flow-diagram">
            <div className="flow-node user">User</div>
            <div className="flow-arrow">→</div>
            <div className="flow-node pesadirect">PesaDirect™ Router</div>
            <div className="flow-arrow">→</div>
            <div className="flow-node provider">Your Institution</div>
          </div>
        </div>
      </section>

      {/* 7. ONBOARDING ROADMAP */}
      <section className="onboarding-roadmap page-section">
        <div className="container">
          <h2 className="section-title">From Application to Go-Live in 14 Days</h2>
          <div className="roadmap-grid">
            <div className="roadmap-step">
              <div className="step-number">1</div>
              <h3>Inquiry</h3>
              <p>Submit details — 2 minutes</p>
            </div>
            <div className="roadmap-step">
              <div className="step-number">2</div>
              <h3>Compliance Review</h3>
              <p>License & KYC validation — 48 hours</p>
            </div>
            <div className="roadmap-step">
              <div className="step-number">3</div>
              <h3>Sandbox Testing</h3>
              <p>Full API access for simulation</p>
            </div>
            <div className="roadmap-step">
              <div className="step-number">4</div>
              <h3>Go Live</h3>
              <p>Start receiving real users instantly</p>
            </div>
          </div>
          <div className="roadmap-note">
            <strong>Paperless • Guided • Dedicated support</strong>
          </div>
        </div>
      </section>

      {/* 8. DEVELOPER CORNER */}
      <section className="developer-corner page-section bg-dark" id="developers">
        <div className="container">
          <h2 className="section-title">Built for Developers</h2>
          <p className="section-intro">
            Modern APIs, sandbox environment, and comprehensive documentation — integrate in days.
          </p>

          <div className="code-snippet">
            <pre>
              <code>
{`POST https://api.patapesa.africa/v1/transactions
{
  "amount": 25000,
  "currency": "KES",
  "channel": "M-PESA",
  "user_id": "usr_7a9f2b",
  "callback_url": "https://yourbank.com/webhook"
}`}
              </code>
            </pre>
          </div>

          <div className="developer-cta">
            <a href="https://developers.patapesa.africa" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Full API Documentation
            </a>
            <button className="btn btn-secondary">Request Sandbox Access</button>
          </div>
        </div>
      </section>

      {/* 9. PARTNER VALUE & ROI */}
      <section className="partner-value page-section">
        <div className="container">
          <h2 className="section-title">Why Partners Choose PataPesa</h2>
          <div className="value-grid">
            <div className="value-item">
              <h3>Lower Customer Acquisition Cost</h3>
              <p>Reach users already in buying mode — no cold outreach needed.</p>
            </div>
            <div className="value-item">
              <h3>Faster Time to Market</h3>
              <p>Skip building consumer apps. Launch new products instantly.</p>
            </div>
            <div className="value-item">
              <h3>Zero Infrastructure Overhead</h3>
              <p>We handle hosting, security, scaling, and compliance.</p>
            </div>
            <div className="value-item">
              <h3>Regulatory Alignment</h3>
              <p>Built for East African compliance from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PARTNERSHIP TIERS */}
      <section className="partnership-tiers page-section bg-subtle" id="pricing">
        <div className="container">
          <h2 className="section-title">Partnership Tiers</h2>
          <div className="tiers-table">
            <table>
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Ideal For</th>
                  <th>Setup Fee</th>
                  <th>Monthly</th>
                  <th>Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Marketplace</strong></td>
                  <td>SMEs & Growing Institutions</td>
                  <td>KES 25,000</td>
                  <td>KES 60,000</td>
                  <p>Note: All prices are quoted exclusive of 16% VAT. Fees are subject to adjustment in alignment with evolving government tax regulations.</p>
                  <td>Listing, lead routing, basic analytics</td>
                </tr>
                <tr className="highlight">
                  <td><strong>API Partner</strong></td>
                  <td>Fintechs & Digital Lenders</td>
                  <td>KES 150,000</td>
                  <td>KES 150,000</td>
                  <p>Note: All prices are quoted exclusive of 16% VAT. Fees are subject to adjustment in alignment with evolving government tax regulations.</p>
                  <td>Full API access, PesaFlow™ routing, advanced analytics</td>
                </tr>
                <tr>
                  <td><strong>Branded Branch</strong></td>
                  <td>Banks & Enterprises</td>
                  <td>KES 250,000</td>
                  <td>KES 270,000</td>
                  <p>Note: All prices are quoted exclusive of 16% VAT. Fees are subject to adjustment in alignment with evolving government tax regulations.</p>
                  <td>White-label experience, dedicated support, custom integrations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 11. COMPLIANCE & DATA GOVERNANCE */}
      <section className="compliance page-section">
        <div className="container">
          <h2 className="section-title">Compliance & Data Governance</h2>
          <div className="compliance-grid">
            <div className="compliance-card">
              <h3>Non-Custodial by Design</h3>
              <p>Providers retain full control and responsibility for KYC and funds.</p>
            </div>
            <div className="compliance-card">
              <h3>Kenyan Data Residency</h3>
              <p>All sensitive data stored securely in Kenya (DPA 2019 compliant).</p>
            </div>
            <div className="compliance-card">
              <h3>Audit-Ready Logging</h3>
              <p>Exportable transaction and access logs for regulatory reporting.</p>
            </div>
            <div className="compliance-card">
              <h3>Certified Infrastructure</h3>
              <p>ODPC registered • Secure cloud with regular penetration testing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SOCIAL PROOF / CASE STUDY */}
      <section className="case-study page-section bg-subtle">
        <div className="container">
          <div className="case-grid">
            <div className="case-content">
              <blockquote>
                “Since joining PataPesa, we’ve increased digital onboarding by 30% without adding internal overhead. The platform’s secure routing and real-time insights have transformed how we serve members.”
              </blockquote>
              <p className="attribution">
                <strong>Grace Wanjiku</strong><br />
                CEO, Umoja SACCO
              </p>
              <div className="case-badge">+30% Digital Growth</div>
            </div>
            <div className="case-logo">
              <img src="/partners/umoja-sacco.png" alt="Umoja SACCO" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. PARTNER APPLICATION FORM */}
      <section className="partner-application page-section" id="apply">
        <div className="container">
          <h2 className="section-title">Apply to Become a Partner</h2>
          <p className="section-intro">
            Start reaching high-intent users today. Our team will respond within 48 hours.
          </p>

          {submitted && (
            <div className="success-message">
              Thank you! Your application has been received. We’ll be in touch within 48 hours.
            </div>
          )}

          <form className="partner-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="organization">Organization Name *</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={errors.organization ? "error" : ""}
                  required
                />
                {errors.organization && <span className="error-text">{errors.organization}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="category">Institution Type *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? "error" : ""}
                  required
                >
                  <option value="">Select type</option>
                  <option value="bank">Bank</option>
                  <option value="sacco">SACCO / Cooperative</option>
                  <option value="mfi">Microfinance / Digital Lender</option>
                  <option value="insurance">Insurance Provider</option>
                  <option value="fintech">Fintech / API Partner</option>
                  <option value="corporate">Corporate / Payroll</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && <span className="error-text">{errors.category}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="license">Regulatory License Number *</label>
                <input
                  type="text"
                  id="license"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                  className={errors.license ? "error" : ""}
                  required
                />
                {errors.license && <span className="error-text">{errors.license}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Business Contact Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group full">
                <label htmlFor="volume">Expected Monthly Volume (Optional)</label>
                <select id="volume" name="volume" value={formData.volume} onChange={handleChange}>
                  <option value="">Select range</option>
                  <option value="low">Under KES 10M</option>
                  <option value="medium">KES 10M – 100M</option>
                  <option value="high">Over KES 100M</option>
                </select>
              </div>

              <div className="form-group full">
                <label htmlFor="message">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary large">
              Submit Partnership Application
            </button>
          </form>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="final-partner-cta page-section">
        <div className="container">
          <h2>Build the Future of Financial Access</h2>
          <p>Join leading institutions shaping digital finance in Africa.</p>
          <div className="cta-buttons">
            <button
              className="btn btn-primary large"
              onClick={() => window.scrollTo({ top: document.querySelector("#apply").offsetTop - 100, behavior: "smooth" })}
            >
              Become a Partner
            </button>
            <a href="mailto:partnerships@patapesa.africa" className="btn btn-secondary large">
              Talk to Partnerships
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
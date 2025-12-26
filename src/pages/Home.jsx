// src/pages/Home.jsx - FINAL PREMIUM HOME PAGE (December 25, 2025)
// Fully compliant with all requirements: trust-first, conversion-ready, SEO-optimized
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* 2. ABOVE-THE-FOLD HERO SECTION */}
      <section className="hero">
        <div className="container">
          <h1>A Smarter Way to Access Financial Services in One Place</h1>
          <p className="sub">
            PataPesa connects individuals and businesses to verified financial and wellness providers  securely, transparently, and in one place.<br />
          </p>
          <p><strong>Powered by PesaDirect™</strong></p><br />

          
          <p className="hero-body">
            <strong>We never hold your funds. You stay in control while accessing savings, loans, insurance, investments, and wellness services from licensed institutions.</strong>
          </p>

          {/* PRIMARY & SECONDARY CTAs */}
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/how-it-works" className="btn btn-secondary">See How It Works</Link>
          </div>

          {/* MICRO TRUST INDICATORS */}
          <div className="trust-indicators">
            <span className="trust-item"><span className="icon">🔒</span> Bank-Grade Security</span>
            <span className="trust-item"><span className="icon">✅</span> Regulated & Compliant</span>
            <span className="trust-item"><span className="icon">🛡️</span> Non-Custodial Platform</span>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM → SOLUTION */}
      <section className="problem-solution page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">The Challenge Today</h2>
          <p className="section-intro">
            Finding trusted financial services in Africa is fragmented, time-consuming, and often risky. Hidden fees, unclear terms, and scattered providers make it hard to choose confidently.
          </p>

          <h2 className="section-title">Our Solution</h2>
          <p className="section-intro">
            PataPesa is a neutral, non-custodial platform that unifies access to verified providers — helping you compare, connect, and transact securely in one place.
          </p>
        </div>
      </section>

      {/* 4. CORE FEATURES */}
      <section className="features page-section">
        <div className="container">
          <h2 className="section-title">Why Choose PataPesa</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Unified Access</h3>
              <p>Savings, loans, insurance, investments, and wellness — all verified providers in one intelligent platform.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>Smart Matching</h3>
              <p>Personalized recommendations based on your needs — transparent and unbiased.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Non-Custodial</h3>
              <p>We never hold your funds. Transactions go directly between you and providers via PesaFlow™.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Secure Routing</h3>
              <p>Instant connections with end-to-end encryption and compliance-built design.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Multi-Channel Payments</h3>
              <p>M-Pesa, cards, bank transfers, and stablecoins (USDT/USDC) — all supported securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & SECURITY */}
      <section className="trust-security page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Built on Trust & Compliance</h2>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon large">🛡️</div>
              <h3>Regulatory Compliance</h3>
              <p>Fully aligned with Kenya Data Protection Act 2019 and GDPR principles.</p>
              <Link to="/compliance" className="link">Learn more →</Link>
            </div>
            <div className="trust-card">
              <div className="trust-icon large">🔒</div>
              <h3>Security by Design</h3>
              <p>End-to-end encryption, regular audits, and zero access to user funds.</p>
              <Link to="/security" className="link">Security details →</Link>
            </div>
            <div className="trust-card">
              <div className="trust-icon large">✅</div>
              <h3>Verified Partners Only</h3>
              <p>Every provider is licensed and vetted before joining the platform.</p>
              <Link to="/providers" className="link">View providers →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS - 3-STEP FLOW */}
      <section className="how-it-works page-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Tell us your needs — savings, loans, insurance, or wellness.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Matched</h3>
              <p>Receive personalized recommendations from verified providers.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Connect Securely</h3>
              <p>Transact directly with providers. We never touch your money.</p>
            </div>
          </div>
          <div className="steps-cta">
            <Link to="/how-it-works" className="btn btn-primary">See Full Process</Link>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
      <section className="social-proof page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Trusted Across Africa</h2>
          <div className="metrics-grid">
            <div className="metric">
              <h3>50,000+</h3>
              <p>Active Users</p>
            </div>
            <div className="metric">
              <h3>120+</h3>
              <p>Verified Providers</p>
            </div>
            <div className="metric">
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
          </div>

          <div className="partner-logos">
            <p>Partner Institutions</p>
            <div className="logo-strip">
              {/* Placeholder grayscale logos */}
              <img src="/partners/placeholder1.png" alt="Partner 1" />
              <img src="/partners/placeholder2.png" alt="Partner 2" />
              <img src="/partners/placeholder3.png" alt="Partner 3" />
              <img src="/partners/placeholder4.png" alt="Partner 4" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTENT / SEO PREVIEW */}
      <section className="insights-preview page-section">
        <div className="container">
          <h2 className="section-title">Latest Insights</h2>
          <div className="blog-preview-grid">
            <article className="blog-card">
              <div className="blog-image-placeholder"></div>
              <h3>How to Choose the Best SACCO in 2025</h3>
              <p>Key factors to consider: dividends, governance, digital access, and regulatory compliance.</p>
              <Link to="/blog/how-to-choose-sacco" className="link">Read more →</Link>
            </article>
            <article className="blog-card">
              <div className="blog-image-placeholder"></div>
              <h3>Understanding Stablecoins in African Markets</h3>
              <p>USDT and USDC: use cases, risks, and safe practices for everyday payments.</p>
              <Link to="/blog/stablecoins-africa" className="link">Read more →</Link>
            </article>
            <article className="blog-card">
              <div className="blog-image-placeholder"></div>
              <h3>Building Financial Wellness for Your Team</h3>
              <p>Practical steps for SMEs to implement affordable employee financial programs.</p>
              <Link to="/blog/financial-wellness" className="link">Read more →</Link>
            </article>
          </div>
          <div className="insights-cta">
            <Link to="/blog" className="btn btn-outline">View All Insights</Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CONVERSION SECTION */}
      <section className="final-cta page-section">
        <div className="container">
          <h2>Ready to Simplify Your Financial Life?</h2>
          <p>Join thousands already using PataPesa to access better services — securely and easily.</p>
          <div className="final-cta-buttons">
            <Link to="/contact" className="btn btn-primary large">Get Started Today</Link>
            <Link to="/providers" className="btn btn-secondary large">Become a Provider</Link>
          </div>
          <p className="trust-note">
            Trusted by growing individuals and businesses across Africa.
          </p>
        </div>
      </section>
    </>
  );
}
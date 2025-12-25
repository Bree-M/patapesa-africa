// src/pages/About.jsx
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle
        title="About Us | PataPesa Africa"
        description="Learn how PataPesa Africa is democratizing financial access across Africa with a neutral, non-custodial, and compliant platform for individuals and businesses."
      />

      {/* 1. MISSION-FIRST HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1>Democratizing Financial Access Across Africa</h1>
          <p className="sub">
            PataPesa Africa is building a neutral, non-custodial platform that connects individuals,
            businesses, and corporates to verified financial and wellness providers — securely,
            transparently, and efficiently.
          </p>
          <p className="hero-body">
            We believe financial inclusion should be simple, trustworthy, and empowering.
            That’s why we never hold your funds, never compromise on security, and always put
            your control first.
          </p>
          <div className="hero-cta">
            <Link to="/how-it-works" className="btn btn-primary">
              Explore Our Platform
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM → SOLUTION STORY */}
      <section className="problem-solution page-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-block problem">
              <h2>The Challenge</h2>
              <p>
                Millions of Africans face fragmented financial services: high fees, limited access,
                slow approvals, and poor transparency. Finding the right provider — whether for
                savings, loans, insurance, or wellness — is time-consuming and often risky.
              </p>
              <p>
                Businesses and corporates struggle with employee financial wellness, scattered
                providers, and inefficient onboarding.
              </p>
            </div>

            <div className="story-block solution">
              <h2>Our Solution</h2>
              <p>
                PataPesa Africa is a smart, unified access platform that intelligently matches
                users with licensed providers. We remove friction through:
              </p>
              <ul className="solution-list">
                <li>
                  <strong>Unified Access</strong> — One platform for all verified services
                </li>
                <li>
                  <strong>Smart Matching</strong> — AI-driven, need-based recommendations
                </li>
                <li>
                  <strong>Secure Routing</strong> — Direct, non-custodial payments via PesaFlow™
                </li>
                <li>
                  <strong>Transparency</strong> — Clear comparisons and verified partners only
                </li>
              </ul>
              <p>We never hold funds. You stay in control at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENCY & REGULATORY TRUST */}
      <section className="trust-compliance page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Trust, Regulation & Compliance</h2>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">🔒</div>
              <h3>Non-Custodial Architecture</h3>
              <p>
                We never hold or touch user funds. All transactions route directly between you and
                licensed providers.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">✅</div>
              <h3>Verified Providers Only</h3>
              <p>Every partner is licensed and regulated. We verify credentials before onboarding.</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🛡️</div>
              <h3>Regulatory Alignment</h3>
              <p>Compliant with Kenya Data Protection Act 2019 and GDPR-aligned principles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & GOVERNANCE */}
      <section className="leadership page-section">
        <div className="container">
          <h2 className="section-title">Leadership & Governance</h2>
          <p className="section-intro">
            We are a Nairobi-based team with deep experience in African fintech, compliance, and
            product development.
          </p>

          <div className="leadership-grid">
            <div className="leader-card">
              <img
                src="/team-founder.jpg"
                alt="RK"
                className="leader-photo"
              />
              <h3>Raphael Kirangu</h3>
              <p className="role">Founder & CEO</p>
              <p>
              Drives PataPesa's strategic vision and fosters critical partnerships across the Kenyan financial landscape. His focus is on sustainable growth and ensuring our product meets the unique needs of the East African market. </p>
              <a
                href="https://linkedin.com/in/johnkamau"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="leader-card">
              <img src="/team-cto.jpg" alt="BW" className="leader-photo" />
              <h3>Brenda Wairimu</h3>
              <p className="role">Lead Backend Engineer</p>
              <p>leads the core API development and maintains secure provider integrations. She architected our robust, scalable backend system designed for bank-grade reliability and speed.</p>
              <a
                href="https://linkedin.com/in/sarahm"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="leader-card">
              <img
                src="/team-cpo.jpg"
                alt="TK"
                className="leader-photo"
              />
              <h3>Titus Kiprono</h3>
              <p className="role">Lead Frontend Engineer</p>
              <p>
              Responsible for the intuitive app UI/UX and our cutting-edge Progressive Web App (PWA) interface. His focus is on creating a seamless, accessible, and enjoyable user experience for all our customers.
              </p>
              <a
                href="https://linkedin.com/in/davidot"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPACT & SOCIAL PROOF */}
      <section className="impact page-section bg-subtle">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="metrics-grid">
            <div className="metric">
              <h3>50,000+</h3>
              <p>Users Connected</p>
            </div>
            <div className="metric">
              <h3>120+</h3>
              <p>Verified Providers</p>
            </div>
            <div className="metric">
              <h3>99.9%</h3>
              <p>Platform Uptime</p>
            </div>
            <div className="metric">
              <h3>24/7</h3>
              <p>Support Availability</p>
            </div>
          </div>

          <div className="press-logos">
            <p>As featured in:</p>
            <div className="logo-strip">
              <img src="/press-techcrunch.png" alt="TechCrunch" />
              <img src="/press-businessdaily.png" alt="Business Daily" />
              <img src="/press-thestar.png" alt="The Star" />
              <img src="/press-fintechafrica.png" alt="Fintech Africa" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CULTURE & BEHIND THE SCENES */}
      <section className="culture page-section">
        <div className="container">
          <h2 className="section-title">Our Culture & Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Customer First</h3>
              <p>
                We build for real people and businesses — listening, iterating, and prioritizing
                trust.
              </p>
            </div>
            <div className="value-card">
              <h3>Security by Design</h3>
              <p>
                Every decision starts with protection — of data, funds, and privacy.
              </p>
            </div>
            <div className="value-card">
              <h3>Radical Transparency</h3>
              <p>
                We explain how things work, why we make choices, and what we’re building next.
              </p>
            </div>
            <div className="value-card">
              <h3>Responsible Innovation</h3>
              <p>
                We move fast — but never at the expense of ethics, compliance, or user safety.
              </p>
            </div>
          </div>

          <div className="office-spotlight">
            <img
              src="/office-nairobi.jpg"
              alt="PataPesa team in Nairobi office"
              className="office-image"
            />
            <p className="caption">Our team at TUWORK COWORKING NAIROBI, <br />
            Olenguruone Ave,Lavington,
            Nairobi, Kenya.</p>
          </div>
        </div>
      </section>

      {/* 7. STRATEGIC CTA & INTERNAL LINKING */}
      <section className="about-cta page-section bg-subtle">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands already accessing better financial services through PataPesa.</p>
          <div className="cta-grid">
            <Link to="/contact" className="btn btn-primary large">
              Get Started Today
            </Link>
            <Link to="/providers" className="btn btn-secondary large">
              Become a Provider
            </Link>
            <Link to="/security" className="btn btn-outline large">
              Learn About Security
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
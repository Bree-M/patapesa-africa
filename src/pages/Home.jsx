import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
<>
      <PageTitle 
        title="Home"
        description="Access verified financial services across Africa securely. Non-custodial platform powered by PesaFlow™."
      />

      {/* HERO SECTION - IMMEDIATE VALUE PROP + TRUST */}
      <section className="hero">
        <div className="container">
          <h1>A Smarter Way to Access Financial Services in One Place</h1>
          
          <p className="sub">
            Powered by <strong>PesaFlow™</strong> — smart, secure, non-custodial,
            multi-channel payments.
          </p>
          
          <p className="hero-body">
            PataPesa Africa brings all your financial and wellness providers into one
            intelligent platform—helping individuals, businesses, and corporates
            find verified services, compare options, and connect instantly.
          </p>

          <div className="hero-cta">
            <a href="/contact" className="btn btn-primary">Get Started</a>
            <a href="/providers" className="btn btn-secondary">
              Become a Provider Partner
            </a>
          </div>

          {/* VISUAL TRUST CUES - REINFORCING VERIFIED, SECURE, NON-CUSTODIAL */}
          <div className="trust-badges">
            <span className="badge">✓ Verified Providers Only</span>
            <span className="badge">✓ Non-Custodial Platform</span>
            <span className="badge">✓ End-to-End Security</span>
          </div>
        </div>
      </section>

      {/* TRUST & COMPLIANCE SECTION - REINFORCEMENT */}
      <section className="trust-section">
        <div className="container">
          <h2>Built on Trust & Transparency</h2>
          <div className="trust-grid">
            <div className="trust-card">
              <h3>Non-Custodial</h3>
              <p>We never hold your funds. All transactions flow directly between you and licensed providers via PesaFlow™.</p>
            </div>
            <div className="trust-card">
              <h3>Verified Providers</h3>
              <p>Every partner is licensed and regulated. We verify credentials so you can choose with confidence.</p>
            </div>
            <div className="trust-card">
              <h3>Secure by Design</h3>
              <p>Compliant with Kenya Data Protection Act and GDPR-aligned practices. Your data and privacy protected.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
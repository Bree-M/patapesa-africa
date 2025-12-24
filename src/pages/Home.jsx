export default function Home() {
    return (
      <>
        <section className="hero">
          <div className="container">
            <h1>A Smarter Way to Access Financial Services in One Place</h1>
            <p className="sub">
              Powered by <strong>PesaDirect™</strong> — smart, secure, non-custodial,
              multi-channel payments.
            </p>
            <p>
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
          </div>
        </section>
  
        <section className="features container">
          <h2>Why Choose PataPesa Africa?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Verified Providers</h3>
              <p>Only licensed and regulated institutions you can trust.</p>
            </div>
            <div className="feature-card">
              <h3>PesaDirect™ Payments</h3>
              <p>Secure, direct payments via mobile money, banks, cards, stablecoins.</p>
            </div>
            <div className="feature-card">
              <h3>AI Matching</h3>
              <p>Smart recommendations based on your specific needs.</p>
            </div>
          </div>
        </section>
      </>
    );
  }
// src/pages/ProviderHub.jsx - NEW PAGE: PROVIDER HUB (December 26, 2025)
// Enterprise-focused ROI & partnership clarity
export default function ProviderHub() {
    return (
      <>
        {/* HERO - STRATEGIC BRIDGE */}
        <section className="hub-hero">
          <div className="container">
            <h1>Scale Faster with PataPesa</h1>
            <p className="sub">
              We eliminate fragmentation so financial institutions can reach users instantly — without building separate apps or managing infrastructure.
            </p>
          </div>
        </section>
  
        {/* ROI ENGINE */}
        <section className="roi page-section bg-subtle">
          <div className="container">
            <h2 className="section-title">Clear ROI from Day One</h2>
            <div className="roi-grid">
              <div className="roi-card">
                <h3>Lower CAC</h3>
                <p>Access embedded demand — no marketing spend required.</p>
              </div>
              <div className="roi-card">
                <h3> predictable Cost</h3>
                <p>From KES 60,000/month. No hidden fees.</p>
              </div>
              <div className="roi-card">
                <h3>Zero Infra</h3>
                <p>We handle scaling, security, and compliance.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* PARTNERSHIP TIERS */}
        <section className="tiers page-section">
          <div className="container">
            <h2 className="section-title">Partnership Tiers</h2>
            <div className="tiers-table">
              <div className="tier-header">
                <div></div>
                <div className="tier">
                  <h3>Marketplace</h3>
                  <p>Setup: KES 25K<br />Monthly: KES 60K</p>
                </div>
                <div className="tier recommended">
                  <h3>API Integrated</h3>
                  <p>Setup: KES 150K<br />Monthly: KES 150K</p>
                </div>
                <div className="tier">
                  <h3>White-Label</h3>
                  <p>Setup: KES 250K<br />Monthly: KES 270K</p>
                </div>
              </div>
              <div className="tier-features">
                <div className="feature-row">
                  <span>Visibility in marketplace</span>
                  <span>✓</span>
                  <span>✓</span>
                  <span>✓</span>
                </div>
                <div className="feature-row">
                  <span>Automated lead routing</span>
                  <span>✓</span>
                  <span>✓</span>
                  <span>✓</span>
                </div>
                <div className="feature-row">
                  <span>API & webhook integration</span>
                  <span></span>
                  <span>✓</span>
                  <span>✓</span>
                </div>
                <div className="feature-row">
                  <span>Custom branding</span>
                  <span></span>
                  <span></span>
                  <span>✓</span>
                </div>
                <div className="feature-row">
                  <span>Dedicated success manager</span>
                  <span></span>
                  <span>✓</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* COMPLIANCE & CONTROL */}
        <section className="compliance page-section bg-subtle">
          <div className="container">
            <h2 className="section-title">Compliance & Control</h2>
            <div className="compliance-grid">
              <div className="compliance-card">
                <h3>Non-Custodial Flow</h3>
                <p>You retain full control of funds and KYC.</p>
              </div>
              <div className="compliance-card">
                <h3>Audit-Ready Logs</h3>
                <p>Exportable transaction and access records.</p>
              </div>
              <div className="compliance-card">
                <h3>Regulator-Ready</h3>
                <p>Designed for CBK, CMA, and ODPC alignment.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* ACCOUNT MANAGEMENT */}
        <section className="account-management page-section">
          <div className="container">
            <h2 className="section-title">Dedicated Support</h2>
            <div className="support-grid">
              <div className="support-item">
                <h3>Success Manager</h3>
                <p>Tier 2+ partnerships include quarterly growth reviews.</p>
              </div>
              <div className="support-item">
                <h3>SLA-Backed</h3>
                <p>Guaranteed response times and uptime.</p>
              </div>
            </div>
            <div className="support-cta">
              <button className="btn btn-primary large">Schedule a Call</button>
            </div>
          </div>
        </section>
      </>
    );
  }
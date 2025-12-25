import PageTitle from "../components/PageTitle";

export default function Features() {
    return (
<>
<PageTitle title="Features" description="Intelligent matching, multi-channel payments, corporate wellness." />
<section className="container page-content">
      <h1>Product Features</h1>
      <p className="intro">Intelligent discovery meets secure access — all non-custodial.</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>All Providers in One Place</h3>
          <p>Access SACCOs, banks, insurance, MMFs, and wellness coaches through one platform.</p>
        </div>
        <div className="feature-card">
          <h3>Smart Insights</h3>
          <p>AI-powered recommendations match your needs to verified providers.</p>
        </div>
        <div className="feature-card">
          <h3>Provider Marketplace</h3>
          <p>Browse, compare, connect instantly with licensed institutions.</p>
        </div>
        <div className="feature-card">
          <h3>Corporate & SME Wellness</h3>
          <p>Group savings, employee benefits, and financial education programs.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Routing</h3>
          <p>Instant connections via PesaFlow™ multi-channel payments.</p>
        </div>
      </div>

      <div className="payment-section">
        <h2>PesaFlow™ Payment Methods</h2>
        <p><strong>PataPesa never holds user funds.</strong></p>
        <ul className="payment-methods">
          <li>QR Payments</li>
          <li>Tap-to-Pay (NFC)</li>
          <li>M-PESA & Airtel Money</li>
          <li>Visa/Mastercard</li>
          <li>Bank Transfers</li>
          <li>Stablecoins (USDT/USDC)</li>
        </ul>
      </div>
    </section>
    </>
    );
  }
import PageTitle from "../components/PageTitle";

export default function Providers() {
  return (
<>
<PageTitle title="Partner With Us" description="Join as a verified financial or wellness provider." />
    <section className="container page-content">
      <h1>Partner With PataPesa Africa</h1>

      <p className="intro">
        Join a trusted, non-custodial platform connecting you directly to individuals,
        businesses, and corporates seeking verified financial and wellness services.
      </p>

      <div className="content-block">
        <h2>Approved Provider Categories</h2>
        <ul className="provider-types">
          <li>SACCOs & Cooperatives</li>
          <li>Microfinance Institutions</li>
          <li>Banks & Credit Providers</li>
          <li>Insurance Providers</li>
          <li>Money Market Funds</li>
          <li>Wellness & Financial Coaches</li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Provider Benefits</h2>
        <ul className="benefits-list">
          <li><strong>Enhanced Visibility</strong> — Reach qualified customers actively searching for your services across Africa.</li>
          <li><strong>API or Dashboard Integration</strong> — Seamless onboarding and real-time management of leads and connections.</li>
          <li><strong>AI-Driven Matching</strong> — Intelligent recommendations that connect you with the most relevant users based on their needs.</li>
          <li><strong>Compliance-Aligned Onboarding</strong> — Streamlined process with built-in regulatory checks and documentation support.</li>
          <li><strong>PesaFlow™ Payment Support</strong> — Receive direct, secure multi-channel payments including mobile money, bank transfers, cards, and stablecoins (USDT/USDC).</li>
        </ul>
      </div>

      <div className="cta-section">
        <h2>Ready to Grow Your Reach?</h2>
        <p>Apply today to become a verified provider on PataPesa Africa.</p>
        <a href="/contact" className="btn btn-primary btn-large">Join as a Provider</a>
      </div>
    </section>
    </>
  );
}
import PageTitle from "../components/PageTitle";

export default function HowItWorks() {
  return (
<>
<PageTitle title="How It Works" description="Step-by-step guide to secure, direct connections via PesaFlow™." />

    <section className="container page-content">
      <h1>How PataPesa Africa Works</h1>
      
      <p className="intro">
        Five simple steps to connect you with verified financial services securely.
        We never hold your funds — all transactions flow directly via PesaFlow™.
      </p>

      <ol className="steps">
        <li>
          <h3>1. Unified Access Platform</h3>
          <p>One platform, many verified providers. Access savings, loans, insurance, investments, and wellness services in a single, intelligent interface.</p>
        </li>
        
        <li>
          <h3>2. Intelligent Matching (AI-Powered)</h3>
          <p>Smart recommendations based on your needs. Our system analyzes requirements and matches you with the best licensed providers — transparently and efficiently.</p>
        </li>
        
        <li>
          <h3>3. Non-Custodial, Secure Routing</h3>
          <p><strong>We never hold your funds.</strong> PesaFlow™ enables direct, secure payments between you and providers via mobile money, bank transfers, cards, or stablecoins (USDT/USDC).</p>
        </li>
        
        <li>
          <h3>4. Verified & Regulated Providers</h3>
          <p>Every partner is licensed and regulated. We verify credentials against regulatory authorities before onboarding — only compliant institutions join our platform.</p>
        </li>
        
        <li>
          <h3>5. Seamless Experience</h3>
          <p>Instant connections, clear comparisons, and direct support. From discovery to service delivery, everything works smoothly across mobile and web.</p>
        </li>
      </ol>

      <div className="trust-highlight">
        <h3>Key Principle: Non-Custodial by Design</h3>
        <p>
          PataPesa Africa is a neutral connection platform. Your money stays in 
          <strong>your control</strong> at all times. We facilitate secure, direct 
          routing — never intermediaries, never custodians.
        </p>
      </div>
    </section>
    </>
  );
}
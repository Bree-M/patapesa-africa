import PageTitle from "../components/PageTitle";

export default function Security() {
  return (
<>
<PageTitle title="Security & Compliance" description="Non-custodial architecture and regulatory compliance." />
    <section className="container page-content">
      <h1>Security & Compliance</h1>

      <p className="intro">
        Your trust is our foundation. PataPesa Africa is built with security, privacy,
        and regulatory compliance at its core.
      </p>

      <div className="content-block">
        <h2>Non-Custodial Architecture</h2>
        <p>
          <strong>We never hold or touch user funds.</strong> All transactions are routed
          directly between users and verified providers through PesaFlow™ — a secure,
          non-custodial payment system. PataPesa acts only as a neutral connection
          platform with no access to your money at any stage.
        </p>
      </div>

      <div className="content-block">
        <h2>Data Protection & Privacy</h2>
        <p>
          We comply with the <strong>Kenya Data Protection Act (2019)</strong> and
          align our practices with <strong>GDPR principles</strong> to ensure the highest
          standards of data privacy across borders.
        </p>
        <ul className="security-list">
          <li>Minimal data collection — only what is required for platform functionality and matching</li>
          <li>End-to-end encryption for all sensitive data in transit and at rest</li>
          <li>No sharing of personal data with providers — connections are anonymized where possible</li>
          <li>User rights fully supported: access, rectification, erasure, and portability</li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Secure Infrastructure</h2>
        <p>
          Our platform leverages <strong>industry-leading security standards</strong>
          and <strong>AWS-aligned cloud-native infrastructure</strong> to deliver
          enterprise-grade protection.
        </p>
        <ul className="security-list">
          <li>TLS 1.3 encryption for all communications</li>
          <li>Regular penetration testing and vulnerability assessments</li>
          <li>Secure, isolated environments following least-privilege principles</li>
          <li>Continuous monitoring and automated threat detection</li>
          <li>Disaster recovery and high-availability architecture</li>
        </ul>
      </div>

      <div className="trust-highlight">
        <h3>Compliant • Transparent • Secure</h3>
        <p>
          Designed from the ground up to meet regulatory expectations in Kenya and
          beyond. Non-custodial by design. Privacy-first. Independently verifiable.
        </p>
      </div>
    </section>
    </>
  );
}
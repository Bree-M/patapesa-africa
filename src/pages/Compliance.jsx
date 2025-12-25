import PageTitle from "../components/PageTitle";

export default function Compliance() {
  return (
    <>
    <PageTitle title="Compliance Overview" description="Regulatory positioning and governance standards." />
    <section className="container legal page-content">
      <h1>Compliance & Security Overview</h1>
      <p className="last-updated">Last Updated: November 2025</p>

      <div className="legal-content">
        <h2>Our Compliance Philosophy</h2>
        <p>
          PataPesa Africa is designed as a neutral, non-custodial marketplace. We facilitate
          connections between users and independently licensed providers while maintaining
          strict adherence to regulatory requirements.
        </p>

        <h2>Regulatory Positioning</h2>
        <ul>
          <li><strong>Non-custodial operations</strong> — No holding of client funds eliminates the need for payment or lending licenses</li>
          <li>Provider verification against official regulatory registries</li>
          <li>AML/KYC obligations remain with licensed providers</li>
          <li>Registered with the Office of the Data Protection Commissioner (Kenya)</li>
        </ul>

        <h2>Data Protection Compliance</h2>
        <ul>
          <li>Full compliance with Kenya Data Protection Act 2019</li>
          <li>GDPR-aligned practices for cross-border data flows</li>
          <li>Annual compliance reviews and audits</li>
          <li>Data minimization and purpose limitation principles applied</li>
        </ul>

        <h2>Security Governance</h2>
        <p>
          We maintain enterprise-grade security practices aligned with industry standards,
          including end-to-end encryption, secure cloud infrastructure, and regular independent
          assessments — all while preserving our non-custodial architecture.
        </p>

        <h2>Transparency Commitment</h2>
        <p>
          Our platform operations, provider verification processes, and compliance documentation
          are available for review by regulators and institutional partners upon request.
        </p>

        <p>
          For compliance inquiries, contact compliance@patapesa.africa.
        </p>
      </div>
    </section>
    </>
  );
}
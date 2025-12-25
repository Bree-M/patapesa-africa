import PageTitle from "../components/PageTitle";

export default function DataProtection() {
    return (
      <>
<PageTitle title="Data Protection" description="Your rights and our compliance commitments." />      <section className="container legal page-content">
      <h1>Data Protection Policy</h1>
      <p className="last-updated">Last Updated: November 2025</p>

      <div className="legal-content">
        <h2>Compliance Framework</h2>
        <ul>
          <li><strong>Kenya Data Protection Act 2019</strong> - Full compliance</li>
          <li><strong>GDPR-aligned</strong> cross-border practices</li>
          <li>AWS cloud security standards (SOC 2 Type II)</li>
        </ul>

        <h2>User Rights</h2>
        <ul>
          <li>Right to access personal data</li>
          <li>Right to rectification</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>

        <h2>Data Retention</h2>
        <p>User data is retained only as long as necessary for platform functionality and compliance requirements (maximum 7 years for audit purposes).</p>

        <h2>Contact Data Protection Officer</h2>
        <p><a href="mailto:privacy@patapesa.africa">privacy@patapesa.africa</a></p>
      </div>
    </section>
      </>
    );
  }
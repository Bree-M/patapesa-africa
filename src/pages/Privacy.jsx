import PageTitle from "../components/PageTitle";

export default function Privacy() {
  return (
    <>
<PageTitle title="Privacy Policy" description="How we protect your data under Kenya DPA and GDPR principles." />    <section className="container legal page-content">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: November 2025</p>

      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          PataPesa Africa is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you use our Service.
          We comply with the Kenya Data Protection Act 2019 and align with GDPR principles.
        </p>

        <h2>2. Data We Collect</h2>
        <p>We collect only the minimum data necessary for platform functionality:</p>
        <ul>
          <li>Contact information (email, name) for account and matching purposes</li>
          <li>Profile preferences and needs for intelligent provider recommendations</li>
          <li>Usage data (anonymized) for service improvement</li>
          <li>Essential cookies for site functionality (no tracking cookies)</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To provide and improve the Service</li>
          <li>To facilitate intelligent, need-based provider matching</li>
          <li>To communicate with you about your inquiries or account</li>
          <li>To ensure security and prevent fraud</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>
          <strong>We do not share personal data with third-party providers.</strong> Connections
          are anonymized where possible. We may share aggregated, non-identifiable data for
          analytical purposes.
        </p>
        <p>
          Data may be disclosed to service providers (e.g., cloud hosting) under strict
          confidentiality agreements or when required by law.
        </p>

        <h2>5. Your Rights</h2>
        <p>Under applicable laws, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Rectify inaccurate data</li>
          <li>Request erasure</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href="mailto:privacy@patapesa.africa">privacy@patapesa.africa</a>.
        </p>

        <h2>6. Data Security & Retention</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your data.
          Data is retained only as long as necessary for the purposes outlined or as required
          by law.
        </p>

        <h2>7. Changes to this Policy</h2>
        <p>
          We may update this Policy periodically. Significant changes will be communicated via
          the Service.
        </p>
      </div>
    </section>
    </>
  );
}
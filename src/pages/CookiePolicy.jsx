import PageTitle from "../components/PageTitle";

export default function CookiePolicy() {
    return (
        <>
<PageTitle title="Cookie Policy" description="We use only essential cookies." />        <section className="container legal page-content">
      <h1>Cookie Policy</h1>
      <p className="last-updated">Last Updated: November 2025</p>

      <div className="legal-content">
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit our website. They help improve user experience and site functionality.</p>

        <h2>2. How We Use Cookies</h2>
        <p>PataPesa Africa uses only <strong>essential cookies</strong> required for core site functionality, security, and performance monitoring. We do <strong>not</strong> use tracking, advertising, or third-party analytics cookies.</p>

        <h2>3. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies</strong>: Required for navigation, form submissions, and access to secure areas</li>
          <li><strong>Performance Cookies</strong>: Anonymous data to improve site speed (no personal identification)</li>
        </ul>

        <h2>4. Your Choices</h2>
        <p>You can manage cookie preferences through your browser settings. Blocking essential cookies may limit site functionality.</p>

        <h2>5. Contact</h2>
        <p>For questions about this policy, contact <a href="mailto:privacy@patapesa.africa">privacy@patapesa.africa</a>.</p>
      </div>
    </section>
      </>
    );
  }
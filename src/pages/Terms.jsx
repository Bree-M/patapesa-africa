import PageTitle from "../components/PageTitle";

export default function Terms() {
  return (
<>
<PageTitle title="Terms & Conditions" description="Legal terms for using PataPesa Africa." />
    <section className="container legal page-content">
      <h1>Terms & Conditions</h1>
      <p className="last-updated">Last Updated: November 2025</p>

      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          These Terms & Conditions govern your use of the PataPesa Africa website and platform
          (collectively, the "Service"). By accessing or using the Service, you agree to be
          bound by these Terms.
        </p>

        <h2>2. Nature of the Service</h2>
        <p>
          <strong>PataPesa Africa is a non-custodial financial marketplace.</strong> We do not
          hold, manage, or control user funds at any time. We do not issue loans, provide
          financial advice, or act as a financial institution, payment processor, or money
          transmitter.
        </p>
        <p>
          The Service facilitates connections between users and independently licensed third-party
          providers. All transactions occur directly between you and the selected provider via
          PesaFlow™.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          You are solely responsible for evaluating providers, reviewing their terms, and
          conducting your own due diligence before engaging in any transaction.
        </p>

        <h2>4. Non-Custodial Disclaimer</h2>
        <p>
          <strong>PataPesa Africa never holds, custodies, or has access to user funds.</strong>
          Payments are routed directly between users and providers. We bear no liability for
          funds transferred or services delivered by third-party providers.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, PataPesa Africa shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising from your
          use of the Service or transactions with third-party providers.
        </p>
        <p>
          We make no warranties regarding the accuracy, reliability, or suitability of third-party
          providers listed on the platform.
        </p>

        <h2>6. Governing Law & Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          Republic of Kenya. Any disputes arising under these Terms shall be subject to the
          exclusive jurisdiction of the courts of Kenya.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Service after changes
          constitutes acceptance of the updated Terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions about these Terms, please contact us at info@patapesa.africa.
        </p>
      </div>
    </section>
    </>
  );
}
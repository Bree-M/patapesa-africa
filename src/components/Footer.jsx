import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* COLUMN 1 - BRAND & IDENTITY */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/patapesa-logo.png" alt="" className="logo-img" />
              <span>PataPesa Africa</span>
            </Link>
            <p>
              PataPesa Africa connects users to trusted financial and wellness providers across Africa.
            </p>
            <p><strong>Powered by PesaDirect™</strong></p>
            <p className="tagline">Smart. Secure. Non-Custodial.</p>

            {/* DISCLAIMER */}
            <div className="disclaimer">
              <strong>Important:</strong> PataPesa does not hold user funds. All transactions are conducted directly between users and licensed providers.
            </div>
          </div>

          {/* COLUMN 2 - PLATFORM LINKS */}
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/providers">Providers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - LEGAL & COMPLIANCE */}
          <div className="footer-column">
            <h4>Legal & Compliance</h4>
            <ul>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/data-protection">Data Protection</Link></li>
              <li><Link to="/compliance">Compliance & Security</Link></li>
            </ul>
            <div className="trust-indicators">
              <p>Non-Custodial Platform</p>
              <p>Kenya Data Protection Act Compliant</p>
              <p>GDPR Aligned</p>
            </div>
          </div>

          {/* COLUMN 4 - CONTACT & TRUST */}
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li><a href="mailto:info@patapesa.africa">info@patapesa.africa</a></li>
              <li><a href="mailto:support@patapesa.africa">support@patapesa.africa</a></li>
              <li><a href="mailto:contact@circlefund.africa">contact@circlefund.africa</a></li>

            </ul>
          </div>
        </div>

        {/* SECONDARY BOTTOM BAR */}
        <div className="footer-bottom">
          <p>© 2025 PataPesa Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
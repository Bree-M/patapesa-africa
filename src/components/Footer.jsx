import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/patapesa-logo.png" alt="PataPesa Africa" className="logo-img" />
              <span>PataPesa Africa</span>
            </div>
            <p>Smart access to verified financial services across Africa. Powered by PesaDirect™.</p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <ul>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/providers">Providers</Link></li>
                <li><Link to="/security">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/compliance">Compliance</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PataPesa Africa. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/data-protection">Data Protection</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
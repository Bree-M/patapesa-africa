// src/components/Navbar.jsx - FINAL PREMIUM FULL-SCREEN MOBILE MENU (December 25, 2025)
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  // Scroll behavior - sticky + elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Accessibility: Focus trap, Escape key, outside click, scroll lock
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          {/* LOGO LEFT */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/patapesa-logo.png" alt="" className="logo-img" />
            <span>PataPesa Africa</span>
          </Link>

          {/* DESKTOP HORIZONTAL LINKS */}
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link></li>
            <li><Link to="/how-it-works" className={`nav-link ${location.pathname === "/how-it-works" ? "active" : ""}`}>How It Works</Link></li>
            <li><Link to="/providers" className={`nav-link ${location.pathname === "/providers" ? "active" : ""}`}>Providers</Link></li>
            <li><Link to="/security" className={`nav-link ${location.pathname === "/security" ? "active" : ""}`}>Security</Link></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}>Blog</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link></li>
          </ul>

          {/* DESKTOP CTA */}
          <div className="nav-cta">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            ref={buttonRef}
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE MENU - DARK PREMIUM THEME */}
      {isOpen && (
        <div className="mobile-menu-overlay" id="mobile-menu" ref={menuRef}>
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-logo" onClick={closeMenu}>
              <img src="/patapesa-logo.png" alt="" className="logo-img" />
              <span>PataPesa Africa</span>
            </Link>
            <button
              className="mobile-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="mobile-menu-content">
            {/* GROUPED NAVIGATION WITH HEADERS */}
            <div className="menu-group">
              <strong className="group-title">Personal</strong>
              <Link to="/" className={`mobile-nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>Home</Link>
              <Link to="/how-it-works" className={`mobile-nav-link ${location.pathname === "/how-it-works" ? "active" : ""}`} onClick={closeMenu}>How It Works</Link>
              <Link to="/security" className={`mobile-nav-link ${location.pathname === "/security" ? "active" : ""}`} onClick={closeMenu}>Security</Link>
            </div>

            <div className="menu-group">
              <strong className="group-title">Business</strong>
              <Link to="/providers" className={`mobile-nav-link ${location.pathname === "/providers" ? "active" : ""}`} onClick={closeMenu}>For Providers</Link>
            </div>

            <div className="menu-group">
              <strong className="group-title">Resources</strong>
              <Link to="/blog" className={`mobile-nav-link ${location.pathname === "/blog" ? "active" : ""}`} onClick={closeMenu}>Blog & Insights</Link>
            </div>

            <div className="menu-group">
              <strong className="group-title">Company</strong>
              <Link to="/about" className={`mobile-nav-link ${location.pathname === "/about" ? "active" : ""}`} onClick={closeMenu}>About Us</Link>
              <Link to="/contact" className={`mobile-nav-link ${location.pathname === "/contact" ? "active" : ""}`} onClick={closeMenu}>Contact</Link>
            </div>

            {/* PRIMARY CTA - BOTTOM ANCHORED */}
            <div className="mobile-menu-cta">
              <Link to="/contact" className="btn btn-primary full-width" onClick={closeMenu}>
                Get Started
              </Link>
              <Link to="/providers" className="btn btn-secondary full-width" onClick={closeMenu}>
                Become a Provider
              </Link>
            </div>

            {/* SECONDARY UTILITIES & TRUST */}
            <div className="mobile-menu-footer">
              <div className="secondary-links">
                <Link to="/privacy" onClick={closeMenu}>Privacy Policy</Link>
                <Link to="/terms" onClick={closeMenu}>Terms & Conditions</Link>
              </div>
              <p className="trust-note">
                Non-Custodial Platform • Kenya DPA Compliant • GDPR Aligned
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
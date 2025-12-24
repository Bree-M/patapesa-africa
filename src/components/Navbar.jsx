import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/providers", label: "Providers" },
  { path: "/security", label: "Security" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" }
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/patapesa-logo.png" alt="PataPesa Africa" className="logo-img" />
          <span>PataPesa Africa</span>
        </Link>
        
        <ul className="nav-links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link 
                to={path} 
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <Link to="/providers" className="btn btn-primary">Become Partner</Link>
        </div>
      </div>
    </nav>
  );
}
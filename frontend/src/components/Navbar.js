import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {}
      {isMenuOpen && (
        <div className="navbar__overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      
      <nav className="navbar">
        <div className="navbar__brand-group">
          <img src="/Profil.png" alt="Profil" className="navbar__icon" />
          <Link to="/" className="navbar__brand">INFOTerra</Link>
        </div>
        
        {}
        <button className="navbar__hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {}
        <div className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="navbar__links">
            <Link to="/" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Acasă</Link>
            <Link to="/map" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Hartă</Link>
            <Link to="/about" className="navbar__link" onClick={() => setIsMenuOpen(false)}>Despre</Link>
          </div>
          <div className="navbar__user">
            {user ? (
              <div className="navbar__user-info">
                <span className="navbar__welcome">Bună, {user.firstName}!</span>
                <button onClick={handleLogout} className="navbar__logout">
                  Deconectare
                </button>
              </div>
            ) : (
              <Link to="/login" className="navbar__login" title="Login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand-group">
        <img src="/Profil.png" alt="Profil" className="navbar__icon" />
        <Link to="/" className="navbar__brand">INFOTerra</Link>
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">Acasă</Link>
        <Link to="/map" className="navbar__link">Hartă</Link>
        <Link to="/about" className="navbar__link">Despre</Link>
      </div>
      <div className="navbar__user">
        <Link to="/login" className="navbar__login" title="Login">
          Login
        </Link>
      </div>
    </nav>
  );
}

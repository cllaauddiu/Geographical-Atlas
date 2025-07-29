// frontend/src/components/Login.js
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Integrare backend autentificare
    alert("Autentificare demo: " + email);
  };

  return (
    <div className="login-bg">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Autentificare</h2>
        <div className="login-field">
          <span className="login-icon" role="img" aria-label="email">📧</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-field">
          <span className="login-icon" role="img" aria-label="parola">🔒</span>
          <input
            type="password"
            placeholder="Parolă"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-btn" type="submit">Intră în cont</button>
        <div className="login-links">
          <a href="/reset">Ai uitat parola?</a>
          <span> | </span>
          <a href="/register">Creează cont nou</a>
        </div>
      </form>
    </div>
  );
}

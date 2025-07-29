import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2>Despre INFOTerra</h2>
      <p className="about-intro">
        INFOTerra este o platformă interactivă dedicată explorării geografice și educației despre planeta noastră.
        Descoperă hărți, informații utile și resurse pentru pasionații de geografie și nu numai!
      </p>
      <div className="about-cards">
        <div className="about-card">
          <span className="about-icon" role="img" aria-label="planet">🌍</span>
          <h3>Misiunea noastră</h3>
          <p>
            Să aducem informația geografică mai aproape de toți, într-un mod vizual, modern și accesibil de pe orice dispozitiv.
          </p>
        </div>
        <div className="about-card">
          <span className="about-icon" role="img" aria-label="contact">📧</span>
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:contact@infoterra.com">contact@infoterra.com</a><br />
            Telefon: <a href="tel:+40712345678">+40 712 345 678</a>
          </p>
        </div>
        <div className="about-card">
          <span className="about-icon" role="img" aria-label="info">ℹ️</span>
          <h3>Informații importante</h3>
          <ul>
            <li>Platformă 100% gratuită</li>
            <li>Accesibilă de pe mobil și desktop</li>
            <li>Date actualizate periodic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

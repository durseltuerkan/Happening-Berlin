const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/category/music">Kategorien</a></li>
            <li><a href="/about">Über uns</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Email: info@happeningberlin.de</p>
          <p>Telefon: +49 123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Rechtliches</h4>
          <ul>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/datenschutz">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 HappeningBerlin. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default FooterPage;

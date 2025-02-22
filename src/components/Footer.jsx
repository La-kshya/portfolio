import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Lakshya Rathi. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://www.vecteezy.com/free-png/rocket">Rocket PNGs by Vecteezy</a>
        </div>
      </div>
    </footer>
  );
}

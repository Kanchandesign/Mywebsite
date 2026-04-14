import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
        <p className="footer-text">
          © {currentYear} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

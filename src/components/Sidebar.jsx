import './Sidebar.css'

function Sidebar({ setShowAbout, showAbout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Profile Image */}
        <div className="profile-image">
          <img src="https://raw.githubusercontent.com/Kanchandesign/Mywebsite/main/IMG-20260405-WA0041%20(1).jpg" alt="Profile" />
        </div>

        {/* Name and Bio */}
        <h1 className="name">Kanchan Singh</h1>
        
        <p className="bio">
          UX Designer specialized in architecting scalable ecosystems for high-growth companies. 
          Formally at Modal. I bridge gap between complex technical infrastructure and intuitive user experience to drive multi-million dollar business impact.
        </p>

        {/* Social Links */}
        <div className="social-links">
          <a href="#" aria-label="Dribbble">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <p className="cta-text">
            Interested in working together?<br />
            <span className="cta-subtext">Shoot me an email if you'd like to chat.</span>
          </p>
          
          <div className="cta-buttons">
            <button 
              className="btn btn-secondary"
              onClick={() => setShowAbout(!showAbout)}
            >
              About Me
            </button>
            <a href="mailto:hello@kanchan.dev" className="btn btn-primary">
              Email
            </a>
          </div>
        </div>

        {/* Clients/Logos */}
        <div className="clients">
          <p className="clients-label">Clients & Co.</p>
          <div className="client-logos">
            <div className="logo-placeholder">LOGO</div>
            <div className="logo-placeholder">LOGO</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

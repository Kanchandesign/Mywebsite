import './Sidebar.css'

function Sidebar({ setShowAbout, showAbout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Profile Container */}
        <div className="profile-container">
          {/* Profile Image */}
          <div className="profile-image">
            <img src="/profile.png" alt="Profile" />
          </div>

          {/* Name and Bio */}
          <h1 className="name">Kanchan Singh</h1>
          
          <p className="bio">
            UX Designer specialized in architecting scalable ecosystems for high-growth companies. 
            Formally at Modal. I bridge gap between complex technical infrastructure and intuitive user experience to drive multi-million dollar business impact.
          </p>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://linkedin.com/in/kanchan-singh-b3b002236" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <img src="/mdi_linkedin.svg" alt="LinkedIn" width="16" height="16" />
            </a>
            <a href="https://dribbble.com/KanchanS19" target="_blank" rel="noopener noreferrer" aria-label="Dribble">
              <img src="/streamline-flex_dribble-solid.svg" alt="Dribble" width="16" height="16" />
            </a>
            <a href="/resume.pdf?v=20260426" target="_blank" rel="noopener noreferrer" aria-label="Resume">
              <img src="/mdi_resume.svg" alt="Resume" width="16" height="16" />
            </a>
            <a href="https://behance.net/kanchansingh11" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <img src="/mage_behance.svg" alt="Behance" width="16" height="16" />
            </a>
          </div>
        </div>

        {/* CTA Container */}
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
      </div>
    </aside>
  )
}

export default Sidebar

import './Header.css'

function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>My Portfolio</h1>
        </div>
        <nav className="nav">
          <button 
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => setCurrentPage('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentPage === 'resume' ? 'active' : ''}`}
            onClick={() => setCurrentPage('resume')}
          >
            Resume
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

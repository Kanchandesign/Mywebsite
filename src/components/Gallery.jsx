import { useState, useEffect } from 'react'
import './Gallery.css'
import ProjectCard from './ProjectCard'
import About from './About'

function Gallery({ showAbout, setShowAbout }) {
  const [scrollY, setScrollY] = useState(0)
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 2,
      title: 'Y22 ai',
      subtitle: 'Product • Web',
      image: '/Free MacBook Pro mockup on stone pedestal (Mockuuups Studio).png',
      backgroundColor: '#90C4B0',
      color: 'light',
      dots: 1,
    },
    {
      id: 1,
      title: 'The Helpline Club',
      subtitle: 'Product',
      image: '/Hand and iPhone 16 Pro.png',
      backgroundColor: '#1a1a1a',
      color: 'dark',
      dots: 1,
    },
    {
      id: 4,
      title: 'SAM',
      subtitle: 'Product • Web',
      image: '/MacBook-01.png',
      backgroundColor: '#2c2c3c',
      color: 'dark',
      dots: 1,
    },
    {
      id: 3,
      title: 'Chef Ami',
      subtitle: 'Product',
      image: '/Pixel 7a.png',
      backgroundColor: '#f5a557',
      color: 'light',
      dots: 1,
    }
  ]

  useEffect(() => {
    const calculateActiveProject = () => {
      const projectIndex = Math.floor(scrollY / window.innerHeight)
      setActiveProject(Math.min(projectIndex, projects.length - 1))
    }

    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop
      setScrollY(scrollTop)
      calculateActiveProject()
    }

    const galleryElement = document.querySelector('.gallery')
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll)
      return () => galleryElement.removeEventListener('scroll', handleScroll)
    }
  }, [projects.length])

  return (
    <main className="gallery">
      {showAbout ? (
        <div className="about-view">
          <button 
            className="close-btn"
            onClick={() => setShowAbout(false)}
          >
            ← Back
          </button>
          <About />
        </div>
      ) : (
        <div className="gallery-container">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-wrapper"
              style={{
                opacity: 1,
                transform: `translateY(${(activeProject - index) * -10}px)`,
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      )}

      {!showAbout && (
        <div className="scroll-progress">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === activeProject ? 'active' : ''}`}
              onClick={() => {
                const galleryElement = document.querySelector('.gallery')
                if (galleryElement) {
                  galleryElement.scrollTop = index * window.innerHeight
                }
              }}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Gallery

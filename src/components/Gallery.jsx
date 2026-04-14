import { useState, useEffect } from 'react'
import './Gallery.css'
import ProjectCard from './ProjectCard'
import About from './About'

function Gallery({ showAbout, setShowAbout }) {
  const [scrollY, setScrollY] = useState(0)
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'HGUI Design System',
      subtitle: 'Product • UX Design',
      image: 'https://via.placeholder.com/800x500?text=HGUI+Design+System',
      backgroundColor: '#1a1a1a',
      color: 'dark',
      dots: 3
    },
    {
      id: 2,
      title: 'The Nahire Cult',
      subtitle: 'Product',
      image: 'https://via.placeholder.com/800x500?text=The+Nahire+Cult',
      backgroundColor: '#90C4B0',
      color: 'light',
      dots: 2
    },
    {
      id: 3,
      title: 'GAD',
      subtitle: 'Product • Web',
      image: 'https://via.placeholder.com/800x500?text=GAD+Project',
      backgroundColor: '#2c2c3c',
      color: 'dark',
      dots: 2
    },
    {
      id: 4,
      title: 'SAM Corp',
      subtitle: 'Product • Web',
      image: 'https://via.placeholder.com/800x500?text=SAM+Corp',
      backgroundColor: '#f5a557',
      color: 'light',
      dots: 3
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
                opacity: Math.abs(index - activeProject) > 1.5 ? 0.5 : 1,
                transform: `translateY(${Math.max(0, (activeProject - index) * -5)}px)`
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

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
      title: 'Helpline Club',
      subtitle: 'Product • UX Design',
      image: 'https://raw.githubusercontent.com/Kanchandesign/Mywebsite/main/Hand%20and%20iPhone%2016%20Pro.png',
      backgroundColor: '#1a1a1a',
      color: 'dark',
    },
    {
      id: 2,
      title: 'Y22 ai',
      subtitle: 'Product',
      image: 'https://raw.githubusercontent.com/Kanchandesign/Mywebsite/main/Free%20MacBook%20Pro%20mockup%20on%20stone%20pedestal%20%28Mockuuups%20Studio%29.png',
      backgroundColor: '#90C4B0',
      color: 'light',
    },
    {
      id: 3,
      title: 'Chef Ami',
      subtitle: 'Product • Web',
      image: 'https://raw.githubusercontent.com/Kanchandesign/Mywebsite/main/Pixel%207a.png',
      backgroundColor: '#2c2c3c',
      color: 'dark',
    },
    {
      id: 4,
      title: 'SAM',
      subtitle: 'Product • Web',
      image: 'https://raw.githubusercontent.com/Kanchandesign/Mywebsite/main/MacBook%20%2301.png',
      backgroundColor: '#f5a557',
      color: 'light',
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

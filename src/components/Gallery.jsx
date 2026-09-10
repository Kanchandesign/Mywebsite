import { useState, useEffect } from 'react'
import './Gallery.css'
import ProjectCard from './ProjectCard'
import About from './About'
import ProjectDetail from './ProjectDetail'
import { projects } from '../data/projects'

function Gallery({ showAbout, setShowAbout, setIsProjectDetailOpen }) {
  const [activeProject, setActiveProject] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  const projectsSorted = [...projects].filter((p) => !p.hidden).sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0))

  const selectedProject = selectedProjectId
    ? projectsSorted.find((p) => p.id === selectedProjectId) ?? null
    : null

  useEffect(() => {
    if (showAbout) {
      setSelectedProjectId(null)
      setIsProjectDetailOpen?.(false)
      const galleryElement = document.querySelector('.gallery')
      if (galleryElement) {
        galleryElement.scrollTop = 0
      }
    }
  }, [showAbout, setIsProjectDetailOpen])

  useEffect(() => {
    const galleryElement = document.querySelector('.gallery')
    if (!galleryElement) return

    const handleScroll = () => {
      const wrappers = galleryElement.querySelectorAll('.project-wrapper')
      if (!wrappers.length) return

      const marker = galleryElement.scrollTop + galleryElement.clientHeight * 0.35
      let next = 0
      wrappers.forEach((el, i) => {
        if (el.offsetTop <= marker) next = i
      })
      setActiveProject(next)
    }

    galleryElement.addEventListener('scroll', handleScroll)
    return () => galleryElement.removeEventListener('scroll', handleScroll)
  }, [projectsSorted.length])

  const openProject = (project) => {
    setShowAbout(false)
    setSelectedProjectId(project.id)
    setIsProjectDetailOpen?.(true)
    const galleryElement = document.querySelector('.gallery')
    if (galleryElement) {
      galleryElement.scrollTop = 0
    }
  }

  const closeProject = () => {
    setSelectedProjectId(null)
    setIsProjectDetailOpen?.(false)
  }

  return (
    <main className={`gallery${selectedProject ? ' gallery--case-study' : ''}${showAbout && !selectedProject ? ' gallery--about' : ''}`}>
      {selectedProject ? (
        <div className="about-view about-view--project-detail">
          <div className="project-detail-header">
            <button type="button" className="close-btn btn-go-back" onClick={closeProject}>
              <span className="btn-go-back__icon" aria-hidden="true">
                ←
              </span>
              Go Back
            </button>
          </div>
          <ProjectDetail project={selectedProject} onBack={closeProject} />
        </div>
      ) : showAbout ? (
        <div className="about-view about-view--about-page">
          <div className="project-detail-header">
            <button type="button" className="close-btn btn-go-back" onClick={() => setShowAbout(false)}>
              <span className="btn-go-back__icon" aria-hidden="true">
                ←
              </span>
              Go Back
            </button>
          </div>
          <About />
        </div>
      ) : (
        <div className="gallery-container">
          {projectsSorted.map((project, index) => (
            <div key={project.id} className="project-wrapper">
              <ProjectCard project={project} index={index} onSelect={() => openProject(project)} />
            </div>
          ))}
        </div>
      )}

      {!showAbout && !selectedProject && (
        <div className="scroll-progress">
          {projectsSorted.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === activeProject ? 'active' : ''}`}
              onClick={() => {
                const galleryElement = document.querySelector('.gallery')
                const wrappers = galleryElement?.querySelectorAll('.project-wrapper')
                const target = wrappers?.[index]
                if (galleryElement && target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

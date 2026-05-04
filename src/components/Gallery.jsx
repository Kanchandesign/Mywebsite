import { useState, useEffect } from 'react'
import './Gallery.css'
import ProjectCard from './ProjectCard'
import About from './About'
import ProjectDetail from './ProjectDetail'
import gaiaCardImage from './gaia.png'
import gaiaCaseImage from './Gaia case.png'

function Gallery({ showAbout, setShowAbout, setIsProjectDetailOpen }) {
  const [scrollY, setScrollY] = useState(0)
  const [activeProject, setActiveProject] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  // `image` = ProjectCard background. `detailImages` = case-study scroll (/public paths or imported assets).
  const projects = [
    {
      id: 1,
      title: 'The Helpline Club',
      subtitle: 'Product',
      image: '/Hand and iPhone 16 Pro.png',
      detailLayout: 'grid',
      detailImages: [
        '/Helpline images/1.png',
        '/Helpline images/2.png',
        '/Helpline images/3.png',
        '/Helpline images/4.png',
        '/Helpline images/5.png',
        '/Helpline images/6.png',
        '/Helpline images/7.png',
        '/Helpline images/8.png',
        '/Helpline images/9.png',
        '/Helpline images/10.png',
        '/Helpline images/11.png',
        '/Helpline images/12.png',
      ],
      backgroundColor: '#1a1a1a',
      color: 'dark',
      dots: 1,
      detailOverview:
        'Mobile-first product work focused on clarity and trust for users seeking support through a sensitive, high-stakes journey.',
      detailBullets: [
        'Onboarding and core task flows',
        'Accessibility and readable hierarchy',
        'Iteration from research and stakeholder feedback',
      ],
      detailResults:
        'A clearer path to help and a visual language that feels steady and human, aligned with the mission of the club.',
    },
    {
      id: 2,
      title: 'Y22 ai',
      subtitle: 'Product • Web',
      image: '/Free MacBook Pro mockup on stone pedestal (Mockuuups Studio).png',
      detailLayout: 'grid',
      detailImages: [
        '/y22.png',
      ],
      backgroundColor: '#90C4B0',
      color: 'light',
      dots: 1,
      detailOverview:
        'End-to-end product design for an AI-powered workflow tool, balancing technical depth with a calm, approachable interface for daily use.',
      detailBullets: [
        'Information architecture for multi-step AI tasks',
        'Design system and component patterns',
        'Collaboration with engineering on feasibility and polish',
      ],
      detailResults:
        'Shipped a cohesive web experience that reduced perceived complexity and set a scalable foundation for future AI features.',
    },
    {
      id: 3,
      title: 'Gaia',
      subtitle: 'Product • Web',
      image: gaiaCardImage,
      detailLayout: 'grid',
      detailImages: [gaiaCaseImage],
      backgroundColor: '#2c2c3c',
      color: 'dark',
      dots: 1,
      detailOverview:
        'Web product design emphasizing structure, dashboards, and dense data presented without overwhelming new users.',
      detailBullets: [
        'Layout and navigation for complex domains',
        'States, empty states, and progressive disclosure',
        'Alignment with brand and engineering constraints',
      ],
      detailResults:
        'Delivered a scalable web UI that teams could extend while keeping a consistent, professional feel.',
    },
    {
      id: 4,
      title: 'Chef Ami',
      subtitle: 'Product',
      image: '/Pixel 7a.png',
      comingSoon: true,
      detailLayout: 'grid',
      detailImages: [],
      backgroundColor: '#f5a557',
      color: 'light',
      dots: 1,
      detailOverview:
        'Product experience design for a consumer app with a warm, food-forward brand and fast, glanceable interactions.',
      detailBullets: [
        'Core journeys from discovery to action',
        'Visual tone and micro-interactions',
        'Cross-device considerations',
      ],
      detailResults:
        'A friendly, appetizing interface that supports habit-building and scales as the product grows.',
    },
  ]

  const projectsSorted = [...projects].sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0))

  const selectedProject = selectedProjectId
    ? projectsSorted.find((p) => p.id === selectedProjectId) ?? null
    : null

  useEffect(() => {
    if (showAbout) {
      setSelectedProjectId(null)
      setIsProjectDetailOpen?.(false)
    }
  }, [showAbout])

  useEffect(() => {
    const calculateActiveProject = (y) => {
      const projectIndex = Math.floor(y / window.innerHeight)
      setActiveProject(Math.min(projectIndex, projectsSorted.length - 1))
    }

    const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop
      setScrollY(scrollTop)
      calculateActiveProject(scrollTop)
    }

    const galleryElement = document.querySelector('.gallery')
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll)
      return () => galleryElement.removeEventListener('scroll', handleScroll)
    }
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

  return (
    <main className="gallery">
      {selectedProject ? (
        <div className="about-view about-view--project-detail">
          <div className="project-detail-header">
            <button
              type="button"
              className="close-btn"
              onClick={() => {
                setSelectedProjectId(null)
                setIsProjectDetailOpen?.(false)
              }}
            >
              ← Back
            </button>
            <h2 className="project-detail-title">{selectedProject?.title ?? ''}</h2>
          </div>
          <ProjectDetail project={selectedProject} />
        </div>
      ) : showAbout ? (
        <div className="about-view">
          <button type="button" className="close-btn" onClick={() => setShowAbout(false)}>
            ← Back
          </button>
          <About />
        </div>
      ) : (
        <div className="gallery-container">
          {projectsSorted.map((project, index) => (
            <div 
              key={project.id} 
              className="project-wrapper"
              style={{
                opacity: 1,
                transform: `translateY(${(activeProject - index) * -10}px)`,
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
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

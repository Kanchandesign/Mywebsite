import { useState, useEffect } from 'react'
import './Gallery.css'
import ProjectCard from './ProjectCard'
import About from './About'
import ProjectDetail from './ProjectDetail'

function Gallery({ showAbout, setShowAbout }) {
  const [scrollY, setScrollY] = useState(0)
  const [activeProject, setActiveProject] = useState(0)
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  // `image` = ProjectCard background. `detailImages` = case-study scroll (files in /public).
  const projects = [
    {
      id: 2,
      title: 'Y22 ai',
      subtitle: 'Product • Web',
      image: '/Free MacBook Pro mockup on stone pedestal (Mockuuups Studio).png',
      detailLayout: 'grid',
      detailImages: [
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70',
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
      id: 4,
      title: 'SAM',
      subtitle: 'Product • Web',
      image: '/MacBook-01.png',
      detailLayout: 'grid',
      detailImages: [
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70',
      ],
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
      id: 3,
      title: 'Chef Ami',
      subtitle: 'Product',
      image: '/Pixel 7a.png',
      detailLayout: 'grid',
      detailImages: [
        'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70',
      ],
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

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId) ?? null
    : null

  useEffect(() => {
    if (showAbout) {
      setSelectedProjectId(null)
    }
  }, [showAbout])

  useEffect(() => {
    const calculateActiveProject = (y) => {
      const projectIndex = Math.floor(y / window.innerHeight)
      setActiveProject(Math.min(projectIndex, projects.length - 1))
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
  }, [projects.length])

  const openProject = (project) => {
    setShowAbout(false)
    setSelectedProjectId(project.id)
    const galleryElement = document.querySelector('.gallery')
    if (galleryElement) {
      galleryElement.scrollTop = 0
    }
  }

  return (
    <main className="gallery">
      {selectedProject ? (
        <div className="about-view about-view--project-detail">
          <button type="button" className="close-btn" onClick={() => setSelectedProjectId(null)}>
            ← Back
          </button>
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
              <ProjectCard project={project} index={index} onSelect={() => openProject(project)} />
            </div>
          ))}
        </div>
      )}

      {!showAbout && !selectedProject && (
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

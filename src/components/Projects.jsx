import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Add your project description here',
      technologies: ['React', 'CSS', 'JavaScript'],
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Project+1'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Add your project description here',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Project+2'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Add your project description here',
      technologies: ['Vue.js', 'Firebase'],
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Project+3'
    },
  ]

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <p className="section-subtitle">Click on any project to learn more</p>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

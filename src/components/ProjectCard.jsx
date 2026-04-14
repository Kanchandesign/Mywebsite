import './ProjectCard.css'

function ProjectCard({ project, index }) {
  return (
    <div 
      className={`project-card project-${index + 1}`}
      style={{ 
        backgroundImage: `url(${project.image})`,
        backgroundColor: project.backgroundColor
      }}
    >
      <div className="project-info">
        <div className="project-text">
          <h2 className={`project-title ${project.color}`}>
            {project.title}
          </h2>
          <p className={`project-subtitle ${project.color}`}>
            {project.subtitle}
          </p>
        </div>
        
        <div className="project-dots">
          {Array.from({ length: project.dots }).map((_, i) => (
            <div key={i} className={`dot ${project.color}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

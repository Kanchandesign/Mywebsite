import './ProjectCard.css'

function ProjectCard({ project, index }) {
  // Ensure filenames with spaces / '#' work in CSS url(...)
  const encodedImageUrl = (() => {
    const raw = project?.image ?? ''
    if (!raw) return ''

    // `#` is interpreted as a fragment delimiter; encode it for file paths.
    const safePath = raw.replaceAll('#', '%23')
    try {
      return new URL(safePath, window.location.origin).toString()
    } catch {
      // Fallback: best-effort encoding for relative paths
      return encodeURI(safePath)
    }
  })()

  return (
    <div 
      className={`project-card project-${index + 1}`}
      style={{ 
        backgroundImage: encodedImageUrl ? `url("${encodedImageUrl}")` : undefined,
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

import './ProjectCard.css'

function encodeAssetUrl(raw) {
  if (!raw) return ''
  if (/^(https?:|data:|blob:)/i.test(raw)) return raw

  const safePath = raw.replaceAll('#', '%23')
  try {
    return new URL(safePath, window.location.origin).toString()
  } catch {
    return encodeURI(safePath)
  }
}

function ProjectCard({ project, index, onSelect }) {
  const card = project.card ?? {}
  const imageUrl = encodeAssetUrl(project.image)
  const client = card.client || project.title
  const category = card.category || project.subtitle
  const headline = card.headline || project.title || ''
  const body = card.body || ''
  const metrics = card.metrics || []
  const panelColor = card.panelColor || project.backgroundColor || '#000000'
  const visual = card.visual || 'cover'
  const featured = Boolean(card.featured)
  const cta = project.comingSoon ? 'Coming soon' : card.cta || 'Read case study'
  const label = category ? `${client} · ${category}` : client

  const handleKeyDown = (e) => {
    if (!onSelect) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect()
    }
  }

  return (
    <div
      className={[
        'project-card',
        `project-${index + 1}`,
        featured ? 'project-card--featured' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--card-panel': panelColor }}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-label={onSelect ? `Open project: ${project.title}` : undefined}
    >
      <div className="project-card__body">
        <div className="project-card__copy">
          <p className="project-card__label">{label}</p>
          <h2 className="project-card__headline">{headline}</h2>
          {body ? <p className="project-card__desc">{body}</p> : null}
        </div>

        <div className="project-card__footer">
          {metrics.length > 0 ? (
            <div className="project-card__proof">
              {metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`} className="project-card__proof-item">
                  <span className="project-card__proof-value">{metric.value}</span>
                  <span className="project-card__proof-label">{metric.label}</span>
                </div>
              ))}
            </div>
          ) : null}

          <span className="project-card__cta">
            {cta}
            {!project.comingSoon ? (
              <span className="project-card__cta-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </span>
        </div>
      </div>

      <div className={`project-card__visual project-card__visual--${visual}`}>
        {visual === 'concept' ? (
          <div className="project-card__concept">
            <span className="project-card__concept-kicker">0→1 concept</span>
            <p className="project-card__concept-title">Career readiness journey</p>
            <ol className="project-card__roadmap">
              <li>Skill gap</li>
              <li>Learning</li>
              <li>AI coaching</li>
              <li>Ready</li>
            </ol>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} alt="" draggable="false" />
        ) : null}
      </div>
    </div>
  )
}

export default ProjectCard

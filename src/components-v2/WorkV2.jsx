const projects = [
  {
    tags: ['Product Design', '2025'],
    title: 'Design System Overhaul',
    desc: 'Built a scalable component library that unified 4 product teams and cut design-to-dev handoff time in half.',
  },
  {
    tags: ['UX Research', '2024'],
    title: 'Onboarding Reimagined',
    desc: 'Redesigned the first-run experience, lifting activation by 32% through research-driven flows.',
  },
  {
    tags: ['Interaction', '2024'],
    title: 'Dashboard 2.0',
    desc: 'A data-dense yet calm interface that helps users make sense of complex infrastructure at a glance.',
  },
  {
    tags: ['Prototyping', '2023'],
    title: 'Mobile Companion App',
    desc: 'End-to-end concept and high-fidelity prototype for an on-the-go control experience.',
  },
]

function WorkV2() {
  return (
    <section className="v2-section v2-work" id="work">
      <div className="v2-section__head">
        <h2 className="v2-section__title">Selected Work</h2>
        <span className="v2-section__index">01 / Projects</span>
      </div>
      <div className="v2-work__grid">
        {projects.map((p) => (
          <article className="v2-card" key={p.title}>
            <div className="v2-card__meta">
              {p.tags.map((t) => (
                <span className="v2-card__chip" key={t}>{t}</span>
              ))}
            </div>
            <h3 className="v2-card__title">{p.title}</h3>
            <p className="v2-card__desc">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkV2

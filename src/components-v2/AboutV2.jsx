const stats = [
  { num: '5+', label: 'Years of experience' },
  { num: '20+', label: 'Products shipped' },
  { num: '4', label: 'Teams collaborated' },
  { num: '∞', label: 'Cups of coffee' },
]

function AboutV2() {
  return (
    <section className="v2-section v2-about" id="about">
      <div className="v2-section__head">
        <h2 className="v2-section__title">About</h2>
        <span className="v2-section__index">02 / Who I am</span>
      </div>
      <div className="v2-about__grid">
        <p className="v2-about__lead">
          I believe great design lives at the intersection of <strong>aesthetics</strong> and
          <strong> functionality</strong>. Every pixel should serve a purpose, and every
          interaction should delight. My toolkit spans research, design systems, and
          high-fidelity prototyping in Figma.
        </p>
        <div className="v2-stats">
          {stats.map((s) => (
            <div className="v2-stat" key={s.label}>
              <div className="v2-stat__num">{s.num}</div>
              <div className="v2-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutV2

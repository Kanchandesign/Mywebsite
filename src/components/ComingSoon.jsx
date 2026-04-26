import './ComingSoon.css'
import comingArtwork from './coming.png'

function ComingSoon({ title = 'Coming soon', subtitle }) {
  return (
    <section className="coming-soon">
      <div className="coming-soon__frame">
        <div className="coming-soon__content">
          <p className="coming-soon__kicker">Case study</p>
          <h3 className="coming-soon__title">{title}</h3>
          <p className="coming-soon__subtitle">
            {subtitle ?? 'Currently documenting the process and refining visuals.'}
          </p>
          <div className="coming-soon__meta">
            <span className="coming-soon__pill">In progress</span>
            <span className="coming-soon__pill coming-soon__pill--muted">Design</span>
            <span className="coming-soon__pill coming-soon__pill--muted">UX</span>
          </div>
        </div>

        <div className="coming-soon__art" aria-hidden="true">
          <div className="coming-soon__artGlow" />
          <img className="coming-soon__image" src={comingArtwork} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ComingSoon

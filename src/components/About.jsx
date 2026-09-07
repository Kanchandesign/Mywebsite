import { useEffect, useState } from 'react'
import './About.css'

const stackPhotos = [
  {
    src: '/about/portrait.png',
    caption: 'This is me — usually with a smile',
    crop: 'top',
  },
  {
    src: '/about/evening.png',
    caption: 'A quiet pause between projects',
    crop: 'center',
  },
  {
    src: '/about/workspace.png',
    caption: 'Currently in Figma more than I care to admit',
    crop: 'center',
  },
  {
    src: '/about/desk.png',
    caption: 'Where the work actually happens',
    crop: 'center',
  },
  {
    src: '/IMG-20260405-WA0041%20(1).jpg',
    caption: 'A little life outside the screen',
    crop: 'center',
  },
]

const stripPhotos = [
  { src: '/about/evening.png', label: 'Evening palms' },
  { src: '/about/workspace.png', label: 'Work in progress' },
  { src: '/about/portrait.png', label: 'Kanchan' },
  { src: '/about/desk.png', label: 'Desk setup' },
  { src: '/IMG-20260405-WA0041%20(1).jpg', label: 'A pause' },
]

const captionSlots = ['right', 'left-top', 'left-bottom']

function About() {
  const [front, setFront] = useState(0)
  const [captionReady, setCaptionReady] = useState(false)
  const count = stackPhotos.length
  const frontPhoto = stackPhotos[front]

  useEffect(() => {
    const id = window.setTimeout(() => setCaptionReady(true), 200)
    return () => window.clearTimeout(id)
  }, [])

  const cycleDeck = () => {
    setFront((current) => (current + 1) % count)
  }

  const handleDeckKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      cycleDeck()
    }
  }

  return (
    <section className="about-page">
      <div className="about-inner">
        <h1 className="about-title">About Me</h1>

        <div
          className="about-stack"
          role="button"
          tabIndex={0}
          aria-label="Cycle through photos"
          onClick={cycleDeck}
          onKeyDown={handleDeckKey}
        >
          {stackPhotos.map((photo, i) => {
            const pos = (i - front + count) % count
            return (
              <figure key={photo.src} className="about-photo" data-pos={pos}>
                <span className="ph-media">
                  <img
                    className={photo.crop === 'top' ? 'crop-top' : 'crop-center'}
                    src={photo.src}
                    alt="A glimpse of Kanchan’s world"
                    loading="lazy"
                  />
                  <span className="ph-overlay" />
                </span>
              </figure>
            )
          })}

          <div
            className={`deck-caption${captionReady ? ' show' : ''}`}
            data-slot={captionSlots[front % captionSlots.length]}
            aria-hidden="true"
          >
            <span className="dc-arrow">
              <svg width="42" height="52" viewBox="0 0 42 52" fill="none" aria-hidden="true">
                <path
                  d="M4 8c10 2 18 14 16 28M20 36c2 6 8 10 16 8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M32 38c4 2 6 6 4 12"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="dc-text">{frontPhoto.caption}</span>
          </div>
        </div>

        <p className="about-caption">Some quick facts about me</p>

        <div className="about-copy">
          <p>
            Hi, I’m Kanchan! I’m a UX designer specialising in{' '}
            <strong>complex products, AI tools, and technical systems</strong>. I work in the
            gap between infrastructure and the people who have to use it. <strong>Impact,
            clarity, and problem solving</strong> are why I became a designer in the first place.
          </p>
          <p>
            My journey into product design has been anything but linear. It started in the most
            unexpected way.
          </p>
        </div>

        <div className="about-more">
          <section className="am-block">
            <h3 className="am-heading">A few detours before design…</h3>
            <div className="am-detours">
              <ol className="am-steps">
                <li className="am-step">
                  <span className="am-num">1</span>
                  <p>
                    I was always the visual one — noticing how products felt, sketching flows in
                    the margins — but didn’t immediately treat design as a career.
                  </p>
                </li>
                <li className="am-step">
                  <span className="am-num">2</span>
                  <p>
                    I taught myself the craft by taking products apart: information architecture,
                    interaction, and the quiet decisions that make something usable.
                  </p>
                </li>
                <li className="am-step">
                  <span className="am-num">3</span>
                  <p>
                    That led to work on dense, high-stakes interfaces — including time at{' '}
                    <strong>Modal</strong> — where design had to hold up against real technical
                    complexity.
                  </p>
                </li>
                <li className="am-step">
                  <span className="am-num">4</span>
                  <p>
                    Since then I’ve designed end-to-end product experiences across{' '}
                    <strong>AI companions, workflow tools, and data-heavy dashboards</strong> —
                    owning IA, interaction, and systems.
                  </p>
                </li>
              </ol>

              <div className="am-strip">
                {stripPhotos.map((photo) => (
                  <figure className="am-card" key={photo.label} title={photo.label}>
                    <img className="am-photo" src={photo.src} alt={photo.label} loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="am-block">
            <h3 className="am-heading">Where I am today…</h3>
            <div className="am-para">
              <p>
                That work turned into a practice I’m proud of. I’ve grown from someone teaching
                themselves the basics into a designer who can take a messy product constraint and
                make it feel obvious — and the way I work today looks nothing like where I started.
              </p>
              <p>
                With AI reshaping everything, I believe in this craft more than ever. The
                workflows have changed. I remember how boxed-in design used to feel, capped by
                what we could create on a canvas. Now, whatever we can imagine, we can actually
                build. That makes us the{' '}
                <strong>most powerful generation of designers to ever exist</strong>, and I can’t
                wait to see what lies ahead.
              </p>
            </div>
          </section>

          <section className="am-block connect-block">
            <h3 className="am-heading">Let’s connect!</h3>
            <ul className="connect-list">
              <li className="connect-row">
                <span className="connect-label">Email</span>
                <span className="connect-line" aria-hidden="true" />
                <a className="connect-value" href="mailto:kanchandecmeber2002@gmail.com">
                  <span className="connect-text">kanchandecmeber2002@gmail.com</span>
                  <svg className="connect-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 3.2 6 6.6 11 3.2M1.6 9.2h8.8A.8.8 0 0 0 11.2 8.4V3.6A.8.8 0 0 0 10.4 2.8H1.6A.8.8 0 0 0 .8 3.6v4.8a.8.8 0 0 0 .8.8Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li className="connect-row">
                <span className="connect-label">LinkedIn</span>
                <span className="connect-line" aria-hidden="true" />
                <a
                  className="connect-value"
                  href="https://www.linkedin.com/in/kanchan-singh-b3b002236"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="connect-text">@kanchan-singh</span>
                  <ExternalIcon />
                </a>
              </li>
              <li className="connect-row">
                <span className="connect-label">Dribbble</span>
                <span className="connect-line" aria-hidden="true" />
                <a
                  className="connect-value"
                  href="https://dribbble.com/KanchanS19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="connect-text">@KanchanS19</span>
                  <ExternalIcon />
                </a>
              </li>
              <li className="connect-row">
                <span className="connect-label">Behance</span>
                <span className="connect-line" aria-hidden="true" />
                <a
                  className="connect-value"
                  href="https://www.behance.net/kanchansingh11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="connect-text">@kanchansingh11</span>
                  <ExternalIcon />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <p className="about-note">If you read this far — yay let’s be friends!</p>
      </div>
    </section>
  )
}

function ExternalIcon() {
  return (
    <svg className="connect-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path
        d="M0.6 6.6C2.15 5.23 5.08 2.12 6.58 0.62M6.58 6.6C6.46 4.63 6.67 2.6 6.58 0.62C4.6 0.74 2.57 0.53 0.72 0.62"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default About

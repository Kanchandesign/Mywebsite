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

        <p className="about-caption">My Journey</p>

        <div className="about-copy">
          <p>
            Hi, I’m Kanchan! I’m a UX designer specializing in{' '}
            <strong>complex products, AI tools, and technical systems</strong>. I work in the
            gap between infrastructure and the people who have to use it.{' '}
            <strong>Impact, clarity, and problem-solving</strong> are why I became a designer in
            the first place.
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
                  <div className="am-step-body">
                    <h4 className="am-step-title">The Pandemic &amp; The Reset</h4>
                    <p>
                      Right after I finished my 12th grade, the pandemic hit. The world shut down,
                      uncertainty was everywhere, and standard college admissions became
                      impossible. To make things harder, I fell severely ill, losing an entire
                      year (2020 to 2021) purely to recovery.
                    </p>
                    <p>
                      During this phase, I self-studied for the JEE Mains Paper 2 (B.Arch). Even
                      though I froze during the actual exam, I still managed an All India Rank
                      around 3,000. But due to a lack of guidance, I missed the admission
                      application windows. Navigating everything without proper information made
                      things incredibly difficult, so I decided to take charge of my own destiny.
                    </p>
                  </div>
                </li>
                <li className="am-step">
                  <span className="am-num">2</span>
                  <div className="am-step-body">
                    <h4 className="am-step-title">The Hustle &amp; The Spark</h4>
                    <p>
                      Isolated and trying to figure out a path forward, I turned to Google and
                      YouTube. I discovered freelancing and thought, “Let’s try this to stand on
                      my own feet.” I started pitching on Upwork, landing minor logo design
                      projects. I quickly realized I loved the work, discovered it belonged to a
                      broader field called <strong>Graphic Design</strong>, and immersed myself in
                      learning everything about it.
                    </p>
                  </div>
                </li>
                <li className="am-step">
                  <span className="am-num">3</span>
                  <div className="am-step-body">
                    <h4 className="am-step-title">The Corporate Proof</h4>
                    <p>
                      In February 2022, after facing 2–3 initial rejections, I secured a graphic
                      design internship. I put everything into my work. Within just two months,
                      the team offered me a full-time role. Six months later, I was promoted.
                      Another six months later, I earned my first salary hike.
                    </p>
                    <p>
                      By this point, I had naturally transitioned into website design. I loved
                      building interfaces, but I wanted to go deeper than just making things look
                      visually good. I wanted to understand the backend, the functional UX, and
                      the architecture of why things worked.
                    </p>
                  </div>
                </li>
                <li className="am-step">
                  <span className="am-num">4</span>
                  <div className="am-step-body">
                    <h4 className="am-step-title">Stepping into Deep Product Design</h4>
                    <p>
                      Knowing I wanted to focus strictly on core UI/UX, I started interviewing
                      again. I faced rejections, and I turned down offers that didn’t match my
                      focus, until I joined <strong>HestaBit</strong> as a UI/UX Designer in April
                      2023. At the time, I was also pursuing a regular B.Sc. degree, but balancing
                      intense full-time design workloads with heavy science practicals became
                      impossible.
                    </p>
                    <p>
                      I paused, researched alternative paths, and made a strategic choice to
                      switch to a distance-learning <strong>BA in Psychology</strong>. As a
                      naturally curious person, I had always been fascinated by human
                      behavior—why people take certain actions and what triggers their decisions.
                    </p>
                  </div>
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
                Studying psychology while designing enterprise systems became my ultimate unfair
                advantage. As a UX designer, understanding human behavior allowed me to design
                with profound empathy. I began building interfaces that systematically eliminated
                cognitive load, ensuring users felt completely unburdened and at ease while
                navigating complex software.
              </p>
              <p>
                I put these exact behavioral principles into practice on{' '}
                <strong>Helpline Club</strong>, our Voice AI platform, delivering some of my
                finest architecture work. My contributions drove massive business value,
                translating into a <strong>90% salary hike</strong> in my first year and a half,
                followed by a <strong>70% hike</strong> in my second year.
              </p>
              <p>
                After driving massive growth at HestaBit, I am now looking for my next
                challenge—ready to bring my experience in complex systems and human psychology to
                a high-impact product team.
              </p>
              <p>
                With AI reshaping everything, I believe in this craft more than ever. The
                workflows have changed. I remember how boxed-in design used to feel, capped by
                what we could create on a canvas. Now, whatever we can imagine, we can actually
                build. That makes us the{' '}
                <strong>most powerful generation of designers to ever exist</strong>—and I am
                ready for the next complex challenge.
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

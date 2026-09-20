import { useEffect, useRef, useState } from 'react'
import './ProjectDetail.css'
import ComingSoon from './ComingSoon'

function shouldBustPublicAssetCache() {
  const isViteDev = Boolean(import.meta.env?.DEV)
  const host = typeof window !== 'undefined' ? window.location.hostname : ''
  const isLocalHost =
    host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host === '::1'
  return isViteDev || isLocalHost
}

function encodeImagePath(raw) {
  if (!raw) return ''
  if (typeof raw !== 'string') return raw
  const safePath = raw.replaceAll('#', '%23')

  let finalPath = safePath
  if (shouldBustPublicAssetCache() && safePath.startsWith('/')) {
    const cacheBuster = `v=${Date.now()}`
    finalPath += safePath.includes('?') ? `&${cacheBuster}` : `?${cacheBuster}`
  }

  try {
    return new URL(finalPath, window.location.origin).toString()
  } catch {
    return encodeURI(finalPath)
  }
}

function normalizeImages(value) {
  if (!value) return []
  if (Array.isArray(value)) return value.filter(Boolean)
  if (typeof value === 'string') return [value]
  return []
}

function getScrollRoot() {
  return document.querySelector('.gallery')
}

function SectionHeading({ index, title }) {
  return (
    <div className="cs-section__head">
      <span className="cs-section__index">{index}</span>
      <h2 className="cs-section__title">{title}</h2>
    </div>
  )
}

function Inline({ text }) {
  if (!text) return null
  const parts = String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (!part) return null
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <span key={i}>{part}</span>
  })
}

function Prose({ text, className = 'cs-prose' }) {
  return (
    <p className={className}>
      <Inline text={text} />
    </p>
  )
}

function NarrativeSection({ section, index }) {
  const n = String(index + 1).padStart(2, '0')
  const listClass = (section.list || []).length > 6 ? 'cs-list cs-list--columns' : 'cs-list'

  return (
    <section
      className={`cs-section cs-reveal${section.soft ? ' cs-section--soft' : ''}`}
      id={`cs-${section.id}`}
    >
      <SectionHeading index={n} title={section.title} />
      {section.eyebrow && <p className="cs-eyebrow">{section.eyebrow}</p>}
      {section.lead && (
        <p className="cs-lead">
          <Inline text={section.lead} />
        </p>
      )}
      {section.cards?.length > 0 && (
        <div className={`cs-groups${section.cards.length >= 3 ? ' cs-groups--three' : ''}`}>
          {section.cards.map((card) => (
            <div className="cs-group" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      )}
      {(section.paragraphs || []).map((p) => (
        <Prose key={p.slice(0, 48)} text={p} />
      ))}
      {section.stats?.length > 0 && (
        <div
          className={`cs-stats${section.stats.length === 3 ? ' cs-stats--three' : ''}${
            section.statsStyle === 'impact' ? ' cs-stats--impact' : ''
          }`}
        >
          {section.stats.map((s) => (
            <div className="cs-stat" key={s.label}>
              <span className="cs-stat__value">{s.value}</span>
              <span className="cs-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      )}
      {section.quote && (
        <blockquote className="cs-quote">
          <p>
            <Inline text={section.quote} />
          </p>
          {section.quoteCaption && <footer>{section.quoteCaption}</footer>}
        </blockquote>
      )}
      {section.listTitle && <h3 className="cs-block__title">{section.listTitle}</h3>}
      {section.list?.length > 0 && (
        <ul className={listClass}>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.pills?.length > 0 && (
        <div className="cs-pills">
          {section.pills.map((pill) => (
            <span className="cs-pill" key={pill}>
              {pill}
            </span>
          ))}
        </div>
      )}
      {section.process?.length > 0 && (
        <ol className="cs-process">
          {section.process.map((step, i) => (
            <li key={step} className="cs-process__item">
              <span className="cs-process__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="cs-process__label">{step}</span>
            </li>
          ))}
        </ol>
      )}
      {section.processNote && (
        <Prose className="cs-prose cs-prose--emphasis" text={section.processNote} />
      )}
      {section.subheading && <h3 className="cs-block__title">{section.subheading}</h3>}
      {section.table && (
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead>
              <tr>
                {section.table.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${i}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {(section.paragraphsAfter || []).map((p) => (
        <Prose key={p.slice(0, 48)} text={p} />
      ))}
      {section.changes?.length > 0 && (
        <div className="cs-changes">
          {section.changes.map((change) => (
            <article className="cs-change" key={change.to}>
              <p className="cs-change__path">
                <span>{change.from}</span>
                <span className="cs-change__arrow" aria-hidden="true">
                  →
                </span>
                <span>{change.to}</span>
              </p>
              <p>{change.body}</p>
            </article>
          ))}
        </div>
      )}
      {section.milestones?.length > 0 && (
        <div className="cs-milestones">
          {section.milestones.map((m) => (
            <article className="cs-milestone" key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      )}
      {section.closing && <Prose className="cs-prose cs-prose--emphasis" text={section.closing} />}
    </section>
  )
}

function CaseStudy({ project, caseStudy, onBack }) {
  const contents = caseStudy.contents || []
  const [activeId, setActiveId] = useState(contents[0]?.id ?? 'summary')
  const clickingRef = useRef(false)
  const title = caseStudy.headline || project.title

  // Mid-viewport IntersectionObserver (reference-style scroll spy)
  useEffect(() => {
    const ids = contents.map((c) => c.id)
    if (!ids.length) return undefined

    const root = getScrollRoot()
    const elements = ids.map((id) => document.getElementById(`cs-${id}`)).filter(Boolean)
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickingRef.current) return
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0]?.target?.id?.replace(/^cs-/, '')
        if (id) setActiveId(id)
      },
      {
        root: root || null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.1, 0.25],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [contents])

  // Soft section reveals on scroll
  useEffect(() => {
    const root = getScrollRoot()
    const sections = document.querySelectorAll('.cs-reveal')
    if (!sections.length) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      sections.forEach((el) => el.classList.add('is-inview'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: root || null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [contents])

  const scrollTo = (id) => {
    const el = document.getElementById(`cs-${id}`)
    const root = getScrollRoot()
    if (!el || !root) return

    clickingRef.current = true
    setActiveId(id)

    const top =
      el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 28
    root.scrollTo({ top, behavior: 'smooth' })

    window.setTimeout(() => {
      clickingRef.current = false
    }, 800)
  }

  const { summary, problem, research, frustrations, redesign, testing, snippets, impact, next } =
    caseStudy

  return (
    <article className="cs">
      <header className="cs-hero cs-reveal is-inview">
        {caseStudy.kicker && <p className="cs-kicker">{caseStudy.kicker}</p>}
        <div className="cs-hero__title-row">
          <h1 className="cs-hero__title">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <span className="cs-hero__badge">{caseStudy.number}</span>
        </div>
        <p className="cs-hero__intro">{caseStudy.intro}</p>

        <dl className={`cs-meta${(caseStudy.meta || []).length > 4 ? ' cs-meta--wide' : ''}`}>
          {(caseStudy.meta || []).map((item) => (
            <div className="cs-meta__item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="cs-layout">
        <aside className="cs-toc" aria-label="Case study contents">
          <div className="cs-toc__inner">
            <p className="cs-toc__label">Contents</p>
            <nav className="cs-toc__nav">
              {contents.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`cs-toc__link${activeId === item.id ? ' is-active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="cs-main">
          {caseStudy.sections?.length > 0 ? (
            caseStudy.sections.map((section, index) => (
              <NarrativeSection
                key={section.id}
                section={section}
                index={index}
              />
            ))
          ) : (
            <>
          {summary && (
            <section className="cs-section cs-reveal" id="cs-summary">
              <SectionHeading index="01" title="Summary" />
              <p className="cs-eyebrow">{summary.eyebrow}</p>
              {(summary.body || []).map((p) => (
                <p className="cs-prose" key={p.slice(0, 32)}>
                  {p}
                </p>
              ))}
              {summary.stats?.length > 0 && (
                <div className="cs-stats">
                  {summary.stats.map((s) => (
                    <div className="cs-stat" key={s.label}>
                      <span className="cs-stat__value">{s.value}</span>
                      <span className="cs-stat__label">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {problem && (
            <section className="cs-section cs-reveal" id="cs-problem">
              <SectionHeading index="02" title={problem.title} />
              <p className="cs-lead">{problem.lead}</p>
              <div className="cs-problem-grid">
                {(problem.points || []).map((point) => (
                  <div className="cs-problem-card" key={point.title}>
                    <h3>
                      <span className="cs-em">{point.title.split(' ')[0]}</span>{' '}
                      {point.title.split(' ').slice(1).join(' ')}
                    </h3>
                    <p>{point.body}</p>
                  </div>
                ))}
              </div>
              {problem.footnote && <p className="cs-footnote">{problem.footnote}</p>}
            </section>
          )}

          {research && (
            <section className="cs-section cs-section--soft cs-reveal" id="cs-research">
              <SectionHeading index="03" title={research.title} />

              {research.why && (
                <div className="cs-block">
                  <h3 className="cs-block__title">{research.why.title}</h3>
                  {(research.why.paragraphs || []).map((p) => (
                    <p className="cs-prose" key={p.slice(0, 28)}>
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {research.who && (
                <div className="cs-block">
                  <h3 className="cs-block__title">{research.who.title}</h3>
                  <p className="cs-prose">{research.who.intro}</p>
                  <div className="cs-groups">
                    {(research.who.groups || []).map((g) => (
                      <div className="cs-group" key={g.title}>
                        <h4>{g.title}</h4>
                        <p>{g.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {research.how && (
                <div className="cs-block">
                  <h3 className="cs-block__title">{research.how.title}</h3>
                  {(research.how.paragraphs || []).map((p) => (
                    <p className="cs-prose" key={p.slice(0, 28)}>
                      {p}
                    </p>
                  ))}
                  <div className="cs-research-cards">
                    {(research.how.cards || []).map((card) => (
                      <div className="cs-research-card" key={card.title}>
                        <h4>{card.title}</h4>
                        <p>{card.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {frustrations && (
            <section className="cs-section cs-reveal" id="cs-frustrations">
              <SectionHeading index="04" title={frustrations.title} />
              <p className="cs-prose">{frustrations.lead}</p>
              <h3 className="cs-block__title">{frustrations.subtitle}</h3>
              <div className="cs-pills">
                {(frustrations.pills || []).map((pill) => (
                  <span className="cs-pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {redesign && (
            <section className="cs-section cs-reveal" id="cs-redesign">
              <SectionHeading index="05" title={redesign.title} />
              {(redesign.blocks || []).map((block) => (
                <div className="cs-block cs-block--wide" key={block.title}>
                  <h3 className="cs-block__title">{block.title}</h3>
                  {(block.paragraphs || []).map((p) => (
                    <p className="cs-prose" key={p.slice(0, 28)}>
                      {p}
                    </p>
                  ))}
                  {block.bullets?.length > 0 && (
                    <ul className="cs-list">
                      {block.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {block.closing && <p className="cs-prose cs-prose--emphasis">{block.closing}</p>}
                </div>
              ))}
            </section>
          )}

          {testing && (
            <section className="cs-section cs-reveal" id="cs-testing">
              <SectionHeading index="06" title={testing.title} />
              <p className="cs-prose">{testing.lead}</p>
              <h3 className="cs-block__title">{testing.winsTitle}</h3>
              <p className="cs-prose">{testing.winsIntro}</p>
              <ul className="cs-list">
                {(testing.wins || []).map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <p className="cs-prose cs-prose--emphasis">{testing.closing}</p>
            </section>
          )}

          {snippets && (
            <section className="cs-section cs-reveal" id="cs-snippets">
              <SectionHeading index="07" title={snippets.title} />
              <p className="cs-prose">
                Design explorations covered before-and-after flows, interaction patterns, and
                iterative visual directions that shaped the final experience.
              </p>
              <ul className="cs-list">
                <li>Compared early dense layouts against the calmer redesigned hierarchy</li>
                <li>Explored labeling, reassurance moments, and progressive disclosure</li>
                <li>Refined component patterns for consistency across key journeys</li>
              </ul>
            </section>
          )}

          {impact && (
            <section className="cs-section cs-reveal" id="cs-impact">
              <SectionHeading index="08" title={impact.title} />
              <div className="cs-stats cs-stats--impact">
                {(impact.metrics || []).map((m) => (
                  <div className="cs-stat" key={m.label}>
                    <span className="cs-stat__value">{m.value}</span>
                    <span className="cs-stat__label">{m.label}</span>
                  </div>
                ))}
              </div>
              <h3 className="cs-block__title">{impact.learningsTitle}</h3>
              <ul className="cs-list cs-list--spaced">
                {(impact.learnings || []).map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </section>
          )}

          {next && (
            <section className="cs-section cs-reveal" id="cs-next">
              <SectionHeading index="09" title={next.title} />
              <div className="cs-next-grid">
                {(next.items || []).map((item) => (
                  <div className="cs-next-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="cs-thanks">{next.thanks}</p>
            </section>
          )}
            </>
          )}

          <section className="cs-cta cs-reveal">
            <p className="cs-cta__label">Got an idea?</p>
            <a className="cs-cta__btn" href="mailto:kanchandecmeber2002@gmail.com">
              <span className="cs-dice" data-text="Let's talk">
                <span>Let&apos;s talk</span>
              </span>
            </a>
          </section>

          <footer className="cs-footer cs-reveal">
            <div>
              <p className="cs-footer__heading">Sitemaps</p>
              <button type="button" className="cs-footer__link" onClick={onBack}>
                Home
              </button>
            </div>
            <div>
              <p className="cs-footer__heading">Socials</p>
              <a
                href="https://www.behance.net/kanchansingh11"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-footer__link-anim"
              >
                Behance
              </a>
              <a
                href="https://dribbble.com/KanchanS19"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-footer__link-anim"
              >
                Dribbble
              </a>
              <a
                href="https://www.linkedin.com/in/kanchan-singh-b3b002236"
                target="_blank"
                rel="noopener noreferrer"
                className="cs-footer__link-anim"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <p className="cs-footer__heading">Contact</p>
              <a href="mailto:kanchandecmeber2002@gmail.com" className="cs-footer__link-anim">
                kanchandecmeber2002@gmail.com
              </a>
            </div>
            <p className="cs-footer__copy">
              © {new Date().getFullYear()} Kanchan Singh. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </article>
  )
}

function ImageGalleryFallback({ project, galleryImages }) {
  const { title = '', detailLayout = 'grid' } = project ?? {}
  return (
    <div
      className={[
        'project-gallery',
        detailLayout === 'grid' ? 'project-gallery--grid' : 'project-gallery--stack',
      ].join(' ')}
    >
      {galleryImages.map((img, i) => (
        <div className="gallery-item" key={`${img}-${i}`}>
          <img src={encodeImagePath(img)} alt={`${title} — ${i + 1}`} />
        </div>
      ))}
    </div>
  )
}

function ProjectDetail({ project, onBack }) {
  const {
    title = '',
    image,
    detailImages = [],
    images: legacyImages = [],
    comingSoon = false,
    comingSoonSubtitle,
    caseStudy,
  } = project ?? {}

  if (comingSoon) {
    return (
      <section className="project-detail">
        <ComingSoon title={title} subtitle={comingSoonSubtitle} />
      </section>
    )
  }

  if (caseStudy) {
    return (
      <section className="project-detail project-detail--case-study">
        <CaseStudy project={project} caseStudy={caseStudy} onBack={onBack} />
      </section>
    )
  }

  let galleryImages = []
  const normalizedDetailImages = normalizeImages(detailImages)
  const normalizedLegacyImages = normalizeImages(legacyImages)

  if (normalizedDetailImages.length > 0) galleryImages = normalizedDetailImages
  else if (normalizedLegacyImages.length > 0) galleryImages = normalizedLegacyImages
  else if (image) galleryImages = [image]

  return (
    <section className="project-detail">
      {galleryImages.length > 0 && (
        <ImageGalleryFallback project={project} galleryImages={galleryImages} />
      )}
    </section>
  )
}

export default ProjectDetail

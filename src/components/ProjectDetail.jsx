import './ProjectDetail.css'
import ComingSoon from './ComingSoon'

function shouldBustPublicAssetCache() {
  // Vite dev server sets import.meta.env.DEV, but users sometimes view via a local preview
  // of `dist/` or static server; treat localhost as "dev-like" for cache busting.
  const isViteDev = Boolean(import.meta.env?.DEV)
  const host = typeof window !== 'undefined' ? window.location.hostname : ''
  const isLocalHost =
    host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host === '::1'
  return isViteDev || isLocalHost
}

function encodeImagePath(raw) {
  if (!raw) return ''
  const safePath = raw.replaceAll('#', '%23')

  // In dev, replaced files in /public can be served from cache if the URL
  // doesn't change. Bust cache for local public assets only (keep prod cacheable).
  let finalPath = safePath
  if (shouldBustPublicAssetCache() && safePath.startsWith('/')) {
    const cacheBuster = `v=${Date.now()}`
    finalPath += safePath.includes('?')
      ? `&${cacheBuster}`
      : `?${cacheBuster}`
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

function ProjectDetail({ project }) {
  const {
    title = '',
    image,
    detailImages = [],
    images: legacyImages = [],
    detailLayout = 'grid',
    comingSoon = false,
    comingSoonSubtitle,
  } = project ?? {}

  if (comingSoon) {
    return (
      <section className="project-detail">
        <ComingSoon title={title} subtitle={comingSoonSubtitle} />
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
      )}

    </section>
  )
}

export default ProjectDetail

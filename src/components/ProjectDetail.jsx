import './ProjectDetail.css'

function encodeImagePath(raw) {
  if (!raw) return ''
  const safePath = raw.replaceAll('#', '%23')
  try {
    return new URL(safePath, window.location.origin).toString()
  } catch {
    return encodeURI(safePath)
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
  } = project ?? {}

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

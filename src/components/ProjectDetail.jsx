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

function ProjectDetail({ project }) {
  const {
    title = '',
    image,
    detailImages = [],
    images: legacyImages = [],
  } = project ?? {}

  let galleryImages = []
  if (detailImages.length > 0) galleryImages = detailImages
  else if (legacyImages.length > 0) galleryImages = legacyImages
  else if (image) galleryImages = [image]

  return (
    <section className="project-detail">

      {galleryImages.length > 0 && (
        <div className="project-gallery">
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

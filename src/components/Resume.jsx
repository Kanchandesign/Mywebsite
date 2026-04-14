import './Resume.css'

function Resume() {
  const experience = [
    {
      id: 1,
      title: 'Senior Developer',
      company: 'Tech Company',
      duration: '2023 - Present',
      description: 'Leading development of innovative web applications'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Software Solutions',
      duration: '2021 - 2023',
      description: 'Developed and maintained multiple full-stack applications'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'StartUp Co',
      duration: '2020 - 2021',
      description: 'Built responsive web interfaces and server-side logic'
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      year: '2020'
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Bootcamp Name',
      year: '2019'
    }
  ]

  return (
    <section className="resume">
      <div className="resume-container">
        <h2>Resume</h2>
        
        <div className="resume-content">
          <div className="resume-section">
            <h3>Experience</h3>
            <div className="timeline">
              {experience.map(job => (
                <div key={job.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <h4>{job.title}</h4>
                    <p className="company">{job.company}</p>
                    <p className="duration">{job.duration}</p>
                    <p className="description">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-list">
              {education.map(edu => (
                <div key={edu.id} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3>Certifications</h3>
            <ul className="certifications">
              <li>AWS Certified Cloud Practitioner</li>
              <li>Google Cloud Professional</li>
              <li>React Certification</li>
            </ul>
          </div>
        </div>

        <div className="resume-download">
          <a href="#" download className="download-btn">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume

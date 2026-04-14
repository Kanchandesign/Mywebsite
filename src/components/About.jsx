import './About.css'

function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      
      <div className="about-grid">
        <div className="about-card">
          <h3>Background</h3>
          <p>
            I'm a UX Designer with a passion for creating beautiful, functional digital experiences. 
            With over 5 years of experience in the industry, I've had the opportunity to work with 
            innovative companies and contribute to products that impact millions of users.
          </p>
        </div>

        <div className="about-card">
          <h3>Expertise</h3>
          <ul>
            <li>Product Design & Strategy</li>
            <li>User Research & Testing</li>
            <li>Design Systems</li>
            <li>Interaction Design</li>
            <li>Prototyping</li>
            <li>Design Leadership</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Tools & Skills</h3>
          <ul>
            <li>Figma, Adobe XD</li>
            <li>Prototyping (Framer, Protopie)</li>
            <li>User Testing</li>
            <li>Design thinking</li>
            <li>HTML/CSS</li>
            <li>Project Management</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Philosophy</h3>
          <p>
            I believe great design is the intersection of aesthetics and functionality. 
            Every pixel should serve a purpose, and every interaction should delight users. 
            I'm committed to driving business impact through thoughtful design decisions.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <h3>Let's Work Together</h3>
        <p>I'm always interested in new projects and collaborations. Feel free to reach out!</p>
        <a href="mailto:hello@kanchan.dev" className="contact-link">Get in Touch →</a>
      </div>
    </section>
  )
}

export default About

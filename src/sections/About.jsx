import SectionHeading from "../components/SectionHeading";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          label="ABOUT ME"
          title="Building software. Solving problems. Always learning."
        />

        <div className="about-grid">
          <div className="about-content">
            <p>
              I am a B.Tech student passionate about Software Engineering,
              Full-Stack Development, and problem-solving. I enjoy building
              real-world applications and continuously improving my skills
              through hands-on projects and Data Structures & Algorithms
              practice.
            </p>

            <p>
              My primary focus is building scalable applications, writing clean
              code, and strengthening my problem-solving abilities.
            </p>
          </div>

          <div className="about-highlight-card">
            <span className="about-card-label">CURRENT FOCUS</span>

            <ul>
              <li>
                <span>01</span>
                Software Engineering
              </li>

              <li>
                <span>02</span>
                Full-Stack Development
              </li>

              <li>
                <span>03</span>
                Data Structures & Algorithms
              </li>

              <li>
                <span>04</span>
                Scalable Software Development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
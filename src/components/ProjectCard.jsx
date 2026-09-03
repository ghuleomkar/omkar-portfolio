import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const {
    name,
    type,
    description,
    technologies,
    features,
    github,
    live,
    featured,
    image,
  } = project;

  return (
    <article
      className={`project-card ${
        featured ? "featured-project" : ""
      }`}
    >
      <div className="project-visual">
        {image ? (
          <img
            src={image}
            alt={`${name} project preview`}
            className="project-image"
          />
        ) : (
          <div className="project-preview">
            <span className="project-preview-label">{type}</span>
            <h3>{name}</h3>
          </div>
        )}
      </div>

      <div className="project-info">
        <span className="project-type">{type}</span>

        <h3>{name}</h3>

        <p className="project-description">{description}</p>

        <div className="project-features">
          {features.map((feature) => (
            <div key={feature} className="project-feature">
              <span>→</span>
              {feature}
            </div>
          ))}
        </div>

        <div className="project-tech">
          {technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="project-link project-live-link"
            >
              Live Demo
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
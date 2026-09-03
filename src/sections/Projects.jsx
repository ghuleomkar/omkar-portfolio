import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          label="SELECTED PROJECTS"
          title="Building ideas into real-world applications."
          description="A selection of projects where I explored full-stack development, real-time communication, and AI-powered software."
        />

        <div className="featured-project-wrapper">
          <ProjectCard project={featuredProject} />
        </div>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="small-title">Things I've built</p>
        <h2>My Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-links">
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
                <a href={project.github} target="_blank" rel="noreferrer">Source Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
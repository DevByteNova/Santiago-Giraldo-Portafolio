import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "DESARROLLO WEB",
    name: "DEV-HIVE",
    description:
      "Sitio web corporativo moderno y responsivo desarrollado para presentar servicios, tecnologías y proyectos de una empresa de software.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://dev-hive-react.vercel.app",
  },
  {
    number: "02",
    category: "OLTP SYSTEM",
    name: "AXIOMA",
    description:
      "Sistema OLTP desarrollado para gestionar, registrar y procesar operaciones empresariales de forma eficiente y centralizada.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    link: "https://github.com/DevByteNova/Axioma-commerce-stock",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="section-header">
          <span className="section-number">04</span>
          <span className="section-line"></span>
          <span className="section-label">// PROJECTS</span>
        </div>

        <div className="projects-intro">
          <div>
            <p className="projects-tag">// SELECTED WORK</p>

            <h2>
              THINGS
              <span>I'VE BUILT.</span>
            </h2>
          </div>

          <p className="projects-description">
            Una selección de proyectos en los que he convertido ideas
            y problemas reales en soluciones digitales.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">
                <p className="project-category">
                  // {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-action">
               <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action"
                >
                <span>VIEW PROJECT</span>
                 <strong>↗</strong>
                </a>
              </div>

              <div className="project-corner"></div>
            </article>
          ))}
        </div>

        <div className="projects-status">
          <span></span>
          PROJECT_DATABASE // 02 ENTRIES // VERIFIED 
        </div>

      </div>
    </section>
  );
}

export default Projects;
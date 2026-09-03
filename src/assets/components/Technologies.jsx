import {
  Code2,
  Palette,
  Braces,
  Atom,
  Zap,
  GitBranch,
  Database,
} from "lucide-react";

import "./Technologies.css";

const technologies = [
  {
    name: "HTML",
    category: "FRONTEND",
    description: "Semantic and accessible web structure.",
    icon: Code2,
    level: "CORE",
  },
  {
    name: "CSS",
    category: "FRONTEND",
    description: "Interfaces, layouts and visual experiences.",
    icon: Palette,
    level: "CORE",
  },
  {
    name: "JAVASCRIPT",
    category: "LANGUAGE",
    description: "Interactive and dynamic web applications.",
    icon: Braces,
    level: "CORE",
  },
  {
    name: "REACT",
    category: "FRAMEWORK",
    description: "Component-based modern interfaces.",
    icon: Atom,
    level: "ACTIVE",
  },
  {
    name: "VITE",
    category: "TOOLING",
    description: "Fast development and optimized builds.",
    icon: Zap,
    level: "ACTIVE",
  },
  {
    name: "GIT",
    category: "VERSION CONTROL",
    description: "Source control and project management.",
    icon: GitBranch,
    level: "CORE",
  },
  {
  name: "PHP",
  category: "BACKEND",
  description: "Server-side applications and web development.",
  icon: Code2,
  level: "CORE",
},
{
  name: "MYSQL",
  category: "DATABASE",
  description: "Relational databases and data management.",
  icon: Database,
  level: "CORE",
},
];

function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <div className="technologies-container">

        <div className="section-header">
          <span className="section-number">03</span>
          <span className="section-line"></span>
          <span className="section-label">
            // TECHNOLOGIES
          </span>
        </div>

        <div className="technologies-intro">
          <div>
            <p className="technologies-tag">
              // TECH STACK
            </p>

            <h2>
              TOOLS I USE TO
              <span>BUILD.</span>
            </h2>
          </div>

          <p className="technologies-description">
            Tecnologías y herramientas que utilizo para convertir ideas
            en experiencias digitales, aplicaciones y proyectos de software.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <article
                className="tech-card"
                key={technology.name}
                style={{ "--card-index": index }}
              >
                <div className="tech-card-top">
                  <span>0{index + 1}</span>
                  <span>{technology.level}</span>
                </div>

                <div className="tech-icon">
                  <Icon size={34} strokeWidth={1.5} />
                </div>

                <div className="tech-info">
                  <p>{technology.category}</p>

                  <h3>{technology.name}</h3>

                  <span>{technology.description}</span>
                </div>

                <div className="tech-corner"></div>
                <div className="tech-scan"></div>
              </article>
            );
          })}
        </div>

        <div className="tech-footer">
          <span className="tech-footer-line"></span>
          <span>STACK_STATUS: ACTIVE</span>
          <span className="tech-footer-dot"></span>
        </div>

      </div>
    </section>
  );
}

export default Technologies;
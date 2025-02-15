import "../styles/projects.css";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "A modern portfolio built with React and Tailwind.", link: "#" },
    { title: "E-commerce App", description: "A React-based online store with Stripe payments.", link: "#" },
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

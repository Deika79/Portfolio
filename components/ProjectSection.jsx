// src/components/ProjectsSection.jsx
import React from "react";
import projects from "../data/projects";
import ProjectCard from "../data/ProjectCard";

const ProjectsSection = () => (
  <section className="section container">
    <h2>Proyectos</h2>
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;

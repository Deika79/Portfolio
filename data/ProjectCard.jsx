// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tags">
      {project.tags.map((tag, idx) => (
        <span key={idx} className="tag">{tag}</span>
      ))}
    </div>
    <div className="project-links">
      <a href={project.repo} className="btn-repo" target="_blank" rel="noopener noreferrer">
        Ver repositorio
      </a>
    </div>
  </div>
);

export default ProjectCard;

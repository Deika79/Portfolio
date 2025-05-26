import React, { useState } from "react";
import ProjectsSection from "./components/ProjectsSection";
import ProjectForm from "./components/ProjectForm";
import initialProjects from "./data/projects";

function App() {
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  return (
    <div>
      <ProjectForm onAdd={addProject} />
      <ProjectsSection projects={projects} />
    </div>
  );
}

export default App;

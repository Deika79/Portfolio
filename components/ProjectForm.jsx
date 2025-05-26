// src/components/ProjectForm.jsx
import React, { useState } from "react";

const ProjectForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    repo: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      id: Date.now(),
      tags: form.tags.split(",").map(tag => tag.trim())
    });
    setForm({ title: "", description: "", image: "", tags: "", repo: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Título" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Descripción" required />
      <input name="image" value={form.image} onChange={handleChange} placeholder="URL de imagen" />
      <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (separados por coma)" />
      <input name="repo" value={form.repo} onChange={handleChange} placeholder="URL del repositorio" />
      <button type="submit">Añadir Proyecto</button>
    </form>
  );
};

export default ProjectForm;

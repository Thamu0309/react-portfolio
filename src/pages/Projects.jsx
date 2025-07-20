import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <section id="projects" className="container my-5">
    <h2 className="text-center mb-4">My Projects</h2>
    <ProjectCard
      title="Heart Disease Prediction"
      description="Predicts heart disease using ML algorithms"
      tech="Python, Flask, ML"
      demo="https://demo-link.com"
      github="https://github.com/yourname/heart-disease"
    />
    <ProjectCard
      title="Employee Management System"
      description="CRUD operations for employee data"
      tech="Django, MySQL"
      demo="#"
      github="https://github.com/yourname/employee-system"
    />
  </section>
);

export default Projects;

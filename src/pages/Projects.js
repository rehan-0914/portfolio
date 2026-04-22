import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and React Router. Shows my skills, projects, and contact information.',
    tech: 'React, CSS, React Router',
    link: 'https://github.com/rehan-0914/portfolio'
  },
  {
    title: 'Todo App',
    description: 'A simple todo application where users can add, delete, and mark tasks as complete. Built using Python and SQLite.',
    tech: 'Python, SQLite',
    link: 'https://github.com/rehan-0914'
  }
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="tech"><strong>Tech:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

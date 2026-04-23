import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'KeyBot.tf',
    description: 'A TF2 Keys trading website where you can buy and sell TF2 keys with crypto.',
    tech: 'HTML, CSS, JavaScript, Node.js',
    link: 'https://github.com/rehan-0914'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and React Router. Shows my skills, projects, and contact information.',
    tech: 'React, CSS, React Router',
    link: 'https://github.com/rehan-0914/portfolio'
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

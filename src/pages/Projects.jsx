import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Complaint Management Project',
      description: 'A comprehensive system to manage and resolve complaints efficiently.',
      url: 'https://github.com/BCMDDeSilva/complain_mangement_project-',
      language: 'JavaScript'
    },
    {
      name: 'DB-Modeler',
      description: 'A tool for designing and modeling databases.',
      url: 'https://github.com/BCMDDeSilva/DB-Modele',
      language: 'JavaScript'
    },
    {
      name: 'Student Event System',
      description: 'A comprehensive system for managing and organizing student events.',
      url: 'https://github.com/BCMDDeSilva/student-event-system',
      language: 'JavaScript'
    },
    {
      name: 'My Portfolio',
      description: 'A personal portfolio website showcasing my projects and skills.',
      url: 'https://github.com/BCMDDeSilva/Portfolio',
      language: 'JavaScript'
    },
    {
      name: 'HUB Airfreight',
      description: 'A system for managing airfreight operations and logistics.',
      url: 'https://github.com/adeesha5624/HUB-Airfreight',
      language: 'JavaScript'
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h2>My Projects</h2>
        <p className="card-description">Here are some of the projects from my GitHub repository.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p className="card-description">{project.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f1e05a' }}></span>
              {project.language}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="https://github.com/BCMDDeSilva" target="_blank" rel="noopener noreferrer" className="btn">
          View My GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Projects;

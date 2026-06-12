import React from 'react';

function About() {
  return (
    <div>
      <div className="page-header">
        <h2>About Me</h2>
      </div>
      <div className="card">
        <p className="card-description" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Hello! I am a passionate software developer interested in building efficient, 
          scalable, and beautiful web applications. I focus on writing clean, simple, 
          and maintainable code that anyone can understand.
        </p>
        <br />
        <p className="card-description" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          I am constantly learning new technologies and exploring new ways to improve 
          my development workflow. This portfolio is a reflection of my journey in 
          the tech world.
        </p>
      </div>
    </div>
  );
}

export default About;

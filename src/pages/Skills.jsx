import React from 'react';

function Skills() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js', 
    'Git & GitHub', 'Responsive Design', 'Problem Solving', 'UI/UX Design'
  ];

  return (
    <div>
      <div className="page-header">
        <h2>My Skills</h2>
        <p className="card-description">Technologies and tools I work with.</p>
      </div>
      
      <div className="card">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from 'react';
import profileImage from '../../image/WhatsApp Image 2026-06-12 at 17.51.18.jpeg';

function Home() {
  return (
    <div className="home-section">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Hi, I'm Malith Dilhara</h1>
      <p className="card-description" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        A passionate developer building professional web applications. 
        I love creating clean, minimal, and beautiful user interfaces.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <a href="/projects" className="btn" style={{ marginRight: '1rem' }}>View My Work</a>
        <a href="/contact" className="btn" style={{ backgroundColor: '#21262d', color: '#c9d1d9', borderColor: '#30363d' }}>Contact Me</a>
      </div>
    </div>
  );
}

export default Home;

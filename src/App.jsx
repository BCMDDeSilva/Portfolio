import { useState, useEffect } from 'react'
import avatarImg from './assets/avatar.png'

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Complain Management System',
    category: 'fullstack',
    shortDesc: 'A full-stack tracking system allowing clients to lodge complaints and admins to resolve them.',
    description: 'A comprehensive system for lodging, tracking, and resolving service complaints. Designed to bridge the communication gap between users and support teams. Features include automated status tracking, dynamic priority assignment, role-based dashboards, and complete historical audit logs.',
    features: [
      'Interactive dashboard tracking complaint life cycles (Open, In Progress, Resolved).',
      'Secure user authentication and role-based permissions (Admin, Moderator, Customer).',
      'Detailed analytical charts showing complaint distributions and resolution rates.',
      'Real-time status updates and automated email logs for user follow-ups.'
    ],
    tech: ['React.js', 'CSS3', 'Node.js', 'Express', 'MySQL', 'Git'],
    gradientClass: 'project-image-gradient-1',
    icon: (
      <svg className="project-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Database System Modeler',
    category: 'databases',
    shortDesc: 'A database design tool to draft entity relationships, UML classes, and export clean SQL structures.',
    description: 'A professional database modeling tool built directly in React to visualize database architecture. Simplifies system design by allowing engineers to create interactive Entity-Relationship Diagrams (ERD) and Class Diagrams, check normalization rules, and export schema generation scripts.',
    features: [
      'Visual diagramming builder with custom shapes, fields, keys, and connectors.',
      'One-click auto-generation of highly optimized SQL DDL schema commands.',
      'Normalization checker auditing schema designs against 1NF, 2NF, and 3NF rules.',
      'Project state persistence with export options to PNG, SVG, or JSON configuration.'
    ],
    tech: ['React.js', 'HTML5 Canvas', 'Vanilla CSS', 'SQL', 'Git'],
    gradientClass: 'project-image-gradient-2',
    icon: (
      <svg className="project-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Python Automation Suite',
    category: 'python',
    shortDesc: 'A collection of Python scripts designed to automate system operations and workflow utilities.',
    description: 'A modular suite of utilities developed to eliminate repetitive system tasks. Built entirely in Python, this collection features custom scripts that run in background processes to handle bulk file management, folder sorting, automated content extraction, and automated backups.',
    features: [
      'Smart directory organizer sorting incoming files into category folders based on extension rules.',
      'Batch processing tool to bulk-rename files, compress images, and generate thumbnails.',
      'Data scraper extracting specific web API or page data and transforming it into CSV/Excel.',
      'Automated sync daemon copying files safely to multiple local backup locations.'
    ],
    tech: ['Python', 'OS & Shutil modules', 'BeautifulSoup', 'Git'],
    gradientClass: 'project-image-gradient-3',
    icon: (
      <svg className="project-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
]

function App() {
  const [theme, setTheme] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [aboutTab, setAboutTab] = useState('skills')
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formLoading, setFormLoading] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)

  // Dynamic typing subtitles for Hero
  const [subTitle, setSubTitle] = useState('Full Stack Developer')
  const subtitlesList = ['Full Stack Developer', 'Database Designer', 'Software Engineer']
  
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % subtitlesList.length
      setSubTitle(subtitlesList[index])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Manage body tag attributes for theme toggling
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden' // Lock background scrolling
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto' // Restore scrolling
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setFormLoading(true)
    // Simulate API request
    setTimeout(() => {
      setFormLoading(false)
      setFormSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Navigation */}
      <nav className="navbar" id="home">
        <div className="navbar-container">
          <a href="#home" className="logo">
            Dilhara <span className="logo-dot"></span>
          </a>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="nav-controls">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m14.071 7.071l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <a href="#contact" className="contact-btn-nav">Hire Me</a>
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Mobile Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="logo-dot"></span> Available for Freelance & Full-time
            </div>
            <h1 className="hero-title">
              Hi, I am <br />
              <span>Dilhara De Silva</span>
            </h1>
            <div className="hero-subtitle">
              {subTitle}
            </div>
            <p className="hero-desc">
              A passionate software engineer specializing in building responsive full-stack applications, drafting robust database architectures, and automating operations using modern code technologies.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="avatar-wrapper">
              <img src={avatarImg} alt="Dilhara De Silva" className="avatar-img" />
            </div>
            <div className="background-blur"></div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-num">3+</div>
            <div className="stat-label">Years of Coding Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">10+</div>
            <div className="stat-label">Academic & Personal Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Programming Languages Mastered</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="container" id="about">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">My Journey & Expertise</h2>
          <p className="section-desc">
            Bridging technical creativity with reliable programming practices to craft products that perform at scale.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-graphics">
            <h3 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Interactive Stack Cloud</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Hover over technologies to see how they fit in my application development workflows.
            </p>
            <div className="tech-stack-tag-cloud">
              <span className="tech-tag">🚀 React.js</span>
              <span className="tech-tag">🐍 Python</span>
              <span className="tech-tag">☕ Java</span>
              <span className="tech-tag">🛢️ MySQL</span>
              <span className="tech-tag">⚡ Express</span>
              <span className="tech-tag">🐋 Docker</span>
              <span className="tech-tag">🐙 Git</span>
              <span className="tech-tag">💎 Vanilla CSS</span>
              <span className="tech-tag">🔥 Node.js</span>
              <span className="tech-tag">⚙️ REST APIs</span>
            </div>
          </div>

          <div className="about-tabs-container">
            <div className="about-tabs">
              <button 
                className={`tab-btn ${aboutTab === 'skills' ? 'active' : ''}`}
                onClick={() => setAboutTab('skills')}
              >
                Philosophy
              </button>
              <button 
                className={`tab-btn ${aboutTab === 'education' ? 'active' : ''}`}
                onClick={() => setAboutTab('education')}
              >
                Education
              </button>
              <button 
                className={`tab-btn ${aboutTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setAboutTab('timeline')}
              >
                Key Milestones
              </button>
            </div>

            <div className="tab-content">
              {aboutTab === 'skills' && (
                <div>
                  <p className="about-bio">
                    My development methodology is centered around scalability, modularity, and clean user experience. I enjoy breaking down complex workflow issues (like complain tracking systems) and drafting elegant database tables to power frontend interactions.
                  </p>
                  <p className="about-bio">
                    I advocate for standard CSS principles, responsive designs, and strong object-oriented architectures. I constantly leverage local automation scripts to keep my projects structured and deploy containers to make deployments reliable.
                  </p>
                </div>
              )}

              {aboutTab === 'education' && (
                <ul className="info-list">
                  <li className="info-item">
                    <span className="info-label">Degree</span>
                    <span className="info-val">Bachelor of Science in Computer Science / IT</span>
                  </li>
                  <li className="info-item">
                    <span className="info-label">Key Studies</span>
                    <span className="info-val">Software Engineering, Database Systems, Web Tech, Python Automation</span>
                  </li>
                  <li className="info-item">
                    <span className="info-label">Certificates</span>
                    <span className="info-val">Full Stack Development, Agile Project Methodologies, Database Modeling</span>
                  </li>
                </ul>
              )}

              {aboutTab === 'timeline' && (
                <div className="timeline-list">
                  <div className="timeline-item">
                    <div className="timeline-date">June 2026</div>
                    <h4 className="timeline-title">Semester 6 Presentation</h4>
                    <p className="timeline-desc">Defended academic research and system implementations, demonstrating full-stack engineering proficiency.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">December 2025</div>
                    <h4 className="timeline-title">Semester 5 Presentation</h4>
                    <p className="timeline-desc">Delivered project demonstrations involving complex complain management portals and relational schema modeling.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-date">April 2025</div>
                    <h4 className="timeline-title">Database System Architect Project</h4>
                    <p className="timeline-desc">Designed normalized ER diagrams and Class diagrams, optimizing multi-table SQL querying systems.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container" id="projects">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Showcased Projects</h2>
          <p className="section-desc">
            A curated list of applications I've architected, coded, and deployed from scratch.
          </p>
        </div>

        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => handleFilterClick('fullstack')}
          >
            Full-Stack
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'databases' ? 'active' : ''}`}
            onClick={() => handleFilterClick('databases')}
          >
            Databases
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'python' ? 'active' : ''}`}
            onClick={() => handleFilterClick('python')}
          >
            Python / Utilities
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className={`project-image ${project.gradientClass}`}>
                {project.icon}
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="project-tag">{t}</span>
                  ))}
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.shortDesc}</p>
                <button className="project-link-btn" onClick={() => handleOpenModal(project)}>
                  Explore Details
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container" id="skills">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Technical Competence</h2>
          <p className="section-desc">
            A comprehensive overview of my technological capability rating and tooling stack.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="skills-category-title">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Frontend Tech
            </h3>
            <div className="skills-list">
              <div className="skill-progress-item">
                <div className="skill-info"><span>React.js</span><span>90%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '90%' }}></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="skill-info"><span>JavaScript (ES6+)</span><span>88%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '88%' }}></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="skill-info"><span>Vanilla CSS / HTML5</span><span>95%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '95%' }}></div></div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2m-14 0a2 2 0 002 2h10a2 2 0 002-2M7 8h10M7 16h10" />
              </svg>
              Backend & DB
            </h3>
            <div className="skills-list">
              <div className="skill-progress-item">
                <div className="skill-info"><span>Python Scripting</span><span>85%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '85%' }}></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="skill-info"><span>Node.js / Express</span><span>82%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '82%' }}></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="skill-info"><span>Relational SQL (MySQL/Pg)</span><span>90%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '90%' }}></div></div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              Infrastructure
            </h3>
            <div className="skills-list">
              <div className="skill-progress-item">
                <div className="skill-info"><span>Git / GitHub</span><span>90%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '90%' }}></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="skill-info"><span>Docker Containers</span><span>75%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '75%' }}></div></div>
              </div>
              <div className="skill-progress-item">
                <div className="skill-info"><span>Systems Modeler (ER/UML)</span><span>92%</span></div>
                <div className="skill-progress-bg"><div className="skill-progress-bar" style={{ width: '92%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container" id="contact">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Have a Project in Mind?</h2>
          <p className="section-desc">
            Whether you want to discuss a software feature, a database design, or just say hello, drop me a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Email Me</div>
                <a href="mailto:dilhara.desilva@example.com" className="contact-value">dilhara.desilva@example.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Colombo, Sri Lanka</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <div className="contact-label">GitHub Profiles</div>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-value">github.com/dilhara-desilva</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formSuccess ? (
              <div className="success-message">
                <div className="success-icon-circle">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  className="btn-secondary" 
                  style={{ marginTop: '1.5rem', padding: '0.6rem 1.5rem' }} 
                  onClick={() => setFormSuccess(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    required 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleFormChange}
                    disabled={formLoading}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    required 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleFormChange}
                    disabled={formLoading}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-input" 
                    required 
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleFormChange}
                    disabled={formLoading}
                  />
                </div>
                <button type="submit" className="btn-primary form-btn" disabled={formLoading}>
                  {formLoading ? <div className="spinner"></div> : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <a href="#home" className="logo" style={{ justifyContent: 'center' }}>
              Dilhara <span className="logo-dot"></span>
            </a>
          </div>
          <ul className="footer-social-links">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Github">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Dilhara De Silva. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close Modal">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className={`modal-image ${selectedProject.gradientClass}`}>
              {selectedProject.icon}
            </div>

            <div className="modal-body">
              <div className="modal-tags">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="project-tag">{t}</span>
                ))}
              </div>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                Category: {selectedProject.category}
              </div>

              <div className="modal-desc-heading">Overview</div>
              <p className="modal-desc">{selectedProject.description}</p>

              <div className="modal-desc-heading">Key Accomplishments</div>
              <ul className="modal-features-list">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="modal-actions">
                <button className="btn-primary" onClick={handleCloseModal}>
                  Close Details
                </button>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '4px' }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

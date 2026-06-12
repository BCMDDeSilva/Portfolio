import React from 'react';

function Contact() {
  return (
    <div>
      <div className="page-header">
        <h2>Contact Me</h2>
        <p className="card-description">Feel free to reach out to me for collaborations or inquiries.</p>
      </div>
      
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="button" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';
import { personalInfo } from '../data/portfolioData.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill out all required fields (Name, Email, Message).'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success status after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={15} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an internship opportunity, or want to say hello? Drop a message below or reach out via social channels.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Cards */}
          <div className="contact-info-panel">
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div className="contact-details">
                <h4>Email Address</h4>
                <a href={personalInfo.socialLinks.email}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <LinkedinIcon size={22} />
              </div>
              <div className="contact-details">
                <h4>LinkedIn Profile</h4>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/zeelkaklotar
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <GithubIcon size={22} />
              </div>
              <div className="contact-details">
                <h4>GitHub Profile</h4>
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer">
                  github.com/zeelkaklotar
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-details">
                <h4>College & Location</h4>
                <p>
                  {personalInfo.college}
                  <br />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {personalInfo.location}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Send Me a Message
            </h3>

            {status.success && (
              <div className="form-status success">
                <CheckCircle size={20} />
                <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
              </div>
            )}

            {status.error && (
              <div className="form-status error">
                <AlertCircle size={20} />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Internship Opportunity"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Your Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

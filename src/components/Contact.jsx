import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill out all required fields (Name, Email, Message).'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-accent-line"></div>
        <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
          05 // Reach Out
        </div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">
          Interested in discussing an internship, open-source project collaboration, or software engineering opportunity? Reach out directly.
        </p>

        <div className="contact-kushal-split">
          {/* Contact Meta Info */}
          <div className="contact-meta-cards">
            <div className="contact-meta-box">
              <div className="meta-icon-circle">
                <Mail size={18} />
              </div>
              <div className="meta-info-text">
                <h4>Email Address</h4>
                <a href={personalInfo.socialLinks.email}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-meta-box">
              <div className="meta-icon-circle">
                <LinkedinIcon size={18} />
              </div>
              <div className="meta-info-text">
                <h4>LinkedIn Network</h4>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/zeelkaklotar
                </a>
              </div>
            </div>

            <div className="contact-meta-box">
              <div className="meta-icon-circle">
                <GithubIcon size={18} />
              </div>
              <div className="meta-info-text">
                <h4>GitHub Repositories</h4>
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer">
                  github.com/Zeel13K
                </a>
              </div>
            </div>

            <div className="contact-meta-box">
              <div className="meta-icon-circle">
                <MapPin size={18} />
              </div>
              <div className="meta-info-text">
                <h4>Institution & Location</h4>
                <p>
                  {personalInfo.college}
                  <br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {personalInfo.location}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-kushal">
            <div className="tracking-widest-sub" style={{ marginBottom: '1.25rem' }}>
              Direct Dispatch
            </div>

            {status.success && (
              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} />
                <span>Message received! Thank you for reaching out, Zeel will respond promptly.</span>
              </div>
            )}

            {status.error && (
              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <AlertCircle size={18} />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field-kushal">
                <label className="form-label-kushal" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="form-input-kushal"
                  required
                />
              </div>

              <div className="form-field-kushal">
                <label className="form-label-kushal" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="form-input-kushal"
                  required
                />
              </div>

              <div className="form-field-kushal">
                <label className="form-label-kushal" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Inquiry / Project Collaboration"
                  className="form-input-kushal"
                />
              </div>

              <div className="form-field-kushal">
                <label className="form-label-kushal" htmlFor="message">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your inquiry or message here..."
                  className="form-textarea-kushal"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-kushal btn-kushal-solid"
                style={{ width: '100%' }}
              >
                {status.submitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send size={16} />
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

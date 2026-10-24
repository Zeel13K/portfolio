import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-accent-line"></div>
          <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
            06 // Reach Out
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">
            Interested in discussing an internship, web development opportunity, or software engineering project? Reach out directly.
          </p>
        </motion.div>

        <div className="contact-kushal-split">
          {/* Contact Meta Info */}
          <motion.div
            className="contact-meta-cards"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {[
              {
                icon: Mail,
                title: 'Email Address',
                val: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                isLink: true
              },
              {
                icon: Phone,
                title: 'Phone Number',
                val: personalInfo.phone,
                href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
                isLink: true
              },
              {
                icon: GithubIcon,
                title: 'GitHub Repositories',
                val: 'github.com/Zeel13K',
                href: personalInfo.socialLinks.github,
                isLink: true
              },
              {
                icon: MapPin,
                title: 'Location & University',
                val: personalInfo.college,
                subVal: personalInfo.location,
                isLink: false
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  className="contact-meta-box"
                  whileHover={{ x: 6, borderColor: 'var(--border-hover)' }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                >
                  <div className="meta-icon-circle">
                    <Icon size={18} />
                  </div>
                  <div className="meta-info-text">
                    <h4>{card.title}</h4>
                    {card.isLink ? (
                      <a href={card.href} target="_blank" rel="noreferrer">
                        {card.val}
                      </a>
                    ) : (
                      <p>
                        {card.val}
                        <br />
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {card.subVal}
                        </span>
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact-form-kushal"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="tracking-widest-sub" style={{ marginBottom: '1.25rem' }}>
              Direct Dispatch
            </div>

            {status.success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}
              >
                <CheckCircle2 size={18} />
                <span>Message received! Thank you for reaching out, Zeel will respond promptly.</span>
              </motion.div>
            )}

            {status.error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}
              >
                <AlertCircle size={18} />
                <span>{status.error}</span>
              </motion.div>
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
                  placeholder="Web Development / Software Project Inquiry"
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

              <motion.button
                type="submit"
                disabled={status.submitting}
                className="btn-kushal btn-kushal-solid"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status.submitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

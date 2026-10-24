import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons.jsx';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills Matrix', href: '#skills' },
    { label: 'Selected Works', href: '#projects' },
    { label: 'Milestones', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-kushal">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
              {personalInfo.name}
            </h3>
            <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '1.25rem' }}>
              B.Tech CSE • Uka Tarsadia University (UTU)
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.7, maxWidth: '380px', fontWeight: 300, marginBottom: '2rem' }}>
              Building responsive websites, database-backed management portals, and practical software solutions.
            </p>

            <div className="hero-social-strip">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-link-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="tracking-widest-sub" style={{ marginBottom: '1.5rem' }}>
              Sections
            </div>
            <ul className="footer-nav-list">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory */}
          <div>
            <div className="tracking-widest-sub" style={{ marginBottom: '1.5rem' }}>
              Direct Links
            </div>
            <ul className="footer-nav-list">
              {navLinks.slice(4).map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href={personalInfo.resumeUrl} download="Zeel_Kaklotar_Resume.pdf">
                  Download Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name} • Uka Tarsadia University (UTU), Maliba
          </div>

          <button onClick={scrollToTop} className="overview-link" style={{ cursor: 'pointer' }}>
            <span>Back to Summit</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

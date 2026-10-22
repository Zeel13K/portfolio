import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons.jsx';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Summary */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div className="brand-icon" style={{ width: '32px', height: '32px' }}>
                <Code2 size={18} />
              </div>
              <h3 style={{ margin: 0 }}>{personalInfo.name}</h3>
            </div>
            <p>
              Computer Science student at AMTICS passionate about crafting responsive, performant, and user-friendly web applications.
            </p>
            <div className="hero-socials">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Twitter Profile"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="social-pill"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-links-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="footer-links-title">Sections</h4>
            <ul className="footer-links-list">
              {navLinks.slice(3).map((link) => (
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

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React JS & Vite.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Crafted with</span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
            <span>at AMTICS</span>
          </div>

          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

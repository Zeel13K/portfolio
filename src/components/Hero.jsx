import React from 'react';
import { Download, ArrowRight, Mail, Sparkles, Code, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';
import { personalInfo } from '../data/portfolioData.js';

export default function Hero({ onOpenResume }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Hero Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              <span>Available for Summer Internships & Projects</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            <p className="hero-bio">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a
                href={personalInfo.resumeUrl}
                download="Zeel_Kaklotar_Resume.pdf"
                className="btn btn-primary"
                title="Download Zeel's Resume in PDF format"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary">
                <Sparkles size={18} />
                <span>Quick Resume Preview</span>
              </button>

              <a href="#projects" onClick={handleScrollToProjects} className="btn btn-secondary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Connect with me:
              </span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="social-pill"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero Visual / Avatar */}
          <div className="hero-visual">
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                {/* Modern student avatar illustration / photo */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                  alt={personalInfo.name}
                  className="avatar-img"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="avatar-badge-float float-top">
              <Code size={18} color="#38bdf8" />
              <span>React & JavaScript</span>
            </div>

            <div className="avatar-badge-float float-bottom">
              <Cpu size={18} color="#a855f7" />
              <span>AMTICS • CSE Student</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

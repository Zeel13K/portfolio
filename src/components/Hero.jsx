import React from 'react';
import { Download, ArrowUpRight, Mail, Sparkles, FolderGit2, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons.jsx';
import { personalInfo } from '../data/portfolioData.js';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const overviewCards = [
    {
      num: '01',
      tag: 'Background',
      heading: 'Who I Am',
      desc: 'Computer Science student at AMTICS passionate about architecting responsive, performant, and accessible web experiences.',
      cta: 'Profile',
      target: '#about'
    },
    {
      num: '02',
      tag: 'Arsenal',
      heading: 'What I Build',
      desc: 'End-to-end full-stack applications with React, modern JavaScript, Tailwind CSS, Node.js, and MongoDB.',
      cta: 'Skills Matrix',
      target: '#skills'
    },
    {
      num: '03',
      tag: 'Selected Works',
      heading: 'Projects',
      desc: 'Curated collection of academic portals, community hubs, productivity boards, and open-source tools.',
      cta: 'View Works',
      target: '#projects'
    },
    {
      num: '04',
      tag: 'Milestones',
      heading: 'Education & Honors',
      desc: 'Consistently maintaining an 8.8 CGPA at AMTICS, hackathon finalist, and active open-source contributor.',
      cta: 'Achievements',
      target: '#achievements'
    }
  ];

  return (
    <section id="home" className="hero-kushal">
      <div className="container">
        {/* Availability Badge */}
        <div className="status-badge-kushal">
          <span className="pulse-emerald"></span>
          <span>Available for Summer Internships & Opportunities</span>
        </div>

        {/* Giant Headline - Kushal Style */}
        <h1 className="hero-giant-name">
          Zeel <br /> Kaklotar
        </h1>

        {/* Lead Subtitle */}
        <p className="hero-subtitle-lead">
          {personalInfo.tagline} at <strong>AMTICS</strong>. Focused on modern React engineering, component design systems, and building intuitive, scalable digital products.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <a
            href={personalInfo.resumeUrl}
            download="Zeel_Kaklotar_Resume.pdf"
            className="btn-kushal btn-kushal-solid"
            title="Download Zeel's Resume in PDF"
          >
            <Download size={17} />
            <span>Download Résumé (PDF)</span>
          </a>

          <button onClick={onOpenResume} className="btn-kushal btn-kushal-outline">
            <Sparkles size={17} />
            <span>Interactive Preview</span>
          </button>

          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="btn-kushal btn-kushal-outline"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Social Links Strip */}
        <div className="hero-social-strip">
          <span className="tracking-widest-sub">Connect:</span>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="social-link-btn"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={19} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-link-btn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={19} />
          </a>
          <a
            href={personalInfo.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="social-link-btn"
            aria-label="Twitter Profile"
          >
            <TwitterIcon size={19} />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            className="social-link-btn"
            aria-label="Send Email"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Numbered Overview Cards (Inspired by Kushal's site) */}
        <div className="overview-grid">
          {overviewCards.map((c) => (
            <div key={c.num} className="overview-card">
              <div>
                <div className="overview-number">{c.num}</div>
                <div className="overview-tag">{c.tag}</div>
                <h3 className="overview-heading">{c.heading}</h3>
                <p className="overview-desc">{c.desc}</p>
              </div>
              <a
                href={c.target}
                onClick={(e) => handleScrollTo(e, c.target)}
                className="overview-link"
              >
                <span>{c.cta}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="stats-strip">
          {personalInfo.stats.map((s, idx) => (
            <div key={idx} className="stat-strip-item">
              <div className="stat-strip-val">{s.value}</div>
              <div className="stat-strip-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

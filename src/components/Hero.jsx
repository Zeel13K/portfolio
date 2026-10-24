import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons.jsx';
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
      desc: 'B.Tech CSE student at UTU Maliba with a Diploma in IT (8.76 CGPA), passionate about web development and practical technology solutions.',
      cta: 'Profile',
      target: '#about'
    },
    {
      num: '02',
      tag: 'Experience',
      heading: 'Work & Training',
      desc: 'Freelance web development experience and AISECT trainee background developing full-stack database-driven management systems.',
      cta: 'Experience',
      target: '#experience'
    },
    {
      num: '03',
      tag: 'Selected Works',
      heading: 'Key Projects',
      desc: 'Production management systems including Mavtar Printing Press, Swstik Numerology (Vercel), and Student Management System.',
      cta: 'View Works',
      target: '#projects'
    },
    {
      num: '04',
      tag: 'Arsenal',
      heading: 'Skills Matrix',
      desc: 'Hands-on programming with JavaScript, PHP, Python, React.js, Vite, PostgreSQL, MySQL, and modern cloud deployment tools.',
      cta: 'Skills Matrix',
      target: '#skills'
    }
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 260
      }
    }
  };

  return (
    <section id="home" className="hero-kushal">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
        
          {/* Giant Headline */}
          <motion.h1
            variants={itemVariants}
            className="hero-giant-name"
          >
            Zeel <br /> Kaklotar
          </motion.h1>

          {/* Lead Subtitle */}
          <motion.p variants={itemVariants} className="hero-subtitle-lead">
            {personalInfo.tagline} at <strong>{personalInfo.college}</strong>. {personalInfo.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="hero-cta-group">
            <motion.a
              href={personalInfo.resumeUrl}
              download="Zeel_Kaklotar_Resume.pdf"
              className="btn-kushal btn-kushal-solid"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              title="Download Zeel's Resume in PDF"
            >
              <Download size={17} />
              <span>Download Résumé (PDF)</span>
            </motion.a>

            <motion.button
              onClick={onOpenResume}
              className="btn-kushal btn-kushal-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={17} />
              <span>Interactive Resume</span>
            </motion.button>

            <motion.a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="btn-kushal btn-kushal-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          {/* Social Links Strip */}
          <motion.div variants={itemVariants} className="hero-social-strip">
            <span className="tracking-widest-sub">Connect:</span>
            {[
              { icon: GithubIcon, href: personalInfo.socialLinks.github, label: 'GitHub' },
            ].map((soc, i) => {
              const Icon = soc.icon;
              return (
                <motion.a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link-btn"
                  aria-label={soc.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon size={19} />
                </motion.a>
              );
            })}
            <motion.a
              href={personalInfo.socialLinks.email}
              className="social-link-btn"
              aria-label="Email"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              <Mail size={19} />
            </motion.a>
          </motion.div>

          {/* Numbered Overview Cards */}
          <motion.div variants={itemVariants} className="overview-grid">
            {overviewCards.map((c) => (
              <motion.div
                key={c.num}
                className="overview-card"
                whileHover={{ y: -6, borderColor: 'var(--border-hover)' }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              >
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
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            variants={itemVariants}
            className="stats-strip"
          >
            {personalInfo.stats.map((s, idx) => (
              <div key={idx} className="stat-strip-item">
                <div className="stat-strip-val">{s.value}</div>
                <div className="stat-strip-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

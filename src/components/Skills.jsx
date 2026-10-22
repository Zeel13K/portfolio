import React, { useState } from 'react';
import {
  Wrench,
  Atom,
  Code2,
  Layout,
  Palette,
  Server,
  Network,
  Database,
  Binary,
  GitBranch,
  Zap,
  Smartphone,
  Send,
  Lightbulb,
  Users,
  BookOpen,
  Clock,
  GitCommit,
  MessageSquare
} from 'lucide-react';
import { technicalSkills, softSkills } from '../data/portfolioData.js';

// Map icon string names to Lucide icons
const iconComponents = {
  Atom: Atom,
  Code2: Code2,
  Layout: Layout,
  Palette: Palette,
  Server: Server,
  Network: Network,
  Database: Database,
  Binary: Binary,
  GitBranch: GitBranch,
  Zap: Zap,
  Smartphone: Smartphone,
  Send: Send,
  Lightbulb: Lightbulb,
  Users: Users,
  BookOpen: BookOpen,
  Clock: Clock,
  GitCommit: GitCommit,
  MessageSquare: MessageSquare
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { label: 'All Skills', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend & DB', value: 'backend' },
    { label: 'Tools & DevOps', value: 'tools' },
    { label: 'Soft Skills', value: 'soft' }
  ];

  const filteredTechSkills = activeFilter === 'all'
    ? technicalSkills
    : technicalSkills.filter((s) => s.category === activeFilter);

  const showTech = activeFilter !== 'soft';
  const showSoft = activeFilter === 'all' || activeFilter === 'soft';

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={15} />
            <span>Technical & Soft Skills</span>
          </div>
          <h2 className="section-title">
            My Professional <span className="gradient-text">Skills & Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A balanced combination of modern web engineering competencies, backend fundamentals, and collaborative teamwork skills.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        {showTech && (
          <>
            <div className="skills-grid">
              {filteredTechSkills.map((skill) => {
                const IconComponent = iconComponents[skill.icon] || Code2;
                return (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-header">
                      <div className="skill-info">
                        <div className="skill-icon-wrapper">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-experience">{skill.experience}</div>
                        </div>
                      </div>
                      <div className="skill-percent">{skill.proficiency}%</div>
                    </div>

                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Soft Skills Section */}
        {showSoft && (
          <div style={{ marginTop: showTech ? '4rem' : '0' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Soft & Interpersonal Skills
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Essential professional traits for thriving in engineering teams and client projects.
              </p>
            </div>

            <div className="soft-skills-grid">
              {softSkills.map((skill) => {
                const SoftIcon = iconComponents[skill.icon] || Lightbulb;
                return (
                  <div key={skill.name} className="soft-skill-card">
                    <div className="soft-skill-icon">
                      <SoftIcon size={24} />
                    </div>
                    <h4 className="soft-skill-title">{skill.name}</h4>
                    <p className="soft-skill-desc">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import React from 'react';
import {
  Code2,
  Atom,
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

const iconMap = {
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
};

export default function Skills() {
  const frontend = technicalSkills.filter((s) => s.category === 'frontend');
  const backend = technicalSkills.filter((s) => s.category === 'backend');
  const tools = technicalSkills.filter((s) => s.category === 'tools');

  const categories = [
    { title: 'Frontend Engineering', items: frontend },
    { title: 'Backend & Data Storage', items: backend },
    { title: 'Developer Tools & Platforms', items: tools },
  ];

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-accent-line"></div>
        <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
          02 // Competencies
        </div>
        <h2 className="section-title">Skills Matrix</h2>
        <p className="section-sub">
          A structured inventory of technical capabilities, developer tooling, and collaborative engineering practices.
        </p>

        <div className="skills-matrix-wrap">
          {categories.map((cat) => (
            <div key={cat.title} className="skills-category-block">
              <div className="skills-category-title">{cat.title}</div>
              <div className="skills-pills-flow">
                {cat.items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="skill-matrix-pill">
                      <Icon size={16} />
                      <span>{skill.name}</span>
                      <span className="skill-pill-percent">{skill.proficiency}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Soft Skills Category */}
          <div className="skills-category-block">
            <div className="skills-category-title">Soft Skills & Practices</div>
            <div className="skills-pills-flow">
              {softSkills.map((skill) => {
                const Icon = iconMap[skill.icon] || Lightbulb;
                return (
                  <div key={skill.name} className="skill-matrix-pill" title={skill.description}>
                    <Icon size={16} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

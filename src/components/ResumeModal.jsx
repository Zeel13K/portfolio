import React from 'react';
import { X, Download, ExternalLink, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { personalInfo, technicalSkills, projects, achievements } from '../data/portfolioData.js';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">
            Résumé Preview • {personalInfo.name}
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body: Structured Resume */}
        <div className="modal-body">
          <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{personalInfo.name}</h2>
            <p style={{ color: 'var(--badge-text)', fontWeight: 600, fontSize: '1.05rem', marginTop: '0.25rem' }}>
              {personalInfo.tagline}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              {personalInfo.email} • {personalInfo.phone} • {personalInfo.location}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              <GraduationCap size={20} color="#3b82f6" />
              <span>Education</span>
            </h4>
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                <span>{personalInfo.degree}</span>
                <span style={{ color: 'var(--badge-text)' }}>2023 - 2027</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {personalInfo.college} • CGPA: 8.8 / 10
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              <Code size={20} color="#8b5cf6" />
              <span>Core Competencies</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {technicalSkills.map((s) => (
                <span key={s.name} className="tag-badge" style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}>
                  {s.name} ({s.proficiency}%)
                </span>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              <Briefcase size={20} color="#10b981" />
              <span>Featured Projects</span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem' }}>
                    <span>{p.title}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.category}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              <Award size={20} color="#f59e0b" />
              <span>Honors & Certifications</span>
            </h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {achievements.map((a, i) => (
                <li key={i}>
                  <strong style={{ color: 'var(--text-primary)' }}>{a.title}</strong> — {a.organization} ({a.year})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={16} />
            <span>Open PDF in Tab</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Zeel_Kaklotar_Resume.pdf"
            className="btn btn-primary btn-sm"
          >
            <Download size={16} />
            <span>Download PDF File</span>
          </a>
        </div>
      </div>
    </div>
  );
}

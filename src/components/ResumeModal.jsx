import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { personalInfo, technicalSkills, projects, achievements } from '../data/portfolioData.js';

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay-kushal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="modal-box-kushal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header-kushal">
              <div className="modal-title-kushal">
                Curriculum Vitae • {personalInfo.name}
              </div>
              <button onClick={onClose} className="theme-btn-round" aria-label="Close modal">
                <X size={18} />
              </button>
            </div>

            {/* Executive Resume Content Sheet */}
            <div className="modal-body-kushal">
              {/* Header Block */}
              <div style={{ marginBottom: '2rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--border-light)' }}>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {personalInfo.name}
                </h2>
                <div style={{ height: '3px', width: '45px', backgroundColor: 'var(--text-main)', margin: '0.75rem 0' }}></div>
                <p style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.65 }}>
                  {personalInfo.tagline}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
                  {personalInfo.location} • {personalInfo.email} • {personalInfo.phone}
                </p>
              </div>

              {/* Profile Statement */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.6rem' }}>
                  Executive Summary
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
                  Academic Education
                </div>
                <div style={{ padding: '1.25rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 800 }}>
                    <span style={{ fontSize: '1.05rem' }}>{personalInfo.degree}</span>
                    <span className="tracking-widest-sub">2023 – 2027</span>
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                    {personalInfo.college} • Current CGPA: <strong>8.8 / 10</strong>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    Coursework: Data Structures & Algorithms, Web Engineering, DBMS, Computer Networks, Operating Systems.
                  </div>
                </div>
              </div>

              {/* Technical Competencies */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
                  Technical Skills Matrix
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {technicalSkills.map((s) => (
                    <span key={s.name} className="tech-tag-sm" style={{ padding: '0.35rem 0.75rem' }}>
                      {s.name} • {s.proficiency}%
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Featured Projects */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
                  Featured Works
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {projects.slice(0, 3).map((p) => (
                    <div key={p.id} style={{ padding: '1.15rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '0.95rem' }}>
                        <span>{p.title}</span>
                        <span className="tracking-widest-sub">{p.category}</span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.35rem', lineHeight: 1.5, fontWeight: 300 }}>
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors */}
              <div>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
                  Honors & Certifications
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {achievements.map((a, i) => (
                    <li key={i}>
                      • <strong style={{ color: 'var(--text-main)' }}>{a.title}</strong> — {a.organization} ({a.year})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="modal-footer-kushal">
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-kushal btn-kushal-outline btn-kushal-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={15} />
                <span>Open in Tab</span>
              </motion.a>

              <motion.a
                href={personalInfo.resumeUrl}
                download="Zeel_Kaklotar_Resume.pdf"
                className="btn-kushal btn-kushal-solid btn-kushal-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={15} />
                <span>Download PDF</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

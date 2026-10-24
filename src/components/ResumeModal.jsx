import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, GraduationCap, Briefcase, Code2, FolderGit2, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationList, workExperience, technicalSkillsCategories, softSkills } from '../data/portfolioData.js';

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
            style={{ maxWidth: '850px' }}
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

            {/* Resume Document Sheet */}
            <div className="modal-body-kushal">
              {/* Header Contact Block */}
              <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--border-light)' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {personalInfo.name}
                </h2>
                <div style={{ height: '3px', width: '50px', backgroundColor: 'var(--text-main)', margin: '0.75rem auto' }}></div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 500 }}>
                  {personalInfo.location} ⋄ {personalInfo.phone} ⋄ <a href={`mailto:${personalInfo.email}`} style={{ textDecoration: 'underline' }}>{personalInfo.email}</a>
                </p>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  GitHub: <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>{personalInfo.socialLinks.github}</a>
                </p>
              </div>

              {/* Professional Summary */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.6rem' }}>
                  Professional Summary
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 300 }}>
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.85rem' }}>
                  Education
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {educationList.map((edu, idx) => (
                    <div key={idx} style={{ padding: '1.15rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', fontWeight: 800 }}>
                        <span style={{ fontSize: '1rem' }}>{edu.degree}</span>
                        <span className="tracking-widest-sub">{edu.period} • {edu.status}</span>
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        {edu.institution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.85rem' }}>
                  Work Experience
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {workExperience.map((exp, idx) => (
                    <div key={idx} style={{ padding: '1.25rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', fontWeight: 800 }}>
                        <div>
                          <div style={{ fontSize: '1.05rem', textTransform: 'uppercase' }}>{exp.role}</div>
                          <div style={{ color: 'var(--accent-green)', fontSize: '0.85rem', marginTop: '0.15rem' }}>{exp.organization}</div>
                        </div>
                        <span className="tracking-widest-sub">{exp.period}</span>
                      </div>
                      <ul style={{ listStyle: 'none', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-green)', marginTop: '0.15rem' }}>•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.85rem' }}>
                  Key Projects
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ padding: '1.15rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                      <span style={{ fontSize: '1rem' }}>Mavtar Printing Press Management System</span>
                      <span className="tracking-widest-sub">2026</span>
                    </div>
                    <ul style={{ listStyle: 'none', marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <li>• Developing a web-based management system to organize printing press business records, invoices, and payments.</li>
                      <li>• Implemented invoice generation and PDF generation to simplify billing and record keeping.</li>
                      <li>• Working on online database integration to enable access to business records across computers.</li>
                      <li>• Built using React, Vite, and JavaScript with centralized data storage and role-based access.</li>
                    </ul>
                  </div>

                  <div style={{ padding: '1.15rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                      <span style={{ fontSize: '1rem' }}>Swstik Numerology</span>
                      <span className="tracking-widest-sub">2025</span>
                    </div>
                    <ul style={{ listStyle: 'none', marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <li>• Developed a responsive website for personalized numerology consultations and customer inquiries.</li>
                      <li>• Integrated EmailJS to send consultation requests and messages without requiring a dedicated backend server.</li>
                      <li>• Designed a modern, user-friendly interface deployed on Vercel with HTTPS support.</li>
                    </ul>
                  </div>

                  <div style={{ padding: '1.15rem', background: 'var(--pill-bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                      <span style={{ fontSize: '1rem' }}>Student Management System</span>
                      <span className="tracking-widest-sub">2024</span>
                    </div>
                    <ul style={{ listStyle: 'none', marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <li>• Contributed to the development and maintenance of a Student Management System during training at AISECT.</li>
                      <li>• Assisted with feature implementation, debugging, and improving application functionality using PHP.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div style={{ marginBottom: '2rem' }}>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.85rem' }}>
                  Technical Skills
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  {technicalSkillsCategories.map((c) => (
                    <div key={c.category} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem', alignItems: 'center' }}>
                      <strong style={{ color: 'var(--text-main)', fontSize: '0.825rem', textTransform: 'uppercase' }}>{c.category}:</strong>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{c.skills.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <div className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
                  Soft Skills
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {softSkills.map((s, i) => (
                    <li key={i} className="skill-matrix-pill" style={{ fontSize: '0.8rem' }}>
                      <CheckCircle2 size={13} color="var(--accent-green)" />
                      <span>{s.name}</span>
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

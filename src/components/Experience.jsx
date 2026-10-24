import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { workExperience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-accent-line"></div>
          <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
            02 // Professional Experience
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">
            Practical industry traineeship, real-world web application development, and client freelance engineering.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="about-card-box"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ borderColor: 'var(--border-hover)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div className="tracking-widest-sub" style={{ color: 'var(--accent-green)', opacity: 0.9, marginBottom: '0.35rem' }}>
                    {exp.type}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', opacity: 0.85 }}>
                    {exp.organization}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                  <div className="tech-tag-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem' }}>
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent-green)', marginTop: '0.2rem', flexShrink: 0 }}>
                      <CheckCircle2 size={16} />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

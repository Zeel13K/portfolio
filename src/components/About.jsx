import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo, educationList } from '../data/portfolioData.js';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-accent-line"></div>
          <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
            01 // About Me
          </div>
          <h2 className="section-title">Profile & Education</h2>
          <p className="section-sub">
            B.Tech CSE student with a Diploma in Information Technology and hands-on experience in web development and application engineering.
          </p>
        </motion.div>

        <div className="about-container-split">
          {/* Narrative Story */}
          <motion.div
            className="profile-narrative"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>
              I am a <strong>B.Tech CSE student</strong> at <strong>Uka Tarsadia University (UTU), Maliba</strong>, with a solid foundational <strong>Diploma in Information Technology (CGPA: 8.76 / 10)</strong> and practical experience in web development and software application engineering.
            </p>
            <p>
              I have practical experience building responsive websites, client web applications, and database-driven management systems such as the <strong>Mavtar Printing Press Management System</strong> and the <strong>Swstik Numerology</strong> consultation platform.
            </p>
            <p>
              During my web development training at <strong>AISECT</strong>, I contributed to the development and maintenance of a web-based Student Management System using PHP and MySQL. I am driven by software development, database administration, and building reliable, scalable digital solutions.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.button
                onClick={onOpenResume}
                className="btn-kushal btn-kushal-solid btn-kushal-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View Full Curriculum Vitae</span>
                <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.div>

          {/* Education Box */}
          <motion.div
            className="about-card-box"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ borderColor: 'var(--border-hover)' }}
          >
            <div className="tracking-widest-sub" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={15} />
              <span>Academic Qualifications</span>
            </div>

            <div className="education-timeline-kushal">
              {educationList.map((edu, idx) => (
                <div key={idx} className="edu-item-kushal">
                  <div className="edu-bullet"></div>
                  <div>
                    <div className="edu-period">{edu.period} • <span style={{ color: 'var(--accent-green)' }}>{edu.status}</span></div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <div className="edu-inst">{edu.institution}</div>
                    <div style={{ marginTop: '0.4rem', fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {edu.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

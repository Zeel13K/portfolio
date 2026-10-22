import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

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
          <h2 className="section-title">Profile & Background</h2>
          <p className="section-sub">
            A dedicated Computer Science undergraduate at AMTICS specializing in frontend architecture, modern JavaScript, and human-centered design systems.
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
              I am currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at <strong>Asha M. Tarsadia Institute of Computer Science and Technology (AMTICS)</strong>, affiliated with Uka Tarsadia University.
            </p>
            <p>
              My passion lies at the intersection of robust frontend architecture and polished design. Whether building student utility portals, real-time productivity apps, or open-source developer tools, I focus on performance, semantic structure, accessibility, and delightful interactivity.
            </p>
            <p>
              Alongside frontend technologies like React, JavaScript (ES6+), and Tailwind CSS, I have hands-on experience designing RESTful APIs with Node.js and managing databases with MongoDB and MySQL.
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
            <div className="tracking-widest-sub" style={{ marginBottom: '1rem' }}>
              Academic Credentials
            </div>

            <div className="education-timeline-kushal">
              <div className="edu-item-kushal">
                <div className="edu-bullet"></div>
                <div>
                  <div className="edu-period">2023 – 2027 (Expected)</div>
                  <h3 className="edu-degree">B.Tech in Computer Science & Engineering</h3>
                  <div className="edu-inst">
                    Asha M. Tarsadia Institute of Computer Science & Technology (AMTICS)
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    CGPA: <strong>8.8 / 10</strong> • Core Modules: Data Structures, Web Engineering, DBMS, Computer Networks.
                  </div>
                </div>
              </div>

              <div className="edu-item-kushal">
                <div className="edu-bullet"></div>
                <div>
                  <div className="edu-period">2021 – 2023</div>
                  <h3 className="edu-degree">Higher Secondary Certificate (HSC)</h3>
                  <div className="edu-inst">
                    Gujarat Secondary & Higher Secondary Board
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Majors: Physics, Chemistry & Mathematics (PCM) • Distinction.
                  </div>
                </div>
              </div>
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

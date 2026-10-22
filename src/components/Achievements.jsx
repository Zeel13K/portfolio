import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-accent-line"></div>
          <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
            04 // Milestones
          </div>
          <h2 className="section-title">Achievements & Honors</h2>
          <p className="section-sub">
            Recognitions, hackathon podiums, certifications, and academic excellence awards earned throughout my degree at AMTICS.
          </p>
        </motion.div>

        <div className="overview-grid" style={{ marginTop: '2.5rem' }}>
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="overview-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: 'var(--border-hover)' }}
            >
              <div>
                <div className="overview-number">{item.year}</div>
                <div className="overview-tag">{item.organization}</div>
                <h3 className="overview-heading" style={{ fontSize: '1.05rem' }}>{item.title}</h3>
                <p className="overview-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

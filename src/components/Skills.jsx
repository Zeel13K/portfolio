import React from 'react';
import { motion } from 'framer-motion';
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
  Search,
  CheckCircle2
} from 'lucide-react';
import { technicalSkillsCategories, softSkills } from '../data/portfolioData.js';

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-accent-line"></div>
          <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
            03 // Competencies
          </div>
          <h2 className="section-title">Technical Skills Matrix</h2>
          <p className="section-sub">
            Categorized technical stack, programming languages, database architectures, and engineering tools based on real production use.
          </p>
        </motion.div>

        <div className="skills-matrix-wrap">
          {technicalSkillsCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className="skills-category-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <div className="skills-category-title">{cat.category}</div>
              <div className="skills-pills-flow">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skill-matrix-pill"
                    whileHover={{ scale: 1.05, y: -2, borderColor: 'var(--border-hover)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', damping: 18, stiffness: 350 }}
                  >
                    <CheckCircle2 size={14} color="var(--accent-green)" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Soft Skills Section directly from Resume */}
          <motion.div
            className="skills-category-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="skills-category-title">Soft Skills</div>
            <div className="skills-pills-flow">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-matrix-pill"
                  title={skill.description}
                  whileHover={{ scale: 1.05, y: -2, borderColor: 'var(--border-hover)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', damping: 18, stiffness: 350 }}
                >
                  <Lightbulb size={14} color="var(--accent-green)" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

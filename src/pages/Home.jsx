import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';

export default function Home({ onOpenResume }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Hero onOpenResume={onOpenResume} />

      {/* Marquee Ticker */}
      <Marquee />

      {/* Quick Home Footer Call to Action */}
      <section className="section" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
            Explore Further
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Ready to collaborate or review detailed credentials?
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1rem', fontWeight: 300 }}>
            Browse through my practical experience, full technical skills matrix, production client projects, or dispatch a direct inquiry.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-kushal btn-kushal-solid btn-kushal-sm">
              <span>View Projects</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link to="/experience" className="btn-kushal btn-kushal-outline btn-kushal-sm">
              <span>Work Experience</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link to="/contact" className="btn-kushal btn-kushal-outline btn-kushal-sm">
              <span>Contact Zeel</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

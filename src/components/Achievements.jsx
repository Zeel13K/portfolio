import React from 'react';
import { Trophy, Award, Star, ArrowUpRight } from 'lucide-react';
import { achievements } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-accent-line"></div>
        <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
          04 // Milestones
        </div>
        <h2 className="section-title">Achievements & Honors</h2>
        <p className="section-sub">
          Recognitions, hackathon podiums, certifications, and academic excellence awards earned throughout my degree at AMTICS.
        </p>

        <div className="overview-grid" style={{ marginTop: '2.5rem' }}>
          {achievements.map((item, idx) => (
            <div key={idx} className="overview-card">
              <div>
                <div className="overview-number">{item.year}</div>
                <div className="overview-tag">{item.organization}</div>
                <h3 className="overview-heading" style={{ fontSize: '1.05rem' }}>{item.title}</h3>
                <p className="overview-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

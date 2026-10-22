import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData.js';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={15} />
            <span>Milestones</span>
          </div>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Notable honors, academic rankings, hackathons, and certifications earned during my tenure at AMTICS.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <span className="achievement-badge">{item.year}</span>
              <h3 className="achievement-title">{item.title}</h3>
              <div className="achievement-org">{item.organization}</div>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

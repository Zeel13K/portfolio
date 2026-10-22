import React, { useState } from 'react';
import { ExternalLink, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons.jsx';
import { projects } from '../data/portfolioData.js';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-accent-line"></div>
        <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
          03 // Selected Works
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          Production-ready applications, open-source utilities, and academic portals developed using React and modern full-stack workflows.
        </p>

        {/* Project Grid */}
        <div className="projects-kushal-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-kushal-card">
              <div className="project-img-box">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="project-category-tag">{p.category}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.description}</p>

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tech-tag-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions-row">
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="btn-kushal btn-kushal-outline btn-kushal-sm"
                  >
                    <span>Overview</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-kushal btn-kushal-outline btn-kushal-sm"
                    title="View Source on GitHub"
                  >
                    <GithubIcon size={15} />
                    <span>Source</span>
                  </a>

                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-kushal btn-kushal-solid btn-kushal-sm"
                    title="Open Live Preview"
                  >
                    <ExternalLink size={15} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kushal-Style Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay-kushal" onClick={() => setSelectedProject(null)}>
          <div className="modal-box-kushal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-kushal">
              <div className="modal-title-kushal">{selectedProject.title}</div>
              <button
                onClick={() => setSelectedProject(null)}
                className="theme-btn-round"
                aria-label="Close Project Modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body-kushal">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 'var(--radius-lg)', marginBottom: '1.75rem' }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="tracking-widest-sub" style={{ marginBottom: '0.4rem' }}>
                Category: {selectedProject.category}
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem', fontWeight: 300 }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 className="tracking-widest-sub" style={{ marginBottom: '0.85rem' }}>
                  Key Engineering Highlights
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--accent-green)" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="tracking-widest-sub" style={{ marginBottom: '0.75rem' }}>
                  Technologies & Frameworks
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="tech-tag-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer-kushal">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-kushal btn-kushal-outline btn-kushal-sm"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>

              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-kushal btn-kushal-solid btn-kushal-sm"
              >
                <ExternalLink size={16} />
                <span>Live Preview</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

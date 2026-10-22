import React from 'react';
import { User, GraduationCap, MapPin, Mail, Award, BookOpen, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={15} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate Developer & <span className="gradient-text">Computer Science Student</span>
          </h2>
          <p className="section-subtitle">
            A look into my academic journey at AMTICS, my technical focus areas, and my enthusiasm for engineering digital solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Background & Bio */}
          <div className="about-card">
            <h3>
              <BookOpen size={24} color="#3b82f6" />
              <span>My Background</span>
            </h3>
            <p>
              I am currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> at <strong>A. M. Tarsadia Institute of Computer Science and Technology (AMTICS)</strong>, part of Uka Tarsadia University.
            </p>
            <p>
              My journey in software engineering started with curiosity about how interactive websites operate under the hood. Since then, I have developed a strong foundation in data structures, algorithms, object-oriented programming, and modern web application development with React and JavaScript.
            </p>
            <p>
              I take pride in writing clean, modular, and maintainable code with a strong emphasis on responsive design, cross-browser compatibility, and user experience.
            </p>

            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Tech (CSE)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Institute</span>
                <span className="info-value">AMTICS, UTU</span>
              </div>
              <div className="info-item">
                <span className="info-label">Current CGPA</span>
                <span className="info-value">8.8 / 10.0</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Extracurricular Timeline */}
          <div className="about-card">
            <h3>
              <GraduationCap size={24} color="#8b5cf6" />
              <span>Education & Milestones</span>
            </h3>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2023 - 2027 (Expected)</div>
                <div className="timeline-title">B.Tech in Computer Science & Engineering</div>
                <div className="timeline-org">A. M. Tarsadia Institute of Computer Science and Technology (AMTICS)</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Core modules: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Software Engineering.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2021 - 2023</div>
                <div className="timeline-title">Higher Secondary Certificate (HSC) - Science Stream</div>
                <div className="timeline-org">Gujarat Secondary and Higher Secondary Education Board</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Majored in Physics, Chemistry, and Mathematics (PCM) with distinction.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenResume} className="btn btn-outline btn-sm">
                <span>View Full Academic Profile</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

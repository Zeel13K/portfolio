import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved : 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Top Reading Scroll Progress Animation */}
      <ScrollProgress />

      {/* Floating Ambient Glow Meshes */}
      <div className="ambient-glow-mesh"></div>
      <div className="ambient-glow-mesh-2"></div>

      {/* Fixed Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Animated Marquee Ticker */}
        <Marquee />

        {/* 01 // About & Education Section */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02 // Skills Matrix */}
        <Skills />

        {/* 03 // Selected Works (Projects & Modal) */}
        <Projects />

        {/* 04 // Achievements & Milestones */}
        <Achievements />

        {/* 05 // Reach Out & Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Animated Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

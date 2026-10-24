import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

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
    <HashRouter>
      <ScrollToTop />
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

        {/* Multi-Page Routes: Home only shows Home details; other pages shown individually */}
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="/about" element={<About onOpenResume={() => setIsResumeOpen(true)} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Animated Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </HashRouter>
  );
}

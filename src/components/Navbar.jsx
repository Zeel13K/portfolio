import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.js';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="navbar-kushal">
        <div className="container navbar-container">
          {/* Brand */}
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="nav-brand-group">
            <span className="nav-brand-title">{personalInfo.name}</span>
            <span className="nav-brand-subtitle">B.Tech CSE • UTU Maliba</span>
          </Link>

          {/* Centered Navigation Links */}
          <ul className="nav-links-center">
            {navItems.map((item) => {
              const isActive = item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={`nav-link-item ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="nav-actions-right">
            <button
              onClick={toggleTheme}
              className="theme-btn-round"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button onClick={onOpenResume} className="btn-kushal btn-kushal-outline btn-kushal-sm">
              <FileText size={15} />
              <span>Résumé</span>
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-kushal ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-items">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `mobile-menu-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn-kushal btn-kushal-solid btn-kushal-sm"
            style={{ width: '100%' }}
          >
            <FileText size={16} />
            <span>View Résumé</span>
          </button>
        </div>
      </div>
    </>
  );
}

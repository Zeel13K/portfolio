import React from 'react';

export default function Marquee() {
  const items = [
    'React.js',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'Node.js & Express',
    'MongoDB & MySQL',
    'RESTful APIs',
    'Git & GitHub',
    'Vite Build System',
    'Responsive Web Design',
    'AMTICS Computer Science',
    'Modern UI/UX',
    'Agile Collaboration'
  ];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={`m1-${index}`} className="marquee-item">
            <span className="marquee-dot"></span>
            <span>{item}</span>
          </span>
        ))}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {items.map((item, index) => (
          <span key={`m2-${index}`} className="marquee-item">
            <span className="marquee-dot"></span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Updated Portfolio Data Configuration for Zeel Kaklotar
export const personalInfo = {
  name: "Zeel Kaklotar",
  tagline: "B.Tech CSE Student & Full Stack Web Developer",
  subtitle: "B.Tech CSE student with a Diploma in IT and hands-on experience in web development, application engineering, and database management.",
  bio: "B.Tech CSE student with a Diploma in Information Technology and hands-on experience in web development and application development. Skilled in building responsive websites and web-based management systems using modern technologies. Interested in software development, database management, and developing practical technology solutions.",
  college: "Uka Tarsadia University (UTU), Maliba",
  degree: "B.Tech in Computer Science and Engineering (CSE)",
  educationStatus: "Pursuing (2026 – 2029)",
  diploma: "Diploma in Information Technology (2022 – 2025)",
  location: "Surat, Gujarat, India",
  email: "kaklotrzeel@gmail.com",
  phone: "+91 75672 19666",
  resumeUrl: "./resume.pdf",
  socialLinks: {
    github: "https://github.com/Zeel13K",
    email: "mailto:kaklotrzeel@gmail.com",
    portfolio: "https://github.com/Zeel13K"
  },
  // Replaced Diploma CGPA & Class 10 marks with professional developer metrics
  stats: [
    { label: "Hands-on Experience", value: "1+ yrs" },
    { label: "Systems & Projects", value: "5+" },
    { label: "Technologies & Tools", value: "15+" },
    { label: "Code Contributions", value: "150+" }
  ]
};

export const educationList = [
  {
    institution: "Uka Tarsadia University (UTU), Maliba",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)",
    period: "2026 – 2029",
    status: "Pursuing",
    details: "Focusing on advanced algorithms, software engineering principles, full-stack systems, and distributed database architectures."
  },
  {
    institution: "Uka Tarsadia University (UTU), Maliba",
    degree: "Diploma in Information Technology",
    period: "2022 – 2025",
    status: "Completed",
    details: "Comprehensive coursework in internet fundamentals, data structures, relational databases, web development, and system administration."
  },
  {
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    degree: "Secondary School Certificate (Class 10)",
    period: "2022",
    status: "First Class",
    details: "Foundational education with strong aptitude in mathematics, sciences, and computer basics."
  }
];

export const workExperience = [
  {
    role: "Freelance Web Developer / Independent Projects",
    organization: "Independent Practice",
    location: "Surat, India",
    period: "2024 – Present",
    type: "Freelance & Projects",
    points: [
      "Designed and developed responsive websites and web applications based on project requirements.",
      "Worked on user interfaces, application functionality, and integration of online services.",
      "Practiced frontend development, debugging, cross-browser testing, and project planning.",
      "Delivered performant client portals such as Swstik Numerology and custom business management systems."
    ]
  },
  {
    role: "Web Development Trainee",
    organization: "AISECT",
    location: "On-site / Hybrid",
    period: "May 2024 – June 2024",
    type: "Internship / Trainee",
    points: [
      "Gained practical experience with Internet fundamentals and PHP programming.",
      "Contributed to the development and maintenance of a Student Management System.",
      "Assisted in implementing features, troubleshooting issues, and improving application functionality.",
      "Developed an understanding of web applications and collaborative software development workflows."
    ]
  }
];

export const technicalSkillsCategories = [
  {
    category: "Programming",
    skills: ["JavaScript", "PHP", "Python"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Vite", "HTML5", "CSS3"]
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Supabase"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Antigravity", "Cursor"]
  },
  {
    category: "Other Competencies",
    skills: ["Responsive Design", "UI/UX", "Debugging", "Requirement Analysis", "Project Planning"]
  }
];

export const technicalSkills = [
  { name: "React.js", category: "frontend", proficiency: 90, icon: "Atom" },
  { name: "JavaScript", category: "programming", proficiency: 92, icon: "Code2" },
  { name: "PHP", category: "programming", proficiency: 85, icon: "Server" },
  { name: "Python", category: "programming", proficiency: 80, icon: "Binary" },
  { name: "Vite", category: "frontend", proficiency: 88, icon: "Zap" },
  { name: "HTML5 & CSS3", category: "frontend", proficiency: 95, icon: "Layout" },
  { name: "PostgreSQL", category: "database", proficiency: 82, icon: "Database" },
  { name: "MySQL", category: "database", proficiency: 88, icon: "Database" },
  { name: "Firebase", category: "database", proficiency: 80, icon: "Network" },
  { name: "Supabase", category: "database", proficiency: 82, icon: "Network" },
  { name: "Git & GitHub", category: "tools", proficiency: 90, icon: "GitBranch" },
  { name: "Vercel", category: "tools", proficiency: 88, icon: "Zap" },
  { name: "Antigravity & Cursor", category: "tools", proficiency: 90, icon: "Send" },
  { name: "Responsive Design / UI/UX", category: "other", proficiency: 94, icon: "Smartphone" },
  { name: "Debugging & Project Planning", category: "other", proficiency: 88, icon: "Lightbulb" }
];

export const softSkills = [
  {
    name: "Problem-Solving & Analytical Thinking",
    description: "Strong ability to diagnose technical issues, dissect complex requirements, and devise robust software solutions.",
    icon: "Lightbulb"
  },
  {
    name: "Team Collaboration & Communication",
    description: "Experienced in collaborative development workflows, code reviews, and cross-functional project planning.",
    icon: "Users"
  },
  {
    name: "Adaptability & Willingness to Learn",
    description: "Curious and fast-learning mindset embracing new frameworks, developer tools, and database ecosystems.",
    icon: "BookOpen"
  },
  {
    name: "Time Management & Project Coordination",
    description: "Proven capacity to prioritize milestones, organize sprints, and deliver quality projects on schedule.",
    icon: "Clock"
  }
];

export const projects = [
  {
    id: 1,
    title: "Mavtar Printing Press Management System",
    category: "Full Stack / Business App",
    year: "2026",
    description: "A comprehensive web-based management system designed to organize printing press business records, invoices, customer orders, and payment tracking. Built with React, Vite, and JavaScript with online database integration for multi-computer access.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "Vite", "JavaScript", "PDF Generation", "Database Integration"],
    githubUrl: "https://github.com/Zeel13K/mavtar-printing-press",
    liveUrl: "https://zeel13k.github.io/mavtar-printing-press/",
    highlights: [
      "Developing web-based management system to organize printing press business records, invoices, and payments.",
      "Implemented invoice generation and PDF generation to simplify billing and record keeping.",
      "Working on online database integration to enable access to business records from different computers.",
      "Building application using React, Vite, and JavaScript, with centralized data storage and role-based access for owners and staff.",
      "Focusing on input validation, access control, and reliable management of business records."
    ]
  },
  {
    id: 2,
    title: "Swstik Numerology Consultation Portal",
    category: "Web Application / Client",
    year: "2025",
    description: "A sleek, responsive website developed for personalized numerology consultations and customer inquiries, featuring serverless email integration through EmailJS and high-speed Vercel hosting.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "Vite", "JavaScript", "EmailJS", "Vercel", "UI/UX"],
    githubUrl: "https://github.com/Zeel13K/swstik-numerology",
    liveUrl: "https://swstiknumerology.vercel.app/",
    highlights: [
      "Developed a responsive website for personalized numerology consultations and customer inquiries.",
      "Integrated EmailJS to send consultation requests and messages without requiring a dedicated backend server.",
      "Designed a modern, user-friendly interface optimized for desktop and mobile devices.",
      "Deployed the website on Vercel with HTTPS support and optimized website performance."
    ]
  },
  {
    id: 3,
    title: "Student Management System",
    category: "Web Application / Trainee Project",
    year: "2024",
    description: "A database-driven web application created during web development training at AISECT to manage student registration records, academic progress, and institutional administrative data.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Zeel13K/student-management-system",
    liveUrl: "https://zeel13k.github.io/student-management-system/",
    highlights: [
      "Contributed to the development and maintenance of a web-based Student Management System during training at AISECT.",
      "Assisted with feature implementation, debugging, and improving application functionality using PHP.",
      "Engineered structured MySQL database tables for student records, enrollment, and queries.",
      "Implemented input sanitization and responsive interface layouts for administrative staff."
    ]
  },
  {
    id: 4,
    title: "Personal Developer Portfolio",
    category: "Frontend / React & Vite",
    year: "2026",
    description: "A high-contrast, modern developer portfolio website built with React JS, Vite, and Framer Motion, inspired by minimalist executive web design principles and deployed on GitHub Pages.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "Vite", "Framer Motion", "JavaScript", "GitHub Pages"],
    githubUrl: "https://github.com/Zeel13K/portfolio",
    liveUrl: "https://zeel13k.github.io/portfolio/",
    highlights: [
      "Designed high-contrast, typographic layout with light/dark theme toggle persisted in localStorage.",
      "Integrated Framer Motion spring physics, reading scroll progress indicator, and interactive project modals.",
      "Implemented real PDF resume download and automated deployment via GitHub Actions."
    ]
  }
];

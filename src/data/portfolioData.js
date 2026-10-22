// Portfolio Data Configuration for Zeel Kaklotar
export const personalInfo = {
  name: "Zeel Kaklotar",
  tagline: "Frontend & Full Stack Developer | Computer Science Student",
  subtitle: "Building modern, performant, and responsive web applications with React & JavaScript.",
  bio: "I am a passionate Computer Science Engineering student at AMTICS (Asha M. Tarsadia Institute of Computer Science and Technology). I specialize in crafting clean, accessible, and high-performance web applications using modern React, JavaScript, and responsive design systems. Eager to solve real-world problems and collaborate on innovative software solutions.",
  college: "A. M. Tarsadia Institute of Computer Science and Technology (AMTICS)",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2026",
  location: "Surat / Bardoli, Gujarat, India",
  email: "zeelkaklotar.dev@gmail.com",
  phone: "+91 98765 43210",
  resumeUrl: "./resume.pdf",
  socialLinks: {
    github: "https://github.com/Zeel13K",
    linkedin: "https://linkedin.com/in/zeelkaklotar",
    twitter: "https://twitter.com/zeelkaklotar",
    email: "mailto:uinterface486@gmail.com"
  },
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Technical Skills", value: "15+" },
    { label: "GitHub Contributions", value: "150+" },
    { label: "Current CGPA", value: "8.8" }
  ]
};

export const technicalSkills = [
  { name: "React.js", category: "frontend", proficiency: 90, icon: "Atom", experience: "Advanced" },
  { name: "JavaScript (ES6+)", category: "frontend", proficiency: 92, icon: "Code2", experience: "Advanced" },
  { name: "HTML5 & CSS3", category: "frontend", proficiency: 95, icon: "Layout", experience: "Expert" },
  { name: "Tailwind CSS", category: "frontend", proficiency: 88, icon: "Palette", experience: "Advanced" },
  { name: "Node.js & Express", category: "backend", proficiency: 80, icon: "Server", experience: "Intermediate" },
  { name: "REST APIs", category: "backend", proficiency: 85, icon: "Network", experience: "Advanced" },
  { name: "MongoDB", category: "backend", proficiency: 78, icon: "Database", experience: "Intermediate" },
  { name: "MySQL", category: "backend", proficiency: 82, icon: "Binary", experience: "Intermediate" },
  { name: "Git & GitHub", category: "tools", proficiency: 90, icon: "GitBranch", experience: "Advanced" },
  { name: "Vite & Webpack", category: "tools", proficiency: 85, icon: "Zap", experience: "Intermediate" },
  { name: "Responsive Web Design", category: "frontend", proficiency: 95, icon: "Smartphone", experience: "Expert" },
  { name: "Postman & API Testing", category: "tools", proficiency: 82, icon: "Send", experience: "Intermediate" }
];

export const softSkills = [
  {
    name: "Problem Solving",
    description: "Analytical mindset breaking down complex software and computational challenges efficiently.",
    icon: "Lightbulb"
  },
  {
    name: "Team Collaboration",
    description: "Experienced in collaborative project workflows, code reviews, and cross-functional peer teamwork.",
    icon: "Users"
  },
  {
    name: "Continuous Learning",
    description: "Curious and adaptable to rapid advances in modern web ecosystems and developer tools.",
    icon: "BookOpen"
  },
  {
    name: "Time Management",
    description: "Strong ability to prioritize milestones, organize sprints, and meet project deadlines.",
    icon: "Clock"
  },
  {
    name: "Git & Version Control Workflow",
    description: "Proficient in branching, pull requests, issue tracking, and clean commit standards.",
    icon: "GitCommit"
  },
  {
    name: "Communication & Documentation",
    description: "Clear technical documentation, readable code commenting, and articulate presentations.",
    icon: "MessageSquare"
  }
];

export const projects = [
  {
    id: 1,
    title: "EduTrack - Student Academic & Attendance Portal",
    category: "Full Stack",
    description: "A comprehensive academic tracking web application for college students. Features automated attendance percentage calculations, grade tracking, semester timetable viewing, and deadline alerts.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "JavaScript", "Node.js", "Express", "CSS3"],
    githubUrl: "https://github.com/Zeel13K/edutrack-portal",
    liveUrl: "https://Zeel13K.github.io/edutrack-portal/",
    highlights: [
      "Dynamic attendance tracker with visual threshold warnings (< 75%)",
      "Interactive GPA & CGPA target estimation calculator",
      "Responsive dashboard optimized for mobile phones and desktops"
    ]
  },
  {
    id: 2,
    title: "CampusConnect - University Community Hub",
    category: "React App",
    description: "A collaborative social platform designed for AMTICS students to share peer study materials, syllabus notes, announce hackathons, and connect with batchmates.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Context API"],
    githubUrl: "https://github.com/Zeel13K/campus-connect",
    liveUrl: "https://Zeel13K.github.io/campus-connect/",
    highlights: [
      "Real-time resource filtering by semester, branch, and subject",
      "Bookmark favorite notes and questions for quick exam revision",
      "Dark and light theme support with modern glassmorphism"
    ]
  },
  {
    id: 3,
    title: "DevFolio - Developer Portfolio Generator",
    category: "Tools & Utilities",
    description: "A fast, open-source tool enabling students and junior developers to generate aesthetic personal portfolios by simply filling out structured JSON configuration files.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "Vite", "JavaScript", "HTML5/CSS3"],
    githubUrl: "https://github.com/Zeel13K/devfolio-generator",
    liveUrl: "https://Zeel13K.github.io/devfolio-generator/",
    highlights: [
      "Live side-by-side template preview with instant reactive updates",
      "One-click zip export ready for deployment to GitHub Pages",
      "100% accessible and high Lighthouse performance score"
    ]
  },
  {
    id: 4,
    title: "TaskFlow - Agile Kanban & Productivity App",
    category: "Web App",
    description: "An intuitive task management board inspired by Trello and Jira. Supports custom columns, drag-and-drop task progression, label tags, priority filters, and local persistence.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
    tags: ["React.js", "JavaScript", "Local Storage", "Modular CSS"],
    githubUrl: "https://github.com/Zeel13K/taskflow-app",
    liveUrl: "https://Zeel13K.github.io/taskflow-app/",
    highlights: [
      "Smooth interactive card movement and state management",
      "Offline-ready with automatic LocalStorage sync",
      "Filter by priority (High, Medium, Low) and due date reminders"
    ]
  }
];

export const achievements = [
  {
    title: "Web Development Hackathon Finalist",
    organization: "AMTICS College TechFest",
    year: "2025",
    description: "Awarded top ranking for designing and implementing an innovative campus utility web portal within 24 hours."
  },
  {
    title: "Academic Excellence Recognition",
    organization: "Uka Tarsadia University",
    year: "2024 - 2025",
    description: "Consistently maintained top 5% academic standing with an 8.8+ CGPA across semesters."
  },
  {
    title: "Certified Full Stack Web Developer",
    organization: "Online Certification Program",
    year: "2024",
    description: "Mastered frontend architectures, asynchronous JavaScript, React state patterns, and API integrations."
  },
  {
    title: "Active Open Source & Git Contributor",
    organization: "GitHub Community",
    year: "2024 - Present",
    description: "Maintained multiple student repositories, contributing bug fixes, documentation improvements, and utility scripts."
  }
];

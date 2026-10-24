# Zeel Kaklotar - Personal Portfolio Website (React JS)

A modern, high-performance, and fully responsive personal developer portfolio website designed for **Zeel Kaklotar**, Computer Science & Engineering student at **AMTICS** (Asha M. Tarsadia Institute of Computer Science and Technology).

Built with **React JS**, **Vite**, and pure modern CSS (with theme switcher, responsive layouts, interactive project filters, working PDF resume download, and contact form).

---

## 🚀 Features

- **Home / About Section:**
  - Student photo/avatar with modern glowing badge effects.
  - Tagline, bio, and college info (AMTICS, UTU).
  - Quick stat counters (Projects completed, CGPA, GitHub activity).
  - Social media badges (GitHub, Email).
- **Skills Section:**
  - Technical skills categorized by Frontend, Backend & Database, and Tools.
  - Visual animated proficiency progress bars.
  - Soft skills grid with icons and descriptions.
  - Interactive category filtering tabs.
- **Projects Section:**
  - 4 detailed sample projects (EduTrack, CampusConnect, DevFolio, TaskFlow).
  - Category filter tabs (All, Full Stack, React App, Tools & Utilities, Web App).
  - Project tags, key highlights, GitHub source code links, and Live demo links.
- **Achievements & Certifications:**
  - Hackathon achievements, certifications, and academic excellence recognitions.
- **Contact Section:**
  - Interactive contact form with validation and submit confirmation.
  - Clickable contact cards for direct Email, Phone, GitHub, and College Location.
- **Working Resume Download & Preview:**
  - Working button to download `resume.pdf` in PDF format.
  - Interactive "View Resume" modal preview with quick options to open or save the PDF.
- **Theme Switcher:**
  - Toggle between sleek **Dark Mode** and crisp **Light Mode** (saved in `localStorage`).
- **Responsive Navigation:**
  - Sticky glassmorphic navbar with active section scroll indicator.
  - Mobile hamburger drawer navigation menu for phones and tablets.
  - Smooth scrolling between all sections.
  - "Back to Top" smooth button in footer.

---

## 🛠️ Tech Stack

- **Library:** React 19 (JavaScript / JSX)
- **Bundler & Dev Server:** Vite
- **Icons:** Lucide Icons & Custom SVG Brand Icons
- **Styling:** Modern CSS3 with CSS Custom Properties (Variables), Flexbox, CSS Grid & Glassmorphism
- **Deployment:** GitHub Pages (supports GitHub Actions & `gh-pages`)

---

## 📁 Project Structure

```text
Git&Github/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment
├── public/
│   ├── favicon.svg             # Website icon
│   └── resume.pdf              # Working PDF resume file
├── src/
│   ├── components/
│   │   ├── About.jsx           # About & Education section
│   │   ├── Achievements.jsx    # Milestones & honors section
│   │   ├── Contact.jsx         # Contact form & social cards
│   │   ├── Footer.jsx          # Footer & copyright
│   │   ├── Hero.jsx            # Home / Hero section
│   │   ├── Icons.jsx           # SVG brand icons (GitHub, Twitter)
│   │   ├── Navbar.jsx          # Responsive navbar & mobile menu
│   │   ├── Projects.jsx        # Project cards & category filter
│   │   ├── ResumeModal.jsx     # Interactive resume modal & PDF preview
│   │   └── Skills.jsx          # Technical & soft skills with progress bars
│   ├── data/
│   │   └── portfolioData.js    # Centralized student details, skills & projects
│   ├── styles/
│   │   └── index.css           # Pure modern CSS design system (Dark & Light themes)
│   ├── App.jsx                 # Root component with theme state
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML entry point
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration (with base './' for GitHub Pages)
└── README.md                   # Documentation & deployment guide
```

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled production files will be in the `dist/` directory.

---

## 🌐 How to Deploy to GitHub Pages

### Method 1: Automated GitHub Actions (Recommended)

1. Initialize git and commit your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: React portfolio website"
   ```
2. Create a new repository on GitHub (e.g. `portfolio` or `Git-Github`).
3. Link your remote and push to `main`:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
   git push -u origin main
   ```
4. On GitHub, go to your repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
5. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site live!

---

### Method 2: Deploying via `gh-pages` CLI

1. Ensure your remote origin is set:
   ```bash
   git remote -v
   ```
2. Run the deploy script:
   ```bash
   npm run deploy
   ```
3. On GitHub, navigate to **Settings** → **Pages**, and verify the source is set to the `gh-pages` branch.
4. Your website will be live at:
   `https://<your-github-username>.github.io/<your-repo-name>/`

---

## ✏️ Customizing Your Details

All personal details, skills, social links, and project descriptions are cleanly organized in one file:
👉 [src/data/portfolioData.js](file:///d:/Zeel%20Kaklotr/AMTICS/Git&Github/src/data/portfolioData.js)

To update your résumé:
- Replace [public/resume.pdf](file:///d:/Zeel%20Kaklotr/AMTICS/Git&Github/public/resume.pdf) with your own PDF résumé file.
